var psgooglemaps = psgooglemaps || {};


// Google Maps JavaScript API V3
// http://code.google.com/apis/maps/documentation/javascript/overlays.html#SimpleIcons

(function () {
	
	
	// this controls the map area location
	var generalMap;
	// Company Marker Location
	var markerLocation;
	// window info for marker
	var sMapInfoWindowImage;
	
	var arrayURL    = ["twitter.json", "twitter2.json", "twitter3.json", "twitter4.json"];
    var iFeed       = 0;

    var arrayCircle   = [];
    var arrayCircle2  = [];


    psgooglemaps.boolPagination = false;



	psgooglemaps.LoadMap = function(sDivID, boolLaunchModal)
	{

		generalMap 			= new google.maps.LatLng(42,-97.7445);

		markerLocation 		= new google.maps.LatLng(30.2665,-97.743);

		//sMapInfoWindowImage	= '<img src="/images/maps-predictive-science.jpg" />';



        if (boolLaunchModal)
        {
            var modalProperties = {

                div_location : sDivID,
                header : "Twitter Activity Map - Share of Voice",
                subheader : "Share of Voice on Twitter by City",
                function : "launch_maps",
                showInsights : true,
                tooltip : "A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."
            }


            ps_modals.launch(modalProperties);

        }
        else
        {
            psgooglemaps.Initialize(sDivID, 3, 0);
        }
	}



	
	psgooglemaps.Initialize = function(sDivID, iZoomAmount, iCount)
	{

		if ($("#modal_widget #modal-widget-body").html() != "")
        {
            $("#modal_widget #modal-widget-body").html("");
        }

		
		// marker for location
		var image 				= '/images/icon_map_predictivescience.png';
		
		
		// Create an array of styles.
		var predictiveScienceStyles = 
		[{
		  featureType: "all",
		  stylers: [
              { "hue": "#005eff" },
              { "gamma": 0.73 },
              { "lightness": 15 },
              { "saturation": -76 }
			
		  ]
		}];
	
	
	
		var predictiveScienceType 	= new google.maps.StyledMapType(predictiveScienceStyles, {name: "Predictive Science"});
		
				
		
		var myOptions = {
			zoom: iZoomAmount,
			center: generalMap,
            // disables zoom toolbar
            disableDefaultUI: true,
            scrollwheel: false,
			mapTypeControlOptions: {
		  	mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'predictive_science']
		    }
		}
		
		
		var map 				= new google.maps.Map(document.getElementById(sDivID), myOptions);

        /////////////////////////////////////////////////////////////////

        //psgooglemaps.pagination(map);
        psgooglemaps.LoadData(map, arrayURL[iCount]);



        /////////////////////////////////////////////////////////////////

		/*
		*
		* Controls the marker that shows up on the map
		*
		 */

		var marker = new google.maps.Marker({
		  position: markerLocation
		  /* map: map */
		  /* icon: image */
		});
		
		
		var infowindow = new google.maps.InfoWindow({
		  content: sMapInfoWindowImage
		});

        // marker
		//infowindow.open(map, marker);
		
		
		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('predictive_science', predictiveScienceType);
		//map.setMapTypeId('predictive_science');
		

		function toggleBounce() {
		
		  if (marker.getAnimation() != null) {
			marker.setAnimation(null);
		  } else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}
		
		
		//google.maps.event.addListener(marker, 'click', toggleBounce);


    }



    psgooglemaps.animateCircle = function(obj) {
        var count = 0;
        window.setInterval(function() {
            count = (count + 1) % 30;

            var icons = obj.get('icon');
            icons.scale = (count *.5);
            icons.fillOpacity = 1 - (count *.03);
            obj.set('icon', icons);
        }, 20);
    }






    /*
    * Allows pagination to switch maps
    * Instantiated by psgooglemaps.LoadData
    *
    */


    psgooglemaps.pagination = function(obj)
    {


        $("#latest_insights_nav_back").click(function(){

            console.log("psgooglemaps : pagination : Pagination Going Back");

            iFeed--;

            if (iFeed < 0)
            {
                iFeed = arrayURL.length - 1;
            }

            psgooglemaps.Initialize("modal-widget-body", 4, iFeed);

        });

        $("#latest_insights_nav_next").click(function(){

            console.log("psgooglemaps : pagination : Pagination Going Forward");

            iFeed++;

            if (iFeed >= arrayURL.length)
            {
                iFeed = 0;
            }

            psgooglemaps.Initialize("modal-widget-body", 4, iFeed);

        });

    }
    
    

    psgooglemaps.LoadData = function(obj, iFeed)
    {


        $.ajax({
            type: 'GET',
            cache: true,
            data: "",
            url: "/" + iFeed,
            dataType: 'json',
            success: function(dataResponse) {

                $("#latest_insights_change p").text(dataResponse.change);
                $("#latest_insights_weekly p").text(dataResponse.weekly);
                $(".latest_insights_date").text(dataResponse.insight_date);
                $(".latest_insights_content").text(dataResponse.insight_content);

                var hexColor;

                iFeed == "twitter2.json" ? hexColor = '#0000FF' : hexColor = '#FF9900';



                for (var i=0; i < dataResponse.locations.length ;i++)
                {

                    var iPopulationCondition = 900000;


                    var circleOutline = {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillOpacity: 0,
                        fillColor: "#ff0000",
                        strokeOpacity:.8,
                        strokeColor: ((dataResponse.locations[i].population) > iPopulationCondition ?  '#ff0000' : hexColor),
                        strokeWeight: 2.5,
                        scale: (dataResponse.locations[i].population / 400000) * Math.pow(1.1, obj.getZoom()) /* circles get bigger as you zoom in */
                    };


                    var latLng = new google.maps.LatLng(dataResponse.locations[i].latitude, dataResponse.locations[i].longitude)
                    var newCircle = new google.maps.Marker({
                        icon: circleOutline,
                        position: latLng
                    });


                    var circleSolid = {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillOpacity:.8,
                        fillColor: ((dataResponse.locations[i].population) > iPopulationCondition ?  '#ff0000' : '#FF9900'),

                        strokeOpacity:0,
                        /*
                        strokeColor: "#ff0000",
                        strokeWeight: 0,
                        */
                        scale: (dataResponse.locations[i].population / 850000) * Math.pow(1.1, obj.getZoom()) /* circles get bigger as you zoom in */
                    };



                    var latLng = new google.maps.LatLng(dataResponse.locations[i].latitude, dataResponse.locations[i].longitude)
                    var newCircle2 = new google.maps.Marker({
                        icon: circleSolid,
                        position: latLng
                    });

                    // Animates the circles
                    //psgooglemaps.animateCircle(newCircle2);



                    newCircle.setMap(obj);
                    newCircle2.setMap(obj);

                    arrayCircle.push(newCircle);
                    arrayCircle2.push(newCircle2);

                }

                //alert("psgooglemaps.boolPagination : " + psgooglemaps.boolPagination + " latest_insights_nav_back : " + $("#latest_insights_nav_back").length);


                var iCheckPagination = setInterval(myMethod, 500);

                function myMethod()
                {


                    if (!psgooglemaps.boolPagination && $("#latest_insights_nav_back").length == 1)
                    {
                        psgooglemaps.boolPagination = true;
                        psgooglemaps.pagination(obj);
                        console.log("pagination connected");

                        clearInterval(iCheckPagination);
                    }

                }




                //console.log('Success making product feed request');
            },
            error: function() { console.log('Error making request'); },
            json: 'json'
        });
    }



	
	
	
})();

$(window).load(function () {

    psgooglemaps.LoadMap("maps_widget", false);

});


//google.maps.event.addDomListener(window, 'load', psgooglemaps.LoadAustin);
//google.maps.event.addDomListener(window, 'load', psgooglemaps.LoadElPaso);

