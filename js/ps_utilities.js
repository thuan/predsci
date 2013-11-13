
 /*
*
* Utilities resource file
*
*/

(function (ps_utilities, $, undefined ){

    ps_utilities.loadData = function (arrayData)
    {
        $.ajax({
            type: 'GET',
            cache: true,
            data: "",
            url: "/" + arrayData.dataURL,
            dataType: 'json',
            success: function(dataResponse) {

                //TODO
                /*
                * dataResponse is coming in as extra parameters with comma separated
                * Need to not use eval. In the psgraphdefinitions need to add a success
                * event to load the rest of the function
                *
                */

                psgraphdefinitions.jsonData = dataResponse;

                eval(arrayData.function + "('" + arrayData.div_location + "')");

            },
            error: function() { console.log('Error making request'); },
            json: 'json'
         });
    };
    
    ps_utilities.loadJsonpData = function (arrayData)
    {
        $.ajax({
            dataType: 'jsonp',
            data: "",
            url: arrayData.dataURL,
            jsonp: 'callback',
            jsonpCallback: 'jsonpCallback',
            success: function(dataResponse) {
                ps_graphDefinitions.jsonData = dataResponse;
                arrayData.function(arrayData);
            },
            error: function(e) { console.log('Error making request'); },
            json: 'json'
        });
    };

}(window.ps_utilities = window.ps_utilities || {}, jQuery));