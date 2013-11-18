var ps_googlemaps = ps_googlemaps || {};

// Google Maps JavaScript API V3
// http://code.google.com/apis/maps/documentation/javascript/overlays.html#SimpleIcons

(function () {

    var APIgetInsightsSOV = {name: "ShareOfVoice", 
                             url: "/livecache/vzw_twitter_topic_locations_share_of_voice_1d.json", 
                             insightUrl: "/livecache/vzw_twitter_topic_share_of_voice_summary_1d.json", 
                             insightTitle:"Share of Voice",
                             insightSubtitle: "Share of Voice on Twitter by City",
                             insightDataCard: "A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."};

    var APIgetInsightsFollowers = {name: "Followers", 
                                   url: "/livecache/vzw_twitter_locations_followers_1d.json?key=52812a364dd25", 
                                   insightUrl: "/livecache/vzw_twitter_followers_summary_1d.json", 
                                   insightTitle:"Followers",
                                   insightSubtitle: "Followers on Twitter by City",
                                   insightDataCard: "A United States map displaying volume of new Twitter followers for all Verizon Wireless Twitter handles. @verizonwirelss @vznews @vzwsupport @vzwdeals @vzwb2b"};
   
    var APIgetInsightsVolume = {name: "Volume", 
                                url: "/livecache/vzw_twitter_topic_locations_volume_1d.json",
                                insightUrl: "/livecache/vzw_twitter_topic_volume_summary_1d.json", 
                                insightTitle:"Volume",
                                insightSubtitle: "Wireless Volume on Twitter by City",
                                insightDataCard: "A United States map showing cities with the most Twitter volume related to Verizon Wireless."};



    APIgetInsightsSOV.url = "twitter.json";
    APIgetInsightsFollowers.url = "twitter2.json";
    APIgetInsightsVolume.url = "twitter3.json";

    var arrayURL    = [APIgetInsightsSOV, APIgetInsightsFollowers, APIgetInsightsVolume];
    var iFeed       = 0;

    var arrayCircle   = [];
    var arrayCircle2  = [];

    ps_googlemaps.boolPagination = false;

    ps_googlemaps.loadMap = function(definitions, modal)
    {
        if (modal)
        {
            var modalProperties = definitions.modal_propeties;
            ps_modals.launch(modalProperties);
        }
        else
        {
            ps_googlemaps.Initialize(definitions, 0);
        }
    }

    ps_googlemaps.Initialize = function(definitions,  feedNumber)
    {
        if ($("#modal_widget #modal-widget-body").html() != "")
        {
            $("#modal_widget #modal-widget-body").html("");
        }

        //var image = '/images/icon_map_predictivescience.png';

        var googleMapsCustonStyle =
        [{
          featureType: "all",
          stylers: [
              { "hue": "#005eff" },
              { "gamma": 0.73 },
              { "lightness": 15 },
              { "saturation": -76 }
          ]
        }];

        var googleMapsStyledMapConf = new google.maps.StyledMapType(googleMapsCustonStyle, {name: "Predictive Science"});

        var googleMapsOptions = {
            zoom: definitions.zoom_amount,
            center: definitions.generalMap,
            disableDefaultUI: true,
            scrollwheel: false,
            mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'predictive_science']
            }
        }

        var map = new google.maps.Map(document.getElementById(definitions.div_location), googleMapsOptions);

        //ps_googlemaps.pagination(map);
        ps_googlemaps.loadData(map, arrayURL[feedNumber]);

        map.mapTypes.set('predictive_science', googleMapsStyledMapConf);

    }

    ps_googlemaps.pagination = function(obj)
    {

        $("#latest_insights_nav_back").click(function(){
            console.log("ps_googlemaps : pagination : Pagination Going Back");
            iFeed--;
            if (iFeed < 0)
            {
                iFeed = arrayURL.length - 1;
            }
            ps_googlemaps.Initialize(definitions.modal_propeties, iFeed);
        });

        $("#latest_insights_nav_next").click(function(){
            console.log("ps_googlemaps : pagination : Pagination Going Forward");
            iFeed++;
            if (iFeed >= arrayURL.length)
            {
                iFeed = 0;
            }
            ps_googlemaps.Initialize(definitions.modal_propeties,iFeed);
        });
    }

    ps_googlemaps.loadData = function(map, iFeed)
    {
        var iPopulationCondition = 900000;
        $.ajax({
            type: 'GET',
            data: "",
            url: iFeed.url,
            dataType: 'json',
            cache: true,
            success: function(dataResponse) {

                $("#latest_insights_change p").text(dataResponse.change);
                $("#latest_insights_weekly p").text(dataResponse.weekly);
                $(".latest_insights_date").text(dataResponse.insight_date);
                $(".latest_insights_content").text(dataResponse.insight_content);

                var hexColor;

                iFeed == arrayURL[1] ? hexColor = '#0000FF' : hexColor = '#FF9900';

                var max = dataResponse.locations[0].tweet_count;
                var min = 0;

                var itemlist = "";
                var totalcount = 0;
                var percentage = 0;
                var maxcount = 0;
                var setColor = "#20988e";
                var getScale = 0;

            if (iFeed.name =="ShareOfVoice") {

                $.each( dataResponse.locations, function( i, location ) {
                
                   totalcount = location.tweet_count;
                    //console.log(location.city + " " + totalcount);
                    getScale = (totalcount/max+.75);
                    //console.log(getScale);
                    var itemlist = "";

                    var percentage = 0;

                    $.each(location.tags, function( i, val ) {

                        percentage = Math.round((val.tweet_count/totalcount)*100);
                        itemlist += "<div style='opacity:1; line-height:10px; padding:2px; z-index:9999;'>" + 
                                    val.display_name + " " + percentage + "%</div>";
                    });
    
                    ps_googlemaps.buildMakers(map, location, setColor, itemlist, iPopulationCondition, hexColor);
                });

                var iCheckPagination = setInterval(myMethod, 500);

                function myMethod()
                {
                    if (!ps_googlemaps.boolPagination && $("#latest_insights_nav_back").length == 1)
                    {
                        ps_googlemaps.boolPagination = true;
                        ps_googlemaps.pagination(map);
                        console.log("pagination connected");
                        clearInterval(iCheckPagination);
                    }
                }
            
            }
            if (iFeed.name == "Followers") {

                $.each( dataResponse.locations, function( i, location ) {
                    
                    itemlist = "";
                    totalcount = 0;
                    percentage = 0;
                    maxcount = 0;
                    setColor = "";
                    getScale = 0;
                    subtext = "";

                    totalcount = location.new_follower_count;
                    //console.log(location.city + " " + totalcount);
                    getScale = (totalcount/max+.75);
                    //console.log(getScale);
                    setColor = "#3c7ce5";

                    //if (getScale > 1.15) {setColor="#FF0000"}

                    if (totalcount > 1) {
                        subtext = "new followers"
                    } else {
                        subtext = "new follower"
                    }
                    itemlist += "<div style='opacity:1; line-height:10px; padding:2px; z-index:9999'>" + 
                    location.new_follower_count + " " + subtext + "</div>";
               
                    ps_googlemaps.buildMakers(map, location, setColor, itemlist, iPopulationCondition, hexColor);
                });

                var iCheckPagination = setInterval(myMethod, 500);

                function myMethod()
                {
                    if (!ps_googlemaps.boolPagination && $("#latest_insights_nav_back").length == 1)
                    {
                        ps_googlemaps.boolPagination = true;
                        ps_googlemaps.pagination(map);
                        console.log("pagination connected");
                        clearInterval(iCheckPagination);
                    }
                }
            }
            if (iFeed.name=="Volume") {

                $.each( dataResponse.locations, function( i, location ) {
                    
                    itemlist = "";
                    totalcount = 0;
                    percentage = 0;
                    maxcount = 0;
                    setColor = "";
                    getScale = 0;
                    subtext = "";

                    totalcount = location.tweet_count;
                    getScale = (totalcount/max+.75);
                    setColor = "#3c7ce5";

                    if (getScale > 1.15) {setColor="#FF0000"}

                    if (location.tweet_count > 1) {
                        subtext = "new tweets"
                    } else {
                    subtext = "new tweet"
                    }
                    itemlist += "<div style='opacity:1; line-height:10px; padding:2px; z-index:9999'>" + 
                    location.tweet_count + " " + subtext + "</div>";

                    var iPopulationCondition = 900000;

                    ps_googlemaps.buildMakers(map, location, setColor, itemlist, iPopulationCondition, hexColor);
                });

                var iCheckPagination = setInterval(myMethod, 500);

                function myMethod()
                {
                    if (!ps_googlemaps.boolPagination && $("#latest_insights_nav_back").length == 1)
                    {
                        ps_googlemaps.boolPagination = true;
                        ps_googlemaps.pagination(map);
                        console.log("pagination connected");
                        clearInterval(iCheckPagination);
                    }
                }
            }

        }, error: function(jqXHR, textStatus, errorThrown) { console.log(errorThrown); console.log(textStatus); }
        });
    }

    ps_googlemaps.buildMakers = function(map, location, setColor, itemlist, iPopulationCondition, hexColor){
        var circleOutline = {
            path: google.maps.SymbolPath.CIRCLE,
            fillOpacity: 0,
            fillColor: hexColor,
            strokeOpacity:.8,
            strokeColor: ((location.population) > iPopulationCondition ?  '#ff0000' : hexColor),
            strokeWeight: 2.5,
            scale: (location.population / 400000) * Math.pow(1.1, map.getZoom()) /* circles get bigger as you zoom in */
        };

        var positionCircleOutline = new google.maps.LatLng(location.latitude, location.longitude);

        var markerOutlineCircle = new google.maps.Marker({
            icon: circleOutline,
            position: positionCircleOutline,
            map: map
        });

        var circleSolid = {
            path: google.maps.SymbolPath.CIRCLE,
            fillOpacity:.8,
            fillColor: ((location.population) > iPopulationCondition ?  '#ff0000' : '#FF9900'),
            strokeOpacity:0,
            scale: (location.population / 850000) * Math.pow(1.1, map.getZoom()) /* circles get bigger as you zoom in */
        };

        var positionSolidCircle = new google.maps.LatLng(location.latitude, location.longitude)

        var markerSolidCircle = new google.maps.Marker({
            icon: circleSolid,
            position: positionSolidCircle,
            map: map,
            tooltip: "<b>" + location.city + "</b><br>" + itemlist
        });

        var infowindow1=new google.maps.InfoWindow();

        google.maps.event.addListener(markerSolidCircle, 'mouseover', function() {
            infowindow1.setContent(this.tooltip);
            infowindow1.open(map, this);
        });

         google.maps.event.addListener(markerSolidCircle, 'mouseout', function() {
            infowindow1.close();
        });

        arrayCircle.push(markerOutlineCircle);
        arrayCircle2.push(markerSolidCircle);

    }
})();

    