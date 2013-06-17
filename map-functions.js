var statePoly = "";
var currentState = "";
var currentView = "viewNat";
var resourcePath = ""
var markerLocation1 = resourcePath + "images/marker_loc.png";
var markerLocation2 = resourcePath + "images/marker2_loc.png";
var markerState1 = resourcePath + "images/marker_state.png";
var markerState2 = resourcePath + "images/marker2_state.png";

//create master array
markersArray = [];
markersArrayAK = [];
markersArrayHI = [];


//skip nav focus
$(document).ready(function () {
    //default select to national view
    document.getElementById("form-dd-state").selectedIndex = 0;
    $('.map-skipnav').click(function () {
        $(".dataEntry0").focus();
    });	
});

function lastFocusedElement() {
		if ($('#map-state-submit').is(":focus")) {
            return "map-state-submit2";
        }
        else if ($("select[title='Select All']").is(":focus")) {
            return "Select All";
        }
        else if ($("select[title='Unselect All']").is(":focus")) {
            return "Unselect All";
        }
		else{
			return "none";
		}
}


//------ Map Presentation Functions
function selectModel(varModel) {

    //split on +
	var models = varModel.split('+');
	//check each model
	for(var i = 0;i<models.length;i++){
		$("#"+models[i]+"-check").attr("checked","checked");
	}
	
	return false;
}


function selectState(varState) {
    
    if (varState == "national") {
        resetMap();
        document.getElementById("form-dd-state").selectedIndex = 1;
        
    } else {
        //hides the state border on return
        document.getElementById("form-dd-state").selectedIndex = window["stat" + varState].dropDownIndex;
        currentState = varState;
        currentView = "viewState";
        if (statePoly != "") {
            //hides the state border on return
            window[statePoly].setVisible(false);
        }

        //shows state borders
        window["stat" + varState].setVisible(true);

        //---hides the floating map canvases
        document.getElementById('map-alaska-canvas').style.visibility = 'hidden';
        document.getElementById('map-hawaii-canvas').style.visibility = 'hidden';

        // zoom into and position desired state
        mapMain.setCenter(new google.maps.LatLng(window["stat" + varState].latitude, window["stat" + varState].longitude));
        mapMain.setZoom(window["stat" + varState].zoomLevel);

        document.getElementById("state-floater").innerHTML = window["stat" + varState].textLabel;
        statePoly = "stat" + varState;
        //resets div classes
        $(".map-list-filter").addClass("map-list-filter-inactive");
        $(".map-list-filter-text").addClass("map-list-filter-text-inactive");

        //check against state filter
		
        for(var key in data){
			var inState=false;
			$("#" + key + "-check").removeAttr("checked", "");
			$("#" + key + "-check").attr("disabled", true);
            for (var i = 0; i < data[key]["data"].length; i++) {
                var locationObj = jQuery.parseJSON(data[key]["data"][i]["location_1"]["human_address"]);
                var thisState = locationObj.state;
                if (thisState == varState) {
					inState=true;
					break;
                }
            }
			if(inState==true){
				$("#" + key + "-filter").removeClass("map-list-filter-inactive");
				$("#" + key + "-text").removeClass("map-list-filter-text-inactive");
				$("#" + key + "-check").removeAttr("disabled");
				$("#" + key + "-check").attr("checked", true);
			}
        }


        //plot the selected points
        initChkQuery();

    }
}

function resetMap() {
    //hides the state border on return
    currentState = "";
    currentView = "viewNat";

    //remove extra lines from Hawaii canvas
    initializeHawaii();

    if (statePoly != "") {
        window[statePoly].setVisible(false);
    }
    $(".map-list-filter").removeClass("map-list-filter-inactive");
    $(".map-list-filter-text").removeClass("map-list-filter-text-inactive");

    //reset checked statuses
    $('input:checkbox').attr("checked", "checked");
    $('input:checkbox').removeAttr("disabled");

    //---show the floating map canvases
    document.getElementById('map-alaska-canvas').style.visibility = 'visible';
    document.getElementById('map-hawaii-canvas').style.visibility = 'visible';

    //---resets the state dropdown---*/
    document.getElementById('form-dd-state').value = 'blank';

    mapMain.setCenter(new google.maps.LatLng(33.2403909, -95.7288769));
    mapMain.setZoom(4);

    document.getElementById("state-floater").innerHTML = "National View";

    initChkQuery();
    mapGetDatagrid();
    
    
}

//---highlights Row
function mapHighLightRow(idRow) {
    $(".map-dataRow").removeClass("map-row-highlight");
    $("#" + idRow).addClass("map-row-highlight");

}

//----datagrid

//----datagrid

function mapGetDatagrid() {

    var tableHeaderState = "<div id=table-state-bar ><table width=100% cellspacing=0 summary='This table contains information on Initiatives. Each row lists the Initiatives Name, Organization Name, Address, and Geographic Reach.'>" +
						"<caption>Models run at the State level</caption>" +
                        "<tr>" +
                        "<th style='width: 6.6em;' scope=col class=map-table-header-state>Initiative Name</th>" +
                        "<th style='width: 6.6em;' scope=col class=map-table-header-state>Organization Name</th>" +
                        "<th style='width: .26em;' scope=col class=map-table-header-state>State</th>" +
                        "<th style='width: 4.7125em;' scope=col class=map-table-header-state>Notes</th>" +
                        "</tr></table><div id=scrollable-content><table width=100% cellspacing=0 summary='This table contains information on Initiatives. Each row lists the Initiatives Name, Organization Name, Address, and Geographic Reach.'>"

    var tableHeader = "<div id=table-bar ><table width=100% cellspacing=0 summary='This table contains information on Initiatives. Each row lists the Initiatives Name, Organization Name, Address, and Geographic Reach.'>" +
						"<caption>Health care facilities where Innovation Models are being tested</caption>" +
						"<tr>" +
                        "<th style='width: 4.06em;' scope=col class=map-table-header>Initiative Name</th>" +
                        "<th style='width: 4.20em;' scope=col class=map-table-header>Organization Name</th>" +
                        "<th style='width: 4.1em;' scope=col class=map-table-header>Address</th>" +
                        "<th style='width: 1.9em;' scope=col class=map-table-header>City</th>" +
                        "<th style='width: .26em;' scope=col class=map-table-header>State</th>" +
                        "<th style='width: 5.5em;' scope=col class=map-table-header>Notes</th>" +
                        "</tr></table><div id=scrollable-content><table width=100% cellspacing=0 summary='This table contains information on Initiatives. Each row lists the Initiatives Name, Organization Name, Address, and Geographic Reach.'>"

    var completeData = "";
    var completeDataState = "";
    var compiledStateData = "";
    var socrataLink = "<p><a href='https://data.cms.gov/browse?&page=6' title='External link to CMMI dataset on Socrata' target='_blank'>View this data and create your own visualizations on data.cms.gov</a></p>";

    //----create state base datagrid---//
    if (currentState == "") {

        for (var i = 0; i < markersArray.length; i++) {
            if (markersArray[i].isStBase) {

                var tempDataState = "<tr id=" + markersArray[i].markerID + " class=map-dataRow>" +
                            "<td style='width: 6.75em;' class=\"col1\" scope=col><a name=" + markersArray[i].markerID + "class=dataEntry" + i + ">" + markersArray[i].modelName + "</a></td>" +
                            "<td style='width: 6.75em;' class=\"col2\" scope=col>" + markersArray[i].title + "</td>" +
                            "<td style='width: .09em;' class=\"col3\" scope=col>" + markersArray[i].mState + "</td>" +
                            "<td style='width: 4.3em;' class=\"col4\" scope=col>" + markersArray[i].geoReach + "</td>" +
                            "</tr>";
                completeDataState = completeDataState + tempDataState;
            }

        }
        compiledStateData = tableHeaderState + completeDataState + "</table></div></div>";
    } else {
        for (var i = 0; i < markersArray.length; i++) {
            if (markersArray[i].mState == currentState) {
                if (markersArray[i].isStBase) {
                    var tempDataState = "<tr id=" + markersArray[i].markerID + " class=map-dataRow>" +
                            "<td style='width: 6.75em;' class=\"col1\" scope=col><a name=" + markersArray[i].markerID + " class=dataEntry" + i + ">" + markersArray[i].modelName + "</a></td>" +
                            "<td style='width: 6.75em;' class=\"col2\" scope=col>" + markersArray[i].title + "</td>" +
                            "<td style='width: .09em;' class=\"col3\" scope=col>" + markersArray[i].mState + "</td>" +
                            "<td style='width: 4.3em;' class=\"col4\" scope=col>" + markersArray[i].geoReach + "</td>" +
                            "</tr>";
                    completeDataState = completeDataState + tempDataState;
                }
            }


        }

        compiledStateData = tableHeaderState + completeDataState + "</table></div></div>";
    }



    //----create location base datagrid---//
    if (currentState == "") {

        for (var i = 0; i < markersArray.length; i++) {
            if (!markersArray[i].isStBase) {

                var tempData = "<tr id=" + markersArray[i].markerID + " class='map-dataRow'>" +
                            "<td style=\"width:4.03em;\" class=\"col1\" scope=col><a name=" + markersArray[i].markerID + " class=dataEntry" + i + ">" + markersArray[i].modelName + "</a></td>" +
                            "<td style=\"width:4.169em;\" class=\"col2\" scope=col>" + markersArray[i].title + "</td>" +
                            "<td style=\"width:4.14em;\" class=\"col3\" scope=col>" + markersArray[i].mAddress + "</td>" +
                            "<td style=\"width:1.79em;\" class=\"col4\" scope=col>" + markersArray[i].mCity.replace(",", "") + "</td>" +
                            "<td style=\"width:.09em;\" class=\"col5\" scope=col>" + markersArray[i].mState + "</td>" +
                            "<td style=\"width:5.0em;\" class=\"col6\" scope=col>" + markersArray[i].geoReach + "</td>" +
                            "</tr>";
                completeData = completeData + tempData;
            }

        }

    } else {
        for (var i = 0; i < markersArray.length; i++) {
            if (markersArray[i].mState == currentState) {
                if (!markersArray[i].isStBase) {
                    var tempData = "<tr id=" + markersArray[i].markerID + " class='map-dataRow'>" +
                            "<td style=\"width:4.03em;\" class=\"col1\" scope=col><a name=" + markersArray[i].markerID + "class=dataEntry" + i + ">" + markersArray[i].modelName + "</a></td>" +
                            "<td style=\"width:4.169em;\" class=\"col2\" scope=col>" + markersArray[i].title + "</td>" +
                            "<td style=\"width:4.14em;\" class=\"col3\" scope=col>" + markersArray[i].mAddress + "</td>" +
                            "<td style=\"width:1.79em;\" class=\"col4\" scope=col>" + markersArray[i].mCity.replace(",", "") + "</td>" +
                            "<td style=\"width:.09em;\" class=\"col5\" scope=col>" + markersArray[i].mState + "</td>" +
                            "<td style=\"width:5.0em;\" class=\"col6\" scope=col>" + markersArray[i].geoReach + "</td>" +
                            "</tr>";
                    completeData = completeData + tempData;
                }
            }


        }


    }
    document.getElementById('map-datagrid-container').innerHTML = compiledStateData + tableHeader + completeData + "</table></div></div>";
}

//--------------------add marker function

function addMarkers(dataSet, markerIcon, spiderIcon, mID, mzIndex) {
    for (var i = 0; i < dataSet.length; i++) {
        var locationObj = jQuery.parseJSON(dataSet[i]["location_1"]["human_address"]);
        var thisCity = "";
        if (locationObj.city != "") {
            thisCity = locationObj.city + ", ";
        } else {
            thisCity = "";
        }
        var thisState = locationObj.state;
        var thisAddress = locationObj.address;
        var mAnchor = new google.maps.Point(0, 0);
        var mGeoReach = "";
        if (dataSet[i]["notes"] == null) {
            mGeoReach = "Not Applicable";
        } else {
            mGeoReach = dataSet[i]["notes"];
        }

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(dataSet[i]["location_1"]["latitude"], dataSet[i]["location_1"]["longitude"]),
            icon: markerIcon,
            map: mapMain,
            title: dataSet[i]["organization_name"],
            modelName: dataSet[i]["name_of_initiative"],
            mCity: thisCity,
            mState: thisState,
            mAddress: thisAddress,
            geoReach: mGeoReach,
            markerID: mID + "rowID" + i,
            isStBase: dataSet[i]["state_based"],
            zIndex: mzIndex
        });

        markersArray.push(marker);

        //for plotting Canvases
        var markerCanvas = new google.maps.Marker({
            position: new google.maps.LatLng(dataSet[i]["location_1"]["latitude"], dataSet[i]["location_1"]["longitude"]),
                icon: markerIcon,
                map: ((thisState == "AK") ? mapAlaska : mapHawaii),
                title: dataSet[i]["organization_name"],
                modelName: dataSet[i]["name_of_initiative"],
                mCity: thisCity,
                mState: thisState,
                mAddress: thisAddress,
                geoReach: mGeoReach,
                markerID: mID + "rowID" + i,
                isStBase: dataSet[i]["state_based"],
                zIndex: mzIndex
            });

        if (thisState == "AK") {
            markersArrayAK.push(markerCanvas);
        }
        else if (thisState == "HI") {
            markersArrayHI.push(markerCanvas);
        }      

    }
}

//-------initiative check box filter

function initChkAll() {    
    $(':checkbox').each(function () {
          if (this.disabled == false) {            
             this.checked = true;
            }
     });
    /*   
    //resets checkbox state
    $('input:checkbox').attr("checked", "checked");
    $('input:checkbox').removeAttr("disabled");
    */
}

function initUnChkAll() {
    $('input:checkbox').removeAttr("checked");
}

function buildURL(models){
	
	var url = window.location.href.split('#')[0];
	
	var query = "#";
	var state = $("#form-dd-state").val();
	if(state!="blank" && state!="national"){
		query += "state=" + state +"&";
	}
	var model = "";
	for(var i = 0;i<models.length;i++){
		if(i < models.length-1){
			model += models[i] + "+";
		}
		else{
			model += models[i];
		}
	}
	query += "model=" + model;
	
	window.location.href = url+query;

	return false;
}

function initChkQuery() {

    //reset main map array
    for (var i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markersArray.length = 0;


    //reset AK map array
    for (var i = 0; i < markersArrayAK.length; i++) {
        markersArrayAK[i].setMap(null);
    }
    markersArray.length = 0;


    //reset HI map array
    for (var i = 0; i < markersArrayHI.length; i++) {
        markersArrayHI[i].setMap(null);
    }
    markersArray.length = 0;

	var models = [];
	$('#mapFilterContainer input:checked').each(function() {
		if(data[this.value]["state"]){
			addMarkers(data[this.value]["data"], markerState1, markerState2, this.value, 100);
		}
		else{
			addMarkers(data[this.value]["data"], markerLocation1, markerLocation2, this.value, 50);
		}
		models.push(this.value);
	});
	
	buildURL(models);
	

    document.getElementById('map-datagrid-container').style.display = "block";
    mapGetDatagrid();
    
    
    //set spider for main canvas
    var gm = google.maps;
    
    var iw = new gm.InfoWindow({
        maxWidth: 300
    });
    
    //begin spider
     omsMain = new OverlappingMarkerSpiderfier(mapMain, { markersWontMove: false, markersWontHide: false, usualLegZIndex: 45, spiderfiedZIndex: 45, highlightedLegZIndex: 45 });
     omsAK = new OverlappingMarkerSpiderfier(mapAlaska, { markersWontMove: false, markersWontHide: false });
     omsHI = new OverlappingMarkerSpiderfier(mapHawaii, { markersWontMove: false, markersWontHide: false, usualLegZIndex: 45, spiderfiedZIndex: 45, highlightedLegZIndex: 45 });
     
    
    function createSpider(spiderObjArray) {

        var shadow = new gm.MarkerImage(
        resourcePath + 'images/marker_shadow.png',
        new gm.Size(50, 50),  // size   - for sprite clipping
        new gm.Point(0, 0),   // origin - ditto
        new gm.Point(12, 22)  // anchor - where to meet map location
      );
        
        
        for (i = 0; i < spiderObjArray.length; i++) {
            for (var j = 0; j < spiderObjArray[i].omsArray.length; j++) {
                marker = spiderObjArray[i].omsArray[j];

                marker.desc = "<span class='map-iw-header'>" + marker.title + "</span><br />" +
                                marker.mAddress + "<br />" +
                                marker.mCity + marker.mState + "<br /><br />" +
                                // "<strong>Model:</strong> <a href='" + marker.targetURL + "' + target='_blank'>" + marker.modelName + "</a><br /><br />" +
                                "<strong>Notes:</strong> " + marker.geoReach + "<br />" +
                                "<hr><a href='#" + marker.markerID + "'>View this point on the Data Grid</a>";                                
                spiderObjArray[i].omsObj.addMarker(marker);
            }
            spiderObjArray[i].omsObj.addListener('click', function (marker) {
                iw.setContent("<div class='map-infowindow'>" + marker.desc + "</div>");
                iw.open(mapMain, marker);
                if (marker.mState == 'HI') {
                    //hide canvas on HI click
                    document.getElementById('map-alaska-canvas').style.visibility = 'hidden';
                    document.getElementById('map-hawaii-canvas').style.visibility = 'hidden';
                }
                else if (currentView != "viewState") {
                    //---show the floating map canvases
                    document.getElementById('map-alaska-canvas').style.visibility = 'visible';
                    document.getElementById('map-hawaii-canvas').style.visibility = 'visible';
                }
                mapHighLightRow(marker.markerID);
            });
            
            
            spiderObjArray[i].omsObj.addListener('spiderfy', function (markers) {
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setShadow(shadow);
// console.log('spiderfy: ' + markers[j].modelName + ' has zIndex of ' + markers[j].zIndex);
                    
                }
                iw.close();
                //close all spiders
//                $(document).ready(function () {
//                    $("#map-left-controls").click(function () {
//                        omsMain.unspiderfy();
//                        omsAK.unspiderfy();
//                        omsHI.unspiderfy();
//                    });
//                });

		
            });
            spiderObjArray[i].omsObj.addListener('unspiderfy', function (markers) {
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setShadow(null);
					if(markers[j].isStBase == true){
						markers[j].setZIndex(100);
					}else{
						markers[j].setZIndex(50);
					}
                }
		iw.close();
		
            }); 
            
        }
        
    }
    
    createSpider([
        { "omsObj": omsMain, "omsArray": markersArray},
        { "omsObj": omsAK, "omsArray": markersArrayAK },
        { "omsObj": omsHI, "omsArray": markersArrayHI }
    ]);
    
    //end spider
}



