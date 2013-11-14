var UILayout = UILayout || {};


(function () {

    UILayout.GetWindowHeight = function(){

        var $iWindowHeight  = $(window).height();
        var $iRailHeight    = $iWindowHeight - 110;

        $("#left_rail").height($iRailHeight);
    }



    UILayout.ExpandLeftPanel = function () {

        $(window).load(function(){

            UILayout.GetWindowHeight();

        })

        $(window).resize(function() {

            UILayout.GetWindowHeight();


        });
    }


    UILayout.Init = function()
    {
        UILayout.RemoveWidgetGradient();

        $('body').tooltip({
            selector: "a"
        })

        $(".widget_holder").find("svg path").remove();
    }

    UILayout.BuildDashboard = function()
    {
        $("#customer_dropdown_list").change(function(){
            $("#department_dropdown_list").show();
            $("#assign_user_container").show();



        });
    }


    UILayout.RemoveWidgetGradient = function()
    {
        $("body stop").attr("stop-color","#000000");


    }



    UILayout.CreateTitle = function(chart, text)
    {
        var td;
        td = new cfx.TitleDockable();
        td.setText(text);
        td.setDock(cfx.DockArea.Top);
        chart.getTitles().add(td);
    }



    UILayout.loadChart2 = function()
    {
        var chart2;

        chart2 = new cfx.Chart();chart2.getAnimations().getLoad().setEnabled(true);

        chart2.setGallery(cfx.Gallery.Bar);
        var data = chart2.getData();
        data.setSeries(3);
        data.setPoints(10);
        chart2.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        chart2.getLegendBox().setVisible(true);

        //UILayout.CreateTitle(chart2, "Volume & Sentiment");


        var data = [
            { "Month": "AT&T", "Positive": 542, "Neutral": 88, "Negative": 20 },
            { "Month": "IBM", "Positive": 348, "Neutral": 71, "Negative": 11 },
            { "Month": "Kore", "Positive": 35, "Neutral": 0, "Negative": 0 },
            { "Month": "Verizon", "Positive": 621, "Neutral": 88, "Negative": 26}
        ];


        chart2.setDataSource(data);
        var divHolder = document.getElementById('chart_div2');
        chart2.create(divHolder);
    }




    UILayout.loadMultiLine = function()
    {

        var objMultiLine;

        objMultiLine = new cfx.Chart();objMultiLine.getAnimations().getLoad().setEnabled(true);

        objMultiLine.setGallery(cfx.Gallery.Lines);
        var data = objMultiLine.getData();
        data.setSeries(5);
        data.setPoints(10);
        objMultiLine.getLegendBox().setVisible(false);
       // UILayout.CreateTitle(objMultiLine, "Conversation Volume");


        var data = [{
            "Month": "7/2",
            "Blogs": 33,
            "Form": 16,
            "News": 23,
            "Twitter": 17,
            "Facebook": 3
        },{
            "Month": "7/3",
            "Blogs": 42,
            "Form": 29,
            "News": 21,
            "Twitter": 11,
            "Facebook": 1
        },{
            "Month": "7/4",
            "Blogs": 23,
            "Form": 25,
            "News": 22,
            "Twitter": 22,
            "Facebook": 3
        },{
            "Month": "7/5",
            "Blogs": 31,
            "Form": 27,
            "News": 27,
            "Twitter": 19,
            "Facebook": 5
        },{
            "Month": "7/6",
            "Blogs": 35,
            "Form": 22,
            "News": 20,
            "Twitter": 33,
            "Facebook": 4
        },{
            "Month": "7/7",
            "Blogs": 38,
            "Form": 7,
            "News": 18,
            "Twitter": 26,
            "Facebook": 10
        },{
            "Month": "7/8",
            "Blogs": 40,
            "Form": 12,
            "News": 33,
            "Twitter": 28,
            "Facebook": 8
        }];


        objMultiLine.setDataSource(data);
        var divHolder = document.getElementById('div_multi_chart');
        objMultiLine.create(divHolder);
    }




    UILayout.loadCustomPieChart = function(objDivName)
    {

        var objPieChart;


        objPieChart = new cfx.Chart();objPieChart.getAnimations().getLoad().setEnabled(true);

        objPieChart.setGallery(cfx.Gallery.Pie);
        var data = objPieChart.getData();
        data.setSeries(3);
        data.setPoints(4);
        objPieChart.getLegendBox().setVisible(true);

        // Data Chart - Goes on bottom
        /*
        objPieChart.getDataGrid().setVisible(true);
        objPieChart.getDataGrid().setBorder(cfx.DockBorder.Internal);
        objPieChart.getDataGrid().setDock(cfx.DockArea.Bottom);
        */

        //UILayout.CreateTitle(objPieChart, "Share of Voice");


        var data = [{
            "Country": "Verizon",
            "Value": 31.97
        }, {
            "Country": "T-Mobile",
            "Value": 16.39
        }, {
            "Country": "Sprint",
            "Value": 20.46
        }, {
            "Country": "AT&T",
            "Value": 29.39
        },{
            "Country": "US Cellular",
            "Value": 1.80
        }];


        objPieChart.getAllSeries().getPointLabels().setVisible(true);

        objPieChart.setDataSource(data);
        var divHolder = document.getElementById(objDivName);
        objPieChart.create(divHolder);
    }





    UILayout.loadChart = function(obj)
    {

        var chart1;

        chart1 = new cfx.Chart();chart1.getAnimations().getLoad().setEnabled(true);

        chart1.setGallery(cfx.Gallery.Bar);
        var data = chart1.getData();
        data.setSeries(5);
        data.setPoints(15);
        chart1.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        chart1.getLegendBox().setVisible(true);

        //UILayout.CreateTitle(chart1, "Volume & Sentiment");


        var data = [
            { "Month": "9/24", "Negative": 860, "Neutral": 8260, "Positive": 880 },
            { "Month": "9/25", "Negative": 980, "Neutral": 8100, "Positive": 920 },
            { "Month": "9/26", "Negative": 930, "Neutral": 7880, "Positive": 1190 },
            { "Month": "9/27", "Negative": 850, "Neutral": 8660, "Positive": 870},
            { "Month": "9/28", "Negative": 770, "Neutral": 8770, "Positive": 490 },
            { "Month": "9/29", "Negative": 760, "Neutral": 8590, "Positive": 650 }
        ];




        chart1.setDataSource(data);
        var divHolder = document.getElementById(obj);
        chart1.create(divHolder);
    }





    UILayout.loadMultiLine4 = function()
    {
        var objMultiLine4;

        objMultiLine4 = new cfx.Chart();objMultiLine4.getAnimations().getLoad().setEnabled(true);

        objMultiLine4.setGallery(cfx.Gallery.Lines);
        var data = objMultiLine4.getData();
        data.setSeries(5);
        data.setPoints(10);
        objMultiLine4.getLegendBox().setVisible(false);
        //UILayout.CreateTitle(objMultiLine4, "LinkedIn Likes");


        var data = [{
            "Month": "7/2",
            "Facebook": 2
        },{
            "Month": "7/3",
            "Facebook": 0
        },{
            "Month": "7/4",
            "Facebook": 0
        },{
            "Month": "7/5",
            "Facebook": 0
        },{
            "Month": "7/6",
            "Facebook": 1
        },{
            "Month": "7/7",
            "Facebook": 0
        },{
            "Month": "7/8",
            "Facebook": 0
        }];


        objMultiLine4.setDataSource(data);
        var divHolder = document.getElementById('div_multi_chart4');
        objMultiLine4.create(divHolder);

        //$(".widget_holder").find("svg path").remove();

    }



    UILayout.loadMultiLine3 = function()
    {

        var objMultiLine3;

        objMultiLine3 = new cfx.Chart();objMultiLine3.getAnimations().getLoad().setEnabled(true);

        objMultiLine3.setGallery(cfx.Gallery.Lines);
        var data = objMultiLine3.getData();
        data.setSeries(5);
        data.setPoints(10);
        objMultiLine3.getLegendBox().setVisible(false);
        //UILayout.CreateTitle(objMultiLine3, "LinkedIn Followers");


        var data = [{
            "Month": "7/2",
            "Facebook": 94600
        },{
            "Month": "7/3",
            "Facebook": 94700
        },{
            "Month": "7/4",
            "Facebook": 94900
        },{
            "Month": "7/5",
            "Facebook": 95018
        },{
            "Month": "7/6",
            "Facebook": 95198
        },{
            "Month": "7/7",
            "Facebook": 96122
        },{
            "Month": "7/8",
            "Facebook": 97125
        }];


        objMultiLine3.setDataSource(data);
        var divHolder = document.getElementById('div_multi_chart3');
        objMultiLine3.create(divHolder);
    }



    UILayout.loadMultiLine2 = function()
    {
        var objMultiLine2;

        objMultiLine2 = new cfx.Chart();objMultiLine2.getAnimations().getLoad().setEnabled(true);

        objMultiLine2.setGallery(cfx.Gallery.Lines);
        var data = objMultiLine2.getData();
        data.setSeries(5);
        data.setPoints(10);
        objMultiLine2.getLegendBox().setVisible(false);
        //UILayout.CreateTitle(objMultiLine2, "Predefined Topic Volume");


        var data = [{
            "Month": "7/2",
            "Master Brand": 2,
            "Telematics": 23,
            "Facebook": 3
        },{
            "Month": "7/3",
            "Master Brand": 3,
            "Telematics": 22,
            "Facebook": 1
        },{
            "Month": "7/4",
            "Master Brand": 2,
            "Telematics": 21,
            "Facebook": 3
        },{
            "Month": "7/5",
            "Master Brand": 3,
            "Telematics": 28,
            "Facebook": 4
        },{
            "Month": "7/6",
            "Master Brand": 4,
            "Telematics": 20,
            "Facebook": 3
        },{
            "Month": "7/7",
            "Master Brand": 5,
            "Telematics": 18,
            "Facebook": 4
        },{
            "Month": "7/8",
            "Master Brand": 2,
            "Telematics": 33,
            "Facebook": 2
        }];


        objMultiLine2.setDataSource(data);
        var divHolder = document.getElementById('div_multi_chart2');
        objMultiLine2.create(divHolder);
    }


    /*
    * Launches and defines features for each widget
    *
    * @param : string : $sDiv : element id to populate with data
    * @param : string : $sFunction : function to call
    *
    *
    */


    UILayout.WidgetLaunch = function(sDiv, sFunction)
    {
        var $properties;

        switch(sFunction)
        {
            case "loadCustomPieChart":
                $properties = {
                    div_location : sDiv,
                    function : sFunction,
                    header : "Share of Voice",
                    subheader : "With key Competitors",
                    tooltip : "Share of Voice by media type for Verizon Wireless and key competitors."
                }
                break;
            case "loadChart":
                $properties = {
                    div_location : sDiv,
                    function : sFunction,
                    header : "Volume & Sentiment",
                    subheader : "Daily Volume & Sentiment",
                    tooltip : "Sentiment of conversation for all Verizon Wireless data. Sentiment analysis conducted by Clarabridge with a score between -5 and +5."
                }
                break;


        }

        ps_modals.launch($properties);

    }








})();

$(window).load(function (e) {

    new UILayout.ExpandLeftPanel();
    new UILayout.Init();

});





