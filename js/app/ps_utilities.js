
/*
 *
 * Utilities resource file
 *
 */

(function (ps_utilities, $, undefined) {

    ps_utilities.loadData = function (arrayData)
    {
        $.ajax({
            type: 'GET',
            cache: true,
            data: "",
            url: arrayData.dataURL,
            dataType: 'json',
            success: function(dataResponse) {
                ps_graphDefinitions.jsonData = dataResponse;
                arrayData.function(arrayData);
            },
            error: function(e) { console.log(ajaxCalls.getTwitterStreamAPI); },
            json: 'json'
        });
    };

}(window.ps_utilities = window.ps_utilities || {}, jQuery));