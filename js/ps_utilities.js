
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
                ps_graphdefinitions.jsonData = dataResponse;
                arrayData.function(arrayData);
            },
            error: function() { console.log('Error making request'); },
            json: 'json'
         });
    };
    
    ps_utilities.loadJsonpData = function (arrayData)
    {
        $.ajax({
            dataType: 'jsonp',
            url: arrayData.dataURL,
            jsonp: 'callback',
            jsonpCallback: 'jsonpCallback',
            success: function(dataResponse) {
                ps_graphdefinitions.jsonData = dataResponse;
                arrayData.function(arrayData);
            },
            error: function(e) { console.log('Error making request'); },
        });
    };

}(window.ps_utilities = window.ps_utilities || {}, jQuery));