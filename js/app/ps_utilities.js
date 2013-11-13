
/*
 *
 * Utilities resource file
 *
 */

(function (ps_utilities, $, undefined) {

    ps_utilities.loadData = function (arrayData)
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
            error: function(jqXHR, textStatus, errorThrown) { 
                console.log(errorThrown); 
                console.log(textStatus);
        });
    };

}(window.ps_utilities = window.ps_utilities || {}, jQuery));