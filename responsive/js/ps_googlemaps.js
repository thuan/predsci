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
    APIgetInsightsSOV.insightUrl = "insight.json";
    APIgetInsightsFollowers.url = "twitter2.json";
    APIgetInsightsFollowers.insightUrl = "insight2.json";
    APIgetInsightsVolume.url = "twitter3.json";
    APIgetInsightsVolume.insightUrl = "insight3.json";

    var arrayURL    = [APIgetInsightsSOV, APIgetInsightsFollowers, APIgetInsightsVolume];
    var iFeed       = 0;

    var arrayCircle   = [];
    var arrayCircle2  = [];

    ps_googlemaps.boolPagination = false;

    ps_googlemaps.loadMap = function(definitions, modal)
    {
        if (modal)  {
            var modalProperties = definitions.modal_propeties;
            ps_modals.launch(modalProperties);
        }
        else {
            ps_googlemaps.Initialize(definitions, 0);
        }
    }

    ps_googlemaps.Initialize = function(definitions,  feedNumber)
    {
        if ($("#modal_widget #modal-widget-body").html() != ""){
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
            if (iFeed >= arrayURL.length){
                iFeed = 0;
            }
            ps_googlemaps.Initialize(definitions.modal_propeties,iFeed);
        });
    }

    ps_googlemaps.loadData = function(map, iFeed){
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
                    ps_googlemaps.buildInsgihtText(iFeed);

                    $.each( dataResponse.locations, function( i, location ) {

                        totalcount = location.tweet_count;
                        //console.log(location.city + " " + totalcount);
                        getScale = (totalcount/max+.75);
                        //console.log(getScale);
                        percentage = 0;
                        maxcount = 0;
                        setColor = "#20988e";
                        itemlist = "";

                        $.each(location.tags, function( i, val ) {

                            if (val.tweet_count > maxcount) {
                                maxcount = val.tweet_count;
                                if (val.tag_name == "verizon") {
                                    setColor = "#ff3300"
                                }
                                else if (val.tag_name == "sprint") {
                                    setColor = "#ee9d00"
                                }
                                else if (val.tag_name == "att") {
                                    setColor = "#0099cc"
                                }
                                else if (val.tag_name == "tmobile") {
                                    setColor = "#e20074"
                                }
                                else if (val.tag_name == "us_cellular") {
                                    setColor = "#d8e9e8"
                                }
                                else if (val.tag_name == "Netflix") {
                                    setColor = "#4ef0e3"
                                }

                                console.log(location.city + " " + val.tag_name + " " + setColor);
                            };

                            percentage = Math.round((val.tweet_count/totalcount)*100);
                            itemlist += "<div style='opacity:1; line-height:10px; padding:2px; z-index:9999;'>" +
                                val.display_name + " " + percentage + "%</div>";
                        });

                        ps_googlemaps.buildMakers(map, location, setColor, itemlist, getScale, hexColor);
                    });

                    var iCheckPagination = 0;

                    function myMethod(){
                        if (!ps_googlemaps.boolPagination && $("#latest_insights_nav_back").length == 1)
                        {
                            ps_googlemaps.boolPagination = true;
                            ps_googlemaps.pagination(map);
                            console.log("pagination connected");
                            clearInterval(iCheckPagination);
                        }
                    }

                    iCheckPagination = setInterval(myMethod, 500);
                }

                if (iFeed.name == "Followers") {
                    ps_googlemaps.buildInsgihtText(iFeed);
                    var max = dataResponse.locations[0].new_follower_count;

                    $.each( dataResponse.locations, function( i, location ) {
                        itemlist = "";
                        totalcount = 0;
                        percentage = 0;
                        maxcount = 0;
                        setColor = "";
                        getScale = 0;
                        subtext = "";

                        totalcount = location.new_follower_count;
                        getScale = (totalcount/max+.75);
                        setColor = "#3c7ce5";

                        if (getScale > 1.15) {setColor="#FF0000"}

                        if (totalcount > 1) {
                            subtext = "new followers"
                        } else {
                            subtext = "new follower"
                        }
                        itemlist += "<div style='opacity:1; line-height:10px; padding:2px; z-index:9999'>" +
                            location.new_follower_count + " " + subtext + "</div>";

                        ps_googlemaps.buildMakers(map, location, setColor, itemlist, getScale, hexColor);
                    });

                    var iCheckPagination = 0;

                    function myMethod() {
                        if (!ps_googlemaps.boolPagination && $("#latest_insights_nav_back").length == 1)
                        {
                            ps_googlemaps.boolPagination = true;
                            ps_googlemaps.pagination(map);
                            console.log("pagination connected");
                            clearInterval(iCheckPagination);
                        }
                    }
                    iCheckPagination = setInterval(myMethod, 500);
                }
                if (iFeed.name=="Volume") {
                    ps_googlemaps.buildInsgihtText(iFeed);

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

                        ps_googlemaps.buildMakers(map, location, setColor, itemlist, getScale, hexColor);
                    });

                    var iCheckPagination = 0;

                    function myMethod() {
                        if (!ps_googlemaps.boolPagination && $("#latest_insights_nav_back").length == 1){
                            ps_googlemaps.boolPagination = true;
                            ps_googlemaps.pagination(map);
                            console.log("pagination connected");
                            clearInterval(iCheckPagination);
                        }
                    }
                    iCheckPagination = setInterval(myMethod, 500);
                }



            }, error: function(jqXHR, textStatus, errorThrown) { console.log(errorThrown); console.log(textStatus); }
        });
    }

    ps_googlemaps.buildMakers = function(map, location, setColor, itemlist, getScale){
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

        var circleOutline = {
            path: targetSVG,
            anchor	: new google.maps.Point(8,10),
            fillOpacity: 1,
            strokeWeight: 0,
            fillColor: setColor,
            scale: getScale
        };

        var positionCircleOutline = new google.maps.LatLng(location.latitude, location.longitude);

        var markerOutlineCircle = new google.maps.Marker({
            icon: circleOutline,
            position: positionCircleOutline,
            map: map,
            tooltip: "<b>" + location.city + "</b><br>" + itemlist
        });

        var circleSolid = {
            path: google.maps.SymbolPath.CIRCLE,
            fillOpacity:1,
            fillColor: setColor,
            strokeOpacity:0,
            scale: getScale
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

        google.maps.event.addListener(markerOutlineCircle, 'mouseover', function() {
            infowindow1.setContent(this.tooltip);
            infowindow1.open(map, this);
        });

        google.maps.event.addListener(markerOutlineCircle, 'mouseout', function() {
            infowindow1.close();
        });

        arrayCircle.push(markerOutlineCircle);
        arrayCircle2.push(markerSolidCircle);
    }

    ps_googlemaps.buildInsgihtText = function(iFeed){
        var taburl = iFeed.insightUrl;
        var datacard = iFeed.insightDataCard;

        if (taburl.toLowerCase().indexOf("http") >= 0) {
            var jsontype2 = "JSONP"
        } else {
            var jsontype2 = "JSON"
        };

        var mappoints = [];
        var addStyle = "";

        $('#modal_widget .modal-header h3').html("Twitter Activity Map - "+iFeed.insightTitle);
        $('#modal_widget .modal-header small').html(iFeed.insightSubtitle);

        $.ajax({
            url : taburl,
            dataType : jsontype2,
            beforeSend: function(data) {
            },
            error: function(data) {
                console.log("error loading tab data from: " + taburl);
            },
            success : function(data) {
                if (iFeed.name =='ShareOfVoice') {

                    var currentweek = data.periods[0].tags;
                    var previousweek = data.periods[1].tags;

                    var today = {
                        vzw: 0,
                        comp: 0,
                        total: 0
                    };
                    var lastWeek = {
                        vzw: 0,
                        comp: 0,
                        total: 0
                    };

                    for (var i=0; i < currentweek.length; i++) {
                        if (currentweek[i].tag_name == 'verizon') {
                            today.vzw = currentweek[i].volume;
                        } else {
                            today.comp += currentweek[i].volume;
                        }
                        today.total += currentweek[i].volume;
                    }
                    for (var i=0; i < previousweek.length; i++) {
                        if (previousweek[i].tag_name == 'verizon') {
                            lastWeek.vzw = previousweek[i].volume;
                        } else {
                            lastWeek.comp += previousweek[i].volume;
                        }
                        lastWeek.total += previousweek[i].volume;
                    }

                    today.sov = Math.round((today.vzw / today.total) * 100);
                    lastWeek.sov = Math.round((lastWeek.vzw / lastWeek.total) * 100);
                    var prefix = "";

                    if (today.sov > lastWeek.sov) {prefix = "+"}

                    var difference = (today.sov);
                    var differencerelative = (today.sov - lastWeek.sov);

                    $("#latest_insights_change").html("<strong>W-O-W Change </strong><p>"+prefix + Math.abs(Math.round(differencerelative)) + "%</p>");
                    $("#latest_insights_weekly").html("<strong>Weekly Total</strong><p>"+today.vzw.addCommas()+"</p>");

                } else if (iFeed.name =='Volume') {
                    var currentweek = data.volume[0].volume;
                    var previousweek = data.volume[1].volume;
                    var difference = (currentweek-previousweek);
                    var differencerelative = ((currentweek-previousweek) / previousweek) * 100;

                    if (currentweek > previousweek) {prefix = "+"}
                    if (previousweek > currentweek) {prefix = "-"}

                    $("#latest_insights_change").html("<strong>W-O-W Change</strong><p>"+prefix + Math.abs(Math.round(differencerelative)) + "%</p>");
                    $("#latest_insights_weekly").html("<strong>Weekly Total</strong><p>"+currentweek.addCommas()+"</p>")

                } else if (iFeed.name =='Followers') {
                    var prefix = "";
                    var currentweek = data.periods[0].accounts[0].new_follower_count;
                    var previousweek = data.periods[1].accounts[0].new_follower_count;
                    var difference = (currentweek-previousweek);
                    var differencerelative = ((currentweek-previousweek) / previousweek) * 100;
                    if (currentweek > previousweek) {prefix = "+"}
                    if (previousweek > currentweek) {prefix = "-"}

                    $("#latest_insights_change").html("<strong>W-O-W Change</strong><p>"+prefix + Math.abs(Math.round(differencerelative)) + "%");
                    $("#latest_insights_weekly").html("<strong>Weekly Total</strong><p>"+currentweek.addCommas()+"</p>");

                }
            }
        });
    }
    Number.prototype.addCommas = function() {
        var nStr = this + ''; // convert number to string
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    };
})();

    