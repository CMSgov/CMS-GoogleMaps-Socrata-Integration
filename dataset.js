var appToken = 'JBokKoxrtZ6cYf7BGAmRWeVL4';
var jsonPath = 'https://data.cms.gov/resource/cms-innovation-center-model-participants.json';

//map of model name - > map of attribute - > data
var data = new Object();

function cleanID(html){
	return $.trim(html).replace(/&/g,'').replace(/</g,'').replace(/>/g,'').replace(/"/g,'').replace(/'/g,'').replace(/\(/g,'').replace(/\)/g,'').replace(/\,/g,'').replace(/;/g,'').replace(/\s/g,'-').replace(/:/g,'');
}
$(document).ready(function () {
	var queryString = window.location.href.split("?");
	if(queryString.length>1){
		window.location.href = queryString[0] + "#" + queryString[1];
	}
});
$(window).load(function () {
	buildDatasets();
});


function readURL(){

	var urlInfo = window.location.href.split("#");
	if(urlInfo.length>1){
		queryInfo = urlInfo[1].split("&");
		var modelIndex = -1;
		var stateIndex = -1;
		for(var i=0;i<queryInfo.length;i++){
			if(queryInfo[i].indexOf("state")==0){
				stateIndex = i;
			}
			else if(queryInfo[i].indexOf("model")==0){
				modelIndex = i;
			}
		}
		
		if(modelIndex!=-1){
			selectModel(queryInfo[modelIndex].split("=")[1].toLowerCase());
		}
		else{
			initChkAll();
		}
		
		if(stateIndex!=-1){
			if(queryInfo[stateIndex].split("=")[1]==""){
				selectState("national");
			}
			else{
				selectState(queryInfo[stateIndex].split("=")[1]);
			}
		}
		else{
			initChkQuery();
		}
	}
	else{
		initChkAll();
		initChkQuery();
	}

	return false;
}
function buildChecks(inputArray){

    inputArray = sortChecksArray(inputArray);

	var output = "";
	
	for(var i = 0;i<inputArray.length;i++){
	
		output += "<div class=\"map-list-filter";
		if(data[inputArray[i]]["state"]==true){
			output += " map-list-filter-state";
		}
		output += "\" id=\"" + inputArray[i]+ "-filter\">";
		output += "<div class=\"map-list-filter-ckbox\"><br class=\"map-spacer\"><input id=\""+ inputArray[i] +"-check\" value=\""+ inputArray[i] +"\" type=\"checkbox\"></div>"
		output += "<div class=\"map-list-filter-text\" id=\""+inputArray[i]+"-text\"><br class=\"map-spacer\"><span><label for=\""+inputArray[i]+"-check\"><span class=\"HiddenText\">";
		if(data[inputArray[i]]["state"]==true){
			output += "Models run at the State level: ";
		}
		else{
			output += "Health care facilities where Innovation Models are being tested: ";
		}
		output += "</span>"+data[inputArray[i]]["name"]+"</label>";
		output += "</span></div><br class=\"map-spacer\"></div>";
	}
	output += "<a class=\"map-skipnav\" href=\"#mapDatagrid\" title=\"Skip Google Map Canvas\">Skip Google Map Canvas</a>";

	$("#mapFilterContainer").html(output);

	return false;
}

function sortChecksArray(inputArray){
    
    var temp = new Array();
    var finalArray = new Array();
    for( var x=0;x<inputArray.length;x++){
        if(data[inputArray[x]]["state"]==true){
            finalArray.push(inputArray[x]);
        }
        else{
            temp.push(inputArray[x]);
        }
    }
    
    finalArray = finalArray.concat(temp);
    
    return finalArray;
}

function buildDatasets(){
	
    $.when($.ajax({
		type: 'GET',
		headers: { "X-App-Token" : appToken },
		url: jsonPath + "?$select=name_of_initiative&$group=name_of_initiative&$order=name_of_initiative",
		dataType: 'jsonp',
		jsonp: '$jsonp',
		success: function (jsonData) { y = jsonData },
		error: function () { console.log('Uh Oh!'); }
     })).then(function () {
    
    
        var ajaxReqs = [];
        var results = [];
        
        for(var x=0;x<y.length;x++){
            ajaxReqs.push($.ajax({
            type: 'GET',
            data: { name_of_initiative: y[x]["name_of_initiative"] },
            headers: { "X-App-Token" : appToken },
            url: jsonPath,
            dataType: 'jsonp',
            jsonp: '$jsonp',
            success: function (jsonData) { results.push(jsonData);},
            error: function () { console.log('Uh Oh!'); }
            }));
            
        }
        var checkArray = new Array();
        $.when.apply($,ajaxReqs).then(function() {
        
            for(var i = 0;i<results.length;i++){
                if(results[i].length>0){
                    
                    data[cleanID(results[i][0]["name_of_initiative"]).toLowerCase()]=new Object();
                    data[cleanID(results[i][0]["name_of_initiative"]).toLowerCase()]["name"]=$.trim(results[i][0]["name_of_initiative"]);
                    data[cleanID(results[i][0]["name_of_initiative"]).toLowerCase()]["state"]=results[i][0]["state_based"];
                    data[cleanID(results[i][0]["name_of_initiative"]).toLowerCase()]["data"]=results[i];
                    checkArray.push(cleanID(results[i][0]["name_of_initiative"]).toLowerCase());
                
                }
            }
            
            buildChecks(checkArray);
            readURL();
        });
    });

}