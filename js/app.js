


 /*
 *
 * Twitter Stream
 *
 *
 *
 */

$(document).ready(function () {
    totalNumberOfTweet          = 20;
    totalNumberOfTweet_admin    = 15;

    parseAndDisplayKeyword();
    //displayChartPreview();

    $('#modal_widget').on('hidden', function (e) {

        if (e.target.id == "modal_widget")
        {
            $(this).find("#modal-widget-body").empty();
        }


        //$('#myModalLabel').empty();
    });

    //Calling Pause function for Ticker
    $('.pause').click(function (e) {
        e.preventDefault();
        $('#webticker').webTicker('stop');
    });
    //Resume ticker function
    $(".resume").click(function () {
        $("#webticker").webTicker('cont');
    });

    

    // Metric Ticker
    metric_ticker();
});


// Show Preview Charts for Landing page
var displayChartPreview = function() {
    displayChart1Preview('div_Chart1', getData(1, 1));
    displayChart2Preview('div_Chart2', getData(2, 0));
    displayChart3Preview('div_Chart3', getData(3, 1));
    displayChart4Preview('div_Chart4', getData(4, 1));
    displayChart5Preview('div_Chart5', getData(5, 1));
}


// Chart 1 Starts(Share Of Voice - Pie Chart)
var displayChart1Preview = function(container, chartData, displayText) {
    var chart1 = new cfx.Chart();chart1.getAnimations().getLoad().setEnabled(true);
    var td;
    td = new cfx.TitleDockable();

    chart1.getTitles().add(td);
    chart1.getLegendBox().setVisible(true);
    chart1.setGallery(cfx.Gallery.Pie);

    var data = chart1.getData();
    data.setSeries(3);
    data.setPoints(10);
    chart1.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
    chart1.getLegendBox().setVisible(true);

    data = chartData;

    chart1.setDataSource(data);
    chart1.create(document.getElementById(container));
    assignClickEventToChart1();
}





var assignClickEventToChart1 = function() {



    $("#div_Chart1").unbind('click');
    $("#div_Chart1").css({
        "cursor": "pointer"
    });
    $("#div_Chart1").click(function () {



        $('#modal_widget').on('shown', function (e) {

            if (e.target.id == "modal_widget")
            {

                $('.modal-header h3').text("Share of Voice");
                $('.modal-header small').text("With key Competitors");
                $("#modal-widget-body").html(getModalContent(1));
                $(".buttonUl li span").unbind("click");
                $(".buttonUl li span").click(function () {
                    clickOnSpan(this);
                });
                $(".buttonUl li").first().find('span:first').trigger('click');

            }
        });


    });
}

$(window).load(function(){
    assignClickEventToChart1();
});


var clickOnSpan = function(element) {
    $(".active").removeClass("active");
    $(element).addClass("active");
    var keyword = $(element).attr('data');
    var data = getDataForChart1();
    displayChart1OnModal(data, keyword, keyword);
    UILayout.RemoveWidgetGradient();

}

// Chart 1 Modal Starts
var displayChart1OnModal = function(data, keyword, displayText) {
    var newDataArray = new Array();
    if (keyword == "All") {
        for (var index in data) {
            var element = data[index];
            var newObject = {};
            newObject['Month'] = element['Month'];
            newObject['All'] = element['All'];
            if (isNaN(element['All'])) newObject['All'] = 0;
            newDataArray.push(newObject);
        }

    } else {
        for (index in data) {
            var element = data[index];
            var newObject = {};
            newObject[keyword] = element[keyword];
            newObject['Month'] = element['Month'];
            newDataArray.push(newObject);
        }
    }
    $("#div_initialChart").html('');
    displayChart1Preview('div_initialChart', newDataArray, displayText);
}
// Chart 1 Modal Ends

// Chart 1 JSON Data
var getDataForChart1 = function() {
    var data = [{
        "Month": "Verizon",
        "Blog": 451,
        "Facebook": 429,
        "Twitter": 9934,
        "Forum": 8090,
        "News": 4023
    }, {
        "Month": "T-Mobile",
        "Blog": 348,
        "Facebook": 560,
        "Twitter": 1120,
        "Forum": 8090,
        "News": 4023
    }, {
        "Month": "AT&T",
        "Blog": 35,
        "Facebook": 1124,
        "Twitter": 990,
        "Forum": 9190,
        "News": 4023
    }, {
        "Month": "US Celluler",
        "Blog": 621,
        "Facebook": 88,
        "Twitter": 26,
        "Forum": 8090,
        "News": 4023
    },{
       "Month": "Sprint",
       "Blog": 478,
       "Facebook": 78,
       "Twitter": 36,
       "Forum": 8769,
       "News": 4937 
    }];
    for (var key in data) {
        data[key]['All'] = data[key]["Blog"] + data[key]["Facebook"] + data[key]["Twitter"] + data[key]["Forum"] + data[key]["News"];
        if (isNaN(data[key]['All'])) data[key]['All'] = 0;
    }

    return data;
}

// Setting the contents of the Modal
var getModalContentOfChart1 = function() {
    var html = "<ul class='buttonUl'><li class='tab_button'><span data='All'>All</span></li><li class='tab_button'><span data='Blog'>Blog</span></li><li class='tab_button'><span data='Facebook'>Facebook</span></li><li class='tab_button'><span data='Twitter'>Twitter</span></li><li class='tab_button'><span data='News'>News</span></li><li class='tab_button'><span data='Forum'>Forum</span></li></ul><div id='div_initialChart' class='initChart'></div>";
    return html;
}
// Chart 1 Ends


// Chart 2 Starts(Volume & Sentiment - Bar Chart)
var displayChart2Preview = function(container, chartData, displayText) {
    var chart2 = new cfx.Chart();
    var td;
    td = new cfx.TitleDockable();

    chart2.getTitles().add(td);
    chart2.getLegendBox().setVisible(false);
    chart2.setGallery(cfx.Gallery.Bar);
    chart2.getAllSeries().setStacked(cfx.Stacked.Normal);

    chart2.getAxisY().setStep(1000);

    var data = chart2.getData();
    data.setSeries(3);
    data.setPoints(10);
    chart2.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
    chart2.getLegendBox().setVisible(true);

    data = chartData;

    chart2.setDataSource(data["verizon"]);
    chart2.create(document.getElementById(container));
    assignClickEventToChart2();
}

var assignClickEventToChart2 = function() {
    $("#div_Chart2").unbind('click');
    $("#div_Chart2").css({
        "cursor": "pointer"
    });
    $("#div_Chart2").click(function () {
        heading = $(this).siblings('h3').html();
        $('.myModal').on('shown', function () {
            $('#myModalLabel').empty();
            $('#myModalLabel').append(heading);
            $("#modal-widget-body").html(getModalContent(2));
            chnageValue($(".select_filter").val());
            $(".buttonUl li span").unbind("click");
            $(".select_filter").change(function () {
                chnageValue($(".select_filter").val());
            });
        });

    });
}

var chnageValue = function(keyword) {
    var data = getDataForChart2();
    displayChart2OnModal(data, keyword, keyword);

}

// Chart 2 Modal Starts
var displayChart2OnModal = function(data, keyword, displayText) {
    $("#div_initialChart").html('');
    var newData = data[keyword];

    var chart2 = new cfx.Chart();
    var td;
    td = new cfx.TitleDockable();

    chart2.getTitles().add(td);
    chart2.getLegendBox().setVisible(false);
    chart2.setGallery(cfx.Gallery.Bar);
    chart2.getAllSeries().setStacked(cfx.Stacked.Normal);

    chart2.getAxisY().setStep(1000);

    data = chart2.getData();
    data.setSeries(3);
    data.setPoints(10);
    chart2.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
    chart2.getLegendBox().setVisible(true);

    data = getDataForChart2();

    chart2.setDataSource(data[keyword]);
    chart2.create(document.getElementById('div_initialChart'));
}
// Chart 2 Modal Ends

// Chart 2 JSON Data Starts
var getDataForChart2 = function() {
    var data = {
        "verizon": [{
            "Day": "9/23",
            "Negative": 1800,
            "Neutral": 4300,
            "Positive": 1700
        }, {
            "Day": "9/24",
            "Negative": 2600,
            "Neutral": 5800,
            "Positive": 1900
        }, {
            "Day": "9/25",
            "Negative": 2200,
            "Neutral": 5300,
            "Positive": 1600
        }, {
            "Day": "9/26",
            "Negative": 1700,
            "Neutral": 4400,
            "Positive": 1900
        }, {
            "Day": "9/27",
            "Negative": 100,
            "Neutral": 1500,
            "Positive": 400
        }, {
            "Day": "9/28",
            "Negative": 0,
            "Neutral": 0,
            "Positive": 0
        }, {
            "Day": "9/29",
            "Negative": 0,
            "Neutral": 0,
            "Positive": 0
        }],
        "atandt": [{
            "Day": "9/23",
            "Negative": 1700,
            "Neutral": 3400,
            "Positive": 1700
        }, {
            "Day": "9/24",
            "Negative": 2800,
            "Neutral": 4300,
            "Positive": 1900
        }, {
            "Day": "9/25",
            "Negative": 2900,
            "Neutral": 5000,
            "Positive": 1600
        }, {
            "Day": "9/26",
            "Negative": 900,
            "Neutral": 4000,
            "Positive": 1100
        }, {
            "Day": "9/27",
            "Negative": 800,
            "Neutral": 3200,
            "Positive": 1400
        }, {
            "Day": "9/28",
            "Negative": 100,
            "Neutral": 1400,
            "Positive": 400
        }, {
            "Day": "9/29",
            "Negative": 0,
            "Neutral": 0,
            "Positive": 0
        }],
        "sprint": [{
            "Day": "9/23",
            "Negative": 1100,
            "Neutral": 2300,
            "Positive": 1700
        }, {
            "Day": "9/24",
            "Negative": 1200,
            "Neutral": 3300,
            "Positive": 1000
        }, {
            "Day": "9/25",
            "Negative": 1100,
            "Neutral": 3700,
            "Positive": 1400
        }, {
            "Day": "9/26",
            "Negative": 600,
            "Neutral":  3200,
            "Positive": 1000
        }, {
            "Day": "9/27",
            "Negative": 800,
            "Neutral": 2200,
            "Positive": 400
        }, {
            "Day": "9/28",
            "Negative": 100,
            "Neutral": 2500,
            "Positive": 800
        }, {
            "Day": "9/28",
            "Negative": 0,
            "Neutral": 0,
            "Positive": 0
        }],
        "tmobile": [{
            "Day": "9/23",
            "Negative": 300,
            "Neutral": 3300,
            "Positive": 370
        }, {
            "Day": "9/24",
            "Negative": 1600,
            "Neutral": 2600,
            "Positive": 1300
        }, {
            "Day": "9/25",
            "Negative": 1500,
            "Neutral": 3300,
            "Positive": 1900
        }, {
            "Day": "9/26",
            "Negative": 1200,
            "Neutral": 2800,
            "Positive": 1300
        }, {
            "Day": "9/27",
            "Negative": 200,
            "Neutral": 1500,
            "Positive": 400
        }, {
            "Day": "9/28",
            "Negative": 100,
            "Neutral": 1200,
            "Positive": 100
        }, {
            "Day": "9/29",
            "Negative": 0,
            "Neutral": 0,
            "Positive": 0
        }],
        "usceller": [{
            "Day": "9/23",
            "Negative": 50,
            "Neutral": 350,
            "Positive": 80
        }, {
            "Day": "9/24",
            "Negative": 70,
            "Neutral": 400,
            "Positive": 80
        }, {
            "Day": "9/25",
            "Negative": 100,
            "Neutral": 600,
            "Positive": 100
        }, {
            "Day": "9/26",
            "Negative": 70,
            "Neutral": 300,
            "Positive": 100
        }, {
            "Day": "9/27",
            "Negative": 20,
            "Neutral": 190,
            "Positive": 10
        }, {
            "Day": "9/28",
            "Negative": 19,
            "Neutral": 90,
            "Positive": 38
        }, {
            "Day": "9/29",
            "Negative": 0,
            "Neutral": 0,
            "Positive": 0
        }]
    };
    return data;
}
// Chart 2 JSON Data Ends

// Chart 1 Modal Starts
var getModalContentOfChart2 = function() {
    var html = "<select class='select_filter'><option value='verizon'>Verizon</option><option value='tmobile'>T-Mobile</option><option value='sprint'>Sprint</option><option value='atandt'>AT&T</option><option value='usceller'>US Celler</option></select><div id='div_initialChart' class='initChart'></div>";
    return html;
}
// Chart 2 Ends

// Chart 3(Conversation Volume - Line Graph) Starts
var assignClickEventToChart3 = function() {
    $("#div_Chart3").unbind('click');
    $("#div_Chart3").css({
        "cursor": "pointer"
    });
    $("#div_Chart3").click(function () {
        heading = $(this).siblings('h3').html();
        $('.myModal').on('shown', function () {
            $('#myModalLabel').empty();
            $('#myModalLabel').append(heading);
            $("#div_modal").html(getModalContent(3));
            displayChart3OnModal(getData(3, 1));
        });
    });
}

var displayChart3Preview = function(container, chartData, displayText) {
    var chart3 = new cfx.Chart();
    var td;
    td = new cfx.TitleDockable();

    chart3.getTitles().add(td);
    chart3.getLegendBox().setVisible(true);

    chart3.getLegendBox().setVisible(true);
    chart3.getLegendBox().setBorder(cfx.DockBorder.Internal);
    chart3.getLegendBox().setContentLayout(cfx.ContentLayout.Spread);
    chart3.getLegendBox().setDock(cfx.DockArea.Right);

    var data = chart3.getData();
    data.setSeries(3);
    data.setPoints(10);
    chart3.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
    chart3.getLegendBox().setVisible(true);

    data = chartData;

    chart3.setDataSource(data);
    chart3.create(document.getElementById(container));
    assignClickEventToChart3();
}

var displayChart3OnModal = function(data, keyword, displayText) {

    $("#div_initialChart").html('');
    displayChart3Preview('div_initialChart', data, displayText);
}

// Chart 3 JSON Data
var getDataForChart3 = function() {
    var data = [{
        "Month": "9/23",
        "You Tube": 21,
        "Twitter": 4962,
        "News": 533,
        "Forum":711,
        "Facebook": 215,
        "Blog": 417
    }, {
        "Month": "9/24",
        "You Tube": 35,
        "Twitter": 7374,
        "News": 817,
        "Forum":745,
        "Facebook": 233,
        "Blog": 343
    }, {
        "Month": "9/25",
        "You Tube": 35,
        "Twitter": 6940,
        "News": 523,
        "Forum":675,
        "Facebook": 184,
        "Blog": 375
    }, {
        "Month": "9/26",
        "You Tube": 33,
        "Twitter": 6305,
        "News": 28,
        "Forum":341,
        "Facebook": 0,
        "Blog": 288
    },{
       "Month": "9/27",
        "You Tube": 32,
        "Twitter": 1614,
        "News": 0,
        "Forum":0,
        "Facebook": 0,
        "Blog": 0  
    },{
        "Month": "9/28",
        "You Tube": 0,
        "Twitter": 0,
        "News": 0,
        "Forum":0,
        "Facebook": 0,
        "Blog": 0
    }];
    return data;
}

var getModalContentOfChart3 = function() {
    var html = "<div id='div_initialChart' class='initChart'></div>";
    return html;
}
// Chart 3 Ends(Conversation Volume - Line Graph)


// Chart 4 Starts(Predefined Topic Volume - Line Graph)
var assignClickEventToChart4 = function() {
    $("#div_Chart4").unbind('click');
    $("#div_Chart4").css({
        "cursor": "pointer"
    });
    $("#div_Chart4").click(function () {
        $('.myModal').unbind('shown');
        heading = $(this).siblings('h3').html();

        $('.myModal').on('shown', function () {
            $('#myModalLabel').empty();
            $('#myModalLabel').append(heading);
            $("#div_modal").html(getModalContent(4));
            displayChart4OnModal(getData(4, 1));

        });
    });
}

var displayChart4Preview = function(container, chartData, displayText) {
    var chart4 = new cfx.Chart();
    var td;
    td = new cfx.TitleDockable();

    chart4.getTitles().add(td);
    chart4.getLegendBox().setVisible(true);

    chart4.getLegendBox().setVisible(true);
    chart4.getLegendBox().setBorder(cfx.DockBorder.Internal);
    chart4.getLegendBox().setContentLayout(cfx.ContentLayout.Spread);
    chart4.getLegendBox().setDock(cfx.DockArea.Right);

    var data = chart4.getData();
    data.setSeries(3);
    data.setPoints(10);
    chart4.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
    chart4.getLegendBox().setVisible(true);

    data = chartData;

    chart4.setDataSource(data);
    chart4.create(document.getElementById(container));
    assignClickEventToChart4();
}

// Displaying the Chart on Modal
var displayChart4OnModal = function(data, keyword, displayText) {
    $("#div_initialChart").html('');
    displayChart3Preview('div_initialChart', data, displayText);
}

// Chart 4 JSON Data
var getDataForChart4 = function() {
    var data = [{
        "Month": "9/23",
        "Wireless Plans": 207,
        "Wireless Network": 587,
        "Wireless Customer Experience":707,
        "Verizon Devices": 2727,
        "Verizon Bills": 115
    },{
        "Month": "9/24",
        "Wireless Plans": 676,
        "Wireless Network": 968,
        "Wireless Customer Experience":1135,
        "Verizon Devices": 3947,
        "Verizon Bills": 158
    }, {
        "Month": "9/25",
        "Wireless Plans": 255,
        "Wireless Network": 1236,
        "Wireless Customer Experience":1010,
        "Verizon Devices": 3684,
        "Verizon Bills": 159
    }, {
        "Month": "9/26",
        "Wireless Plans": 292,
        "Wireless Network": 1010,
        "Wireless Customer Experience":255,
        "Verizon Devices": 949,
        "Verizon Bills": 168
    }, {
        "Month": "9/27",
       "Wireless Plans": 0,
        "Wireless Network": 255,
        "Wireless Customer Experience":0,
        "Verizon Devices": 949,
        "Verizon Bills": 23
    }, {
        "Month": "9/28",
        "Wireless Plans": 0,
        "Wireless Network": 0,
        "Wireless Customer Experience":0,
        "Verizon Devices": 0,
        "Verizon Bills": 0
    },{
        "Month": "9/29",
        "Wireless Plans": 0,
        "Wireless Network": 0,
        "Wireless Customer Experience":0,
        "Verizon Devices": 429,
        "Verizon Bills": 0         
    }];
    return data;
}

var getModalContentOfChart4 = function() {
    var html = "<div id='div_initialChart' class='initChart'></div>";
    return html;
}
// Chart 4 (Predefined Topic Volume - Line Graph) Ends


// Chart 5(Volume & Sentiment - Bar Graph) Starts
var displayChart5Preview = function(container, chartData, displayText) {
    var chart5 = new cfx.Chart();
    var td;
    td = new cfx.TitleDockable();

    chart5.getTitles().add(td);
    chart5.getLegendBox().setVisible(false);
    chart5.setGallery(cfx.Gallery.Bar);
    chart5.getAllSeries().setStacked(cfx.Stacked.Normal);

    var data = chart5.getData();
    data.setSeries(3);
    data.setPoints(10);
    chart5.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
    chart5.getLegendBox().setVisible(true);

    data = chartData;

    chart5.setDataSource(data);
    chart5.create(document.getElementById(container));
    assignClickEventToChart5();
}

var assignClickEventToChart5 = function() {
    $("#div_Chart5").unbind('click');
    $("#div_Chart5").css({
        "cursor": "pointer"
    });
    $("#div_Chart5").click(function () {
        heading = $(this).siblings('h3').html();

        $('.myModal').on('shown', function () {
            $('#myModalLabel').empty();
            $('#myModalLabel').append(heading);
            $("#div_modal").html(getModalContent(5));
            displayChart5OnModal(getData(5, 1));
        });

    });
}

var displayChart5OnModal = function(data, keyword, displayText) {
    $("#div_initialChart").html('');
    displayChart5Preview('div_initialChart', data, displayText);
}

// Chart 5 JSON Data
var getDataForChart5 = function() {
    var data = [{
        "company": "AT&T",
        "Positive": 7135,
        "Neutral": 24124,
        "Negative": 6990
    },{
        "company": "Sprint",
        "Positive": 6451,
        "Neutral": 17429,
        "Negative": 3934
    }, {
        "company": "T-Mobile",
        "Positive": 5448,
        "Neutral": 13560,
        "Negative": 5120
    }, {
        "company": "US Celluler",
        "Positive": 1621,
        "Neutral": 4588,
        "Negative": 726
    }, {
        "company": "Verizon",
        "Positive": 4835,
        "Neutral": 29724,
        "Negative": 5990
    }];
    return data;
}

var getModalContentOfChart5 = function() {
    var html = "<div id='div_initialChart' class='initChart'></div>";
    return html;
}
// Chart 5(Volume & Sentiment - Bar Graph) Ends

// Fetching the Modal contents beased on teh Chart IDs
var getModalContent = function(chartId) {
    switch (chartId) {
    case 1:
        return getModalContentOfChart1();
        break;
    case 2:
        return getModalContentOfChart2();
        break;
    case 3:
        return getModalContentOfChart3();
        break;
    case 4:
        return getModalContentOfChart4();
        break;
    case 5:
        return getModalContentOfChart5();
        break;
    default:
        ;
    }
}

// Destroing the Modal Content after they are used
var destroyModalContent = function() {
    $(".div_modal").html('');
    $(".div_modal").css({
        "display": "none"
    });

    $(".div_modal").css({
        "height": "390px"
    });
}

// Fetching Data for the Charts based on Chart IDs
var getData = function(chartId, isPreview) {
    switch (chartId) {
    case 1:
        var data = getDataForChart1();
        if (isPreview) {
            var newData = new Array();
            for (var index in data) {
                var element = data[index];
                var newObject = {
                    "Month": element['Month'],
                    "All": element['All']
                };
                newData.push(newObject);
            }
            data = newData;
        }
        break;
    case 2:
        var data = getDataForChart2();
        if (isPreview) {
            var newData = new Array();
            for (var index in data) {
                var element = data[index];
                var newObject = {
                    "Month": element['Month'],
                    "Blog": element['Blog']
                };
                newData.push(newObject);
            }
            data = newData;
        }
        break;
    case 3:
        var data = getDataForChart3();
        break;
    case 4:
        var data = getDataForChart4();
        break;
    case 5:
        var data = getDataForChart5();
        break;
    default:
        ;
    }
    return data;
}


// Twitter Stream Starts
//Moving tweets forward by one
var moveTweetBackByOne = function() {
    if (parseInt(sessionStorage.presentTopTweetIndex) < totalNumberOfTweet-2 ) {
        sessionStorage.presentTopTweetIndex = parseInt(sessionStorage.presentTopTweetIndex) + 1;
        for (var index = 0; index < totalNumberOfTweet; index++) {
            var top = parseInt($('div[index="' + index + '"]').css('top'));
            top = top - 80;
            $('div[index="' + index + '"]').animate({
                "top": top + "px"
            }, 500, function () {
               
            });
        }
    }
}

//Moving tweets backward by one
var moveTweetForwordByOne = function() {
    if (parseInt(sessionStorage.presentTopTweetIndex) > 0) {
        sessionStorage.presentTopTweetIndex = parseInt(sessionStorage.presentTopTweetIndex) - 1;
       
        for (var index = 0; index < totalNumberOfTweet; index++) {
            var top = parseInt($('div[index="' + index + '"]').css('top'));
            top = top + 80;
            $('div[index="' + index + '"]').animate({
                "top": top + "px"
            }, 500, function () {
               
            });
        }
    }
}
// Twitter Stream Ends

// Twitter Stream Admin Starts
//Moving tweet forward by one
var moveTweetBackByOne_admin = function() {
    if (parseInt(sessionStorage.presentTopTweetIndex_admin) < totalNumberOfTweet_admin - 2 ) {
        sessionStorage.presentTopTweetIndex_admin = parseInt(sessionStorage.presentTopTweetIndex_admin) + 1;
        for (var index = 0; index < totalNumberOfTweet_admin; index++) {
            var top = parseInt($('div[index_admin="' + index + '"]').css('top'));
            top = top - 80;
            $('div[index_admin="' + index + '"]').animate({
                "top": top + "px"
            }, 500, function () {
               
            });
        }
    }
}

//Moving tweet back by one
var moveTweetForwordByOne_admin = function() {
    if (parseInt(sessionStorage.presentTopTweetIndex_admin) > 0) {
        sessionStorage.presentTopTweetIndex_admin = parseInt(sessionStorage.presentTopTweetIndex_admin) - 1;
       
        for (var index = 0; index < totalNumberOfTweet_admin; index++) {
            var top = parseInt($('div[index_admin="' + index + '"]').css('top'));
            top = top + 80;
            $('div[index_admin="' + index + '"]').animate({
                "top": top + "px"
            }, 500, function () {
               
            });
        }
    }
}
// Twitter Stream Admin Ends

// Replacing all the link texts to <a href=""></a> tags
var addlinks = function(data) {
    //Add link to all http:// links within tweets
    data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url) {
        return '<a target="_blank" style="color:#08c;" href="' + url + '" >' + url + '</a>';
    });

    //Add link to @usernames used within tweets
    data = data.replace(/\B@([_a-z0-9]+)/ig, function (reply) {
        return '<a target="_blank" href="http://twitter.com/' + reply.substring(1) + '" style="color:#08c;font-weight:lighter;" >' + reply.charAt(0) + reply.substring(1) + '</a>';
    });
    return data;
}

// This function finds the time difference
var timeDifference = function(start) {
    var startDate = new Date(start);
    var endDate = new Date();
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    return (hours <= 9 ? "0" : "") + hours + "h" + (minutes <= 9 ? "0" : "") + minutes + "m";
}

//Top Tweets Streams
var getMentionJsonData = function() {
    var url = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
    $.ajax({
        type: "get",
        dataType: "jsonp",
        crossDomain: true,
        contentType: "application/json",
        url: url,
        success: function (response) {
            var date            = new Date();
            var tweetStreamHtml = "";
            var statusCount     = response.statuses.length;
            var userName        = response.tag_names;
            var tweetData       = response.statuses;
            var rank,screen_name,status_text,reply_count,status_time_str;
            var divIndex=0;
            var adminHtml="";
            for ( i = 0; i < statusCount; i++) {
                screen_name     = tweetData[i].screen_name;
                status_text     = tweetData[i].status_text;
                img_url         = tweetData[i].img_url;
                tweetTime       = tweetData[i].status_time_str;
                status_time_str = date.getDate(tweetData[i].status_time_str)+"/"+date.getMonth(tweetData[i].status_time_str)+"/"+date.getFullYear(tweetData[i].status_time_str);

                if ( divIndex === 0 ) {
                    sessionStorage.presentTopTweetIndex = 0;
                    sessionStorage.presentTopTweetIndex_admin=0;
                }
                tweetStreamHtml += '<div index="' + (divIndex) + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + timeDifference(tweetTime) + '</div><div class="div_tweetText">' + addlinks(status_text) + '</div></div></div>';
                divIndex+=1;
            }
            $("#div_tweeterStream .div_tweetsMain").html(tweetStreamHtml);
        }
    });
}

// Twitter User Data
var getUserJsonData = function() {
    var url = "http://vzw.glassfish.w2oservices.com:8080/rest_api_9/twitter/group/statuses/top?groups=1&period=day&period_count=7&limit=20";
    $.ajax({
        type: "get",
        dataType: "jsonp",
        crossDomain: true,
        contentType: "application/json",
        url: url,
        success: function (response) {
            var date            = new Date();
            var tweetStreamHtml = "";
            var topTweets       = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
            var topTweetsModal  = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
            var period          = response.period;
            var periodCount     = response.period_count;
            var userName        = response.groups[0].userName;
            var tweetData       = response.groups[0].statuses;
            var statusCount     = response.groups[0].statuses.length;
            var rank,screen_name,status_text,reply_count,status_time_str;
            for ( i = 0; i < 5; i++) {
                rank            = tweetData[i].rank;
                screen_name     = tweetData[i].screen_name;
                status_text     = tweetData[i].status_text;
                reply_count     = tweetData[i].reply_count;
                retweet_count   = tweetData[i].retweet_count;
                status_time_str = date.getDate(tweetData[i].status_time_str)+"/"+date.getMonth(tweetData[i].status_time_str)+"/"+date.getFullYear(tweetData[i].status_time_str);

                topTweets += '<tr>';
                topTweets += '<td>'+rank+'</td>';
                topTweets += '<td>'+addlinks(status_text)+'</td>';
                topTweets += '<td>@'+screen_name+'</td>';
                topTweets += '<td>'+reply_count+'</td>';
                topTweets += '<td>'+retweet_count+'</td>';
                topTweets += '<td>'+status_time_str+'</td>';
                topTweets += '</tr>';
            }
            var divIndex=0;
            var adminHtml="";
            for ( i = 0; i < statusCount; i++) {
                rank            = tweetData[i].rank;
                screen_name     = tweetData[i].screen_name;
                status_text     = tweetData[i].status_text;
                reply_count     = tweetData[i].reply_count;
                retweet_count   = tweetData[i].retweet_count;
                img_url         = tweetData[i].img_url;
                tweetTime       = tweetData[i].status_time_str;
                status_time_str = date.getDate(tweetData[i].status_time_str)+"/"+date.getMonth(tweetData[i].status_time_str)+"/"+date.getFullYear(tweetData[i].status_time_str);


                topTweetsModal  += '<tr>';
                topTweetsModal  += '<td>'+rank+'</td>';
                topTweetsModal  += '<td>'+addlinks(status_text)+'</td>';
                topTweetsModal  += '<td>@'+screen_name+'</td>';
                topTweetsModal  += '<td>'+reply_count+'</td>';
                topTweetsModal  += '<td>'+retweet_count+'</td>';
                topTweetsModal  += '<td>'+status_time_str+'</td>';
                topTweetsModal  += '</tr>';
                if ( divIndex === 0 ) {
                    sessionStorage.presentTopTweetIndex = 0;
                    sessionStorage.presentTopTweetIndex_admin=0;
                }
                adminHtml       += '<div index_admin="' + divIndex + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + timeDifference(tweetTime) + '</div><div class="div_tweetText">' + addlinks(status_text) + '</div></div></div>';
                divIndex+=1;
            }
            
            
            topTweets += '</tbody></table>';
            $('#topTweets').html(topTweets);
            $('#twitter-feed-modal').html(topTweetsModal);
            $("#div_tweeterStream_admin .div_tweetsMain").html(adminHtml);
        }
    });
}

//Chart 8(Keyword Frequency) Starts
var parseAndDisplayKeyword = function() {
    var jsonData = getJsonDataForKeyword();

    for (var key in jsonData["Features"]) {
        $('#featList').after('<li tag="' + key + '">' + key + '<span>' + jsonData["Features"][key] + '</span>')
    }

    for (var key in jsonData["Smartphones"]) {
        $('#smartList').after('<li tag="' + key + '">' + key + '<span>' + jsonData["Smartphones"][key] + '</span>')
    }

    for (var key in jsonData["Tablets"]) {
        $('#tabletList').after('<li tag="' + key + '">' + key + '<span>' + jsonData["Tablets"][key] + '</span>')
    }
}

// Chart 8 JSON Data
var getJsonDataForKeyword = function() {
    var data = {
        "Features": {
            "storage_capacity": 1074,
            "4g": 244,
            "3g": 429,
            "lte": 9934,
            "camera": 8090,
            "edge": 4023,
            "keyboard": 244,
            "music_player": 429

        },
        "Smartphones": {
            "iphone_4": 764,
            "iphone_5": 348,
            "samsung_galaxy_s3": 560,
            "iphone_4s": 1120,
            "samsung_s4": 8090,
            "samsung galaxy": 4023,
            "droid_dna": 67,
            "android_razr": 621

        },
        "Tablets": {
            "ipad": 324,
            "ipad_mini": 35,
            "samsung_galaxy_tab": 1124,
            "nexus_7": 990,
            "kindle_fire": 8090,
            "droid_xyboard": 4023
        }
    };
    return data;
}
//Chart 8(Keyword Frequency) Ends

// Metric Ticker Starts
// prevent breakage in IE if we forget to take out our console.log statements
if (typeof console === "undefined") {
    window.console = {
        log: function () {}
    };
};

Array.prototype.getUnique = function() {
    var o = {}, a = []
    for (var i = 0; i < this.length; i++) o[this[i]] = 1
        for (var e in o) a.push(e)
            return a
    }

    String.prototype.toProperCase = function() {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    Number.prototype.addCommas = function() {
    var nStr = this + ''; // convert number to string
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
};

Number.prototype.toPercent = function() {
    var number = this;
    var percent = (number * 100).toFixed(1);

    return percent;
};

function getAnnotation(e) {
    var chart = $(e.sender.element).parent();
    var widgetID = chart.children(".widgetchart").attr("id");
    var date = e.category.toString("yyyy-MM-dd");

    $(".annotation").remove();

    chart.append("<div class='annotation'><p>Loading annotations...</p></div>");

    $(".annotation").fadeIn(100).css({
        top: chart.find(".k-tooltip:visible").position().top + 130,
        left: chart.find(".k-tooltip:visible").position().left + 10,
    });

    function validate(text) {
        if (text.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    $.ajax({
        type: "POST",
        url: "services/annotations/get_annotation.php",
        data: {
            date: date,
            widgetID: widgetID,
        },
    }).success(function(response) {

        if (!response.data.length) {
            $(".annotation").empty().append("<p>There are no annotations for this date.</p><form id='add-annotation' action='' method='post'><input type='text' id='annotation' name='annotation' placeholder='Add an annotation' /><input type='submit' value='Add' class='btn' /></form>");

            $("#add-annotation").on("submit", function(e) {
                e.preventDefault();

                var annotation = $("#annotation").val();

                if (validate(annotation)) {
                    $.ajax({
                        type: "POST",
                        url: "services/annotations/add_annotation.php",
                        data: {
                            annotation: annotation,
                            date: date,
                            userID: userID,
                            widgetID: widgetID,
                        },
                    }).success(function(response) {
                        $(".annotation").empty().append("<p>" +annotation+ "</p><form id='add-annotation-reply' action='' method='post'><input type='text' id='reply' name='reply' placeholder='Enter a reply' /><input type='submit' value='Reply' class='btn' /></form>").find("input[type='text']").val("").focus();
                    });
                }
            });
        }
        else {
            $(".annotation").empty().append("<p>" +response.data[0].item.annotation+ "</p><form id='add-annotation-reply' action='' method='post'><input type='text' id='reply' name='reply' placeholder='Enter a reply' /><input type='submit' value='Reply' class='btn' /></form>");

            function getAnnotationReplies(annotationID) {
                $.ajax({
                    type: "POST",
                    url: "services/annotations/get_annotation_replies.php",
                    data: {annotationID: annotationID},
                }).success(function(response) {
                    var replies = response.data;

                    if (replies.length) {
                        for (var i=0; i < replies.length; i++) {
                            var reply = replies[i].item.reply;
                            $("<p class='reply'>" +reply+ "</p>").insertAfter(".annotation p:first").slideDown(100);
                        }
                    }
                });
            }

            var annotationID = response.data[0].item.id;
            getAnnotationReplies(annotationID);

            $("#add-annotation-reply").on("submit", function(e) {
                e.preventDefault();

                var reply = $("#reply").val();

                if (validate(reply)) {
                    $.ajax({
                        type: "POST",
                        url: "services/annotations/add_annotation_reply.php",
                        data: {
                            annotationID: annotationID,
                            reply: reply,
                            userID: userID,
                        },
                    }).success(function(response) {
                        $("<p class='reply'>" +reply+ "</p>").insertAfter(".annotation p:first").slideDown(100);
                        $(".annotation").find("input[type='text']").val("").focus();
                    });
                }
            });
        }
        $(".annotation").find("input[type='text']").focus();

    });


function htmlEscape(str) {
    return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

    // If annotation is clicked outside of, close it
    $(document).on("click", function(e) {
        if (!$(e.target).hasClass("annotation") && !$(e.target).parents().hasClass("annotation") && e.target.nodeName !== "circle" || $(e.target).parents(".widget").children(".widgetchart").attr("id") !== chart.children(".widgetchart").attr("id")) {
            $(".annotation").fadeOut(100);
        }
    });

}

var metricTicker = {};

metricTicker.init = function(options) {

    var data = [];

    function getData(api) {
        return $.ajax({
            url: api,
            cache: false,
            dataType: "JSONP",
            error: function(data) {

            },
        });
    }

    // Get the data from the endpoint, then build out the markup
    getData(options.api.sentiment).success(function(response) {

        // In the return of the endpoint:
        //{
        //  value: 66358, <= Value to use for static number
        //  value_velocity: 0, <= Value of static number change
        //  value_velocity_as_percent: -0.4781036197594864, <= Value to use as percentage
        //  id: "neutral", <= id for grouping
        //  display: "Neutral", <= display for display
        //  set: "start" <= 'Start' refers to previous week, 'end' for current week
        //},

        // Transform the data (fixed)
        data.push(
        {
            category: "Positive Sentiment",
            thisWeek: response.data[0].positive.end.value,
            lastWeek: response.data[0].positive.start.value,
            wowChange: response.data[0].positive.end.value_velocity,
            wowChangePercentage: response.data[0].positive.end.value_velocity_as_percent,
        },
        {
            category: "Negative Sentiment",
            thisWeek: response.data[0].negative.end.value,
            lastWeek: response.data[0].negative.start.value,
            wowChange: response.data[0].negative.end.value_velocity,
            wowChangePercentage: response.data[0].negative.end.value_velocity_as_percent,
        },
        {
            category: "Neutral Sentiment",
            thisWeek: response.data[0].neutral.end.value,
            lastWeek: response.data[0].neutral.start.value,
            wowChange: response.data[0].neutral.end.value_velocity,
            wowChangePercentage: response.data[0].neutral.end.value_velocity_as_percent,
        }
        );

        getData(options.api.conversation).success(function(response) {

            // Use Verizon Conversation Volume
            var conversationVolume = [];

            for (var i=0; i < response.data.length; i++) {
                var item = response.data[i];

                if (item.id === "verizon") {
                    conversationVolume.push(item);
                }
            }

            // Transform the data
            data.push(
            {
                category: "Conversation Volume",
                thisWeek: conversationVolume[1].value,
                lastWeek: conversationVolume[0].value,
                wowChange: conversationVolume[1].value_velocity,
                wowChangePercentage: conversationVolume[1].value_velocity_as_percent,
            }
            );

            metricTicker.build(data);
        });

    });

    return metricTicker;
}

metricTicker.build = function(data) {
    var ticker = $(".metric-ticker").find(".widget");
    var output = "<ul>";

    for (var i=0; i < data.length; i++) {
        var item = data[i];

        if (i == 0) {
            var firstChild = "class='metric-active'";
            var categoryActive = "class='category-active'";
        }
        else {
            var firstChild = "";
            var categoryActive = "";
        }

        output += "<li " + firstChild + " data-original='true'>" +
        "<h2 " +categoryActive+ "><span>" +item.category+ "</span></h2><span class='arrow'></span>" +
        "<span class='metric first-child'>This Week: " +(item.thisWeek.addCommas() || "N/A")+ "</span>" +
        "<span class='metric'>Last Week: " +(item.lastWeek.addCommas() || "N/A")+ "</span>" +
        "<span class='metric'>WOW Change: " +(item.wowChange.addCommas() || "N/A")+ " (" +(item.wowChangePercentage.toPercent() || "N/A")+ "%)";

        if (item.wowChange > 0) {
            output += "<span class='wow-change positive'></span>";
        }
        else if (item.wowChange < 0) {
            output += "<span class='wow-change negative'></span>";
        }

        output +=
        "</span>" +
        "</li>";
    }

    output += "</ul>" +
    "<div class='controls'>" +
    "<span class='control' data-direction='back'>&laquo;</span>" +
    "<span class='control mid' data-direction='play'> <img class='play' src='/images/pause.png' height='18' width='18'> </span>" +
    "<span class='control' data-direction='forward'>&raquo;</span>" +
    "</div>";

    ticker.append(output).find("ul").fadeIn(800);

    metricTicker.start();

    return metricTicker;
}

metricTicker.start = function() {
    $(".metric-ticker").find("li[data-original='true']").each(function() {
        $(this).clone()
        .removeAttr("style")
        .removeAttr("data-original")
        .removeClass("metric-active")
        .attr("data-cloned", true)
        .appendTo(".metric-ticker ul")
        .find("h2")
        .removeClass("category-active");
    });

    // Automatically go through ticker items
    var timer = setInterval(function() {
        metricTicker.go();
    }, 10000);

    // Manually go through ticker items
    $(".metric-ticker").find(".control").on("click", function() {

        // Pause the ticker
        if ($(this).data("direction") == 'play') {

            clearTimeout(timer);
            $(this).data('direction', 'pause');
            $('img.play').attr('src', '/images/play.png');

        // Play the ticker (if paused)
        } else if ($(this).data("direction") == 'pause') {

            $(this).data('direction', 'play');
            $('img.play').attr('src', '/images/pause.png');

            metricTicker.go();

            timer = setInterval(function() {
                metricTicker.go();
            }, 10000);

        // If arrows are clicked, move the ticker in said direction
        } else {

            metricTicker.go($(this).data("direction"));
            clearTimeout(timer);

            $('img.play').attr('src', '/images/pause.png');
            $('.control.mid').data('direction', 'play');

            timer = setInterval(function() {
                metricTicker.go();
            }, 10000);
        }

    });

    return metricTicker;
}

metricTicker.go = function(direction) {
    var ticker = $(".metric-ticker").find(".widget");
    $(".metric-active").find("h2").removeClass("category-active");

    // Go forward
    if (direction === "forward" || !direction) {

        // If it's showing the last item
        if (!$(".metric-active").next().next().length) {

            if ($(".metric-active").data("original") == true) {
                $(".metric-ticker").find("li[data-cloned='true']")
                .removeAttr("style")
                .appendTo(".metric-ticker ul")
                .find("h2")
                .removeClass("category-active");
            }
            else if ($(".metric-active").data("cloned") == true) {
                $(".metric-ticker").find("li[data-original='true']")
                .removeAttr("style")
                .appendTo(".metric-ticker ul")
                .find("h2")
                .removeClass("category-active");
            }

        }

        $(".metric-active").css({
            right: 0,
        }).animate({
            left: -(ticker.width() * 0.83),
            width: 0,
        }, function() {
            $(this).removeClass("metric-active");
        }).next("li").css({
            right: 0,
        }).animate({
            left: 0,
            width: "83%",
        }, function() {
            $(this).addClass("metric-active")
            .find("h2").addClass("category-active");
        });
    }

    // Go back
    else if (direction == "back") {

        // If it's showing the first item
        if (!$(".metric-active").prev().length) {

            if ($(".metric-active").data("original") == true) {
                $(".metric-ticker").find("li[data-cloned='true']")
                .removeAttr("style")
                .css({
                    left: - (ticker.width() * 0.83),
                    width: 0,
                })
                .prependTo(".metric-ticker ul")
                .find("h2")
                .removeClass("category-active");
            }

            else if ($(".metric-active").data("cloned") == true) {
                $(".metric-ticker").find("li[data-original='true']")
                .removeAttr("style")
                .css({
                    left: - (ticker.width() * 0.83),
                    width: 0,
                })
                .prependTo(".metric-ticker ul")
                .find("h2")
                .removeClass("category-active");
            }
        }

        $(".metric-active").css({
            left: 0,
        }).animate({
            right: - (ticker.width() * 0.83),
            width: "12%",
        }, function() {
            $(this).removeClass("metric-active");
        }).prev("li").css({
            right: 0,
        }).animate({
            left: 0,
            width: "83%",
        }, function() {
            $(this).addClass("metric-active")
            .find("h2").addClass("category-active");
        });
    }

    return metricTicker;
}

var metric_ticker = function() {
    var PropertyID = "1";
    var InsightID = "vzw";
    var PropertyTitle = "Wireless Social Pulse";
    var userID = "6";
    var EndpointHostDS = "http://wcg-verizon-api-prod.herokuapp.com";

    var APINotifications = "http://dashboard-api.herokuapp.com/rest/Topics/All/Recent/Alerts";
    var APIsentimentsnapshot = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/sentiment/metricsperiod?period=week&period_count=2&formatter=normalized";
    var APIconversationsnapshot = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/metricsperiod?period=week&period_count=2";
    //Depreciated because we moved to new endpoint
    var APItrendingtopicskeywords = "";

    var APItrendingtopics = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/topics/multitime?period=week&limit=5";
    var APIgettoptweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_9/twitter/group/statuses/top?groups=1&period=day&period_count=7&limit=20";
    var APItwitterfollowers = "/livecache/vzw_twitter_followers_1d.json?key=5248ff1751c9d";
    
    var APIgetInsightsVolume = "/livecache/vzw_twitter_topic_locations_volume_1d.json?key=5248ff1751c9d";
    var APIgetInsightsVolumeTab = "/livecache/vzw_twitter_topic_volume_summary_1d.json?key=5248ff1751c9d";
    var APIgetInsightsVolumeTitle = "Volume";
    var APIgetInsightsVolumeSubtitle = "Wireless Volume on Twitter by City";
    var APIgetInsightsVolumeDataCard = "A United States map showing cities with the most Twitter volume related to Verizon Wireless.";
    
    var APIgetInsightsSOV = "/livecache/vzw_twitter_topic_locations_share_of_voice_1d.json?key=5248ff1751c9d";
    var APIgetInsightsSOVTab = "/livecache/vzw_twitter_topic_share_of_voice_summary_1d.json?key=5248ff1751c9d";
    var APIgetInsightsSOVTitle = "Share Of Voice";
    var APIgetInsightsSOVSubtitle = "Share of Voice on Twitter by City";
    var APIgetInsightsSOVDataCard = "A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city.";
    
    var APIgetInsightsSOVNew = "";

    var APIgetInsightsFollowers = "http://vzw.glassfish.w2oservices.com:8080/rest_api_html_3/twitter/follower/locations?account=59889953";
    var APIgetInsightsFollowersTab = "/livecache/vzw_twitter_followers_summary_1d.json?key=5248ff1751c9d";
    var APIgetInsightsFollowersTitle = "Followers";
    var APIgetInsightsFollowersSubtitle = "Followers on Twitter by City";
    var APIgetInsightsFollowersDataCard = "A United States map displaying volume of new Twitter followers for all Verizon Wireless Twitter handles. @verizonwirelss @vznews @vzwsupport @vzwdeals @vzwb2b";
    
    var APIvolumeandsentiment = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/sentiment/multitime?period=week&limit=5";
    var APIgettweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/user/statuses?group=1&include_replies=false&limit=10";
    var APIgettweets2 = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
    
    var APIgettweetsmentions = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
    var APIrealtime = "";

    var APIkeywordfrequency1 = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_smartphones/aggregate?period=hour&period_count=24";
    var APIKeywordTitle1 = "smartphones";
    var APIkeywordfrequency2 = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_tablets/aggregate?period=hour&period_count=24";
    var APIKeywordTitle2 = "tablets";
    var APIkeywordfrequency3 = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_features/aggregate?period=hour&period_count=24";
    var APIKeywordTitle3 = "features";
    
    var APIconversationvolume = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/conversationvolume/multitime?period=week";
    var APIshareofvoice = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/aggregate?period=week";
    var APIshareofvoiceCrosstab = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/crosstab?period=week";
    
    // Sentiment
    var APIsentimentcompetitors = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitorsentiment/crosstab?limit=5";
    var APIsentimentcompetitors2 = "";
    
    metricTicker.init({
        api: {
            sentiment: APIsentimentsnapshot,
            conversation: APIconversationsnapshot,
        }
    });
}
// Metric Ticker Ends