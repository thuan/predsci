(function( ps_modals, $, undefined ) {
    ps_modals.launch = function(JSONProperties)
    {
        /*
         * Launches Bootstrap Modal Window
         * The parameters are loaded using JSON
         *
         * @param : string : $header : Main title of Modal
         * @param : string : $subheader : subheader underneath Modal
         * @param : string : $function : what function to execute
         * @param : string : $div_location : name of element id to create function
         * @param : boolean : $showInsights : shows the insights functionality
         * @param : string : $tooltip : shows the tooltip
         *
         */

        var boolRunOnce = false;
        JSONProperties.showInsights == undefined ? $showInsights = false : $showInsights = true;
        var $function = JSONProperties.function;

        try
        {
            $('#modal_widget').modal();

            $('#modal_widget').on('show', function(e) {
                if (e.target.id == "modal_widget")
                {
                    $("#modal_widget #modal-widget-body").html("");
                }
            });

            $('#modal_widget').on('shown', function(e) {
                if (e.target.id == "modal_widget" && !boolRunOnce)
                {
                    boolRunOnce = true;
                    $("#modal_widget #modal-widget-body").css("background-color","black")
                    if ($showInsights)
                    {
                        $.get( "templates/insights.html", function( data ) {
                            $("#modal_widget").prepend(data);
                        });
                    }

                    $("#modal_widget #modal-widget-body").html("");
                    $("#modal_widget .modal-header h3").text(JSONProperties.title);
                    $("#modal_widget .modal-header small").text(JSONProperties.subtitle);
                    $("#modal_widget #icon-info").attr("data-original-title",JSONProperties.tooltip);

                    switch($function)
                    {
                        case "launch_maps":
                            ps_googlemaps.Initialize(JSONProperties, 0);
                            $("#modal-stealth").hide();
                            break;
                        default:
                            ps_utilities.loadData(JSONProperties);
                            break;
                        //testando synchronize
                    }
                }
            });

            // unbinds the navigation for insights
            $("#modal_widget").on("hide", function(e){
                if (e.target.id == "modal_widget")
                {
                    $("#modal_widget #latest_insights_viewer").remove();
                    ps_googlemaps.boolPagination = false;
                    $("#latest_insights_nav_back").unbind();
                    $("#latest_insights_nav_next").unbind();
                    $("#modal-stealth").show();
                }
            });
        } catch( e ) {
            console.log("modals.launch : " +  e.message );
        }
    }
}( window.ps_modals = window.ps_modals || {}, jQuery ));