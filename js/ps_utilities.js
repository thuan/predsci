
 /*
*
* Utilities resource file
*
*/

(function (ps_utilities, $, undefined ){
    ps_utilities.loadData = function (arrayData){
        $.ajax({
            type: 'GET',
            cache: true,
            data: "",
            url: arrayData.dataURL,
            dataType: 'json',
            json: 'json',
            success: function(dataResponse) {
                if(dataResponse.data.length){
                    arrayData.jsonData = dataResponse;
                    ps_graphDefinitions.jsonData = dataResponse;
                    arrayData.function(arrayData);
                }
            },
            error: function() { console.log('Error making request'); }
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
            async: false,
            success: function(dataResponse) {
                arrayData.jsonpData = dataResponse;
                ps_graphDefinitions.jsonpData = dataResponse;
                arrayData.function(arrayData);
            },
            error: function(e) { console.log('Error making request'); },
        });
    };
	
	ps_utilities.loadTwitterStream = function (arrayData)
    {
		var usersURL = arrayData.dataURL[0];
		var mentionsURL = arrayData.dataURL[1];
	
		$.when($.ajax({
			url: usersURL,
			dataType: "jsonp",
			crossDomain: true,
			async: false,
			success: function(dataResponseUsers) {
				arrayData.jsonpData = dataResponseUsers;
				ps_graphDefinitions.jsonpData[0] = dataResponseUsers;
				arrayData.function(arrayData);
			},
           	error: function(e) { console.log('Error making request'); },
       	}),
		
		$.ajax({
            url: mentionsURL,
			dataType: "jsonp",
            crossDomain: true,
			async: false,
            success: function(dataResponseMentions) {
				arrayData.jsonpData = dataResponseMentions;
				ps_graphDefinitions.jsonpData[1] = dataResponseMentions;
				arrayData.function(arrayData);
            },
            error: function(e) { console.log('Error making request'); },
        })).then(ps_utilities.loadTwitterStream);		
    };

    ps_utilities.processData = function (data) {
        var chartOpt = {};
        var result = [];

        for (var i = 0; i < data.length; i++) {
            if (!chartOpt[data[i].date]) {
                chartOpt[data[i].date] = {};
            }
            if (!chartOpt[data[i].date][data[i].display]) {
                chartOpt[data[i].date][data[i].display] = 0;
            }
            chartOpt[data[i].date][data[i].display] = data[i].value;
        }

        for (var dt in chartOpt) {
            var temp = {};
            var dtTmp = dt.split('-');
            dtTmp = dtTmp[1] + '/' + dtTmp[2]

            temp['date'] = dtTmp;
            for (var display in chartOpt[dt]){
                temp[display] = chartOpt[dt][display];
            }
            result.push(temp);
        }

        return result;
    }
    
    ps_utilities.dataSentimentCompetitors = function (data) {
        var chartOpt = {};
        var result = [];

        for (var i = 0; i < data.length; i++) {
            if (!chartOpt[data[i].display]) { chartOpt[data[i].display] = {}; }
            if (!chartOpt[data[i].display][data[i].display_2]) { chartOpt[data[i].display][data[i].display_2] = 0; }
            chartOpt[data[i].display][data[i].display_2] = data[i].value;
        }

        for (var id in chartOpt) {
            var temp = {};
            temp['display'] = id;
            for (var dp in chartOpt[id]){ temp[dp] = chartOpt[id][dp]; }
            result.push(temp);
        }

        return result;
    }
    
    ps_utilities.RemoveWidgetGradient = function()
    {
        $("body stop").attr("stop-color","#000000");
    }

    ps_utilities.RemoveLogo = function()
    {
        $('g.AxisText').html('');
        $('g.LegendItem').remove();
    }

    ps_utilities.AddTitle = function(div, element)
    {
        $("#" + div + " .pull-left span").text(element);
    }

    ps_utilities.AddSubTitle = function(div, element)
    {
        $("#" + div + " .pull-left small").text(element);
    }

    ps_utilities.AddTooltip = function(div, element)
    {
        $("#" + div + " .pull-right #tooltipp").attr("data-original-title",element);
        $('g.LegendItem').remove();
    }

    ps_utilities.multipleLoadData = function (arrayData)
    {

        var reponse1 = "";
        var response2 ="";

        $.ajax({
            type: 'GET',
            cache: true,
            data: "",
            url: arrayData.dataURLSentiment,
            dataType: 'json',
            async: false,

            success: function(dataResponse) {

                response1 = dataResponse;




            },
            error: function() { console.log('Error making request'); },
            json: 'json'
        });

        $.ajax({
            type: 'GET',
            cache: true,
            data: "",
            url: arrayData.dataURLConversation,
            dataType: 'json',
            async: false,
            success: function(dataResponse) {

                response2 =  dataResponse;



            },
            error: function() { console.log('Error making request'); },
            json: 'json'
        });

        arrayData.function(response1,response2);

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

    ps_utilities.go = function(direction) {
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
                right: 0
            }).animate({
                    left: -(ticker.width() * 0.83),
                    width: 0
                }, function() {
                    $(this).removeClass("metric-active");
                }).next("li").css({
                    right: 0
                }).animate({
                    left: 0,
                    width: "83%"
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
                            width: 0
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
                            width: 0
                        })
                        .prependTo(".metric-ticker ul")
                        .find("h2")
                        .removeClass("category-active");
                }
            }

            $(".metric-active").css({
                left: 0
            }).animate({
                    right: - (ticker.width() * 0.83),
                    width: "12%"
                }, function() {
                    $(this).removeClass("metric-active");
                }).prev("li").css({
                    right: 0
                }).animate({
                    left: 0,
                    width: "83%"
                }, function() {
                    $(this).addClass("metric-active")
                        .find("h2").addClass("category-active");
                });
        }


    }

    ps_utilities.sumValues = function(obj){
        var total = 0;
        obj.forEach(function(val){
            total += val.value;
        });
        return total;
    }

    ps_utilities.toggleBarLine = function(obj){
        if(obj.template == 'LineBasic'){
            obj.template = 'BarBasic';
            obj.gallery = 'cfx.Gallery.bar';
        }else{
            obj.template = 'LineBasic';
            obj.gallery = cfx.Gallery.Lines;
        }

        new ps_utilities.loadData(obj);
    }

    ps_utilities.toggleBarLineModal = function(obj){
        if(obj.template == 'LineBasic'){
            obj.template = 'BarBasic';
            obj.gallery = 'cfx.Gallery.bar';
        }else{
            obj.template = 'LineBasic';
            obj.gallery = cfx.Gallery.Lines;
        }

        new ps_utilities.loadData(obj);
    }
    
    

    ps_utilities.showMenuSocial = function(datasource){
        var sources = [];
        var results = [];
        $.ajax({
            type : "GET",
            url  : datasource,
            dataType : "json",
            async: false,
            success : function(data){
                sources = data.data;
            },
            error: function(e){console.warn(e)}
        });

        sources.forEach(function(k){
            if(_.where(results, {id : k.id_2}).length === 0){
                results.push({
                    id : k.id_2,
                    display : k.display_2
                });
            }
        });
        return results.sort();
    }


}(window.ps_utilities = window.ps_utilities || {}, jQuery));