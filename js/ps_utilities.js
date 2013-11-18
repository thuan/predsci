
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
            url: arrayData.dataURL,
            dataType: 'json',
            success: function(dataResponse) {

                //TODO
                /*
                * dataResponse is coming in as extra parameters with comma separated
                * Need to not use eval. In the ps_graphDefinitions need to add a success
                * event to load the rest of the function
                *
                */

                ps_graphDefinitions.jsonData = dataResponse;

                arrayData.function(arrayData);

            },
            error: function() { console.log('Error making request'); },
            json: 'json'
         });
    };
    
    ps_utilities.loadJsonpData = function (arrayData)
    {
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            crossDomain: true,
            contentType: "application/json",
            url: arrayData.dataURL,
            success: function(dataResponse) {
                ps_graphDefinitions.jsonpData = dataResponse;
                arrayData.function(arrayData);
            },
            error: function(e) { console.log('Error making request'); },
        });
    };



}(window.ps_utilities = window.ps_utilities || {}, jQuery));