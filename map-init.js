    

/*----create default map styles---*/

var styles = [
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "administrative.country",
                elementType: "label",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "administrative.country",
                elementType: "geometry",
                stylers: [
                    { visibility: "on" }
                ]
            }, {
                featureType: "administrative.locality",
                elementType: "all",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "administrative.province",
                elementType: "label",
                stylers: [
                    { visibility: "off" }
                ]
            }
            , {
                featureType: "administrative.province",
                elementType: "geometry",
                stylers: [
                    { visibility: "on" }
                ]
            }, {
                featureType: "water",
                elementType: "label",
                stylers: [
                    { visibility: "off" }
                ]
            }
            , {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    { visibility: "on" }
                ]
            }
];

 
var mapMain;
function initializeMain() {


    var styledMap = new google.maps.StyledMapType(styles,
                { name: "Styled Map" });

    var mapOptions = {
        
        zoom: 4,
        minZoom: 4,
        scrollwheel: false,
        disableDoubleClickZoom:false,
        //draggable: false,
        streetViewControl: false,
        zoomControl: true,
        panControl: false,
        mapTypeControl: false,
        center: new google.maps.LatLng(33.2403909, -95.7288769),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }

    };
    mapMain = new google.maps.Map(document.getElementById('map-main-canvas'),
            mapOptions);


    mapMain.mapTypes.set('map_style', styledMap);
    mapMain.setMapTypeId('map_style');


    //load polygon
    LoadStates();

    //---------load boundary limits
    var strictBounds = new google.maps.LatLngBounds(
                    new google.maps.LatLng(10.176539,-175.957031),
                    new google.maps.LatLng(71.696814, -61.259766)
                    
            );

    // Listen for the dragend event
    google.maps.event.addListener(mapMain, 'dragend', function () {
        if (strictBounds.contains(mapMain.getCenter())) return;

        // We're out of bounds - Move the map back within the bounds
        var c = mapMain.getCenter(),
                x = c.lng(),
                y = c.lat(),
                maxX = strictBounds.getNorthEast().lng(),
                maxY = strictBounds.getNorthEast().lat(),
                minX = strictBounds.getSouthWest().lng(),
                minY = strictBounds.getSouthWest().lat();

        if (x < minX) x = minX;
        if (x > maxX) x = maxX;
        if (y < minY) y = minY;
        if (y > maxY) y = maxY;

        mapMain.setCenter(new google.maps.LatLng(y, x));
    });
    

}
google.maps.event.addDomListener(window, 'load', initializeMain);

/*load state function---*/



/*initialize alaska map canvas--------------------------------------*/

var mapAlaska;
function initializeAlaska() {

    var styledMap = new google.maps.StyledMapType(styles,
                { name: "Styled Map" });

    var mapOptions = {
        zoom: 2,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        //draggable: false,
        streetViewControl: false,
        zoomControl: false,
        panControl: false,
        mapTypeControl: false,
        center: new google.maps.LatLng(statAK.latitude, statAK.longitude),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }

    };
    mapAlaska = new google.maps.Map(document.getElementById('map-alaska-canvas'),
            mapOptions);

    mapAlaska.mapTypes.set('map_style', styledMap);
    mapAlaska.setMapTypeId('map_style');

    //load polygon
    LoadAlaska();

    //---------load boundary limits
    var strictBounds = new google.maps.LatLngBounds(
                    new google.maps.LatLng(61.189861, -157.983398),
                    new google.maps.LatLng(69.259262, -145.59082)

            );

    // Listen for the dragend event
    google.maps.event.addListener(mapAlaska, 'dragend', function () {
        if (strictBounds.contains(mapAlaska.getCenter())) return;

        // We're out of bounds - Move the map back within the bounds
        var c = mapAlaska.getCenter(),
                x = c.lng(),
                y = c.lat(),
                maxX = strictBounds.getNorthEast().lng(),
                maxY = strictBounds.getNorthEast().lat(),
                minX = strictBounds.getSouthWest().lng(),
                minY = strictBounds.getSouthWest().lat();

        if (x < minX) x = minX;
        if (x > maxX) x = maxX;
        if (y < minY) y = minY;
        if (y > maxY) y = maxY;

        mapAlaska.setCenter(new google.maps.LatLng(y, x));
    });
}
google.maps.event.addDomListener(window, 'load', initializeAlaska);


/*initialize Hawaii map canvas--------------------------------------*/

var mapHawaii;
function initializeHawaii() {

    var styledMap = new google.maps.StyledMapType(styles,
                { name: "Styled Map" });

    var mapOptions = {
        zoom: 5,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        //draggable: false,
        streetViewControl: false,
        zoomControl: false,
        panControl: false,
        mapTypeControl: false,
        center: new google.maps.LatLng(statHI.latitude, statHI.longitude),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }

    };
    mapHawaii = new google.maps.Map(document.getElementById('map-hawaii-canvas'),
            mapOptions);

    mapHawaii.mapTypes.set('map_style', styledMap);
    mapHawaii.setMapTypeId('map_style');

    //load polygon
    LoadHawaii();

    //---------load boundary limits
    var strictBounds = new google.maps.LatLngBounds(
                    new google.maps.LatLng(19.67466, -158.966675),
                    new google.maps.LatLng(21.903297, -156.384888)

            );

    // Listen for the dragend event
    google.maps.event.addListener(mapHawaii, 'dragend', function () {
        if (strictBounds.contains(mapHawaii.getCenter())) return;

        // We're out of bounds - Move the map back within the bounds
        var c = mapHawaii.getCenter(),
                x = c.lng(),
                y = c.lat(),
                maxX = strictBounds.getNorthEast().lng(),
                maxY = strictBounds.getNorthEast().lat(),
                minX = strictBounds.getSouthWest().lng(),
                minY = strictBounds.getSouthWest().lat();

        if (x < minX) x = minX;
        if (x > maxX) x = maxX;
        if (y < minY) y = minY;
        if (y > maxY) y = maxY;

        mapHawaii.setCenter(new google.maps.LatLng(y, x));
    });
}
google.maps.event.addDomListener(window, 'load', initializeHawaii);



/*------load state shape coordinates----*/

//styles for national roll over borders
var rollFillColor = "#9A9A9A";
var rollOutlineColor = "#042C4F";   //blue
var rollStroke = 2;
var rollFillOpac = 0;


//styles for State View Borders---//

var statFillColor = "#fff";
var statOutlineColor = "#f2800f"; // Orange
var statStroke = 4;
var statFillOpac = 0;
var statStrokeOpac = 1;

//load static borders

// Construct the state Border

var statAL = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude:32.61823,
    longitude:-86.90230,
    zoomLevel:7,
    textLabel:"Alabama",
    dropDownIndex:2  
});

var statAK = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 64.20084,
    longitude : -149.49367,
    zoomLevel : 4,
    textLabel : "Alaska",
    dropDownIndex: 3
});


var statAZ = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 34.04893,
    longitude : -112.09373,
    zoomLevel : 6,
    textLabel : "Arizona",
    dropDownIndex: 4
});

var statAR = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 34.80105,
    longitude : -92.63183,
    zoomLevel : 7,
    textLabel : "Arkansas",
    dropDownIndex: 5
});

var statCA = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 37.47826,
    longitude : -119.41793,
    zoomLevel : 6,
    textLabel : "California",
    dropDownIndex: 6
});

var statCO = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 38.95005,
    longitude : -105.78207,
    zoomLevel : 7,
    textLabel : "Colorado",
    dropDownIndex: 7
});

var statCT = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 41.50322,
    longitude : -72.78775,
    zoomLevel : 9,
    textLabel : "Connecticut",
    dropDownIndex: 8
});

var statDE = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 38.91083,
    longitude : -75.32767,
    zoomLevel : 8,
    textLabel : "Delaware",
    dropDownIndex: 9
});

var statDC = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 38.89511,
    longitude : -77.03637,
    zoomLevel : 11,
    textLabel : "Washington DC",
    dropDownIndex: 10
});

var statFL = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 27.66483,
    longitude : -81.51575,
    zoomLevel : 6,
    textLabel : "Florida",
    dropDownIndex: 11
});

var statGA = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 32.65744,
    longitude : -82.90712,
    zoomLevel : 7,
    textLabel : "Georgia",
    dropDownIndex: 12
});

var statHI = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 19.89677,
    longitude : -157.58278,
    zoomLevel : 7,
    textLabel : "Hawaii",
    dropDownIndex: 13
});

var statID = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 45.46820,
    longitude : -114.74204,
    zoomLevel : 6,
    textLabel : "Idaho",
    dropDownIndex: 14
});

var statIL = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 40.13312,
    longitude : -89.39853,
    zoomLevel : 6,
    textLabel : "Illinois",
    dropDownIndex: 15
});

var statIN = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 39.86719,
    longitude : -86.13490,
    zoomLevel : 7,
    textLabel : "Indiana",
    dropDownIndex: 16
});

var statIA = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 41.87800,
    longitude : -93.09770,
    zoomLevel : 7,
    textLabel : "Iowa",
    dropDownIndex: 17
});

var statKS = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 38.31190,
    longitude : -98.48425,
    zoomLevel : 7,
    textLabel : "Kansas",
    dropDownIndex: 18
});

var statKY = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 37.83933,
    longitude : -85.57002,
    zoomLevel : 7,
    textLabel : "Kentucky",
    dropDownIndex: 19
});

var statLA = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 31.24482,
    longitude : -92.14502,
    zoomLevel : 7,
    textLabel : "Louisiana",
    dropDownIndex: 20
});

var statME = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 45.25378,
    longitude : -69.44547,
    zoomLevel : 7,
    textLabel : "Maine",
    dropDownIndex: 21
});

var statMD = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 39.04575,
    longitude : -76.64127,
    zoomLevel : 7,
    textLabel : "Maryland",
    dropDownIndex: 22
});

var statMA = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 42.00721,
    longitude : -71.58244,
    zoomLevel : 8,
    textLabel : "Massachusetts",
    dropDownIndex: 23   
});

var statMI = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 43.81484,
    longitude : -85.60236,
    zoomLevel : 7,
    textLabel : "Michigan",
    dropDownIndex: 24
});


var statMN = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 46.72955,
    longitude : -94.08590,
    zoomLevel : 6,
    textLabel : "Minnesota",
    dropDownIndex: 25
});

var statMS = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 32.75467,
    longitude : -89.39853,
    zoomLevel : 7,
    textLabel : "Mississippi",
    dropDownIndex: 26
});

var statMO = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 38.26425,
    longitude : -92.53183,
    zoomLevel : 7,
    textLabel : "Missouri",
    dropDownIndex: 27
});

var statMT = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 46.87968,
    longitude : -110.36257,
    zoomLevel : 6,
    textLabel : "Montana",
    dropDownIndex: 28
});

var statNE = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 41.49254,
    longitude : -99.80181,
    zoomLevel : 7,
    textLabel : "Nebraska",
    dropDownIndex: 29
});

var statNV = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 38.80261,
    longitude : -116.41939,
    zoomLevel : 6,
    textLabel : "Nevada",
    dropDownIndex: 30
});

var statNH = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 43.89385,
    longitude : -71.57240,
    zoomLevel : 7,
    textLabel : "New Hampshire",
    dropDownIndex: 31
});

var statNJ = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 40.21832,
    longitude : -74.40566,
    zoomLevel : 8,
    textLabel : "New Jersey",
    dropDownIndex: 32
});

var statNM = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 34.51994,
    longitude : -105.87009,
    zoomLevel : 6,
    textLabel : "New Mexico",
    dropDownIndex: 33
});

var statNY = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 42.71435,
    longitude : -75.70597,
    zoomLevel : 7,
    textLabel : "New York",
    dropDownIndex: 34
});

var statNC = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 35.35957,
    longitude : -80.01930,
    zoomLevel : 7,
    textLabel : "North Carolina",
    dropDownIndex: 35
});

var statND = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 47.55149,
    longitude : -100.30201,
    zoomLevel : 7,
    textLabel : "North Dakota", 
    dropDownIndex: 36
});

var statOH = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 40.41729,
    longitude : -82.90712,
    zoomLevel : 7,
    textLabel : "Ohio",
    dropDownIndex: 37
});

var statOK = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 35.00775,
    longitude : -98.59288,
    zoomLevel : 7,
    textLabel : "Oklahoma",
    dropDownIndex: 38
});

var statOR = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 44.15413,
    longitude : -120.55420,
    zoomLevel : 7,
    textLabel : "Oregon",
    dropDownIndex: 39
});

var statPA = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 41.20332,
    longitude : -77.19452,
    zoomLevel : 7,
    textLabel : "Pennsylvania",
    dropDownIndex: 40
});

var statRI = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 41.58009,
    longitude : -71.47743,
    zoomLevel : 9,
    textLabel : "Rhode Island",
    dropDownIndex: 41
});

var statSC = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 33.83608,
    longitude : -81.16372,
    zoomLevel : 7,
    textLabel : "South Carolina",
    dropDownIndex: 42
});

var statSD = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 44.46951,
    longitude : -100.30181,
    zoomLevel : 7,
    textLabel : "South Dakota",
    dropDownIndex: 43
});

var statTN = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 35.51749,
    longitude : -85.88045,
    zoomLevel : 7,
    textLabel : "Tennessee",
    dropDownIndex: 44
});

var statTX = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 31.46860,
    longitude : -99.90181,
    zoomLevel : 6,
    textLabel : "Texas",
    dropDownIndex: 45
});

var statUT = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 39.32098,
    longitude : -111.09373,
    zoomLevel : 6,
    textLabel : "Utah",
    dropDownIndex: 46
});

var statVT = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 44.05880,
    longitude : -72.57784,
    zoomLevel : 7,
    textLabel : "Vermont",
    dropDownIndex: 47
});

var statVA = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 37.83157,
    longitude : -79.65689,
    zoomLevel : 7,
    textLabel : "Virginia",
    dropDownIndex: 48
});

var statWA = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 47.35107,
    longitude : -120.74014,
    zoomLevel : 7,
    textLabel : "Washington",
    dropDownIndex: 49
});

var statWV = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 38.59763,
    longitude : -80.45490,
    zoomLevel : 7,
    textLabel : "West Virginia",
    dropDownIndex: 50
});

var statWI = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 44.58444,
    longitude : -89.78787,
    zoomLevel : 7,
    textLabel : "Wisconsin",
    dropDownIndex: 51
});

var statWY = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 43.07597,
    longitude : -107.29028,
    zoomLevel : 7,
    textLabel : "Wyoming",
    dropDownIndex: 52
});

var statPR = new google.maps.Polygon({
    strokeColor: statOutlineColor,
    strokeOpacity: statStrokeOpac,
    strokeWeight: statStroke,
    fillColor: statFillColor,
    fillOpacity: statFillOpac, zIndex: 40,
    latitude : 18.22083,
    longitude : -66.49015,
    zoomLevel : 9,
    textLabel : "Puerto Rico",
    dropDownIndex: 53
});

var pointsAK = [
      new google.maps.LatLng(69.65801834884152, -141.04526757812505), new google.maps.LatLng(70.08896000114281, -143.02280664062505), new google.maps.LatLng(70.0139947153024, -145.52768945312505), new google.maps.LatLng(70.30483654408893, -148.20835351562505), new google.maps.LatLng(70.45975606300836, -150.51548242187505), new google.maps.LatLng(70.6280861397749, -152.11948632812505), new google.maps.LatLng(70.90314549318684, -152.51499414062505), new google.maps.LatLng(70.95340266099655, -154.55845117187505), new google.maps.LatLng(71.35792363672813, -156.57993554687505), new google.maps.LatLng(70.93187948722212, -157.65659570312505), new google.maps.LatLng(70.80947187150767, -159.43638085937505), new google.maps.LatLng(70.2677774454124, -161.30405664062505), new google.maps.LatLng(69.68092057995197, -162.95200585937505), new google.maps.LatLng(69.00663579331191, -163.83091210937505), new google.maps.LatLng(68.88032372382979, -166.24790429687505), new google.maps.LatLng(68.3272526386707, -166.51157617187505), new google.maps.LatLng(67.534796149958, -164.11655664062505), new google.maps.LatLng(67.09414812272622, -163.65513085937505), new google.maps.LatLng(66.73228222078218, -162.46860742187505), new google.maps.LatLng(66.27677699062329, -161.87534570312505), new google.maps.LatLng(66.08154403271469, -162.13901757812505), new google.maps.LatLng(66.01910791865905, -163.65513085937505), new google.maps.LatLng(66.59301318779252, -163.74302148437505), new google.maps.LatLng(65.61405877224215, -168.20347070312505), new google.maps.LatLng(65.34046615081357, -166.59946679687505), new google.maps.LatLng(64.71902498933918, -166.46763085937505), new google.maps.LatLng(64.39809640588119, -164.90757226562505), new google.maps.LatLng(64.41707929963471, -163.17173242187505), new google.maps.LatLng(64.26484798499168, -162.71030664062505), new google.maps.LatLng(64.82204782047506, -161.19419335937505), new google.maps.LatLng(64.5117969923061, -161.01841210937505), new google.maps.LatLng(64.4265658231709, -161.45786523437505), new google.maps.LatLng(63.78367051882998, -160.86460351562505), new google.maps.LatLng(63.56931395962512, -162.22690820312505), new google.maps.LatLng(63.04621636471471, -163.19370507812505), new google.maps.LatLng(63.185317260761664, -164.40220117187505), new google.maps.LatLng(61.8884890599651, -166.09409570312505), new google.maps.LatLng(61.133923416848745, -165.61069726562505), new google.maps.LatLng(60.63141673620085, -165.39097070312505), new google.maps.LatLng(59.945350023961126, -164.27036523437505), new google.maps.LatLng(59.801982918524494, -163.36948632812505), new google.maps.LatLng(59.96735166610514, -162.27085351562505), new google.maps.LatLng(59.379353727015165, -161.89731835937505), new google.maps.LatLng(58.56392114211714, -161.80942773437505), new google.maps.LatLng(58.83787755299793, -159.85386132812505), new google.maps.LatLng(58.276253034083744, -158.73325585937505), new google.maps.LatLng(58.82650568526466, -156.99741601562505), new google.maps.LatLng(57.45821352377043, -158.00815820312505), new google.maps.LatLng(54.26678997631877, -165.83042382812505), new google.maps.LatLng(52.25635008973482, -173.19126367187505), new google.maps.LatLng(51.769499132248214, -178.70640039062505), new google.maps.LatLng(51.98653139485443, 177.99770117187495), new google.maps.LatLng(51.5514182665508, 179.88734960937495), new google.maps.LatLng(51.97299756272805, -172.97153710937505), new google.maps.LatLng(54.241117404340656, -164.22641992187505), new google.maps.LatLng(57.05414018250424, -156.09653710937505), new google.maps.LatLng(58.98537257994098, -153.17417382812505), new google.maps.LatLng(61.1127010777093, -150.99888085937505), new google.maps.LatLng(59.1885586561351, -152.03159570312505), new google.maps.LatLng(59.19981151328616, -150.82309960937505), new google.maps.LatLng(59.901302900178976, -148.36216210937505), new google.maps.LatLng(59.945350023961126, -147.24155664062505), new google.maps.LatLng(60.35002205537636, -145.17612695312505), new google.maps.LatLng(59.89028198130352, -143.68198632812505), new google.maps.LatLng(59.66909461033456, -140.56186914062505), new google.maps.LatLng(58.56392114211714, -137.63950585937505), new google.maps.LatLng(56.20819524553368, -134.80503320312505), new google.maps.LatLng(54.700782895355985, -132.87143945312505), new google.maps.LatLng(54.67538130281383, -130.58628320312505), new google.maps.LatLng(55.61710319855994, -129.97104882812505), new google.maps.LatLng(56.19597261743988, -130.30063867187505), new google.maps.LatLng(56.790313794241136, -131.99253320312505), new google.maps.LatLng(58.57537904044813, -133.55259179687505), new google.maps.LatLng(59.75774549568376, -135.31040429687505), new google.maps.LatLng(59.04193389574916, -137.28794335937505), new google.maps.LatLng(60.317396122273905, -139.17759179687505), new google.maps.LatLng(60.219322475318464, -140.05649804687505), new google.maps.LatLng(60.33915036816158, -140.95737695312505)
    ];

var pointsHI = [
              new google.maps.LatLng(18.895505904958295, -155.66189050292974),new google.maps.LatLng(19.077306759303237, -155.89809655761724),new google.maps.LatLng(19.455848254378783, -155.93654870605474),new google.maps.LatLng(19.72495755001901, -156.07387780761724),new google.maps.LatLng(20.019422781908588, -155.83767175292974),new google.maps.LatLng(20.56041309424612, -156.35952233886724),new google.maps.LatLng(20.478098748324516, -156.58474206542974),new google.maps.LatLng(20.493536058389193, -156.68361901855474),new google.maps.LatLng(20.75059497663103, -156.97475671386724),new google.maps.LatLng(20.894357713548334, -157.09011315917974),new google.maps.LatLng(21.07899326226925, -157.32631921386724),new google.maps.LatLng(21.227560956212848, -157.82619714355474),new google.maps.LatLng(21.258280464260483, -158.15578698730474),new google.maps.LatLng(21.57023051407566, -158.30959558105474),new google.maps.LatLng(21.830527294514987, -159.42470788574224),new google.maps.LatLng(21.87131537287169, -160.01796960449224),new google.maps.LatLng(21.759120171057177, -160.17727136230474),new google.maps.LatLng(21.850922789156616, -160.29262780761724),new google.maps.LatLng(22.258218515401637, -159.54555749511724),new google.maps.LatLng(22.2124564154299, -159.28737878417974),new google.maps.LatLng(21.738711604116133, -157.97451257324224),new google.maps.LatLng(21.549795214936097, -157.80971765136724),new google.maps.LatLng(21.33505118992543, -157.63942956542974),new google.maps.LatLng(21.268518876997895, -157.27138757324224),new google.maps.LatLng(21.19683504924366, -156.74404382324224),new google.maps.LatLng(21.05848948267036, -156.59023522949224),new google.maps.LatLng(20.966187540367734, -156.24965905761724),new google.maps.LatLng(20.781412820066613, -155.96950769042974),new google.maps.LatLng(20.29788226910642, -155.85964440917974),new google.maps.LatLng(20.127771592980437, -155.56301354980474),new google.maps.LatLng(19.89550411359872, -155.09609460449224),new google.maps.LatLng(19.730128311432896, -154.93679284667974),new google.maps.LatLng(19.523167710256583, -154.77199792480474),new google.maps.LatLng(19.227790857360116, -155.17299890136724),new google.maps.LatLng(19.10326207964846, -155.48610925292974)
    ];



function LoadAlaska() {
    //Alaska
    
    // Construct the polygon for small canvass AK
    var rollAKSmall = new google.maps.Polygon({
        paths: pointsAK,
        strokeOpacity: 0,
        strokeColor: rollOutlineColor,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });


    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollAKSmall, 'mouseover', function () { rollAKSmall.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollAKSmall, 'mouseout', function () { rollAKSmall.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollAKSmall, 'click', function () {
        selectState('AK');
    });
    rollAKSmall.setMap(mapAlaska);
   
}

function LoadHawaii() {
    //Hawaii
    // Construct the polygon HI in small canvas
    var rollHI = new google.maps.Polygon({
        paths: pointsHI,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollHI, 'mouseover', function () { rollHI.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollHI, 'mouseout', function () { rollHI.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollHI, 'click', function () {
        selectState('HI');
    });
    rollHI.setMap(mapHawaii);

}




function LoadStates() {
    //special multi states

    //Alaska
    statAK.setPath(pointsAK);
    statAK.setVisible(false);
    statAK.setMap(mapMain);
    // Construct the polygon for main canvass AK
    var rollAKMain = new google.maps.Polygon({
        paths: pointsAK,
        strokeOpacity: 0,
        strokeColor: rollOutlineColor,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });


    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollAKMain, 'mouseover', function () { rollAKMain.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollAKMain, 'mouseout', function () { rollAKMain.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollAKMain, 'click', function () {
        selectState('AK');
    });
    rollAKMain.setMap(mapMain);

    //hawaii
    statHI.setPath(pointsHI);
    statHI.setVisible(false);
    statHI.setMap(mapMain);
    // Construct the polygon HI in main canvas
    var rollHIMain = new google.maps.Polygon({
        paths: pointsHI,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollHIMain, 'mouseover', function () { rollHIMain.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollHIMain, 'mouseout', function () { rollHIMain.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollHIMain, 'click', function () {
        selectState('HI');
    });
    rollHIMain.setMap(mapMain);

    //Puerto
    var pointsPR = [
        new google.maps.LatLng(18.512105972050506, -67.13474511718755), new google.maps.LatLng(18.48866418656595, -66.84910058593755), new google.maps.LatLng(18.49126898785117, -66.4123940429688), new google.maps.LatLng(18.45740348390873, -66.18992089843755), new google.maps.LatLng(18.439165444081375, -65.90976953125005), new google.maps.LatLng(18.35576692056994, -65.69004296875005), new google.maps.LatLng(18.366193943005864, -65.60215234375005), new google.maps.LatLng(18.199286198457365, -65.61313867187505), new google.maps.LatLng(18.134044332111387, -65.78342675781255), new google.maps.LatLng(18.0060997398472, -65.83286523437505), new google.maps.LatLng(17.96952704775242, -65.96470117187505), new google.maps.LatLng(17.92510717037821, -66.1706948242188), new google.maps.LatLng(17.98258959354805, -66.3299965820313), new google.maps.LatLng(17.935559909554634, -66.39316796875005), new google.maps.LatLng(17.993038934292304, -66.48655175781255), new google.maps.LatLng(17.948624965556167, -66.5936684570313), new google.maps.LatLng(17.995651172786168, -66.7364907226563), new google.maps.LatLng(17.93294678261053, -66.86558007812505), new google.maps.LatLng(17.927720413017465, -66.9452309570313), new google.maps.LatLng(17.97997716169408, -67.01389550781255), new google.maps.LatLng(17.938172997923957, -67.12925195312505), new google.maps.LatLng(17.97997716169408, -67.21164941406255), new google.maps.LatLng(18.154924381111957, -67.18967675781255), new google.maps.LatLng(18.306229970601493, -67.1979165039063), new google.maps.LatLng(18.368800600196153, -67.26108789062505), new google.maps.LatLng(18.441770996900363, -67.1594643554688)
    ];

    statPR.setPath(pointsPR);
    statPR.setVisible(false);
    statPR.setMap(mapMain);
    // Construct the polygon PR in main canvas
    var rollPRMain = new google.maps.Polygon({
        paths: pointsPR,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollPRMain, 'mouseover', function () { rollPRMain.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollPRMain, 'mouseout', function () { rollPRMain.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollPRMain, 'click', function () {
        selectState('PR');
    });
    rollPRMain.setMap(mapMain);

    //Alabama
    var points = [
        new google.maps.LatLng(34.984, -85.605), new google.maps.LatLng(32.864, -85.184), new google.maps.LatLng(32.426, -84.964), new google.maps.LatLng(32.326, -85.006), new google.maps.LatLng(32.261, -84.889), new google.maps.LatLng(32.133, -85.062), new google.maps.LatLng(31.84, -85.141), new google.maps.LatLng(31.538, -85.041), new google.maps.LatLng(31.188, -85.108), new google.maps.LatLng(31, -85.002), new google.maps.LatLng(30.997, -87.598), new google.maps.LatLng(30.846, -87.625), new google.maps.LatLng(30.655, -87.397), new google.maps.LatLng(30.466, -87.426), new google.maps.LatLng(30.348, -88.394), new google.maps.LatLng(31.894, -88.473), new google.maps.LatLng(32.732, -88.37), new google.maps.LatLng(32.747, -88.368), new google.maps.LatLng(34.892, -88.097), new google.maps.LatLng(34.995, -88.2)
    ];


    statAL.setPath(points);
    statAL.setVisible(false);
    statAL.setMap(mapMain);
   
    // Construct the polygon
    var rollAL = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollAL, 'mouseover', function () { rollAL.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollAL, 'mouseout', function () { rollAL.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollAL, 'click', function () {
        selectState('AL');
    });
    rollAL.setMap(mapMain);

    //Arkansas
    points = [
        new google.maps.LatLng(33.004, -91.166), new google.maps.LatLng(33.059, -91.121), new google.maps.LatLng(33.125, -91.201), new google.maps.LatLng(33.136, -91.093), new google.maps.LatLng(33.275, -91.043), new google.maps.LatLng(33.301, -91.141), new google.maps.LatLng(33.449, -91.059), new google.maps.LatLng(33.378, -91.148), new google.maps.LatLng(33.407, -91.209), new google.maps.LatLng(33.473, -91.125), new google.maps.LatLng(33.437, -91.231), new google.maps.LatLng(33.561, -91.23), new google.maps.LatLng(33.607, -91.129), new google.maps.LatLng(33.69, -91.222), new google.maps.LatLng(33.681, -91.037), new google.maps.LatLng(33.726, -91.14), new google.maps.LatLng(33.783, -90.986), new google.maps.LatLng(33.967, -91.09), new google.maps.LatLng(34.026, -90.893), new google.maps.LatLng(34.164, -90.927), new google.maps.LatLng(34.159, -90.809), new google.maps.LatLng(34.238, -90.934), new google.maps.LatLng(34.207, -90.848), new google.maps.LatLng(34.364, -90.762), new google.maps.LatLng(34.314, -90.661), new google.maps.LatLng(34.418, -90.573), new google.maps.LatLng(34.689, -90.569), new google.maps.LatLng(34.624, -90.535), new google.maps.LatLng(34.684, -90.461), new google.maps.LatLng(34.711, -90.567), new google.maps.LatLng(34.785, -90.547), new google.maps.LatLng(34.737, -90.459), new google.maps.LatLng(34.892, -90.464), new google.maps.LatLng(34.848, -90.306), new google.maps.LatLng(34.924, -90.241), new google.maps.LatLng(34.995, -90.308), new google.maps.LatLng(35.139, -90.065), new google.maps.LatLng(35.265, -90.16), new google.maps.LatLng(35.277, -90.168), new google.maps.LatLng(35.386, -90.08), new google.maps.LatLng(35.421, -90.169), new google.maps.LatLng(35.429, -90.002), new google.maps.LatLng(35.547, -90.04), new google.maps.LatLng(35.514, -89.916), new google.maps.LatLng(35.592, -89.955), new google.maps.LatLng(35.639, -89.853), new google.maps.LatLng(35.729, -89.957), new google.maps.LatLng(35.814, -89.71), new google.maps.LatLng(35.909, -89.742), new google.maps.LatLng(35.892, -89.642), new google.maps.LatLng(36.001, -89.733), new google.maps.LatLng(35.996, -90.377), new google.maps.LatLng(36.303, -90.064), new google.maps.LatLng(36.497, -90.151), new google.maps.LatLng(36.499, -90.789), new google.maps.LatLng(36.499, -90.802), new google.maps.LatLng(36.499, -94.617), new google.maps.LatLng(35.398, -94.431), new google.maps.LatLng(33.637, -94.485), new google.maps.LatLng(33.545, -94.386), new google.maps.LatLng(33.551, -94.043), new google.maps.LatLng(33.019, -94.042)   
    ];

    statAR.setPath(points);
    statAR.setVisible(false);
    statAR.setMap(mapMain);

    // Construct the polygon
    var rollAR = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollAR, 'mouseover', function () { rollAR.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollAR, 'mouseout', function () { rollAR.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollAR, 'click', function () {
        selectState('AR');
    });
    rollAR.setMap(mapMain);

    //Arizona
    points = [
       new google.maps.LatLng(37, -114.049), new google.maps.LatLng(36.194, -114.045), new google.maps.LatLng(36.016, -114.21), new google.maps.LatLng(36.142, -114.369), new google.maps.LatLng(36.103, -114.735), new google.maps.LatLng(35.804, -114.71), new google.maps.LatLng(35.79, -114.698), new google.maps.LatLng(35.181, -114.568), new google.maps.LatLng(35.001, -114.632), new google.maps.LatLng(34.456, -114.384), new google.maps.LatLng(34.261, -114.129), new google.maps.LatLng(34.106, -114.415), new google.maps.LatLng(33.937, -114.533), new google.maps.LatLng(33.554, -114.524), new google.maps.LatLng(33.406, -114.723), new google.maps.LatLng(33.304, -114.73), new google.maps.LatLng(33.088, -114.706), new google.maps.LatLng(33.024, -114.51), new google.maps.LatLng(32.845, -114.469), new google.maps.LatLng(32.719, -114.718), new google.maps.LatLng(32.619135, -114.809875), new google.maps.LatLng(32.488914, -114.807129), new google.maps.LatLng(31.332525, -111.071777), new google.maps.LatLng(31.332, -109.049), new google.maps.LatLng(34.96, -109.045), new google.maps.LatLng(36.002, -109.045), new google.maps.LatLng(36.999, -109.044)       
    ];

    statAZ.setPath(points);
    statAZ.setVisible(false);
    statAZ.setMap(mapMain);

    // Construct the polygon
    var rollAZ = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollAZ, 'mouseover', function () { rollAZ.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollAZ, 'mouseout', function () { rollAZ.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollAZ, 'click', function () {
        selectState('AZ');
    });
    rollAZ.setMap(mapMain);

    //California
    points = [
        new google.maps.LatLng(41.998284, -124.212112), new google.maps.LatLng(41.995, -119.998), new google.maps.LatLng(39, -120), new google.maps.LatLng(36.972, -117.166), new google.maps.LatLng(35.001, -114.632), new google.maps.LatLng(34.456, -114.384), new google.maps.LatLng(34.261, -114.129), new google.maps.LatLng(34.106, -114.415), new google.maps.LatLng(33.937, -114.533), new google.maps.LatLng(33.554, -114.524), new google.maps.LatLng(33.406, -114.723), new google.maps.LatLng(33.304, -114.73), new google.maps.LatLng(33.088, -114.706), new google.maps.LatLng(33.024, -114.51), new google.maps.LatLng(32.845, -114.469), new google.maps.LatLng(32.719, -114.718), new google.maps.LatLng(32.534151, -117.124472), new google.maps.LatLng(32.542255, -117.124729), new google.maps.LatLng(32.557665, -117.131081), new google.maps.LatLng(32.564971, -117.133055), new google.maps.LatLng(32.577051, -117.133226), new google.maps.LatLng(32.611978, -117.135544), new google.maps.LatLng(32.646891, -117.149792), new google.maps.LatLng(32.671677, -117.169619), new google.maps.LatLng(32.678396, -117.179918), new google.maps.LatLng(32.687137, -117.197256), new google.maps.LatLng(32.686631, -117.214079), new google.maps.LatLng(32.681782, -117.22351), new google.maps.LatLng(32.671279, -117.236223), new google.maps.LatLng(32.668425, -117.237082), new google.maps.LatLng(32.665716, -117.239184), new google.maps.LatLng(32.664813, -117.242746), new google.maps.LatLng(32.666366, -117.244678), new google.maps.LatLng(32.68273, -117.24957), new google.maps.LatLng(32.69204, -117.253422), new google.maps.LatLng(32.694803, -117.254237), new google.maps.LatLng(32.699353, -117.255642), new google.maps.LatLng(32.703488, -117.255739), new google.maps.LatLng(32.714782, -117.256629), new google.maps.LatLng(32.719584, -117.25738), new google.maps.LatLng(32.725361, -117.25841), new google.maps.LatLng(32.730613, -117.257359), new google.maps.LatLng(32.733357, -117.257445), new google.maps.LatLng(32.736218, -117.2562), new google.maps.LatLng(32.744963, -117.255621), new google.maps.LatLng(32.754185, -117.253132), new google.maps.LatLng(32.756151, -117.252402), new google.maps.LatLng(32.759003, -117.254119), new google.maps.LatLng(32.768819, -117.253218), new google.maps.LatLng(32.778651, -117.253625), new google.maps.LatLng(32.795825, -117.257102), new google.maps.LatLng(32.801759, -117.259698), new google.maps.LatLng(32.807512, -117.264655), new google.maps.LatLng(32.807557, -117.26724), new google.maps.LatLng(32.807864, -117.267938), new google.maps.LatLng(32.814059, -117.273399), new google.maps.LatLng(32.815402, -117.274075), new google.maps.LatLng(32.817728, -117.273592), new google.maps.LatLng(32.818125, -117.27562), new google.maps.LatLng(32.81891, -117.276843), new google.maps.LatLng(32.820641, -117.279772), new google.maps.LatLng(32.82202, -117.281027), new google.maps.LatLng(32.827493, -117.28019), new google.maps.LatLng(32.832568, -117.28225), new google.maps.LatLng(32.847577, -117.278366), new google.maps.LatLng(32.870793, -117.253132), new google.maps.LatLng(32.915188, -117.258453), new google.maps.LatLng(32.959994, -117.268581), new google.maps.LatLng(32.989876, -117.27416), new google.maps.LatLng(33.077231, -117.310638), new google.maps.LatLng(33.195029, -117.385569), new google.maps.LatLng(33.347307, -117.524099), new google.maps.LatLng(33.382576, -117.589417), new google.maps.LatLng(33.385801, -117.595167), new google.maps.LatLng(33.434951, -117.637739), new google.maps.LatLng(33.459874, -117.715244), new google.maps.LatLng(33.553842, -117.819872), new google.maps.LatLng(33.606149, -117.928448), new google.maps.LatLng(33.686139, -118.039427), new google.maps.LatLng(33.729908, -118.090668), new google.maps.LatLng(33.723108, -118.136909), new google.maps.LatLng(33.723108, -118.206303), new google.maps.LatLng(33.7037, -118.267522), new google.maps.LatLng(33.705313, -118.28855), new google.maps.LatLng(33.704706, -118.294516), new google.maps.LatLng(33.713774, -118.317604), new google.maps.LatLng(33.727266, -118.35155), new google.maps.LatLng(33.736332, -118.369617), new google.maps.LatLng(33.736225, -118.398242), new google.maps.LatLng(33.741007, -118.411288), new google.maps.LatLng(33.751712, -118.414721), new google.maps.LatLng(33.763379, -118.42236), new google.maps.LatLng(33.766198, -118.423948), new google.maps.LatLng(33.773868, -118.428369), new google.maps.LatLng(33.782679, -118.422704), new google.maps.LatLng(33.788207, -118.414936), new google.maps.LatLng(33.796731, -118.408713), new google.maps.LatLng(33.800262, -118.404593), new google.maps.LatLng(33.802081, -118.400087), new google.maps.LatLng(33.815595, -118.391204), new google.maps.LatLng(33.834633, -118.390517), new google.maps.LatLng(33.849924, -118.400817), new google.maps.LatLng(33.855449, -118.400259), new google.maps.LatLng(33.867351, -118.404508), new google.maps.LatLng(33.894429, -118.418412), new google.maps.LatLng(33.925165, -118.434591), new google.maps.LatLng(33.950124, -118.448668), new google.maps.LatLng(33.960162, -118.455491), new google.maps.LatLng(33.964647, -118.459547), new google.maps.LatLng(33.975147, -118.465576), new google.maps.LatLng(33.983563, -118.472915), new google.maps.LatLng(33.985467, -118.476455), new google.maps.LatLng(33.990947, -118.479481), new google.maps.LatLng(34.003364, -118.490596), new google.maps.LatLng(34.011831, -118.501496), new google.maps.LatLng(34.025028, -118.517118), new google.maps.LatLng(34.027588, -118.521237), new google.maps.LatLng(34.032425, -118.530936), new google.maps.LatLng(34.036373, -118.540034), new google.maps.LatLng(34.037973, -118.54321), new google.maps.LatLng(34.038934, -118.54836), new google.maps.LatLng(34.037831, -118.554239), new google.maps.LatLng(34.037831, -118.555999), new google.maps.LatLng(34.041423, -118.56926), new google.maps.LatLng(34.039396, -118.576469), new google.maps.LatLng(34.037475, -118.58398), new google.maps.LatLng(34.039289, -118.593807), new google.maps.LatLng(34.038934, -118.600588), new google.maps.LatLng(34.03648, -118.609343), new google.maps.LatLng(34.0368, -118.615179), new google.maps.LatLng(34.036978, -118.626466), new google.maps.LatLng(34.036124, -118.636165), new google.maps.LatLng(34.037369, -118.649125), new google.maps.LatLng(34.038827, -118.668652), new google.maps.LatLng(34.036764, -118.676677), new google.maps.LatLng(34.034097, -118.67835), new google.maps.LatLng(34.032354, -118.67938), new google.maps.LatLng(34.03111, -118.68114), new google.maps.LatLng(34.030683, -118.683157), new google.maps.LatLng(34.032283, -118.695774), new google.maps.LatLng(34.029616, -118.705816), new google.maps.LatLng(34.029509, -118.70676), new google.maps.LatLng(34.031038, -118.719077), new google.maps.LatLng(34.031679, -118.723111), new google.maps.LatLng(34.032603, -118.739204), new google.maps.LatLng(34.031358, -118.74783), new google.maps.LatLng(34.025703, -118.756242), new google.maps.LatLng(34.024174, -118.77079), new google.maps.LatLng(34.021506, -118.783665), new google.maps.LatLng(34.011866, -118.792505), new google.maps.LatLng(34.008345, -118.793664), new google.maps.LatLng(34.006815, -118.794994), new google.maps.LatLng(34.005427, -118.80229), new google.maps.LatLng(34.000411, -118.805208), new google.maps.LatLng(34.000055, -118.806796), new google.maps.LatLng(34.001443, -118.808727), new google.maps.LatLng(34.026486, -118.83894), new google.maps.LatLng(34.039431, -118.89782), new google.maps.LatLng(34.041458, -118.915329), new google.maps.LatLng(34.045263, -118.945885), new google.maps.LatLng(34.051948, -118.964252), new google.maps.LatLng(34.069156, -119.012661), new google.maps.LatLng(34.085365, -119.061928), new google.maps.LatLng(34.096169, -119.082699), new google.maps.LatLng(34.094748, -119.110336), new google.maps.LatLng(34.100434, -119.131966), new google.maps.LatLng(34.130279, -119.176254), new google.maps.LatLng(34.14431, -119.210136), new google.maps.LatLng(34.145597, -119.216241), new google.maps.LatLng(34.15919, -119.229298), new google.maps.LatLng(34.186956, -119.243202), new google.maps.LatLng(34.394445, -119.726257), new google.maps.LatLng(34.406839, -119.877577), new google.maps.LatLng(34.468071, -120.113697), new google.maps.LatLng(34.468071, -120.238323), new google.maps.LatLng(34.466655, -120.278149), new google.maps.LatLng(34.450237, -120.419941), new google.maps.LatLng(34.442168, -120.452385), new google.maps.LatLng(34.448113, -120.471439), new google.maps.LatLng(34.46708, -120.474186), new google.maps.LatLng(34.495522, -120.496674), new google.maps.LatLng(34.516458, -120.50663), new google.maps.LatLng(34.541207, -120.553493), new google.maps.LatLng(34.556194, -120.585766), new google.maps.LatLng(34.553508, -120.623531), new google.maps.LatLng(34.56298, -120.638981), new google.maps.LatLng(34.576974, -120.650654), new google.maps.LatLng(34.624168, -120.631342), new google.maps.LatLng(34.684817, -120.606108), new google.maps.LatLng(34.696743, -120.602245), new google.maps.LatLng(34.708669, -120.601773), new google.maps.LatLng(34.714595, -120.607395), new google.maps.LatLng(34.723167, -120.612073), new google.maps.LatLng(34.734877, -120.619197), new google.maps.LatLng(34.73791, -120.62602), new google.maps.LatLng(34.744434, -120.630355), new google.maps.LatLng(34.751028, -120.630956), new google.maps.LatLng(34.755999, -120.637693), new google.maps.LatLng(34.811619, -120.617952), new google.maps.LatLng(34.85875, -120.611515), new google.maps.LatLng(34.873679, -120.628166), new google.maps.LatLng(34.880439, -120.639324), new google.maps.LatLng(34.89283, -120.642672), new google.maps.LatLng(34.899237, -120.645075), new google.maps.LatLng(34.901771, -120.670652), new google.maps.LatLng(34.902967, -120.671682), new google.maps.LatLng(34.930134, -120.666704), new google.maps.LatLng(34.963482, -120.652971), new google.maps.LatLng(35.012143, -120.637951), new google.maps.LatLng(35.055224, -120.630827), new google.maps.LatLng(35.098844, -120.630569), new google.maps.LatLng(35.128403, -120.638208), new google.maps.LatLng(35.146021, -120.649796), new google.maps.LatLng(35.152618, -120.673656), new google.maps.LatLng(35.159846, -120.687046), new google.maps.LatLng(35.172826, -120.704041), new google.maps.LatLng(35.175071, -120.726013), new google.maps.LatLng(35.175562, -120.753136), new google.maps.LatLng(35.155776, -120.749531), new google.maps.LatLng(35.159775, -120.759573), new google.maps.LatLng(35.186155, -120.807724), new google.maps.LatLng(35.234403, -120.884628), new google.maps.LatLng(35.255432, -120.899391), new google.maps.LatLng(35.369735, -120.870037), new google.maps.LatLng(35.434379, -120.887375), new google.maps.LatLng(35.46067, -121.005478), new google.maps.LatLng(35.663991, -121.284943), new google.maps.LatLng(35.885712, -121.461411), new google.maps.LatLng(36.020781, -121.571274), new google.maps.LatLng(36.232643, -121.812286), new google.maps.LatLng(36.302987, -121.899662), new google.maps.LatLng(36.307241, -121.902752), new google.maps.LatLng(36.354951, -121.907043), new google.maps.LatLng(36.581349, -121.977768), new google.maps.LatLng(36.636468, -121.935196), new google.maps.LatLng(36.786192, -121.79512), new google.maps.LatLng(36.950441, -121.881638), new google.maps.LatLng(36.949892, -122.027206), new google.maps.LatLng(36.975678, -122.153549), new google.maps.LatLng(37.089692, -122.275772), new google.maps.LatLng(37.112693, -122.330704), new google.maps.LatLng(37.118716, -122.338257), new google.maps.LatLng(37.148277, -122.358856), new google.maps.LatLng(37.195878, -122.405548), new google.maps.LatLng(37.245635, -122.419281), new google.maps.LatLng(37.439974, -122.444687), new google.maps.LatLng(37.483577, -122.453613), new google.maps.LatLng(37.496652, -122.500992), new google.maps.LatLng(37.534777, -122.520905), new google.maps.LatLng(37.594104, -122.518158), new google.maps.LatLng(37.782112, -122.512665), new google.maps.LatLng(37.837988, -122.549744), new google.maps.LatLng(37.859134, -122.585449), new google.maps.LatLng(37.881899, -122.628021), new google.maps.LatLng(37.89653, -122.641068), new google.maps.LatLng(37.893279, -122.704926), new google.maps.LatLng(37.903574, -122.726212), new google.maps.LatLng(37.947446, -122.781143), new google.maps.LatLng(38.028352, -122.908173), new google.maps.LatLng(37.989804, -122.964478), new google.maps.LatLng(37.991834, -122.995205), new google.maps.LatLng(37.99508, -123.024044), new google.maps.LatLng(38.23818, -122.994003), new google.maps.LatLng(38.322266, -123.076401), new google.maps.LatLng(38.425084, -123.118286), new google.maps.LatLng(38.565616, -123.333206), new google.maps.LatLng(38.848264, -123.648376), new google.maps.LatLng(38.954069, -123.739014), new google.maps.LatLng(39.451571, -123.814545), new google.maps.LatLng(39.726729, -123.832054), new google.maps.LatLng(39.867588, -123.909302), new google.maps.LatLng(40.028666, -124.07959), new google.maps.LatLng(40.261451, -124.363518), new google.maps.LatLng(40.440154, -124.409351), new google.maps.LatLng(40.652513, -124.308243), new google.maps.LatLng(40.713826, -124.263439), new google.maps.LatLng(40.791459, -124.211769), new google.maps.LatLng(40.922852, -124.138641), new google.maps.LatLng(41.046864, -124.125595), new google.maps.LatLng(41.051007, -124.150143), new google.maps.LatLng(41.053207, -124.153233), new google.maps.LatLng(41.072493, -124.159241), new google.maps.LatLng(41.101604, -124.162846), new google.maps.LatLng(41.141174, -124.161816), new google.maps.LatLng(41.235995, -124.108772), new google.maps.LatLng(41.451991, -124.0662), new google.maps.LatLng(41.509863, -124.081306), new google.maps.LatLng(41.524435, -124.084976), new google.maps.LatLng(41.53621, -124.082165), new google.maps.LatLng(41.545878, -124.082379), new google.maps.LatLng(41.548255, -124.083066), new google.maps.LatLng(41.551081, -124.088817), new google.maps.LatLng(41.553072, -124.092336), new google.maps.LatLng(41.560683, -124.096584), new google.maps.LatLng(41.563926, -124.098902), new google.maps.LatLng(41.569064, -124.101133), new google.maps.LatLng(41.571247, -124.101562), new google.maps.LatLng(41.574297, -124.102292), new google.maps.LatLng(41.579113, -124.102206), new google.maps.LatLng(41.579594, -124.101863), new google.maps.LatLng(41.583511, -124.098601), new google.maps.LatLng(41.588935, -124.101348), new google.maps.LatLng(41.591054, -124.102378), new google.maps.LatLng(41.594295, -124.104867), new google.maps.LatLng(41.594777, -124.104695), new google.maps.LatLng(41.600281, -124.100833), new google.maps.LatLng(41.605872, -124.104728), new google.maps.LatLng(41.606739, -124.105403), new google.maps.LatLng(41.611432, -124.109159), new google.maps.LatLng(41.614127, -124.111401), new google.maps.LatLng(41.614961, -124.11581), new google.maps.LatLng(41.61525, -124.115896), new google.maps.LatLng(41.621089, -124.11551), new google.maps.LatLng(41.621859, -124.115725), new google.maps.LatLng(41.622565, -124.11581), new google.maps.LatLng(41.628724, -124.115982), new google.maps.LatLng(41.630777, -124.116883), new google.maps.LatLng(41.632637, -124.118686), new google.maps.LatLng(41.634049, -124.119501), new google.maps.LatLng(41.639052, -124.11963), new google.maps.LatLng(41.642035, -124.121432), new google.maps.LatLng(41.643382, -124.122934), new google.maps.LatLng(41.645562, -124.124007), new google.maps.LatLng(41.646396, -124.125423), new google.maps.LatLng(41.648641, -124.126797), new google.maps.LatLng(41.651335, -124.127827), new google.maps.LatLng(41.652906, -124.130015), new google.maps.LatLng(41.656433, -124.134521), new google.maps.LatLng(41.657427, -124.135466), new google.maps.LatLng(41.666917, -124.13847), new google.maps.LatLng(41.668616, -124.138513), new google.maps.LatLng(41.671245, -124.138598), new google.maps.LatLng(41.672078, -124.140916), new google.maps.LatLng(41.672719, -124.141173), new google.maps.LatLng(41.675188, -124.139371), new google.maps.LatLng(41.676983, -124.138298), new google.maps.LatLng(41.680509, -124.138598), new google.maps.LatLng(41.681502, -124.139585), new google.maps.LatLng(41.682784, -124.14083), new google.maps.LatLng(41.687912, -124.143534), new google.maps.LatLng(41.691149, -124.143233), new google.maps.LatLng(41.696436, -124.143877), new google.maps.LatLng(41.696661, -124.143491), new google.maps.LatLng(41.707074, -124.144778), new google.maps.LatLng(41.713033, -124.145207), new google.maps.LatLng(41.716845, -124.147053), new google.maps.LatLng(41.724693, -124.151816), new google.maps.LatLng(41.740354, -124.165421), new google.maps.LatLng(41.743684, -124.171), new google.maps.LatLng(41.745221, -124.176621), new google.maps.LatLng(41.745765, -124.177952), new google.maps.LatLng(41.739585, -124.183574), new google.maps.LatLng(41.736159, -124.190998), new google.maps.LatLng(41.736735, -124.194775), new google.maps.LatLng(41.745509, -124.200697), new google.maps.LatLng(41.746149, -124.203186), new google.maps.LatLng(41.748263, -124.206362), new google.maps.LatLng(41.749928, -124.212027), new google.maps.LatLng(41.750632, -124.215202), new google.maps.LatLng(41.750696, -124.216146), new google.maps.LatLng(41.7514, -124.216404), new google.maps.LatLng(41.751849, -124.215031), new google.maps.LatLng(41.753706, -124.215374), new google.maps.LatLng(41.755498, -124.22061), new google.maps.LatLng(41.756459, -124.222069), new google.maps.LatLng(41.757099, -124.222155), new google.maps.LatLng(41.762605, -124.227648), new google.maps.LatLng(41.767407, -124.235973), new google.maps.LatLng(41.77208, -124.242496), new google.maps.LatLng(41.770415, -124.246616), new google.maps.LatLng(41.7708, -124.247732), new google.maps.LatLng(41.771632, -124.249449), new google.maps.LatLng(41.770095, -124.252796), new google.maps.LatLng(41.770864, -124.254255), new google.maps.LatLng(41.776817, -124.251165), new google.maps.LatLng(41.778353, -124.254684), new google.maps.LatLng(41.781553, -124.255199), new google.maps.LatLng(41.782961, -124.2558), new google.maps.LatLng(41.785201, -124.254341), new google.maps.LatLng(41.813291, -124.233055), new google.maps.LatLng(41.83702, -124.22267), new google.maps.LatLng(41.884515, -124.209795), new google.maps.LatLng(41.894611, -124.207478), new google.maps.LatLng(41.904257, -124.206619), new google.maps.LatLng(41.912625, -124.205675), new google.maps.LatLng(41.920098, -124.204817), new google.maps.LatLng(41.927633, -124.204903), new google.maps.LatLng(41.932231, -124.204731), new google.maps.LatLng(41.937403, -124.203701), new google.maps.LatLng(41.945447, -124.204903), new google.maps.LatLng(41.94583, -124.207478), new google.maps.LatLng(41.94583, -124.216404), new google.maps.LatLng(41.951065, -124.217091), new google.maps.LatLng(41.971743, -124.205246), new google.maps.LatLng(41.989226, -124.208851), new google.maps.LatLng(41.998284, -124.212112)
    ];

    statCA.setPath(points);
    statCA.setVisible(false);
    statCA.setMap(mapMain);

    // Construct the polygon
    var California = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(California, 'mouseover', function () { California.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(California, 'mouseout', function () { California.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(California, 'click', function () {
        selectState('CA');
    });
    California.setMap(mapMain);

    //Colorado
    points = [
        new google.maps.LatLng(36.999, -109.044),new google.maps.LatLng(37, -103.001),new google.maps.LatLng(36.993, -102.041),new google.maps.LatLng(41.002, -102.051),new google.maps.LatLng(41, -109.049)    
    ];

    statCO.setPath(points);
    statCO.setVisible(false);
    statCO.setMap(mapMain);

    // Construct the polygon
    var rollCO = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollCO, 'mouseover', function () { rollCO.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollCO, 'mouseout', function () { rollCO.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollCO, 'click', function () {
        selectState('CO');
    });
    rollCO.setMap(mapMain);

    //Connecticut ( TODO: Need better MA border )
    points = [
        new google.maps.LatLng(41.423, -71.798), new google.maps.LatLng(42.008, -71.8), new google.maps.LatLng(42.023, -71.8), new google.maps.LatLng(42.049, -73.488), new google.maps.LatLng(41.295, -73.551), new google.maps.LatLng(41.212, -73.482), new google.maps.LatLng(41.101, -73.728), new google.maps.LatLng(40.991, -73.659)
    ];

    statCT.setPath(points);
    statCT.setVisible(false);
    statCT.setMap(mapMain);

    // Construct the polygon
    var rollCT = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollCT, 'mouseover', function () { rollCT.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollCT, 'mouseout', function () { rollCT.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollCT, 'click', function () {
        selectState('CT');
    });
    rollCT.setMap(mapMain);

    //Delaware
    points = [
        new google.maps.LatLng(38.78781, -75.012589), new google.maps.LatLng(39.057584, -75.168457), new google.maps.LatLng(39.076776, -75.18837), new google.maps.LatLng(39.250334, -75.319519), new google.maps.LatLng(39.384202, -75.478134), new google.maps.LatLng(39.455282, -75.559845), new google.maps.LatLng(39.496093, -75.559158), new google.maps.LatLng(39.497153, -75.528259), new google.maps.LatLng(39.541117, -75.532379), new google.maps.LatLng(39.563353, -75.513153), new google.maps.LatLng(39.606217, -75.557098), new google.maps.LatLng(39.630019, -75.559845), new google.maps.LatLng(39.697149, -75.506973), new google.maps.LatLng(39.763158, -75.461655), new google.maps.LatLng(39.777408, -75.448608), new google.maps.LatLng(39.796403, -75.404663), new google.maps.LatLng(39.802, -75.415), new google.maps.LatLng(39.795876, -75.405006), new google.maps.LatLng(39.802, -75.415), new google.maps.LatLng(39.820667, -75.454102), new google.maps.LatLng(39.837805, -75.526886), new google.maps.LatLng(39.83675, -75.59967), new google.maps.LatLng(39.82304, -75.657692), new google.maps.LatLng(39.807, -75.693), new google.maps.LatLng(39.788, -75.721), new google.maps.LatLng(39.721, -75.789), new google.maps.LatLng(38.46, -75.693), new google.maps.LatLng(38.451, -75.093), new google.maps.LatLng(38.451, -75.058), new google.maps.LatLng(38.451, -75.049)
    ];

    statDE.setPath(points);
    statDE.setVisible(false);
    statDE.setMap(mapMain);

    // Construct the polygon
    var rollDE = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollDE, 'mouseover', function () { rollDE.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollDE, 'mouseout', function () { rollDE.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollDE, 'click', function () {
        selectState('DE');
    });
    rollDE.setMap(mapMain);

    //Florida
    points = [
        new google.maps.LatLng(30.727, -81.494), new google.maps.LatLng(30.791, -82.016), new google.maps.LatLng(30.374, -82.037), new google.maps.LatLng(30.358, -82.16), new google.maps.LatLng(30.568, -82.215), new google.maps.LatLng(30.711, -84.864), new google.maps.LatLng(31, -85.002), new google.maps.LatLng(30.997, -87.598), new google.maps.LatLng(30.846, -87.625), new google.maps.LatLng(30.655, -87.397), new google.maps.LatLng(30.466, -87.426), new google.maps.LatLng(30.447194, -87.370834), new google.maps.LatLng(30.441422, -87.367229), new google.maps.LatLng(30.435354, -87.367229), new google.maps.LatLng(30.431062, -87.370491), new google.maps.LatLng(30.41774, -87.394695), new google.maps.LatLng(30.409449, -87.404652), new google.maps.LatLng(30.410042, -87.424049), new google.maps.LatLng(30.397753, -87.434006), new google.maps.LatLng(30.390498, -87.441044), new google.maps.LatLng(30.382057, -87.438641), new google.maps.LatLng(30.368284, -87.450485), new google.maps.LatLng(30.346361, -87.450829), new google.maps.LatLng(30.334065, -87.462845), new google.maps.LatLng(30.328138, -87.501469), new google.maps.LatLng(30.323545, -87.504902), new google.maps.LatLng(30.309171, -87.50473), new google.maps.LatLng(30.304873, -87.491169), new google.maps.LatLng(30.310949, -87.450314), new google.maps.LatLng(30.300427, -87.452545), new google.maps.LatLng(30.287976, -87.500095), new google.maps.LatLng(30.283974, -87.518291), new google.maps.LatLng(30.278786, -87.51812), new google.maps.LatLng(30.297611, -87.419243), new google.maps.LatLng(30.319248, -87.313843), new google.maps.LatLng(30.315543, -87.268696), new google.maps.LatLng(30.320878, -87.204494), new google.maps.LatLng(30.354065, -87.012749), new google.maps.LatLng(30.378947, -86.861), new google.maps.LatLng(30.389757, -86.765556), new google.maps.LatLng(30.395088, -86.676464), new google.maps.LatLng(30.392867, -86.594582), new google.maps.LatLng(30.380724, -86.510811), new google.maps.LatLng(30.38028, -86.504631), new google.maps.LatLng(30.382797, -86.454506), new google.maps.LatLng(30.375393, -86.377258), new google.maps.LatLng(30.36621, -86.317005), new google.maps.LatLng(30.329324, -86.174355), new google.maps.LatLng(30.29598, -86.070671), new google.maps.LatLng(30.270484, -86.00029), new google.maps.LatLng(30.235934, -85.919609), new google.maps.LatLng(30.166946, -85.792923), new google.maps.LatLng(30.136517, -85.750179), new google.maps.LatLng(30.12167, -85.733185), new google.maps.LatLng(30.117809, -85.729408), new google.maps.LatLng(30.093603, -85.690956), new google.maps.LatLng(30.052008, -85.594139), new google.maps.LatLng(30.033433, -85.578346), new google.maps.LatLng(30.008166, -85.551567), new google.maps.LatLng(29.995678, -85.539894), new google.maps.LatLng(29.978729, -85.519123), new google.maps.LatLng(29.960884, -85.489597), new google.maps.LatLng(29.957165, -85.47226), new google.maps.LatLng(29.958207, -85.461617), new google.maps.LatLng(29.949878, -85.430717), new google.maps.LatLng(29.942887, -85.412521), new google.maps.LatLng(29.893341, -85.36068), new google.maps.LatLng(29.876672, -85.390205), new google.maps.LatLng(29.866549, -85.406942), new google.maps.LatLng(29.859925, -85.411835), new google.maps.LatLng(29.83506, -85.4181), new google.maps.LatLng(29.816668, -85.416727), new google.maps.LatLng(29.785833, -85.411062), new google.maps.LatLng(29.759385, -85.403938), new google.maps.LatLng(29.731067, -85.394068), new google.maps.LatLng(29.707139, -85.384111), new google.maps.LatLng(29.682535, -85.370035), new google.maps.LatLng(29.660833, -85.353041), new google.maps.LatLng(29.656283, -85.346861), new google.maps.LatLng(29.657253, -85.345058), new google.maps.LatLng(29.66844, -85.346947), new google.maps.LatLng(29.683728, -85.302057), new google.maps.LatLng(29.682237, -85.26721), new google.maps.LatLng(29.676346, -85.242405), new google.maps.LatLng(29.675973, -85.21966), new google.maps.LatLng(29.653822, -85.168505), new google.maps.LatLng(29.637411, -85.146189), new google.maps.LatLng(29.630473, -85.132713), new google.maps.LatLng(29.628235, -85.123272), new google.maps.LatLng(29.623609, -85.098124), new google.maps.LatLng(29.585699, -85.051003), new google.maps.LatLng(29.628981, -84.91024), new google.maps.LatLng(29.897657, -84.345989), new google.maps.LatLng(29.900782, -84.341354), new google.maps.LatLng(29.923845, -84.331741), new google.maps.LatLng(29.971294, -84.330368), new google.maps.LatLng(30.070282, -84.166946), new google.maps.LatLng(30.067905, -83.997345), new google.maps.LatLng(29.970104, -83.83049), new google.maps.LatLng(29.757821, -83.586044), new google.maps.LatLng(29.673735, -83.455582), new google.maps.LatLng(29.501769, -83.404083), new google.maps.LatLng(29.428235, -83.2901), new google.maps.LatLng(29.288196, -83.169937), new google.maps.LatLng(29.090377, -83.082733), new google.maps.LatLng(28.940261, -82.779236), new google.maps.LatLng(28.7207, -82.746964), new google.maps.LatLng(28.572462, -82.665253), new google.maps.LatLng(28.401065, -82.718811), new google.maps.LatLng(28.21487, -82.86026), new google.maps.LatLng(27.84879, -82.86026), new google.maps.LatLng(27.527758, -82.757263), new google.maps.LatLng(27.046895, -82.451019), new google.maps.LatLng(26.784847, -82.279358), new google.maps.LatLng(26.667096, -82.271118), new google.maps.LatLng(26.464426, -82.184601), new google.maps.LatLng(26.431228, -82.147522), new google.maps.LatLng(26.41524, -82.081604), new google.maps.LatLng(26.436147, -81.959381), new google.maps.LatLng(26.256473, -81.839905), new google.maps.LatLng(26.093788, -81.815186), new google.maps.LatLng(25.839449, -81.698456), new google.maps.LatLng(25.688563, -81.363373), new google.maps.LatLng(25.226063, -81.186218), new google.maps.LatLng(25.147771, -81.151886), new google.maps.LatLng(25.10301, -81.090088), new google.maps.LatLng(25.010951, -80.776978), new google.maps.LatLng(25.060721, -80.419922), new google.maps.LatLng(25.438314, -80.128784), new google.maps.LatLng(25.815963, -80.106812), new google.maps.LatLng(26.832649, -80.005188), new google.maps.LatLng(27.927687, -80.399323), new google.maps.LatLng(28.455411, -80.500946), new google.maps.LatLng(28.591757, -80.550385), new google.maps.LatLng(29.602118, -81.12854), new google.maps.LatLng(30.168876, -81.318054), new google.maps.LatLng(30.704058, -81.400452)
    ];

    statFL.setPath(points);
    statFL.setVisible(false);
    statFL.setMap(mapMain);

    // Construct the polygon
    var rollFL = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollFL, 'mouseover', function () { rollFL.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollFL, 'mouseout', function () { rollFL.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollFL, 'click', function () {
        selectState('FL');
    });
    rollFL.setMap(mapMain);

    //Georgia
    points = [
          new google.maps.LatLng(32.032964, -80.837059), new google.maps.LatLng(32.099299, -81.081333), new google.maps.LatLng(32.226, -81.144), new google.maps.LatLng(32.464, -81.186), new google.maps.LatLng(32.628, -81.418), new google.maps.LatLng(33.01, -81.495), new google.maps.LatLng(33.147, -81.751), new google.maps.LatLng(33.347, -81.94), new google.maps.LatLng(33.465, -81.929), new google.maps.LatLng(33.945, -82.557), new google.maps.LatLng(34.474, -82.877), new google.maps.LatLng(34.682, -83.342), new google.maps.LatLng(35, -83.108), new google.maps.LatLng(34.988, -84.322), new google.maps.LatLng(34.984, -85.605), new google.maps.LatLng(32.864, -85.184), new google.maps.LatLng(32.426, -84.964), new google.maps.LatLng(32.326, -85.006), new google.maps.LatLng(32.261, -84.889), new google.maps.LatLng(32.133, -85.062), new google.maps.LatLng(31.84, -85.141), new google.maps.LatLng(31.538, -85.041), new google.maps.LatLng(31.188, -85.108), new google.maps.LatLng(31, -85.002), new google.maps.LatLng(31, -85.002), new google.maps.LatLng(30.711, -84.864), new google.maps.LatLng(30.568, -82.215), new google.maps.LatLng(30.358, -82.16), new google.maps.LatLng(30.374, -82.037), new google.maps.LatLng(30.791, -82.016), new google.maps.LatLng(30.727, -81.494)
    ];

    statGA.setPath(points);
    statGA.setVisible(false);
    statGA.setMap(mapMain);

    // Construct the polygon
    var rollGA = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollGA, 'mouseover', function () { rollGA.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollGA, 'mouseout', function () { rollGA.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollGA, 'click', function () {
        selectState('GA');
    });
    rollGA.setMap(mapMain);

    //Idaho
    points = [
        new google.maps.LatLng(48.9991, -117.0323), new google.maps.LatLng(48.999, -117.031), new google.maps.LatLng(46.354, -117.06), new google.maps.LatLng(46.168, -116.921), new google.maps.LatLng(46.088, -116.981), new google.maps.LatLng(45.995, -116.914), new google.maps.LatLng(45.824, -116.779), new google.maps.LatLng(45.752, -116.547), new google.maps.LatLng(45.603, -116.462), new google.maps.LatLng(45.025, -116.844), new google.maps.LatLng(44.881, -116.855), new google.maps.LatLng(44.727, -117.06), new google.maps.LatLng(44.393, -117.241), new google.maps.LatLng(44.273, -117.196), new google.maps.LatLng(44.17, -116.894), new google.maps.LatLng(43.83, -117.031), new google.maps.LatLng(42.002, -117.024), new google.maps.LatLng(41.994, -114.04), new google.maps.LatLng(42.001, -111.045), new google.maps.LatLng(44.475, -111.052), new google.maps.LatLng(44.755, -111.383), new google.maps.LatLng(44.643, -111.514), new google.maps.LatLng(44.541, -111.471), new google.maps.LatLng(44.569, -112.284), new google.maps.LatLng(44.45, -112.383), new google.maps.LatLng(44.485, -112.778), new google.maps.LatLng(44.359, -112.854), new google.maps.LatLng(44.453, -113.004), new google.maps.LatLng(44.774, -113.135), new google.maps.LatLng(44.864, -113.451), new google.maps.LatLng(45.058, -113.45), new google.maps.LatLng(45.26, -113.689), new google.maps.LatLng(45.603, -113.807), new google.maps.LatLng(45.696, -113.937), new google.maps.LatLng(45.459, -114.332), new google.maps.LatLng(45.558, -114.563), new google.maps.LatLng(45.704, -114.495), new google.maps.LatLng(45.777, -114.562), new google.maps.LatLng(45.885, -114.386), new google.maps.LatLng(46.147, -114.525), new google.maps.LatLng(46.172, -114.444), new google.maps.LatLng(46.647, -114.319), new google.maps.LatLng(46.7, -114.769), new google.maps.LatLng(47.253, -115.317), new google.maps.LatLng(47.427, -115.756), new google.maps.LatLng(47.48, -115.627), new google.maps.LatLng(47.55, -115.754), new google.maps.LatLng(47.696, -115.723), new google.maps.LatLng(47.978, -116.047), new google.maps.LatLng(49, -116.048)
    ];

    statID.setPath(points);
    statID.setVisible(false);
    statID.setMap(mapMain);

    // Construct the polygon
    var rollID = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollID, 'mouseover', function () { rollID.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollID, 'mouseout', function () { rollID.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollID, 'click', function () {
        selectState('ID');
    });
    rollID.setMap(mapMain);

    //Illinois
    points = [
         new google.maps.LatLng(42.492, -87.802), new google.maps.LatLng(42.495, -88.94), new google.maps.LatLng(42.508, -90.64), new google.maps.LatLng(42.35, -90.44), new google.maps.LatLng(42.336, -90.428), new google.maps.LatLng(42.288, -90.427), new google.maps.LatLng(42.281, -90.43), new google.maps.LatLng(42.112, -90.161), new google.maps.LatLng(41.808, -90.181), new google.maps.LatLng(41.522, -90.462), new google.maps.LatLng(41.412, -91.046), new google.maps.LatLng(41.242, -91.113), new google.maps.LatLng(41.1, -90.948), new google.maps.LatLng(40.953, -90.952), new google.maps.LatLng(40.67, -91.123), new google.maps.LatLng(40.557, -91.402), new google.maps.LatLng(40.378, -91.419), new google.maps.LatLng(40.125, -91.51), new google.maps.LatLng(39.728, -91.367), new google.maps.LatLng(39.257, -90.731), new google.maps.LatLng(38.888, -90.625), new google.maps.LatLng(38.967, -90.451), new google.maps.LatLng(38.844, -90.109), new google.maps.LatLng(38.326, -90.373), new google.maps.LatLng(38.212, -90.351), new google.maps.LatLng(37.958, -89.925), new google.maps.LatLng(37.88, -89.949), new google.maps.LatLng(37.903, -89.839), new google.maps.LatLng(37.693, -89.517), new google.maps.LatLng(37.387, -89.421), new google.maps.LatLng(37.261, -89.522), new google.maps.LatLng(37.038, -89.376), new google.maps.LatLng(36.989, -89.276), new google.maps.LatLng(37.072, -89.254), new google.maps.LatLng(36.982, -89.133), new google.maps.LatLng(37.067, -89.173), new google.maps.LatLng(37.224, -89, 17), new google.maps.LatLng(37.159, -88.761), new google.maps.LatLng(37.145, -88.735), new google.maps.LatLng(37.075, -88.459), new google.maps.LatLng(37.391, -88.474), new google.maps.LatLng(37.488, -88.065), new google.maps.LatLng(37.656, -88.16), new google.maps.LatLng(37.799, -88.027), new google.maps.LatLng(37.901, -88.097), new google.maps.LatLng(37.891, -88.014), new google.maps.LatLng(38.046, -88.042), new google.maps.LatLng(38.162, -87.911), new google.maps.LatLng(38.256, -87.988), new google.maps.LatLng(38.28, -87.841), new google.maps.LatLng(38.739, -87.496), new google.maps.LatLng(38.952, -87.512), new google.maps.LatLng(39.136, -87.658), new google.maps.LatLng(39.348, -87.531), new google.maps.LatLng(41.712, -87.524)
    ];

    statIL.setPath(points);
    statIL.setVisible(false);
    statIL.setMap(mapMain);

    // Construct the polygon
    var rollIL = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollIL, 'mouseover', function () { rollIL.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollIL, 'mouseout', function () { rollIL.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollIL, 'click', function () {
        selectState('IL');
    });
    rollIL.setMap(mapMain);

    //Indiana
    points = [
        new google.maps.LatLng(41.696, -84.806), new google.maps.LatLng(39.105, -84.819), new google.maps.LatLng(39.055, -84.897), new google.maps.LatLng(38.785, -84.813), new google.maps.LatLng(38.688, -85.171), new google.maps.LatLng(38.728, -85.435), new google.maps.LatLng(38.715, -85.447), new google.maps.LatLng(38.534, -85.421), new google.maps.LatLng(38.299, -85.677), new google.maps.LatLng(38.278, -85.826), new google.maps.LatLng(38.025, -85.923), new google.maps.LatLng(37.958, -86.039), new google.maps.LatLng(38.056, -86.266), new google.maps.LatLng(38.198, -86.362), new google.maps.LatLng(38.138, -86.324), new google.maps.LatLng(38.121, -86.46), new google.maps.LatLng(37.927, -86.509), new google.maps.LatLng(37.843, -86.637), new google.maps.LatLng(37.999, -86.816), new google.maps.LatLng(37.782, -87.111), new google.maps.LatLng(37.976, -87.589), new google.maps.LatLng(37.833, -87.613), new google.maps.LatLng(37.928, -87.893), new google.maps.LatLng(37.807, -87.907), new google.maps.LatLng(37.799, -88.027), new google.maps.LatLng(37.901, -88.097), new google.maps.LatLng(37.891, -88.014), new google.maps.LatLng(38.046, -88.042), new google.maps.LatLng(38.162, -87.911), new google.maps.LatLng(38.256, -87.988), new google.maps.LatLng(38.28, -87.841), new google.maps.LatLng(38.739, -87.496), new google.maps.LatLng(38.952, -87.512), new google.maps.LatLng(39.136, -87.658), new google.maps.LatLng(39.348, -87.531), new google.maps.LatLng(41.712, -87.524), new google.maps.LatLng(41.76, -86.825), new google.maps.LatLng(41.76, -84.806)
    ];

    statIN.setPath(points);
    statIN.setVisible(false);
    statIN.setMap(mapMain);

    // Construct the polygon
    var rollIN = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollIN, 'mouseover', function () { rollIN.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollIN, 'mouseout', function () { rollIN.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollIN, 'click', function () {
        selectState('IN');
    });
    rollIN.setMap(mapMain);

    //Iowa
    points = [
        new google.maps.LatLng(43.5, -96.453), new google.maps.LatLng(43.5, -96.598), new google.maps.LatLng(43.385, -96.52), new google.maps.LatLng(43.269, -96.585), new google.maps.LatLng(43.12, -96.436), new google.maps.LatLng(42.737, -96.637), new google.maps.LatLng(42.489, -96.443), new google.maps.LatLng(42.167, -96.347), new google.maps.LatLng(41.798, -96.066), new google.maps.LatLng(41.608, -96.116), new google.maps.LatLng(41.601, -96.113), new google.maps.LatLng(41.452, -95.919), new google.maps.LatLng(41.346, -95.957), new google.maps.LatLng(41.302, -95.872), new google.maps.LatLng(41.201, -95.927), new google.maps.LatLng(41.177, -95.841), new google.maps.LatLng(40.895, -95.809), new google.maps.LatLng(40.734, -95.888), new google.maps.LatLng(40.585, -95.765), new google.maps.LatLng(40.614, -91.728), new google.maps.LatLng(40.403, -91.505), new google.maps.LatLng(40.4, -91.5), new google.maps.LatLng(40.378, -91.419), new google.maps.LatLng(40.557, -91.402), new google.maps.LatLng(40.67, -91.123), new google.maps.LatLng(40.953, -90.952), new google.maps.LatLng(41.1, -90.948), new google.maps.LatLng(41.242, -91.113), new google.maps.LatLng(41.412, -91.046), new google.maps.LatLng(41.522, -90.462), new google.maps.LatLng(41.808, -90.181), new google.maps.LatLng(42.112, -90.161), new google.maps.LatLng(42.281, -90.43), new google.maps.LatLng(42.288, -90.427), new google.maps.LatLng(42.336, -90.428), new google.maps.LatLng(42.35, -90.44), new google.maps.LatLng(42.508, -90.64), new google.maps.LatLng(42.634, -90.707), new google.maps.LatLng(42.751, -91.065), new google.maps.LatLng(43.125, -91.178), new google.maps.LatLng(43.252, -91.059), new google.maps.LatLng(43.258, -91.062), new google.maps.LatLng(43.353, -91.206), new google.maps.LatLng(43.501, -91.217)
    ];

    statIA.setPath(points);
    statIA.setVisible(false);
    statIA.setMap(mapMain);

    // Construct the polygon
    var rollIA = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollIA, 'mouseover', function () { rollIA.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollIA, 'mouseout', function () { rollIA.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollIA, 'click', function () {
        selectState('IA');
    });
    rollIA.setMap(mapMain);

    //Kansas
    points = [
        new google.maps.LatLng(40.003, -102.051), new google.maps.LatLng(40, -95.307), new google.maps.LatLng(39.874, -95.13), new google.maps.LatLng(39.887, -94.928), new google.maps.LatLng(39.744, -94.861), new google.maps.LatLng(39.741, -94.962), new google.maps.LatLng(39.542, -95.109), new google.maps.LatLng(39.386, -94.882), new google.maps.LatLng(39.213, -94.827), new google.maps.LatLng(39.148, -94.588), new google.maps.LatLng(36.998, -94.618), new google.maps.LatLng(36.993, -102.041)
    ];

    statKS.setPath(points);
    statKS.setVisible(false);
    statKS.setMap(mapMain);

    // Construct the polygon
    var rollKS = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollKS, 'mouseover', function () { rollKS.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollKS, 'mouseout', function () { rollKS.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollKS, 'click', function () {
        selectState('KS');
    });
    rollKS.setMap(mapMain);

    //Kentucky (TODO: Make south border better. )
    points = [
        new google.maps.LatLng(39.105, -84.819), new google.maps.LatLng(39.055, -84.897), new google.maps.LatLng(38.785, -84.813), new google.maps.LatLng(38.688, -85.171), new google.maps.LatLng(38.728, -85.435), new google.maps.LatLng(38.715, -85.447), new google.maps.LatLng(38.534, -85.421), new google.maps.LatLng(38.299, -85.677), new google.maps.LatLng(38.278, -85.826), new google.maps.LatLng(38.025, -85.923), new google.maps.LatLng(37.958, -86.039), new google.maps.LatLng(38.056, -86.266), new google.maps.LatLng(38.198, -86.362), new google.maps.LatLng(38.138, -86.324), new google.maps.LatLng(38.121, -86.46), new google.maps.LatLng(37.927, -86.509), new google.maps.LatLng(37.843, -86.637), new google.maps.LatLng(37.999, -86.816), new google.maps.LatLng(37.782, -87.111), new google.maps.LatLng(37.976, -87.589), new google.maps.LatLng(37.833, -87.613), new google.maps.LatLng(37.928, -87.893), new google.maps.LatLng(37.807, -87.907), new google.maps.LatLng(37.799, -88.027), new google.maps.LatLng(37.656, -88.16), new google.maps.LatLng(37.488, -88.065), new google.maps.LatLng(37.391, -88.474), new google.maps.LatLng(37.075, -88.459), new google.maps.LatLng(37.145, -88.735), new google.maps.LatLng(37.159, -88.761), new google.maps.LatLng(37.224, -89, 17), new google.maps.LatLng(37.067, -89.173), new google.maps.LatLng(36.982, -89.133), new google.maps.LatLng(36.666, -89.159), new google.maps.LatLng(36.567, -89.236), new google.maps.LatLng(36.625, -89.366), new google.maps.LatLng(36.499, -89.417), new google.maps.LatLng(36.497, -89.485), new google.maps.LatLng(36.497218, -89.484673), new google.maps.LatLng(36.582, -89.53), new google.maps.LatLng(36.498, -89.539), new google.maps.LatLng(36.497, -89.485), new google.maps.LatLng(36.499, -89.417), new google.maps.LatLng(36.497, -88.053), new google.maps.LatLng(36.678, -88.07), new google.maps.LatLng(36.601, -83.675), new google.maps.LatLng(36.745, -83.133), new google.maps.LatLng(36.852, -83.074), new google.maps.LatLng(36.897, -82.873), new google.maps.LatLng(37.121, -82.721), new google.maps.LatLng(37.538, -81.968), new google.maps.LatLng(37.678, -82.304), new google.maps.LatLng(37.93, -82.5), new google.maps.LatLng(37.98, -82.464), new google.maps.LatLng(38.162, -82.643), new google.maps.LatLng(38.421, -82.594), new google.maps.LatLng(38.59, -82.843), new google.maps.LatLng(38.755, -82.889), new google.maps.LatLng(38.596, -83.293), new google.maps.LatLng(38.703, -83.526), new google.maps.LatLng(38.626, -83.668), new google.maps.LatLng(38.761, -83.869), new google.maps.LatLng(38.808, -84.215), new google.maps.LatLng(39.119, -84.451), new google.maps.LatLng(39.105, -84.819)
    ];

    statKY.setPath(points);
    statKY.setVisible(false);
    statKY.setMap(mapMain);

    // Construct the polygon
    var rollKY = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollKY, 'mouseover', function () { rollKY.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollKY, 'mouseout', function () { rollKY.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollKY, 'click', function () {
        selectState('KY');
    });
    rollKY.setMap(mapMain);

    //Louisiana
    points = [
        new google.maps.LatLng(33.019, -94.042), new google.maps.LatLng(31.992, -94.041), new google.maps.LatLng(31.777, -93.825), new google.maps.LatLng(31.585, -93.834), new google.maps.LatLng(31.509, -93.712), new google.maps.LatLng(31.031, -93.508), new google.maps.LatLng(30.538, -93.739), new google.maps.LatLng(30.137, -93.691), new google.maps.LatLng(29.999, -93.769), new google.maps.LatLng(29.795368, -93.927612), new google.maps.LatLng(29.764377, -93.891907), new google.maps.LatLng(29.683281, -93.834229), new google.maps.LatLng(29.59376, -93.810883), new google.maps.LatLng(29.616446, -92.774048), new google.maps.LatLng(29.51611, -92.298889), new google.maps.LatLng(29.458731, -91.819611), new google.maps.LatLng(29.227692, -91.271667), new google.maps.LatLng(29.018949, -90.920105), new google.maps.LatLng(29.053769, -90.22522), new google.maps.LatLng(28.906004, -89.420471), new google.maps.LatLng(28.960089, -89.110107), new google.maps.LatLng(29.186936, -88.981018), new google.maps.LatLng(30.147502, -89.077148), new google.maps.LatLng(30.212202, -89.183578), new google.maps.LatLng(30.180154, -89.265289), new google.maps.LatLng(30.176593, -89.421844), new google.maps.LatLng(30.157002, -89.508362), new google.maps.LatLng(30.193805, -89.531021), new google.maps.LatLng(30.192618, -89.547501), new google.maps.LatLng(30.182528, -89.559174), new google.maps.LatLng(30.181341, -89.57222), new google.maps.LatLng(30.202114, -89.589386), new google.maps.LatLng(30.221695, -89.614105), new google.maps.LatLng(30.216, -89.604), new google.maps.LatLng(30.664, -89.848), new google.maps.LatLng(31.004, -89.733), new google.maps.LatLng(30.999, -91.637), new google.maps.LatLng(31.054, -91.559), new google.maps.LatLng(31.257, -91.653), new google.maps.LatLng(31.278, -91.513), new google.maps.LatLng(31.407, -91.577), new google.maps.LatLng(31.373, -91.472), new google.maps.LatLng(31.524, -91.521), new google.maps.LatLng(31.573, -91.406), new google.maps.LatLng(31.63, -91.515), new google.maps.LatLng(31.619, -91.403), new google.maps.LatLng(31.746, -91.369), new google.maps.LatLng(31.754, -91.262), new google.maps.LatLng(31.76, -91.363), new google.maps.LatLng(31.847, -91.341), new google.maps.LatLng(31.813, -91.254), new google.maps.LatLng(32.011, -91.08), new google.maps.LatLng(32.074, -91.156), new google.maps.LatLng(32.145, -91.004), new google.maps.LatLng(32.134, -91.167), new google.maps.LatLng(32.197, -91.163), new google.maps.LatLng(32.193, -90.994), new google.maps.LatLng(32.367, -90.877), new google.maps.LatLng(32.354, -90.994), new google.maps.LatLng(32.436, -90.967), new google.maps.LatLng(32.481, -91.115), new google.maps.LatLng(32.547, -91.095), new google.maps.LatLng(32.494, -90.987), new google.maps.LatLng(32.543, -91.072), new google.maps.LatLng(32.64, -91.013), new google.maps.LatLng(32.618, -91.152), new google.maps.LatLng(32.719, -91.053), new google.maps.LatLng(32.778, -91.163), new google.maps.LatLng(32.905, -91.063), new google.maps.LatLng(32.989, -91.105), new google.maps.LatLng(32.916, -91.209), new google.maps.LatLng(33.004, -91.166)
    ];

    statLA.setPath(points);
    statLA.setVisible(false);
    statLA.setMap(mapMain);

    // Construct the polygon
    var rollLA = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollLA, 'mouseover', function () { rollLA.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollLA, 'mouseout', function () { rollLA.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollLA, 'click', function () {
        selectState('LA');
    });
    rollLA.setMap(mapMain);

    //Maine
    points = [
        new google.maps.LatLng(45.306286, -71.08429), new google.maps.LatLng(45.314495, -71.059227), new google.maps.LatLng(45.311115, -71.033821), new google.maps.LatLng(45.328979, -71.004982), new google.maps.LatLng(45.346596, -71.011162), new google.maps.LatLng(45.332116, -70.984039), new google.maps.LatLng(45.339357, -70.951424), new google.maps.LatLng(45.312563, -70.918808), new google.maps.LatLng(45.296626, -70.911598), new google.maps.LatLng(45.279235, -70.921555), new google.maps.LatLng(45.252172, -70.895119), new google.maps.LatLng(45.24347, -70.897179), new google.maps.LatLng(45.230173, -70.85804), new google.maps.LatLng(45.236459, -70.838127), new google.maps.LatLng(45.243953, -70.848427), new google.maps.LatLng(45.263772, -70.84877), new google.maps.LatLng(45.293728, -70.835037), new google.maps.LatLng(45.297834, -70.816498), new google.maps.LatLng(45.337909, -70.819588), new google.maps.LatLng(45.398932, -70.825768), new google.maps.LatLng(45.429299, -70.795212), new google.maps.LatLng(45.428335, -70.756073), new google.maps.LatLng(45.391217, -70.712128), new google.maps.LatLng(45.395316, -70.682945), new google.maps.LatLng(45.386877, -70.661316), new google.maps.LatLng(45.377714, -70.659599), new google.maps.LatLng(45.383019, -70.63488), new google.maps.LatLng(45.415081, -70.63488), new google.maps.LatLng(45.489742, -70.717964), new google.maps.LatLng(45.514046, -70.722771), new google.maps.LatLng(45.569111, -70.687065), new google.maps.LatLng(45.666846, -70.559349), new google.maps.LatLng(45.706419, -70.466652), new google.maps.LatLng(45.728712, -70.396614), new google.maps.LatLng(45.794818, -70.4179), new google.maps.LatLng(45.836454, -70.369148), new google.maps.LatLng(45.893115, -70.266151), new google.maps.LatLng(45.92417, -70.262718), new google.maps.LatLng(45.963084, -70.31559), new google.maps.LatLng(46.064417, -70.309753), new google.maps.LatLng(46.099424, -70.284691), new google.maps.LatLng(46.100376, -70.254822), new google.maps.LatLng(46.150346, -70.240059), new google.maps.LatLng(46.191002, -70.292931), new google.maps.LatLng(46.291443, -70.231133), new google.maps.LatLng(46.329624, -70.208817), new google.maps.LatLng(46.359487, -70.174141), new google.maps.LatLng(46.381044, -70.126762), new google.maps.LatLng(46.409694, -70.096207), new google.maps.LatLng(46.415612, -70.057411), new google.maps.LatLng(46.696316, -69.9963), new google.maps.LatLng(47.459898, -69.225197), new google.maps.LatLng(47.457112, -69.178505), new google.maps.LatLng(47.433661, -69.062462), new google.maps.LatLng(47.42739, -69.043236), new google.maps.LatLng(47.408109, -69.029846), new google.maps.LatLng(47.383474, -69.040146), new google.maps.LatLng(47.377895, -69.054222), new google.maps.LatLng(47.306939, -69.048386), new google.maps.LatLng(47.253602, -69.045982), new google.maps.LatLng(47.206508, -68.943329), new google.maps.LatLng(47.178746, -68.900414), new google.maps.LatLng(47.215604, -68.813553), new google.maps.LatLng(47.241949, -68.715019), new google.maps.LatLng(47.258495, -68.59314), new google.maps.LatLng(47.287846, -68.57769), new google.maps.LatLng(47.296229, -68.513489), new google.maps.LatLng(47.297161, -68.47229), new google.maps.LatLng(47.288079, -68.414955), new google.maps.LatLng(47.288079, -68.37719), new google.maps.LatLng(47.304145, -68.385086), new google.maps.LatLng(47.349291, -68.3741), new google.maps.LatLng(47.35999, -68.327408), new google.maps.LatLng(47.35999, -68.285866), new google.maps.LatLng(47.353711, -68.230591), new google.maps.LatLng(47.325792, -68.15712), new google.maps.LatLng(47.306939, -68.14991), new google.maps.LatLng(47.27457, -68.086395), new google.maps.LatLng(47.237753, -68.018417), new google.maps.LatLng(47.206975, -67.970352), new google.maps.LatLng(47.196945, -67.951813), new google.maps.LatLng(47.147933, -67.909584), new google.maps.LatLng(47.100278, -67.867012), new google.maps.LatLng(47.06755, -67.790108), new google.maps.LatLng(45.941601, -67.780151), new google.maps.LatLng(45.918199, -67.750626), new google.maps.LatLng(45.897655, -67.767792), new google.maps.LatLng(45.882839, -67.802811), new google.maps.LatLng(45.823536, -67.755432), new google.maps.LatLng(45.730629, -67.782211), new google.maps.LatLng(45.676921, -67.769852), new google.maps.LatLng(45.688914, -67.732773), new google.maps.LatLng(45.681239, -67.7108), new google.maps.LatLng(45.623643, -67.641449), new google.maps.LatLng(45.605391, -67.452621), new google.maps.LatLng(45.573678, -67.422409), new google.maps.LatLng(45.502978, -67.416916), new google.maps.LatLng(45.488539, -67.501373), new google.maps.LatLng(45.377232, -67.418289), new google.maps.LatLng(45.27392, -67.477341), new google.maps.LatLng(45.125382, -67.340012), new google.maps.LatLng(45.190748, -67.285767), new google.maps.LatLng(45.163642, -67.164917), new google.maps.LatLng(45.110362, -67.109985), new google.maps.LatLng(44.953623, -67.020721), new google.maps.LatLng(44.910359, -66.968536), new google.maps.LatLng(44.82763, -66.96373), new google.maps.LatLng(44.825195, -66.932831), new google.maps.LatLng(44.794018, -66.885452), new google.maps.LatLng(44.775499, -66.902618), new google.maps.LatLng(44.698433, -67.031708), new google.maps.LatLng(44.134913, -68.230591), new google.maps.LatLng(43.992815, -68.626099), new google.maps.LatLng(43.940428, -69.185028), new google.maps.LatLng(43.693694, -69.833221), new google.maps.LatLng(43.560491, -70.197144), new google.maps.LatLng(43.358137, -70.426483), new google.maps.LatLng(43.219188, -70.573425), new google.maps.LatLng(43.016697, -70.675049), new google.maps.LatLng(43.055844, -70.698395), new google.maps.LatLng(43.129052, -70.827484), new google.maps.LatLng(43.228194, -70.811005), new google.maps.LatLng(43.335167, -70.9552), new google.maps.LatLng(43.478833, -70.97168), new google.maps.LatLng(43.574422, -70.973053), new google.maps.LatLng(44.76258, -71.038113)
    ];

    statME.setPath(points);
    statME.setVisible(false);
    statME.setMap(mapMain);

    // Construct the polygon
    var rollME = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollME, 'mouseover', function () { rollME.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollME, 'mouseout', function () { rollME.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollME, 'click', function () {
        selectState('ME');
    });
    rollME.setMap(mapMain);

    //Maryland  ( TODO: better borders all around )
    points = [
        new google.maps.LatLng(38.015, -75.387), new google.maps.LatLng(37.979, -75.632), new google.maps.LatLng(37.883, -76.234), new google.maps.LatLng(37.993, -76.576), new google.maps.LatLng(38.042, -76.512), new google.maps.LatLng(38.144, -76.616), new google.maps.LatLng(38.155, -76.705), new google.maps.LatLng(38.065, -76.691), new google.maps.LatLng(38.164, -76.774), new google.maps.LatLng(38.195, -76.989), new google.maps.LatLng(38.4, -77.05), new google.maps.LatLng(38.351, -77.363), new google.maps.LatLng(38.357, -77.29), new google.maps.LatLng(38.438, -77.37), new google.maps.LatLng(38.394, -77.312), new google.maps.LatLng(38.659, -77.243), new google.maps.LatLng(38.72, -77.045), new google.maps.LatLng(38.911, -77.101), new google.maps.LatLng(38.934, -77.12), new google.maps.LatLng(39.077, -77.463), new google.maps.LatLng(39.14, -77.526), new google.maps.LatLng(39.225, -77.458), new google.maps.LatLng(39.307, -77.636), new google.maps.LatLng(39.31, -77.648), new google.maps.LatLng(39.321, -77.719), new google.maps.LatLng(39.496, -77.766), new google.maps.LatLng(39.552, -77.887), new google.maps.LatLng(39.603, -77.834), new google.maps.LatLng(39.696, -78.174), new google.maps.LatLng(39.624, -78.428), new google.maps.LatLng(39.516, -78.468), new google.maps.LatLng(39.544, -78.687), new google.maps.LatLng(39.645, -78.776), new google.maps.LatLng(39.441, -78.958), new google.maps.LatLng(39.474, -79.105), new google.maps.LatLng(39.202, -79.473), new google.maps.LatLng(39.721, -79.477), new google.maps.LatLng(39.721, -75.789), new google.maps.LatLng(38.46, -75.693), new google.maps.LatLng(38.451, -75.093), new google.maps.LatLng(38.451, -75.058), new google.maps.LatLng(38.451, -75.049)
    ];

    statMD.setPath(points);
    statMD.setVisible(false);
    statMD.setMap(mapMain);

    // Construct the polygon
    var rollMD = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollMD, 'mouseover', function () { rollMD.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollMD, 'mouseout', function () { rollMD.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollMD, 'click', function () {
        selectState('MD');
    });
    rollMD.setMap(mapMain);

    //Massachusetts ( TODO: better CT border and Coastal border )
    points = [
        new google.maps.LatLng(42.74645993282847, -73.26442956542974), new google.maps.LatLng(42.08696416793009, -73.50887536621099), new google.maps.LatLng(42.04975398763291, -73.49582910156255), new google.maps.LatLng(42.05026386347248, -73.42304467773442), new google.maps.LatLng(42.0375157397026, -72.81399011230474), new google.maps.LatLng(41.99568394067193, -72.81467675781255), new google.maps.LatLng(42.004358647700485, -72.76317834472661), new google.maps.LatLng(42.0375157397026, -72.75425195312505), new google.maps.LatLng(42.031395731755815, -72.60524987792974), new google.maps.LatLng(42.02068429984487, -72.60524987792974), new google.maps.LatLng(42.02425497767112, -72.57984399414067), new google.maps.LatLng(42.03394580668447, -72.52285241699224), new google.maps.LatLng(42.02425497767112, -71.8011879882813), new google.maps.LatLng(42.00742002665977, -71.79912805175786), new google.maps.LatLng(42.01864382248644, -71.38164758300786), new google.maps.LatLng(41.8925175129639, -71.38027429199224), new google.maps.LatLng(41.89813978417177, -71.33701562500005), new google.maps.LatLng(41.87922654088745, -71.34044885253911), new google.maps.LatLng(41.86081909198767, -71.33358239746099), new google.maps.LatLng(41.829104949899076, -71.34731530761724), new google.maps.LatLng(41.78048020479593, -71.32740258789067), new google.maps.LatLng(41.75282442750657, -71.25873803710942), new google.maps.LatLng(41.67491453758083, -71.19419335937505), new google.maps.LatLng(41.6718372098626, -71.17290734863286), new google.maps.LatLng(41.66157838826429, -71.13376855468755), new google.maps.LatLng(41.618473488294605, -71.14132165527349), new google.maps.LatLng(41.59382917265444, -71.13170861816411), new google.maps.LatLng(41.49978637641672, -71.11934899902349), new google.maps.LatLng(41.518811525761684, -70.95730065917974), new google.maps.LatLng(41.603071894131794, -70.89687585449224), new google.maps.LatLng(41.59485620707497, -70.80898522949224), new google.maps.LatLng(41.69952786271318, -70.72109460449224), new google.maps.LatLng(41.734380619917935, -70.63869714355474), new google.maps.LatLng(41.6297656536008, -70.63045739746099), new google.maps.LatLng(41.570202870833064, -70.64968347167974), new google.maps.LatLng(41.41590632116532, -70.95730065917974), new google.maps.LatLng(41.42620419097218, -70.85018395996099), new google.maps.LatLng(41.360269609236255, -70.82546472167974), new google.maps.LatLng(41.298395208854494, -70.78975915527349), new google.maps.LatLng(41.349961290027245, -70.44094323730474), new google.maps.LatLng(41.24265801314488, -70.08388757324224), new google.maps.LatLng(41.250918377998076, -69.95205163574224), new google.maps.LatLng(41.67286300211568, -69.93557214355474), new google.maps.LatLng(41.94922863779407, -69.97402429199224), new google.maps.LatLng(42.07982965937312, -70.11409997558599), new google.maps.LatLng(42.067597206833064, -70.24318933105474), new google.maps.LatLng(41.99415298726319, -70.08938073730474), new google.maps.LatLng(41.90631674968025, -70.07290124511724), new google.maps.LatLng(41.789696147940745, -70.02620935058599), new google.maps.LatLng(41.74052914443668, -70.22670983886724), new google.maps.LatLng(41.80607677591397, -70.53158044433599), new google.maps.LatLng(41.971694773091464, -70.57827233886724), new google.maps.LatLng(42.27319590488262, -70.79799890136724), new google.maps.LatLng(42.317891129257255, -70.89962243652349), new google.maps.LatLng(42.423408273840664, -70.98751306152349), new google.maps.LatLng(42.60561510641824, -70.61123132324224), new google.maps.LatLng(42.704593216841424, -70.61397790527349), new google.maps.LatLng(42.71872008639088, -70.79525231933599), new google.maps.LatLng(42.87591620799063, -70.80898522949224), new google.maps.LatLng(42.85779857527848, -70.85567712402349), new google.maps.LatLng(42.89000402368805, -70.92434167480474), new google.maps.LatLng(42.859811908173825, -71.03969812011724), new google.maps.LatLng(42.7993833661301, -71.06441735839849), new google.maps.LatLng(42.82557632114953, -71.13308190917974), new google.maps.LatLng(42.80542887879761, -71.18801354980474), new google.maps.LatLng(42.74494717022215, -71.19076013183599), new google.maps.LatLng(42.700556377812184, -71.29238366699224)
    ];

    statMA.setPath(points);
    statMA.setVisible(false);
    statMA.setMap(mapMain);

    // Construct the polygon
    var rollMA = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollMA, 'mouseover', function () { rollMA.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollMA, 'mouseout', function () { rollMA.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollMA, 'click', function () {
        selectState('MA');
    });
    rollMA.setMap(mapMain);

    //Michigan (TODO: west coastal border could be better)
    points = [
            new google.maps.LatLng(41.764093035101105, -86.82361840820317), new google.maps.LatLng(41.759995588548826, -84.80762719726567), new google.maps.LatLng(41.69440086317732, -84.80213403320317), new google.maps.LatLng(41.73130613691891, -83.45356225585942), new google.maps.LatLng(42.005379123721596, -83.20362329101567), new google.maps.LatLng(42.23558673377376, -83.11023950195317), new google.maps.LatLng(42.35951039989774, -82.94269799804692), new google.maps.LatLng(42.44469310867216, -82.86304711914067), new google.maps.LatLng(42.57831794946476, -82.78614282226567), new google.maps.LatLng(42.67935866670713, -82.75867700195317), new google.maps.LatLng(42.661183442274435, -82.62134790039067), new google.maps.LatLng(42.56011320315003, -82.61310815429692), new google.maps.LatLng(42.64098251532788, -82.49775170898442), new google.maps.LatLng(42.88497303023008, -82.46479272460942), new google.maps.LatLng(43.00962055958116, -82.40986108398442), new google.maps.LatLng(43.12599777441477, -82.49225854492192), new google.maps.LatLng(43.433926863760256, -82.53071069335942), new google.maps.LatLng(43.79583316138705, -82.61860131835942), new google.maps.LatLng(44.01351150447177, -82.75043725585942), new google.maps.LatLng(44.06089917477906, -82.96192407226567), new google.maps.LatLng(43.97794588214331, -83.20911645507817), new google.maps.LatLng(43.91070821623509, -83.34369897460942), new google.maps.LatLng(43.71648006811056, -83.48926782226567), new google.maps.LatLng(43.58929625783042, -83.67328881835942), new google.maps.LatLng(43.69463951976205, -83.89301538085942), new google.maps.LatLng(43.79583316138705, -83.93146752929692), new google.maps.LatLng(43.98585119590865, -83.83808374023442), new google.maps.LatLng(44.0036343031461, -83.67328881835942), new google.maps.LatLng(44.110221031311504, -83.57166528320317), new google.maps.LatLng(44.27957414354735, -83.50849389648442), new google.maps.LatLng(44.35424954358071, -83.34644555664067), new google.maps.LatLng(44.747662161950515, -83.26954125976567), new google.maps.LatLng(44.90350441010748, -83.37116479492192), new google.maps.LatLng(45.049223876448664, -83.44532250976567), new google.maps.LatLng(45.041461519617265, -83.25031518554692), new google.maps.LatLng(45.30672249272112, -83.44806909179692), new google.maps.LatLng(45.42636150937635, -83.77765893554692), new google.maps.LatLng(45.503413689890735, -84.05506372070317), new google.maps.LatLng(45.64952269781991, -84.26380395507817), new google.maps.LatLng(45.672557790114915, -84.45881127929692), new google.maps.LatLng(45.774182753761764, -84.69501733398442), new google.maps.LatLng(45.889006796956096, -84.71698999023442), new google.maps.LatLng(46.05126870917953, -84.64283227539067), new google.maps.LatLng(45.95014942784447, -84.28577661132817), new google.maps.LatLng(45.96924268280412, -83.94520043945317), new google.maps.LatLng(45.91767579435881, -83.51673364257817), new google.maps.LatLng(45.9997782057252, -83.49201440429692), new google.maps.LatLng(46.10271125392794, -83.62110375976567), new google.maps.LatLng(46.04936250874624, -83.89576196289067), new google.maps.LatLng(46.081758969191355, -84.04682397460942), new google.maps.LatLng(46.29851465148739, -84.14020776367192), new google.maps.LatLng(46.506854662854344, -84.14570092773442), new google.maps.LatLng(46.527644908997495, -84.20063256835942), new google.maps.LatLng(46.48227411645287, -84.37366723632817), new google.maps.LatLng(46.42361412956206, -84.61811303710942), new google.maps.LatLng(46.50496424604066, -85.02735375976567), new google.maps.LatLng(46.765220425520475, -84.96967553710942), new google.maps.LatLng(46.676722998193235, -85.68653344726567), new google.maps.LatLng(46.595630102081685, -86.32923364257817), new google.maps.LatLng(46.44443619578878, -86.64783715820317), new google.maps.LatLng(46.54276009192516, -86.99665307617192), new google.maps.LatLng(46.90426264415287, -88.26008081054692), new google.maps.LatLng(47.54590052245297, -87.77668237304692), new google.maps.LatLng(46.979270829058414, -89.16095971679692), new google.maps.LatLng(46.633362844719635, -90.39142846679692), new google.maps.LatLng(46.5352030263558, -90.32551049804692), new google.maps.LatLng(46.30800191290909, -90.07282495117192), new google.maps.LatLng(46.15220319503646, -89.06757592773442), new google.maps.LatLng(46.018854354651985, -88.82038354492192), new google.maps.LatLng(45.95396860519259, -88.30402612304692), new google.maps.LatLng(45.81248375641819, -88.08429956054692), new google.maps.LatLng(45.6898278899818, -87.79865502929692), new google.maps.LatLng(45.366573630393916, -87.89753198242192), new google.maps.LatLng(45.35499447622603, -87.74372338867192), new google.maps.LatLng(45.3511342315606, -87.63935327148442), new google.maps.LatLng(45.204249821356, -87.76020288085942), new google.maps.LatLng(45.11128481237362, -87.63386010742192), new google.maps.LatLng(45.670638561065225, -87.13398217773442), new google.maps.LatLng(45.670638561065225, -86.91425561523442), new google.maps.LatLng(45.83927879666828, -86.72199487304692), new google.maps.LatLng(45.6629609867327, -86.71650170898442), new google.maps.LatLng(45.624557319656525, -86.62861108398442), new google.maps.LatLng(45.92722883692609, -86.21662377929692), new google.maps.LatLng(45.957787519361446, -85.62336206054692), new google.maps.LatLng(46.08747401806829, -85.38166284179692), new google.maps.LatLng(45.87753505264507, -84.87629174804692), new google.maps.LatLng(45.743522999188976, -84.90925073242192), new google.maps.LatLng(45.45526841883573, -85.11249780273442), new google.maps.LatLng(45.39358244117791, -84.91474389648442), new google.maps.LatLng(45.24680809480489, -85.37616967773442), new google.maps.LatLng(44.73790803265215, -85.52997827148442), new google.maps.LatLng(45.02593364605436, -85.60138940429692), new google.maps.LatLng(45.20812007189337, -85.62336206054692), new google.maps.LatLng(44.85484896580995, -86.10126733398442), new google.maps.LatLng(44.64809282692283, -86.22761010742192), new google.maps.LatLng(44.051029868703324, -86.51325463867192), new google.maps.LatLng(43.65093455138168, -86.53522729492192), new google.maps.LatLng(43.28015712396119, -86.37043237304692), new google.maps.LatLng(42.68137780801634, -86.18915795898442), new google.maps.LatLng(42.113456747041994, -86.46930932617192)
    ];

    statMI.setPath(points);
    statMI.setVisible(false);
    statMI.setMap(mapMain);

    // Construct the polygon
    var rollMI = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollMI, 'mouseover', function () { rollMI.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollMI, 'mouseout', function () { rollMI.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollMI, 'click', function () {
        selectState('MI');
    });
    rollMI.setMap(mapMain);

    //Minnesota
    points = [
        new google.maps.LatLng(43.5, -96.453), new google.maps.LatLng(45.301, -96.453), new google.maps.LatLng(45.606, -96.857), new google.maps.LatLng(45.817, -96.585), new google.maps.LatLng(45.935, -96.562), new google.maps.LatLng(46.316, -96.596), new google.maps.LatLng(46.709, -96.788), new google.maps.LatLng(46.72, -96.785), new google.maps.LatLng(47.598, -96.851), new google.maps.LatLng(48.143, -97.146), new google.maps.LatLng(48.563, -97.174), new google.maps.LatLng(48.686, -97.094), new google.maps.LatLng(49, -97.229), new google.maps.LatLng(49.000042, -95.155334), new google.maps.LatLng(49.377008, -95.152588), new google.maps.LatLng(49.321542, -94.817505), new google.maps.LatLng(48.871941, -94.680176), new google.maps.LatLng(48.830374, -94.699402), new google.maps.LatLng(48.776103, -94.691162), new google.maps.LatLng(48.694586, -94.441223), new google.maps.LatLng(48.631093, -93.856201), new google.maps.LatLng(48.523881, -93.815002), new google.maps.LatLng(48.589326, -93.46344), new google.maps.LatLng(48.640169, -93.210754), new google.maps.LatLng(48.631093, -92.949829), new google.maps.LatLng(48.545705, -92.636719), new google.maps.LatLng(48.412796, -92.455444), new google.maps.LatLng(48.222843, -92.367554), new google.maps.LatLng(48.246626, -92.271423), new google.maps.LatLng(48.352599, -92.25769), new google.maps.LatLng(48.359899, -92.054443), new google.maps.LatLng(48.199049, -91.71936), new google.maps.LatLng(48.067068, -91.450195), new google.maps.LatLng(48.244797, -90.884399), new google.maps.LatLng(48.092757, -90.75531), new google.maps.LatLng(48.085419, -90.027466), new google.maps.LatLng(47.986245, -89.87915), new google.maps.LatLng(48.011975, -89.489136), new google.maps.LatLng(47.290408, -89.958801), new google.maps.LatLng(47.309034, -90.653687), new google.maps.LatLng(46.702202, -92.015991), new google.maps.LatLng(46.748801, -92.088432), new google.maps.LatLng(46.664, -92.291), new google.maps.LatLng(46.074, -92.293), new google.maps.LatLng(45.891, -92.712), new google.maps.LatLng(45.707, -92.87), new google.maps.LatLng(45.574, -92.882), new google.maps.LatLng(45.438, -92.645), new google.maps.LatLng(45.289, -92.761), new google.maps.LatLng(44.751, -92.808), new google.maps.LatLng(44.569, -92.549), new google.maps.LatLng(44.363, -91.965), new google.maps.LatLng(44.2, -91.875), new google.maps.LatLng(43.996, -91.431), new google.maps.LatLng(43.776, -91.245), new google.maps.LatLng(43.501, -91.217)
    ];

    statMN.setPath(points);
    statMN.setVisible(false);
    statMN.setMap(mapMain);

    // Construct the polygon
    var rollMN = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollMN, 'mouseover', function () { rollMN.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollMN, 'mouseout', function () { rollMN.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollMN, 'click', function () {
        selectState('MN');
    });
    rollMN.setMap(mapMain);

    //Mississippi
    points = [
        new google.maps.LatLng(30.216, -89.604), new google.maps.LatLng(30.664, -89.848), new google.maps.LatLng(31.004, -89.733), new google.maps.LatLng(30.999, -91.637), new google.maps.LatLng(31.054, -91.559), new google.maps.LatLng(31.257, -91.653), new google.maps.LatLng(31.278, -91.513), new google.maps.LatLng(31.407, -91.577), new google.maps.LatLng(31.373, -91.472), new google.maps.LatLng(31.524, -91.521), new google.maps.LatLng(31.573, -91.406), new google.maps.LatLng(31.63, -91.515), new google.maps.LatLng(31.619, -91.403), new google.maps.LatLng(31.746, -91.369), new google.maps.LatLng(31.754, -91.262), new google.maps.LatLng(31.76, -91.363), new google.maps.LatLng(31.847, -91.341), new google.maps.LatLng(31.813, -91.254), new google.maps.LatLng(32.011, -91.08), new google.maps.LatLng(32.074, -91.156), new google.maps.LatLng(32.145, -91.004), new google.maps.LatLng(32.134, -91.167), new google.maps.LatLng(32.197, -91.163), new google.maps.LatLng(32.193, -90.994), new google.maps.LatLng(32.367, -90.877), new google.maps.LatLng(32.354, -90.994), new google.maps.LatLng(32.436, -90.967), new google.maps.LatLng(32.481, -91.115), new google.maps.LatLng(32.547, -91.095), new google.maps.LatLng(32.494, -90.987), new google.maps.LatLng(32.543, -91.072), new google.maps.LatLng(32.64, -91.013), new google.maps.LatLng(32.618, -91.152), new google.maps.LatLng(32.719, -91.053), new google.maps.LatLng(32.778, -91.163), new google.maps.LatLng(32.905, -91.063), new google.maps.LatLng(32.989, -91.105), new google.maps.LatLng(32.916, -91.209), new google.maps.LatLng(33.004, -91.166), new google.maps.LatLng(33.059, -91.121), new google.maps.LatLng(33.125, -91.201), new google.maps.LatLng(33.136, -91.093), new google.maps.LatLng(33.275, -91.043), new google.maps.LatLng(33.301, -91.141), new google.maps.LatLng(33.449, -91.059), new google.maps.LatLng(33.378, -91.148), new google.maps.LatLng(33.407, -91.209), new google.maps.LatLng(33.473, -91.125), new google.maps.LatLng(33.437, -91.231), new google.maps.LatLng(33.561, -91.23), new google.maps.LatLng(33.607, -91.129), new google.maps.LatLng(33.69, -91.222), new google.maps.LatLng(33.681, -91.037), new google.maps.LatLng(33.726, -91.14), new google.maps.LatLng(33.783, -90.986), new google.maps.LatLng(33.967, -91.09), new google.maps.LatLng(34.026, -90.893), new google.maps.LatLng(34.164, -90.927), new google.maps.LatLng(34.159, -90.809), new google.maps.LatLng(34.238, -90.934), new google.maps.LatLng(34.207, -90.848), new google.maps.LatLng(34.364, -90.762), new google.maps.LatLng(34.314, -90.661), new google.maps.LatLng(34.418, -90.573), new google.maps.LatLng(34.689, -90.569), new google.maps.LatLng(34.624, -90.535), new google.maps.LatLng(34.684, -90.461), new google.maps.LatLng(34.711, -90.567), new google.maps.LatLng(34.785, -90.547), new google.maps.LatLng(34.737, -90.459), new google.maps.LatLng(34.892, -90.464), new google.maps.LatLng(34.848, -90.306), new google.maps.LatLng(34.924, -90.241), new google.maps.LatLng(34.995, -90.308), new google.maps.LatLng(34.995, -88.2), new google.maps.LatLng(34.892, -88.097), new google.maps.LatLng(32.747, -88.368), new google.maps.LatLng(32.732, -88.37), new google.maps.LatLng(31.894, -88.473), new google.maps.LatLng(30.348, -88.394)
    ];

    statMS.setPath(points);
    statMS.setVisible(false);
    statMS.setMap(mapMain);

    // Construct the polygon
    var rollMS = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollMS, 'mouseover', function () { rollMS.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollMS, 'mouseout', function () { rollMS.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollMS, 'click', function () {
        selectState('MS');
    });
    rollMS.setMap(mapMain);

    //Missouri
    points = [
        new google.maps.LatLng(36.625, -89.366), new google.maps.LatLng(36.567, -89.236), new google.maps.LatLng(36.666, -89.159), new google.maps.LatLng(36.982, -89.133), new google.maps.LatLng(37.072, -89.254), new google.maps.LatLng(36.989, -89.276), new google.maps.LatLng(37.038, -89.376), new google.maps.LatLng(37.261, -89.522), new google.maps.LatLng(37.387, -89.421), new google.maps.LatLng(37.693, -89.517), new google.maps.LatLng(37.903, -89.839), new google.maps.LatLng(37.88, -89.949), new google.maps.LatLng(37.958, -89.925), new google.maps.LatLng(38.212, -90.351), new google.maps.LatLng(38.326, -90.373), new google.maps.LatLng(38.844, -90.109), new google.maps.LatLng(38.967, -90.451), new google.maps.LatLng(38.888, -90.625), new google.maps.LatLng(39.257, -90.731), new google.maps.LatLng(39.728, -91.367), new google.maps.LatLng(40.125, -91.51), new google.maps.LatLng(40.378, -91.419), new google.maps.LatLng(40.4, -91.5), new google.maps.LatLng(40.403, -91.505), new google.maps.LatLng(40.614, -91.728), new google.maps.LatLng(40.585, -95.765), new google.maps.LatLng(40.538, -95.652), new google.maps.LatLng(40.311, -95.656), new google.maps.LatLng(40.242, -95.477), new google.maps.LatLng(40.041, -95.415), new google.maps.LatLng(40, -95.307), new google.maps.LatLng(39.874, -95.13), new google.maps.LatLng(39.887, -94.928), new google.maps.LatLng(39.744, -94.861), new google.maps.LatLng(39.741, -94.962), new google.maps.LatLng(39.542, -95.109), new google.maps.LatLng(39.386, -94.882), new google.maps.LatLng(39.213, -94.827), new google.maps.LatLng(39.148, -94.588), new google.maps.LatLng(36.998, -94.618), new google.maps.LatLng(36.499, -94.617), new google.maps.LatLng(36.499, -90.802), new google.maps.LatLng(36.499, -90.789), new google.maps.LatLng(36.497, -90.151), new google.maps.LatLng(36.303, -90.064), new google.maps.LatLng(35.996, -90.377), new google.maps.LatLng(36.001, -89.733), new google.maps.LatLng(36.134, -89.592), new google.maps.LatLng(36.25, -89.698), new google.maps.LatLng(36.25, -89.537), new google.maps.LatLng(36.323, -89.62), new google.maps.LatLng(36.356, -89.514), new google.maps.LatLng(36.498, -89.539), new google.maps.LatLng(36.578868, -89.520378), new google.maps.LatLng(36.497, -89.485), new google.maps.LatLng(36.457464, -89.469223), new google.maps.LatLng(36.499, -89.417)
    ];

    statMO.setPath(points);
    statMO.setVisible(false);
    statMO.setMap(mapMain);

    // Construct the polygon
    var rollMO = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollMO, 'mouseover', function () { rollMO.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollMO, 'mouseout', function () { rollMO.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollMO, 'click', function () {
        selectState('MO');
    });
    rollMO.setMap(mapMain);

    //Montana
    points = [
       new google.maps.LatLng(49, -104.047), new google.maps.LatLng(45.944, -104.045), new google.maps.LatLng(44.998, -104.057), new google.maps.LatLng(45.001, -111.054), new google.maps.LatLng(44.475, -111.052), new google.maps.LatLng(44.755, -111.383), new google.maps.LatLng(44.643, -111.514), new google.maps.LatLng(44.541, -111.471), new google.maps.LatLng(44.569, -112.284), new google.maps.LatLng(44.45, -112.383), new google.maps.LatLng(44.485, -112.778), new google.maps.LatLng(44.359, -112.854), new google.maps.LatLng(44.453, -113.004), new google.maps.LatLng(44.774, -113.135), new google.maps.LatLng(44.864, -113.451), new google.maps.LatLng(45.058, -113.45), new google.maps.LatLng(45.26, -113.689), new google.maps.LatLng(45.603, -113.807), new google.maps.LatLng(45.696, -113.937), new google.maps.LatLng(45.459, -114.332), new google.maps.LatLng(45.558, -114.563), new google.maps.LatLng(45.704, -114.495), new google.maps.LatLng(45.777, -114.562), new google.maps.LatLng(45.885, -114.386), new google.maps.LatLng(46.147, -114.525), new google.maps.LatLng(46.172, -114.444), new google.maps.LatLng(46.647, -114.319), new google.maps.LatLng(46.7, -114.769), new google.maps.LatLng(47.253, -115.317), new google.maps.LatLng(47.427, -115.756), new google.maps.LatLng(47.48, -115.627), new google.maps.LatLng(47.55, -115.754), new google.maps.LatLng(47.696, -115.723), new google.maps.LatLng(47.978, -116.047), new google.maps.LatLng(49, -116.048)
    ];

    statMT.setPath(points);
    statMT.setVisible(false);
    statMT.setMap(mapMain);

    // Construct the polygon
    var rollMT = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollMT, 'mouseover', function () { rollMT.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollMT, 'mouseout', function () { rollMT.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollMT, 'click', function () {
        selectState('MT');
    });
    rollMT.setMap(mapMain);

    //Nebraska
    points = [
        new google.maps.LatLng(43.002, -104.056), new google.maps.LatLng(42.998, -98.499), new google.maps.LatLng(42.762, -98.013), new google.maps.LatLng(42.858, -97.874), new google.maps.LatLng(42.851, -97.232), new google.maps.LatLng(42.489, -96.443), new google.maps.LatLng(42.167, -96.347), new google.maps.LatLng(41.798, -96.066), new google.maps.LatLng(41.608, -96.116), new google.maps.LatLng(41.601, -96.113), new google.maps.LatLng(41.452, -95.919), new google.maps.LatLng(41.346, -95.957), new google.maps.LatLng(41.302, -95.872), new google.maps.LatLng(41.201, -95.927), new google.maps.LatLng(41.177, -95.841), new google.maps.LatLng(40.895, -95.809), new google.maps.LatLng(40.734, -95.888), new google.maps.LatLng(40.585, -95.765), new google.maps.LatLng(40.538, -95.652), new google.maps.LatLng(40.311, -95.656), new google.maps.LatLng(40.242, -95.477), new google.maps.LatLng(40.041, -95.415), new google.maps.LatLng(40, -95.307), new google.maps.LatLng(40.003, -102.051), new google.maps.LatLng(41.002, -102.051), new google.maps.LatLng(41.001, -104.053)
    ];

    statNE.setPath(points);
    statNE.setVisible(false);
    statNE.setMap(mapMain);

    // Construct the polygon
    var rollNE = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollNE, 'mouseover', function () { rollNE.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollNE, 'mouseout', function () { rollNE.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollNE, 'click', function () {
        selectState('NE');
    });
    rollNE.setMap(mapMain);

    //Nevada
    points = [
        new google.maps.LatLng(37, -114.049), new google.maps.LatLng(41.994, -114.04), new google.maps.LatLng(42.002, -117.024), new google.maps.LatLng(41.995, -119.998), new google.maps.LatLng(39, -120), new google.maps.LatLng(36.972, -117.166), new google.maps.LatLng(35.001, -114.632), new google.maps.LatLng(35.181, -114.568), new google.maps.LatLng(35.79, -114.698), new google.maps.LatLng(35.804, -114.71), new google.maps.LatLng(36.103, -114.735), new google.maps.LatLng(36.142, -114.369), new google.maps.LatLng(36.142, -114.369), new google.maps.LatLng(36.016, -114.21), new google.maps.LatLng(36.194, -114.045), new google.maps.LatLng(37, -114.049)
    ];

    statNV.setPath(points);
    statNV.setVisible(false);
    statNV.setMap(mapMain);

    // Construct the polygon
    var rollNV = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollNV, 'mouseover', function () { rollNV.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollNV, 'mouseout', function () { rollNV.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollNV, 'click', function () {
        selectState('NV');
    });
    rollNV.setMap(mapMain);

    //New Hampshire
    points = [
        new google.maps.LatLng(45.013, -71.502), new google.maps.LatLng(44.752, -71.632), new google.maps.LatLng(44.588, -71.535), new google.maps.LatLng(44.506, -71.58), new google.maps.LatLng(44.319, -72.032), new google.maps.LatLng(44.081, -72.033), new google.maps.LatLng(43.574, -72.38), new google.maps.LatLng(43.005, -72.445), new google.maps.LatLng(42.872, -72.555), new google.maps.LatLng(42.727, -72.459), new google.maps.LatLng(42.697, -71.295), new google.maps.LatLng(42.859, -71.031), new google.maps.LatLng(42.869, -70.828), new google.maps.LatLng(43.016697, -70.675049), new google.maps.LatLng(43.055844, -70.698395), new google.maps.LatLng(43.129052, -70.827484), new google.maps.LatLng(43.228194, -70.811005), new google.maps.LatLng(43.335167, -70.9552), new google.maps.LatLng(43.478833, -70.97168), new google.maps.LatLng(43.574422, -70.973053), new google.maps.LatLng(44.76258, -71.038113), new google.maps.LatLng(45.306286, -71.08429), new google.maps.LatLng(45.241053, -71.143341), new google.maps.LatLng(45.302905, -71.28479), new google.maps.LatLng(45.237185, -71.442719), new google.maps.LatLng(45.078369, -71.496277)
    ];

    statNH.setPath(points);
    statNH.setVisible(false);
    statNH.setMap(mapMain);

    // Construct the polygon
    var rollNH = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollNH, 'mouseover', function () { rollNH.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollNH, 'mouseout', function () { rollNH.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollNH, 'click', function () {
        selectState('NH');
    });
    rollNH.setMap(mapMain);

    //New Jersey (TODO: need coast border)
    points = [
        new google.maps.LatLng(41.352023084466836, -74.6905922851563), new google.maps.LatLng(40.97570158898564, -73.8885903320313), new google.maps.LatLng(40.7014140564192, -74.0039467773438), new google.maps.LatLng(40.634749247301194, -74.0533852539063), new google.maps.LatLng(40.62641146073996, -74.2126870117188), new google.maps.LatLng(40.476153328663464, -74.2511391601563), new google.maps.LatLng(40.49704267380421, -73.9819741210938), new google.maps.LatLng(39.766275020386566, -74.0643715820313), new google.maps.LatLng(39.35973473717178, -74.4159340820313), new google.maps.LatLng(39.193897562691006, -74.6631264648438), new google.maps.LatLng(38.929451575030306, -74.8553872070313), new google.maps.LatLng(38.92517820272144, -74.9982094726563), new google.maps.LatLng(39.164090374935355, -74.9213051757813), new google.maps.LatLng(39.20241158074752, -75.1245522460938), new google.maps.LatLng(39.35973473717178, -75.4047036132813), new google.maps.LatLng(39.62679564708815, -75.5090737304688), new google.maps.LatLng(39.90547240528197, -75.1575112304688), new google.maps.LatLng(40.115839672508905, -74.7839760742188), new google.maps.LatLng(40.37997861700773, -74.9542641601563), new google.maps.LatLng(40.42599237678045, -75.0311684570313), new google.maps.LatLng(40.5721904745868, -75.1190590820313), new google.maps.LatLng(40.58887853889447, -75.2069497070313), new google.maps.LatLng(40.87193833657572, -75.0696206054688), new google.maps.LatLng(41.06687845586477, -75.0256752929688)
    ];

    statNJ.setPath(points);
    statNJ.setVisible(false);
    statNJ.setMap(mapMain);

    // Construct the polygon
    var rollNJ = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollNJ, 'mouseover', function () { rollNJ.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollNJ, 'mouseout', function () { rollNJ.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollNJ, 'click', function () {
        selectState('NJ');
    });
    rollNJ.setMap(mapMain);

    //New Mexico
    points = [
        new google.maps.LatLng(36.999, -109.044), new google.maps.LatLng(36.002, -109.045), new google.maps.LatLng(34.96, -109.045), new google.maps.LatLng(31.332, -109.049), new google.maps.LatLng(31.33335, -108.208551), new google.maps.LatLng(31.78356, -108.208337), new google.maps.LatLng(31.784, -106.528), new google.maps.LatLng(31.869, -106.634), new google.maps.LatLng(32, -106.618), new google.maps.LatLng(32, -103.064), new google.maps.LatLng(36.500348, -103.041919), new google.maps.LatLng(36.5, -103.001), new google.maps.LatLng(37, -103.001)
    ];

    statNM.setPath(points);
    statNM.setVisible(false);
    statNM.setMap(mapMain);

    // Construct the polygon
    var rollNM = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollNM, 'mouseover', function () { rollNM.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollNM, 'mouseout', function () { rollNM.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollNM, 'click', function () {
        selectState('NM');
    });
    rollNM.setMap(mapMain);

    //New York (TODO: border around Island)
    points = [
        new google.maps.LatLng(42.00844045357674, -79.75803613281255),new google.maps.LatLng(42.27319590488262, -79.74155664062505),new google.maps.LatLng(42.51660258129056, -79.35154199218755),new google.maps.LatLng(42.7993833661301, -78.82969140625005),new google.maps.LatLng(42.900064779607945, -78.91758203125005),new google.maps.LatLng(43.06884002978209, -79.00547265625005),new google.maps.LatLng(43.27315833212504, -79.07688378906255),new google.maps.LatLng(43.36907157786662, -78.41221093750005),new google.maps.LatLng(43.26715872700405, -76.92356347656255),new google.maps.LatLng(43.57039445410124, -76.23142480468755),new google.maps.LatLng(44.10923499719578, -76.34128808593755),new google.maps.LatLng(44.31397593552877, -76.08860253906255),new google.maps.LatLng(44.7759398303578, -75.38547753906255),new google.maps.LatLng(45.03272760915939, -74.74827050781255),new google.maps.LatLng(45.01913887651611, -73.35850000000005),new google.maps.LatLng(44.76619047365763, -73.32554101562505),new google.maps.LatLng(44.331660437594515, -73.32004785156255),new google.maps.LatLng(44.05201687333084, -73.42991113281255),new google.maps.LatLng(43.76707982423375, -73.37497949218755),new google.maps.LatLng(43.58830157399441, -73.41892480468755),new google.maps.LatLng(43.548500741819076, -73.34751367187505),new google.maps.LatLng(43.540537419477175, -73.24314355468755),new google.maps.LatLng(42.74293009598967, -73.25412988281255),new google.maps.LatLng(42.08594500153995, -73.50681542968755),new google.maps.LatLng(41.81631254217973, -73.49582910156255),new google.maps.LatLng(41.30664852395596, -73.54526757812505),new google.maps.LatLng(41.203407020170154, -73.46287011718755),new google.maps.LatLng(41.10414169818142, -73.71006250000005),new google.maps.LatLng(40.954961972386904, -73.59470605468755),new google.maps.LatLng(40.9839956105427, -73.12778710937505),new google.maps.LatLng(41.017161266662704, -72.57847070312505),new google.maps.LatLng(41.2116723448778, -72.19394921875005),new google.maps.LatLng(41.07516100244502, -71.75449609375005),new google.maps.LatLng(40.797127939268144, -72.49607324218755),new google.maps.LatLng(40.66392330132464, -73.11130761718755),new google.maps.LatLng(40.53880185740995, -73.84739160156255),new google.maps.LatLng(40.509573159988506, -73.95725488281255),new google.maps.LatLng(40.49286532491005, -74.22641992187505),new google.maps.LatLng(40.659756360219184, -74.18247460937505),new google.maps.LatLng(40.680588462541344, -74.03415917968755),new google.maps.LatLng(40.97984873013257, -73.90781640625005),new google.maps.LatLng(41.385002914523135, -74.69883203125005),new google.maps.LatLng(41.455029538672385, -74.92954492187505),new google.maps.LatLng(41.60717934544808, -75.06138085937505),new google.maps.LatLng(41.836779167755026, -75.08884667968755),new google.maps.LatLng(41.87769278926571, -75.23716210937505),new google.maps.LatLng(42.004358647700485, -75.36350488281255)
    ];

    statNY.setPath(points);
    statNY.setVisible(false);
    statNY.setMap(mapMain);

    // Construct the polygon
    var rollNY = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollNY, 'mouseover', function () { rollNY.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollNY, 'mouseout', function () { rollNY.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollNY, 'click', function () {
        selectState('NY');
    });
    rollNY.setMap(mapMain);

    //North Carolina (TODO: Need better coastal border)
    points = [
        new google.maps.LatLng(36.55, -75.929), new google.maps.LatLng(36.55, -75.966), new google.maps.LatLng(36.55, -75.884), new google.maps.LatLng(36.55, -75.894), new google.maps.LatLng(36.55, -75.988), new google.maps.LatLng(36.55, -76.006), new google.maps.LatLng(36.55, -76.035), new google.maps.LatLng(36.55, -76.156), new google.maps.LatLng(36.55, -76.161), new google.maps.LatLng(36.542, -78.917), new google.maps.LatLng(36.542, -79.138), new google.maps.LatLng(36.588, -81.677), new google.maps.LatLng(36.338, -81.706), new google.maps.LatLng(36.301, -81.908), new google.maps.LatLng(36.12, -82.033), new google.maps.LatLng(36.116, -82.354), new google.maps.LatLng(35.955, -82.561), new google.maps.LatLng(36.065, -82.638), new google.maps.LatLng(35.944, -82.898), new google.maps.LatLng(35.773, -82.993), new google.maps.LatLng(35.562, -83.499), new google.maps.LatLng(35.518, -83.881), new google.maps.LatLng(35.274, -84.046), new google.maps.LatLng(35.225, -84.29), new google.maps.LatLng(34.988, -84.322), new google.maps.LatLng(35, -83.108), new google.maps.LatLng(35.215, -82.394), new google.maps.LatLng(35.149, -81.032), new google.maps.LatLng(35.047, -81.043), new google.maps.LatLng(35.107, -80.935), new google.maps.LatLng(34.935, -80.782), new google.maps.LatLng(34.819, -80.797), new google.maps.LatLng(34.804, -79.675), new google.maps.LatLng(33.856, -78.556), new google.maps.LatLng(33.838483, -77.961731), new google.maps.LatLng(34.482788, -77.433701), new google.maps.LatLng(34.580083, -76.533508), new google.maps.LatLng(35.218697, -75.52002), new google.maps.LatLng(35.588085, -75.451355), new google.maps.LatLng(35.721988, -75.484314)
    ];

    statNC.setPath(points);
    statNC.setVisible(false);
    statNC.setMap(mapMain);

    // Construct the polygon
    var rollNC = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollNC, 'mouseover', function () { rollNC.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollNC, 'mouseout', function () { rollNC.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollNC, 'click', function () {
        selectState('NC');
    });
    rollNC.setMap(mapMain);

    //North Dakota
    points = [
         new google.maps.LatLng(49, -104.047), new google.maps.LatLng(45.944, -104.045), new google.maps.LatLng(45.935, -96.562), new google.maps.LatLng(46.316, -96.596), new google.maps.LatLng(46.709, -96.788), new google.maps.LatLng(46.72, -96.785), new google.maps.LatLng(47.598, -96.851), new google.maps.LatLng(48.143, -97.146), new google.maps.LatLng(48.563, -97.174), new google.maps.LatLng(48.686, -97.094), new google.maps.LatLng(49, -97.229)         //top right
    ];

    statND.setPath(points);
    statND.setVisible(false);
    statND.setMap(mapMain);

    // Construct the polygon
    var rollND = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollND, 'mouseover', function () { rollND.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollND, 'mouseout', function () { rollND.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollND, 'click', function () {
        selectState('ND');
    });
    rollND.setMap(mapMain);

    //Ohio
    points = [
        new google.maps.LatLng(39.105,-84.819),new google.maps.LatLng(39.119,-84.451),new google.maps.LatLng(38.808,-84.215),new google.maps.LatLng(38.761,-83.869),new google.maps.LatLng(38.626,-83.668),new google.maps.LatLng(38.703,-83.526),new google.maps.LatLng(38.596,-83.293),new google.maps.LatLng(38.755,-82.889),new google.maps.LatLng(38.59,-82.843),new google.maps.LatLng(38.421,-82.594),new google.maps.LatLng(38.445,-82.328),new google.maps.LatLng(38.593,-82.274),new google.maps.LatLng(38.596,-82.268),new google.maps.LatLng(38.605,-82.176),new google.maps.LatLng(38.787,-82.221),new google.maps.LatLng(39.025,-82.037),new google.maps.LatLng(38.875,-81.899),new google.maps.LatLng(38.923,-81.766),new google.maps.LatLng(39.077,-81.814),new google.maps.LatLng(39.268,-81.686),new google.maps.LatLng(39.268,-81.57),new google.maps.LatLng(39.41,-81.453),new google.maps.LatLng(39.342,-81.375),new google.maps.LatLng(39.387,-81.217),new google.maps.LatLng(39.625,-80.878),new google.maps.LatLng(40.313,-80.602),new google.maps.LatLng(40.584,-80.667),new google.maps.LatLng(40.638,-80.519),new google.maps.LatLng(41.977,-80.519),new google.maps.LatLng(42.327141,-80.519829),new google.maps.LatLng(41.999815,-81.708755),new google.maps.LatLng(41.677015,-82.398148),new google.maps.LatLng(41.675989,-82.681046),new google.maps.LatLng(41.863425,-83.069687),new google.maps.LatLng(41.957448,-83.114319),new google.maps.LatLng(41.731355,-83.416443),new google.maps.LatLng(41.733,-83.454),new google.maps.LatLng(41.696,-84.806)
    ];

    statOH.setPath(points);
    statOH.setVisible(false);
    statOH.setMap(mapMain);

    // Construct the polygon
    var rollOH = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollOH, 'mouseover', function () { rollOH.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollOH, 'mouseout', function () { rollOH.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollOH, 'click', function () {
        selectState('OH');
    });
    rollOH.setMap(mapMain);

    //Oklahoma
    points = [
        new google.maps.LatLng(36.999262, -103.001), new google.maps.LatLng(36.998166, -102.9879), new google.maps.LatLng(36.998714, -102.747574), new google.maps.LatLng(36.994875, -102.701569), new google.maps.LatLng(36.993, -102.041), new google.maps.LatLng(36.998, -94.618), new google.maps.LatLng(36.499, -94.617), new google.maps.LatLng(35.398, -94.431), new google.maps.LatLng(33.637, -94.485), new google.maps.LatLng(33.961, -95.227), new google.maps.LatLng(33.873, -95.28), new google.maps.LatLng(33.939, -95.6), new google.maps.LatLng(33.845, -95.776), new google.maps.LatLng(33.838, -96.147), new google.maps.LatLng(33.687, -96.352), new google.maps.LatLng(33.843, -96.625), new google.maps.LatLng(33.894, -96.587), new google.maps.LatLng(33.823, -96.758), new google.maps.LatLng(33.955, -96.985), new google.maps.LatLng(33.718, -97.135), new google.maps.LatLng(33.914, -97.218), new google.maps.LatLng(33.819, -97.427), new google.maps.LatLng(33.991, -97.669), new google.maps.LatLng(33.856, -97.84), new google.maps.LatLng(33.881, -97.97), new google.maps.LatLng(33.989, -97.946), new google.maps.LatLng(34.011, -98.091), new google.maps.LatLng(34.153, -98.117), new google.maps.LatLng(34.148, -98.35), new google.maps.LatLng(34.057, -98.458), new google.maps.LatLng(34.161, -98.631), new google.maps.LatLng(34.114, -98.741), new google.maps.LatLng(34.213, -99.186), new google.maps.LatLng(34.453, -99.361), new google.maps.LatLng(34.373, -99.405), new google.maps.LatLng(34.381, -99.71), new google.maps.LatLng(34.579164, -99.94606), new google.maps.LatLng(34.578104, -99.954386), new google.maps.LatLng(34.561354, -99.976873), new google.maps.LatLng(34.560506, -100.000305), new google.maps.LatLng(36.5, -100.003), new google.maps.LatLng(36.5, -103.001)
    ];

    statOK.setPath(points);
    statOK.setVisible(false);
    statOK.setMap(mapMain);

    // Construct the polygon
    var rollOK = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollOK, 'mouseover', function () { rollOK.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollOK, 'mouseout', function () { rollOK.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollOK, 'click', function () {
        selectState('OK');
    });
    rollOK.setMap(mapMain);

    //Oregan
    points = [
        new google.maps.LatLng(45.99691621594059, -116.89869165039067), new google.maps.LatLng(46.0198079893991, -118.95862817382817), new google.maps.LatLng(45.91672039963074, -119.29920434570317), new google.maps.LatLng(45.71764072704265, -120.20557641601567), new google.maps.LatLng(45.7406477834601, -120.59009790039067), new google.maps.LatLng(45.64088209485929, -121.21631860351567), new google.maps.LatLng(45.72147589454694, -121.51294946289067), new google.maps.LatLng(45.667759594090775, -121.89197778320317), new google.maps.LatLng(45.552479485792446, -122.43030786132817), new google.maps.LatLng(45.70613364507039, -122.78736352539067), new google.maps.LatLng(46.11128034895927, -122.89173364257817), new google.maps.LatLng(46.191194335441516, -123.15540551757817), new google.maps.LatLng(46.255801629091664, -123.88599633789067), new google.maps.LatLng(46.24060675309314, -124.03431176757817), new google.maps.LatLng(45.1858625353552, -123.95740747070317), new google.maps.LatLng(43.703575251340276, -124.17713403320317), new google.maps.LatLng(42.82759070436075, -124.58362817382817), new google.maps.LatLng(42.50850423696546, -124.42981958007817), new google.maps.LatLng(42.00027657993731, -124.17713403320317), new google.maps.LatLng(42.00027657993731, -117.02503442382817), new google.maps.LatLng(43.84240402949286, -117.02503442382817), new google.maps.LatLng(44.08359233633255, -116.95362329101567), new google.maps.LatLng(44.26875798923936, -116.97010278320317), new google.maps.LatLng(44.29628610265562, -117.20081567382817), new google.maps.LatLng(44.51996341247582, -117.18982934570317), new google.maps.LatLng(44.80128045573953, -116.92615747070317), new google.maps.LatLng(45.460084797194504, -116.55811547851567), new google.maps.LatLng(45.61783397127086, -116.43177270507817), new google.maps.LatLng(45.80961209427336, -116.63501977539067), new google.maps.LatLng(45.83640851640854, -116.77234887695317)    //top left
    ];

    statOR.setPath(points);
    statOR.setVisible(false);
    statOR.setMap(mapMain);

    // Construct the polygon
    var rollOR = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollOR, 'mouseover', function () { rollOR.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollOR, 'mouseout', function () { rollOR.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollOR, 'click', function () {
        selectState('OR');
    });
    rollOR.setMap(mapMain);

    //Pennsylvania
    points = [
        new google.maps.LatLng(42.327141, -80.519829), new google.maps.LatLng(40.638, -80.519), new google.maps.LatLng(39.721, -80.519), new google.maps.LatLng(39.721, -79.477), new google.maps.LatLng(39.721, -75.789), new google.maps.LatLng(39.788, -75.721), new google.maps.LatLng(39.807, -75.693), new google.maps.LatLng(39.82304, -75.657692), new google.maps.LatLng(39.83675, -75.59967), new google.maps.LatLng(39.837805, -75.526886), new google.maps.LatLng(39.820667, -75.454102), new google.maps.LatLng(39.802, -75.415), new google.maps.LatLng(39.844, -75.343), new google.maps.LatLng(39.846, -75.339), new google.maps.LatLng(39.884, -75.147), new google.maps.LatLng(39.95528, -75.132751), new google.maps.LatLng(40.114, -74.831), new google.maps.LatLng(40.119, -74.829), new google.maps.LatLng(40.163, -74.724), new google.maps.LatLng(40.412, -75.044), new google.maps.LatLng(40.415, -75.051), new google.maps.LatLng(40.54, -75.068), new google.maps.LatLng(40.613, -75.201), new google.maps.LatLng(40.75, -75.197), new google.maps.LatLng(40.869, -75.051), new google.maps.LatLng(40.986, -75.132), new google.maps.LatLng(41.357, -74.695), new google.maps.LatLng(41.481, -74.984), new google.maps.LatLng(41.812, -75.071), new google.maps.LatLng(41.864, -75.261), new google.maps.LatLng(42.006, -75.363), new google.maps.LatLng(41.999, -79.761), new google.maps.LatLng(42.269, -79.762), new google.maps.LatLng(42.515892, -79.762115)

    ];

    statPA.setPath(points);
    statPA.setVisible(false);
    statPA.setMap(mapMain);

    // Construct the polygon
    var rollPA = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollPA, 'mouseover', function () { rollPA.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollPA, 'mouseout', function () { rollPA.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollPA, 'click', function () {
        selectState('PA');
    });
    rollPA.setMap(mapMain);

    //Rhode Island
    points = [
        new google.maps.LatLng(41.423, -71.798), new google.maps.LatLng(42.008, -71.8), new google.maps.LatLng(42.018, -71.381), new google.maps.LatLng(41.776, -71.318), new google.maps.LatLng(41.775, -71.316), new google.maps.LatLng(41.763, -71.287), new google.maps.LatLng(41.759, -71.279), new google.maps.LatLng(41.718, -71.232), new google.maps.LatLng(41.674, -71.195), new google.maps.LatLng(41.66, -71.136), new google.maps.LatLng(41.647, -71.134), new google.maps.LatLng(41.496, -71.121)
    ];

    statRI.setPath(points);
    statRI.setVisible(false);
    statRI.setMap(mapMain);

    // Construct the polygon
    var rollRI = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollRI, 'mouseover', function () { rollRI.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollRI, 'mouseout', function () { rollRI.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollRI, 'click', function () {
        selectState('RI');
    });
    rollRI.setMap(mapMain);

    //South Carolina
    points = [
        new google.maps.LatLng(33.183537, -79.170227), new google.maps.LatLng(32.99945, -79.354248), new google.maps.LatLng(32.669437, -79.881592), new google.maps.LatLng(32.032964, -80.837059), new google.maps.LatLng(32.099299, -81.081333), new google.maps.LatLng(32.226, -81.144), new google.maps.LatLng(32.464, -81.186), new google.maps.LatLng(32.628, -81.418), new google.maps.LatLng(33.01, -81.495), new google.maps.LatLng(33.147, -81.751), new google.maps.LatLng(33.347, -81.94), new google.maps.LatLng(33.465, -81.929), new google.maps.LatLng(33.945, -82.557), new google.maps.LatLng(34.474, -82.877), new google.maps.LatLng(34.682, -83.342), new google.maps.LatLng(35, -83.108), new google.maps.LatLng(35.215, -82.394), new google.maps.LatLng(35.149, -81.032), new google.maps.LatLng(35.047, -81.043), new google.maps.LatLng(35.107, -80.935), new google.maps.LatLng(34.935, -80.782), new google.maps.LatLng(34.819, -80.797), new google.maps.LatLng(34.804, -79.675), new google.maps.LatLng(33.856, -78.556)
    ];

    statSC.setPath(points);
    statSC.setVisible(false);
    statSC.setMap(mapMain);

    // Construct the polygon
    var rollSC = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollSC, 'mouseover', function () { rollSC.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollSC, 'mouseout', function () { rollSC.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollSC, 'click', function () {
        selectState('SC');
    });
    rollSC.setMap(mapMain);

    //South Dakota
    points = [
        new google.maps.LatLng(45.944, -104.045), new google.maps.LatLng(44.998, -104.057), new google.maps.LatLng(43.002, -104.056), new google.maps.LatLng(42.998, -98.499), new google.maps.LatLng(42.762, -98.013), new google.maps.LatLng(42.858, -97.874), new google.maps.LatLng(42.851, -97.232), new google.maps.LatLng(42.489, -96.443), new google.maps.LatLng(42.737, -96.637), new google.maps.LatLng(43.12, -96.436), new google.maps.LatLng(43.269, -96.585), new google.maps.LatLng(43.385, -96.52), new google.maps.LatLng(43.5, -96.598), new google.maps.LatLng(43.5, -96.453), new google.maps.LatLng(45.301, -96.453), new google.maps.LatLng(45.606, -96.857), new google.maps.LatLng(45.817, -96.585), new google.maps.LatLng(45.935, -96.562)
    ];

    statSD.setPath(points);
    statSD.setVisible(false);
    statSD.setMap(mapMain);

    // Construct the polygon
    var rollSD = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollSD, 'mouseover', function () { rollSD.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollSD, 'mouseout', function () { rollSD.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollSD, 'click', function () {
        selectState('SD');
    });
    rollSD.setMap(mapMain);

    //Tennessee
    points = [
        new google.maps.LatLng(36.588, -81.677), new google.maps.LatLng(36.338, -81.706), new google.maps.LatLng(36.301, -81.908), new google.maps.LatLng(36.12, -82.033), new google.maps.LatLng(36.116, -82.354), new google.maps.LatLng(35.955, -82.561), new google.maps.LatLng(36.065, -82.638), new google.maps.LatLng(35.944, -82.898), new google.maps.LatLng(35.773, -82.993), new google.maps.LatLng(35.562, -83.499), new google.maps.LatLng(35.518, -83.881), new google.maps.LatLng(35.274, -84.046), new google.maps.LatLng(35.225, -84.29), new google.maps.LatLng(34.988, -84.322), new google.maps.LatLng(34.984, -85.605), new google.maps.LatLng(34.995, -88.2), new google.maps.LatLng(34.995, -90.308), new google.maps.LatLng(35.139, -90.065), new google.maps.LatLng(35.265, -90.16), new google.maps.LatLng(35.277, -90.168), new google.maps.LatLng(35.386, -90.08), new google.maps.LatLng(35.421, -90.169), new google.maps.LatLng(35.429, -90.002), new google.maps.LatLng(35.547, -90.04), new google.maps.LatLng(35.514, -89.916), new google.maps.LatLng(35.592, -89.955), new google.maps.LatLng(35.639, -89.853), new google.maps.LatLng(35.729, -89.957), new google.maps.LatLng(35.814, -89.71), new google.maps.LatLng(35.909, -89.742), new google.maps.LatLng(35.892, -89.642), new google.maps.LatLng(36.001, -89.733), new google.maps.LatLng(36.134, -89.592), new google.maps.LatLng(36.25, -89.698), new google.maps.LatLng(36.25, -89.537), new google.maps.LatLng(36.323, -89.62), new google.maps.LatLng(36.356, -89.514), new google.maps.LatLng(36.498, -89.539), new google.maps.LatLng(36.497, -89.485), new google.maps.LatLng(36.457464, -89.469223), new google.maps.LatLng(36.499, -89.417), new google.maps.LatLng(36.499, -89.417), new google.maps.LatLng(36.497, -88.053), new google.maps.LatLng(36.678, -88.07), new google.maps.LatLng(36.601, -83.675)
    ];

    statTN.setPath(points);
    statTN.setVisible(false);
    statTN.setMap(mapMain);

    // Construct the polygon
    var rollTN = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollTN, 'mouseover', function () { rollTN.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollTN, 'mouseout', function () { rollTN.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollTN, 'click', function () {
        selectState('TN');
    });
    rollTN.setMap(mapMain);

    //Texas
    points = [
        new google.maps.LatLng(29.999, -93.769), new google.maps.LatLng(30.137, -93.691), new google.maps.LatLng(30.538, -93.739), new google.maps.LatLng(31.031, -93.508), new google.maps.LatLng(31.509, -93.712), new google.maps.LatLng(31.585, -93.834), new google.maps.LatLng(31.777, -93.825), new google.maps.LatLng(31.992, -94.041), new google.maps.LatLng(33.019, -94.042), new google.maps.LatLng(33.551, -94.043), new google.maps.LatLng(33.545, -94.386), new google.maps.LatLng(33.637, -94.485), new google.maps.LatLng(33.961, -95.227), new google.maps.LatLng(33.873, -95.28), new google.maps.LatLng(33.939, -95.6), new google.maps.LatLng(33.845, -95.776), new google.maps.LatLng(33.838, -96.147), new google.maps.LatLng(33.687, -96.352), new google.maps.LatLng(33.843, -96.625), new google.maps.LatLng(33.894, -96.587), new google.maps.LatLng(33.823, -96.758), new google.maps.LatLng(33.955, -96.985), new google.maps.LatLng(33.718, -97.135), new google.maps.LatLng(33.914, -97.218), new google.maps.LatLng(33.819, -97.427), new google.maps.LatLng(33.991, -97.669), new google.maps.LatLng(33.856, -97.84), new google.maps.LatLng(33.881, -97.97), new google.maps.LatLng(33.989, -97.946), new google.maps.LatLng(34.011, -98.091), new google.maps.LatLng(34.153, -98.117), new google.maps.LatLng(34.148, -98.35), new google.maps.LatLng(34.057, -98.458), new google.maps.LatLng(34.161, -98.631), new google.maps.LatLng(34.114, -98.741), new google.maps.LatLng(34.213, -99.186), new google.maps.LatLng(34.453, -99.361), new google.maps.LatLng(34.373, -99.405), new google.maps.LatLng(34.381, -99.71), new google.maps.LatLng(34.579164, -99.94606), new google.maps.LatLng(34.578104, -99.954386), new google.maps.LatLng(34.561354, -99.976873), new google.maps.LatLng(34.560506, -100.000305), new google.maps.LatLng(36.5, -100.003), new google.maps.LatLng(36.5, -103.001), new google.maps.LatLng(36.500348, -103.041919), new google.maps.LatLng(32, -103.064), new google.maps.LatLng(32, -106.618), new google.maps.LatLng(31.869, -106.634), new google.maps.LatLng(31.784, -106.528), new google.maps.LatLng(31.461468, -106.199341), new google.maps.LatLng(30.272707, -104.761505), new google.maps.LatLng(29.910901, -104.676361), new google.maps.LatLng(29.632879, -104.508605), new google.maps.LatLng(29.392346, -104.16481), new google.maps.LatLng(28.972104, -103.154755), new google.maps.LatLng(28.985394, -103.115015), new google.maps.LatLng(29.224096, -102.866364), new google.maps.LatLng(29.760801, -102.386742), new google.maps.LatLng(29.782556, -101.929436), new google.maps.LatLng(29.332951, -100.940666), new google.maps.LatLng(26.397559, -99.08432), new google.maps.LatLng(25.836977, -97.394314), new google.maps.LatLng(25.956347, -97.146091), new google.maps.LatLng(26.145268, -97.166862), new google.maps.LatLng(26.225679, -97.177162), new google.maps.LatLng(26.290645, -97.190895), new google.maps.LatLng(26.410936, -97.219391), new google.maps.LatLng(26.809364, -97.349167), new google.maps.LatLng(27.045367, -97.378693), new google.maps.LatLng(27.205938, -97.365303), new google.maps.LatLng(27.83456, -97.044575), new google.maps.LatLng(28.334604, -96.415329), new google.maps.LatLng(28.93305, -95.292664), new google.maps.LatLng(29.683281, -93.834229), new google.maps.LatLng(29.764377, -93.891907), new google.maps.LatLng(29.795368, -93.927612)
    ];

    statTX.setPath(points);
    statTX.setVisible(false);
    statTX.setMap(mapMain);

    // Construct the polygon
    var rollTX = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollTX, 'mouseover', function () { rollTX.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollTX, 'mouseout', function () { rollTX.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollTX, 'click', function () {
        selectState('TX');
    });
    rollTX.setMap(mapMain);

    //Utah
    points = [
        new google.maps.LatLng(41.994, -114.04), new google.maps.LatLng(37, -114.049), new google.maps.LatLng(36.999, -109.044), new google.maps.LatLng(41, -109.049), new google.maps.LatLng(41, -111.045), new google.maps.LatLng(42.001, -111.045)
    ];

    statUT.setPath(points);
    statUT.setVisible(false);
    statUT.setMap(mapMain);

    // Construct the polygon
    var rollUT = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollUT, 'mouseover', function () { rollUT.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollUT, 'mouseout', function () { rollUT.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollUT, 'click', function () {
        selectState('UT');
    });
    rollUT.setMap(mapMain);

    //Vermont
    points = [
        new google.maps.LatLng(42.727, -72.459), new google.maps.LatLng(42.872, -72.555), new google.maps.LatLng(43.005, -72.445), new google.maps.LatLng(43.574, -72.38), new google.maps.LatLng(44.081, -72.033), new google.maps.LatLng(44.319, -72.032), new google.maps.LatLng(44.506, -71.58), new google.maps.LatLng(44.588, -71.535), new google.maps.LatLng(44.752, -71.632), new google.maps.LatLng(45.013, -71.502), new google.maps.LatLng(45.01069, -73.343697), new google.maps.LatLng(43.752, -73.363), new google.maps.LatLng(43.588, -73.431), new google.maps.LatLng(43.627, -73.304), new google.maps.LatLng(43.533, -73.242), new google.maps.LatLng(42.746, -73.265)
    ];

    statVT.setPath(points);
    statVT.setVisible(false);
    statVT.setMap(mapMain);

    // Construct the polygon
    var rollVT = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollVT, 'mouseover', function () { rollVT.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollVT, 'mouseout', function () { rollVT.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollVT, 'click', function () {
        selectState('VT');
    });
    rollVT.setMap(mapMain);

    //Virginia
    points = [
        new google.maps.LatLng(38.015, -75.387), new google.maps.LatLng(37.979, -75.632), new google.maps.LatLng(37.883, -76.234), new google.maps.LatLng(37.993, -76.576), new google.maps.LatLng(38.042, -76.512), new google.maps.LatLng(38.144, -76.616), new google.maps.LatLng(38.155, -76.705), new google.maps.LatLng(38.065, -76.691), new google.maps.LatLng(38.164, -76.774), new google.maps.LatLng(38.195, -76.989), new google.maps.LatLng(38.4, -77.05), new google.maps.LatLng(38.351, -77.363), new google.maps.LatLng(38.357, -77.29), new google.maps.LatLng(38.438, -77.37), new google.maps.LatLng(38.394, -77.312), new google.maps.LatLng(38.659, -77.243), new google.maps.LatLng(38.72, -77.045), new google.maps.LatLng(38.911, -77.101), new google.maps.LatLng(38.934, -77.12), new google.maps.LatLng(39.077, -77.463), new google.maps.LatLng(39.14, -77.526), new google.maps.LatLng(39.225, -77.458), new google.maps.LatLng(39.307, -77.636), new google.maps.LatLng(39.31, -77.648), new google.maps.LatLng(39.321, -77.719), new google.maps.LatLng(39.132, -77.828), new google.maps.LatLng(39.465, -78.347), new google.maps.LatLng(39.166, -78.405), new google.maps.LatLng(38.762, -78.869), new google.maps.LatLng(38.846, -78.999), new google.maps.LatLng(38.421, -79.28), new google.maps.LatLng(38.591, -79.649), new google.maps.LatLng(38.271, -79.788), new google.maps.LatLng(37.689, -80.307), new google.maps.LatLng(37.627, -80.221), new google.maps.LatLng(37.508, -80.299), new google.maps.LatLng(37.426, -80.466), new google.maps.LatLng(37.429, -80.859), new google.maps.LatLng(37.317, -80.896), new google.maps.LatLng(37.234, -81.225), new google.maps.LatLng(37.337, -81.362), new google.maps.LatLng(37.201, -81.677), new google.maps.LatLng(37.359, -81.927), new google.maps.LatLng(37.538, -81.968), new google.maps.LatLng(37.121, -82.721), new google.maps.LatLng(36.897, -82.873), new google.maps.LatLng(36.852, -83.074), new google.maps.LatLng(36.745, -83.133), new google.maps.LatLng(36.601, -83.675), new google.maps.LatLng(36.588, -81.677), new google.maps.LatLng(36.542, -79.138), new google.maps.LatLng(36.542, -78.917), new google.maps.LatLng(36.55, -76.161), new google.maps.LatLng(36.55, -76.156), new google.maps.LatLng(36.55, -76.035), new google.maps.LatLng(36.55, -76.006), new google.maps.LatLng(36.55, -75.988), new google.maps.LatLng(36.55, -75.894), new google.maps.LatLng(36.55, -75.884), new google.maps.LatLng(36.55, -75.966), new google.maps.LatLng(36.55, -75.929)
    ];

    statVA.setPath(points);
    statVA.setVisible(false);
    statVA.setMap(mapMain);

    // Construct the polygon
    var rollVA = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollVA, 'mouseover', function () { rollVA.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollVA, 'mouseout', function () { rollVA.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollVA, 'click', function () {
        selectState('VA');
    });
    rollVA.setMap(mapMain);

    //Washington (TODO: better coastline)
    points = [
        new google.maps.LatLng(48.499318, -124.744263), new google.maps.LatLng(48.224673, -123.53714), new google.maps.LatLng(48.283193, -123.244629), new google.maps.LatLng(48.422821, -123.11142), new google.maps.LatLng(48.691867, -123.270721), new google.maps.LatLng(48.766147, -123.005676), new google.maps.LatLng(48.831278, -123.00705), new google.maps.LatLng(49.001619, -123.32119), new google.maps.LatLng(49.00252, -122.497902), new google.maps.LatLng(48.997339, -121.755638), new google.maps.LatLng(49.000042, -121.385193), new google.maps.LatLng(49.000042, -120.669022), new google.maps.LatLng(48.999366, -120.051727), new google.maps.LatLng(49.000042, -119.621887), new google.maps.LatLng(49.000042, -119.102097), new google.maps.LatLng(49.000042, -118.652687), new google.maps.LatLng(49.000267, -118.22216), new google.maps.LatLng(48.999817, -117.933769), new google.maps.LatLng(49.000493, -117.635765), new google.maps.LatLng(48.9991, -117.0323), new google.maps.LatLng(48.999, -117.031), new google.maps.LatLng(46.354, -117.06), new google.maps.LatLng(46.168, -116.921), new google.maps.LatLng(46.088, -116.981), new google.maps.LatLng(45.995, -116.914), new google.maps.LatLng(46, -118.985), new google.maps.LatLng(45.699, -120.401), new google.maps.LatLng(45.746, -120.633), new google.maps.LatLng(45.606, -121.182), new google.maps.LatLng(45.705, -121.336), new google.maps.LatLng(45.707, -121.809), new google.maps.LatLng(45.544, -122.295), new google.maps.LatLng(45.657, -122.762), new google.maps.LatLng(46.084, -122.902), new google.maps.LatLng(46.161, -123.226), new google.maps.LatLng(46.224, -123.426), new google.maps.LatLng(46.262, -123.664), new google.maps.LatLng(46.256, -123.951), new google.maps.LatLng(46.267, -123.97), new google.maps.LatLng(46.298, -124.028), new google.maps.LatLng(46.267, -124.034)
    ];

    statWA.setPath(points);
    statWA.setVisible(false);
    statWA.setMap(mapMain);

    // Construct the polygon
    var rollWA = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollWA, 'mouseover', function () { rollWA.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollWA, 'mouseout', function () { rollWA.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollWA, 'click', function () {
        selectState('WA');
    });
    rollWA.setMap(mapMain);

    //West Virginia
    points = [
        new google.maps.LatLng(39.321, -77.719), new google.maps.LatLng(39.132, -77.828), new google.maps.LatLng(39.465, -78.347), new google.maps.LatLng(39.166, -78.405), new google.maps.LatLng(38.762, -78.869), new google.maps.LatLng(38.846, -78.999), new google.maps.LatLng(38.421, -79.28), new google.maps.LatLng(38.591, -79.649), new google.maps.LatLng(38.271, -79.788), new google.maps.LatLng(37.689, -80.307), new google.maps.LatLng(37.627, -80.221), new google.maps.LatLng(37.508, -80.299), new google.maps.LatLng(37.426, -80.466), new google.maps.LatLng(37.429, -80.859), new google.maps.LatLng(37.317, -80.896), new google.maps.LatLng(37.234, -81.225), new google.maps.LatLng(37.337, -81.362), new google.maps.LatLng(37.201, -81.677), new google.maps.LatLng(37.359, -81.927), new google.maps.LatLng(37.538, -81.968), new google.maps.LatLng(37.678, -82.304), new google.maps.LatLng(37.93, -82.5), new google.maps.LatLng(37.98, -82.464), new google.maps.LatLng(38.162, -82.643), new google.maps.LatLng(38.421, -82.594), new google.maps.LatLng(38.445, -82.328), new google.maps.LatLng(38.593, -82.274), new google.maps.LatLng(38.596, -82.268), new google.maps.LatLng(38.605, -82.176), new google.maps.LatLng(38.787, -82.221), new google.maps.LatLng(39.025, -82.037), new google.maps.LatLng(38.875, -81.899), new google.maps.LatLng(38.923, -81.766), new google.maps.LatLng(39.077, -81.814), new google.maps.LatLng(39.268, -81.686), new google.maps.LatLng(39.268, -81.57), new google.maps.LatLng(39.41, -81.453), new google.maps.LatLng(39.342, -81.375), new google.maps.LatLng(39.387, -81.217), new google.maps.LatLng(39.625, -80.878), new google.maps.LatLng(40.313, -80.602), new google.maps.LatLng(40.584, -80.667), new google.maps.LatLng(40.638, -80.519), new google.maps.LatLng(39.721, -80.519), new google.maps.LatLng(39.721, -79.477), new google.maps.LatLng(39.202, -79.473), new google.maps.LatLng(39.474, -79.105), new google.maps.LatLng(39.441, -78.958), new google.maps.LatLng(39.645, -78.776), new google.maps.LatLng(39.544, -78.687), new google.maps.LatLng(39.516, -78.468), new google.maps.LatLng(39.624, -78.428), new google.maps.LatLng(39.696, -78.174), new google.maps.LatLng(39.603, -77.834), new google.maps.LatLng(39.552, -77.887), new google.maps.LatLng(39.496, -77.766), new google.maps.LatLng(39.321, -77.719)
    ];

    statWV.setPath(points);
    statWV.setVisible(false);
    statWV.setMap(mapMain);

    // Construct the polygon
    var rollWV = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollWV, 'mouseover', function () { rollWV.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollWV, 'mouseout', function () { rollWV.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollWV, 'click', function () {
        selectState('WV');
    });
    rollWV.setMap(mapMain);

    //Wisconsin
    points = [
        new google.maps.LatLng(43.501, -91.217), new google.maps.LatLng(43.353, -91.206), new google.maps.LatLng(43.258, -91.062), new google.maps.LatLng(43.252, -91.059), new google.maps.LatLng(43.125, -91.178), new google.maps.LatLng(42.751, -91.065), new google.maps.LatLng(42.634, -90.707), new google.maps.LatLng(42.508, -90.64), new google.maps.LatLng(42.493365, -87.020302), new google.maps.LatLng(42.73264, -87.053947), new google.maps.LatLng(43.378602, -87.147331), new google.maps.LatLng(43.499507, -87.137032), new google.maps.LatLng(43.670355, -87.125359), new google.maps.LatLng(43.733399, -87.114029), new google.maps.LatLng(43.999483, -87.046051), new google.maps.LatLng(44.130232, -87.013092), new google.maps.LatLng(44.161273, -87.000046), new google.maps.LatLng(44.499934, -86.85482), new google.maps.LatLng(44.881661, -86.685219), new google.maps.LatLng(45.081036, -86.499481), new google.maps.LatLng(45.236218, -86.250916), new google.maps.LatLng(45.437008, -86.750793), new google.maps.LatLng(45.437008, -87.102356), new google.maps.LatLng(45.205263, -87.40448), new google.maps.LatLng(45.0774, -87.442932), new google.maps.LatLng(45.096, -87.585), new google.maps.LatLng(45.175, -87.735), new google.maps.LatLng(45.369, -87.66), new google.maps.LatLng(45.353, -87.884), new google.maps.LatLng(45.685, -87.783), new google.maps.LatLng(45.81, -88.131), new google.maps.LatLng(45.921, -88.103), new google.maps.LatLng(46.272, -89.8), new google.maps.LatLng(46.3, -89.929), new google.maps.LatLng(46.566, -90.417), new google.maps.LatLng(47.290408, -89.958801), new google.maps.LatLng(47.309034, -90.653687), new google.maps.LatLng(46.702202, -92.015991), new google.maps.LatLng(46.748801, -92.088432), new google.maps.LatLng(46.664, -92.291), new google.maps.LatLng(46.074, -92.293), new google.maps.LatLng(45.891, -92.712), new google.maps.LatLng(45.707, -92.87), new google.maps.LatLng(45.574, -92.882), new google.maps.LatLng(45.438, -92.645), new google.maps.LatLng(45.289, -92.761), new google.maps.LatLng(44.751, -92.808), new google.maps.LatLng(44.569, -92.549), new google.maps.LatLng(44.363, -91.965), new google.maps.LatLng(44.2, -91.875), new google.maps.LatLng(43.996, -91.431), new google.maps.LatLng(43.776, -91.245), new google.maps.LatLng(43.501, -91.217)
    ];

    statWI.setPath(points);
    statWI.setVisible(false);
    statWI.setMap(mapMain);

    // Construct the polygon
    var rollWI = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollWI, 'mouseover', function () { rollWI.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollWI, 'mouseout', function () { rollWI.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollWI, 'click', function () {
        selectState('WI');
    });
    rollWI.setMap(mapMain);

    //Wyoming
    points = [
        new google.maps.LatLng(41.001, -104.053), new google.maps.LatLng(43.002, -104.056), new google.maps.LatLng(44.998, -104.057), new google.maps.LatLng(45.001, -111.054), new google.maps.LatLng(44.475, -111.052), new google.maps.LatLng(42.001, -111.045), new google.maps.LatLng(41, -111.045)
    ];

    statWY.setPath(points);
    statWY.setVisible(false);
    statWY.setMap(mapMain);

    // Construct the polygon
    var rollWY = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollWY, 'mouseover', function () { rollWY.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollWY, 'mouseout', function () { rollWY.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollWY, 'click', function () {
        selectState('WY');
    });
    rollWY.setMap(mapMain);

    //Washington DC
    points = [
        new google.maps.LatLng(38.796991155228994, -77.03342675781255),new google.maps.LatLng(38.892718882654364, -76.90948724365239),new google.maps.LatLng(38.99578933519073, -77.04132318115239),new google.maps.LatLng(38.93546056928436, -77.11925744628911),new google.maps.LatLng(38.92397627037711, -77.11170434570317),new google.maps.LatLng(38.90875003157226, -77.09591149902349),new google.maps.LatLng(38.9034067174248, -77.07805871582036),new google.maps.LatLng(38.89993334756754, -77.06054925537114),new google.maps.LatLng(38.88817606578765, -77.05608605957036),new google.maps.LatLng(38.87160568355958, -77.03754663085942),new google.maps.LatLng(38.85369463636538, -77.02827691650396),new google.maps.LatLng(38.83711621535062, -77.02999353027349),new google.maps.LatLng(38.81224134113325, -77.03239678955083)
    ];

    statDC.setPath(points);
    statDC.setVisible(false);
    statDC.setMap(mapMain);

    // Construct the polygon
    var rollDC = new google.maps.Polygon({
        paths: points,
        strokeColor: rollOutlineColor,
        strokeOpacity: 0,
        strokeWeight: rollStroke,
        fillColor: rollFillColor,
        fillOpacity: rollFillOpac
    });

    //add event listeners to polygon, then add polygon to map
    google.maps.event.addListener(rollDC, 'mouseover', function () { rollDC.setOptions({ strokeOpacity: 1 }); });
    google.maps.event.addListener(rollDC, 'mouseout', function () { rollDC.setOptions({ strokeOpacity: 0 }); });
    google.maps.event.addListener(rollDC, 'click', function () {
        selectState('DC');
    });
    rollDC.setMap(mapMain);




}

//----state pre loader--/function checks to make sure all content loaded on page/----------//

