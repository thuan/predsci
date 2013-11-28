(function( ps_modals, $, undefined ) {
    ps_modals.launch = function(JSONProperties)
    {
        var boolRunOnce = false;
        JSONProperties.showInsights == undefined ? $showInsights = false : $showInsights = true;
        JSONProperties.showQueryForm == undefined ? $showQueryForm = false : $showQueryForm = true;
        JSONProperties.showToggle1 == undefined ? $showToggle1 = false : $showToggle1 = true;
        JSONProperties.showToggle2 == undefined ? $showToggle2 = false : $showToggle2 = true;
        JSONProperties.showVolumeAndSentimentMenu == undefined ? $showVolumeAndSentimentMenu = false : $showVolumeAndSentimentMenu = true;
        var $function = JSONProperties.function;

        $showInsightsDropdown = JSONProperties.showInsightsDropdown;

        // CLEAR MODAL DIVs
        $("#modal_widget #insight_container").html("");
        $("#modal_widget #modal-widget-body").html("Loading...");
        $("#modal_widget .modal-header h3").text("");
        $("#modal_widget .modal-header small").text("");

        if($showInsightsDropdown === false || $showInsightsDropdown === undefined){
            $("#insight_container").html("");
        }else{
            $("#modal_widget").insights(JSONProperties.insight_url);
        }
        try{
            $('#modal_widget').modal();

            $('#modal_widget').on('show', function(e) {
                if (e.target.id == "modal_widget") {
                    $("#modal_widget #modal-widget-body").html("");
                }
            });

            $('#modal_widget').on('shown', function(e) {
                if (e.target.id == "modal_widget" && !boolRunOnce){
                    boolRunOnce = true;
                    $("#modal_widget #modal-widget-body").css("background-color","black");

                    if ($showInsights){
                        $('#latest_insights_content_holder').html("");

                        if(JSONProperties.function == 'launch_maps'){
                            $.get( "templates/insightsMap.html", function( data ) {
                                $("#modal_widget").prepend(data);
                            });
                        }else{
                            $.get( "templates/insights.html", function( data ) {
                                $("#modal_widget").prepend(data);
                            });
                        }
                        $("#modal_widget").find("#latest_insights_content_holder" ).draggable();
                    }

                    if($showQueryForm){
                        $('#conversation_volume_query').show()
                    }

                    if($showToggle1){
                        $('#toggle1').show()
                    }

                    if($showToggle2){
                        $('#toggle2').show()
                    }

                    $("#modal_widget #modal-widget-body").html("");
                    $("#modal_widget .modal-header h3").text(JSONProperties.title);
                    $("#modal_widget .modal-header small").text(JSONProperties.subtitle);
                    $("#modal_widget #icon-info").attr("data-original-title",JSONProperties.tooltip);

                    switch($function){
                        case "launch_maps":
                            ps_googlemaps.Initialize(JSONProperties, 0);
                            $("#modal-stealth").hide();
                            break;
                        default:
                            ps_utilities.loadData(JSONProperties);
                            break;
                    }
                }
            });

            // unbinds the navigation for insights
            $("#modal_widget").on("hide", function(e){
                if (e.target.id == "modal_widget")  {
                    $("#modal_widget #latest_insights_viewer").remove();
                    ps_googlemaps.boolPagination = false;
                    $("#latest_insights_nav_back").unbind();
                    $("#latest_insights_nav_next").unbind();
                    $("#modal-stealth").show();
                    $('#conversation_volume_query').hide();
                    $('#conversation_volume_query').find('input').val('');
                    $('#toggle1').hide();
                    $('#toggle2').hide();
                }
            });
        } catch( e ) {
            console.log("modals.launch : " +  e.message );
        }
    }
}( window.ps_modals = window.ps_modals || {}, jQuery ));