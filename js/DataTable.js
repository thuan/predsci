var DataTableLib = DataTableLib || {};



(function () {


    DataTableLib.InitializeAll = function()
    {
        $('#image_data').dataTable( {

        } );
    }




})();

$(document).ready(function(){
    new DataTableLib.InitializeAll();
});