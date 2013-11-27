(function( ps_modals, $, undefined ) {
    ps_modals.launch = function(JSONProperties)
    {
        var boolRunOnce = false;
        var $function = JSONProperties.function;

        $showInsightsDropdown = JSONProperties.showInsightsDropdown;

        if(JSONProperties.showMenu === true){
            var social = ps_utilities.showMenuSocial(JSONProperties.dataURL);
            var menu = '<div id="socialmenu"><ul class="buttonUl">';
            menu += '<li class="tab_button"><span data="" class="social active">All Media</span></li>';
            social.forEach(function(val){
                menu += '<li class="tab_button"><span data="'+val.id+'" class="social">'+val.display+'</span></li>';
            });
            menu += '</ul></div>';
            $("#socialmenu").remove();
            $("#insight_container").after('<div class="clearfix"></div>');
            $("#insight_container").after(menu);


            $(".buttonUl li span").click(function () {
                $(".active").removeClass("active");
                $(this).addClass("active");
                widget_pie.modal.source = $(this).attr("data");
                ps_utilities.loadData(widget_pie.modal);

                $("#modal_widget #modal-widget-body").html("");
            });
        }else{
            $("#socialmenu").remove("");
        }


        // CLEAR MODAL DIVs
        $("#modal_widget #insight_container").html("");
        $("#modal_widget #modal-widget-body").html("Loading...");
        $("#modal_widget .modal-header h3").text("");
        $("#modal_widget .modal-header small").text("");


        try{
            $('#modal_widget').modal();

            $('#modal_widget').addClass(JSONProperties.class);

            $('#modal_widget').on('show', function(e) {
                if (e.target.id == "modal_widget") {
                    $("#modal_widget #modal-widget-body").html("");
                }
            });

            $('#modal_widget').on('shown', function(e) {
                if (e.target.id == "modal_widget" && !boolRunOnce){
                    boolRunOnce = true;
                    $("#modal_widget #modal-widget-body").css("background-color","black");

                    if (JSONProperties.showInsights === true){
                        $('#latest_insights_content_holder').html("");

                        if(JSONProperties.function == 'launch_maps'){
                            $.get( "templates/insightsMap.html", function( data ) {
                                $("#modal_widget").prepend(data);
                                $("#modal_widget").find("#latest_insights_content_holder" ).draggable();
                            });
                        }else{
                            $.get( "templates/insights.html", function( data ) {
                                $("#modal_widget").prepend(data);
                                $("#modal_widget").find("#latest_insights_content_holder" ).draggable();
                            });
                        }
                        $("#modal_widget").find("#latest_insights_content_holder" ).draggable();
                    }
                    if(JSONProperties.showInsightsDropdown === true){
                        $("#modal_widget").insights(JSONProperties.insight_url);
                    }

                    if(JSONProperties.showQueryForm === true){
                        $('#conversation_volume_query').show()
                    }

                    if(JSONProperties.showToggle1 === true){
                        $('#toggle1').show()
                    }

                    if(JSONProperties.showToggle2 === true){
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
                        case "launch_twitter":
							ps_twitterUtils.buildWidgetModal();
							$("#modal-stealth").hide();
                            break;
                        case "launch_linkedin":
                            ps_graphDefinitions.buildLinkedInRecommendationsModal(JSONProperties.modal);
                            $("#modal-stealth").hide();
                            break;
                        default:
                            ps_utilities.loadData(JSONProperties);
                            break;
                    }
                }
            });

            // unbinds the navigation for insights
            $("#modal_widget").on("hidden", function(e){
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
                    $('#modal_widget').removeClass(JSONProperties.class);
                    widgetConversationVolumeTemp.modal.dataURL = APIconversationvolume;
                }
            });
        } catch( e ) {
            console.log("modals.launch : " +  e.message );
        }
    }
}( window.ps_modals = window.ps_modals || {}, jQuery ));