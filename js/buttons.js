var Buttons = Buttons || {};


(function () {


    Buttons.SubmitForm = function () {

        var $username = $("#username").val();
        var $password = $("#password").val();


        if ($username == "admin" && $password == "password") {
            window.event.returnValue = false;
            document.location.href = "dashboard-all.php";
        }
        else {

        }
    }


    Buttons.ChangeTheme = function () {
        $("#select_color select").change(function () {
            var $theme;
            $theme = $("#select_color select option:selected").val();

            $('<link/>', {rel: 'stylesheet', href: '/css/jchart/jChartFX/' + $theme}).appendTo('head');
        });

        $("svg path:nth-child(3)").remove();
    }


})();

$(document).ready(function (e) {

    new Buttons.ChangeTheme();

});



