var ps_trendingterms = ps_trendingterms || {};

(function () {

    ps_trendingterms.loadData = function (widget_trending_terms) {
        if (widget_trending_terms.view == "datagrid") {

            var url = widget_trending_terms.url_trending_terms;

            var jsontype = (url.toLowerCase().indexOf("http") >= 0) ? "JSONP" : "JSON";

            var id = widget_trending_terms.id;
            var klist = 'trending_terms_list-' + widget_trending_terms.category.substr(0, 2);

            console.log("Trending Terms "+ widget_trending_terms.url_trending_terms)

            $.ajax({
                url: url,
                dataType: jsontype,
                success: function (response) {
                    var current = new Array();

                    current = $('#' + klist + ' ul li').not('.title');

                    jQuery.fn.sort = function () {
                        return this.pushStack([].sort.apply(this, arguments), []);
                    }

                    function sortbynumber(a, b) {
                        if (a.value == b.value)
                            return 0;
                        return a.value > b.value ? 1 : -1;
                    }

                    function sortbynumberDesc(a, b) {
                        return sortbynumber(a, b) * -1;
                    }

                    var sorted = $(response.data).sort(sortbynumberDesc);
                    var rowdata = "";

                    if (widget_trending_terms.type != "reload") {
                        rowdata = "<div id='" + klist + "' class=''>"
                            + "<ul class='keywordlist'>"
                    }

                    if ($("#" + id).hasClass("selectable-topics")) {

                        /* Create a sublist container for every 3 keywords*/
                        rowdata += "<ul class='keywordlist sublist'>";

                        $.each(sorted, function (pos, atag) {
                            var flash = find(atag, pos, current);

                            rowdata += "<li class='" + flash + "' tag='" + atag.id + "'><span class='keyword-term'>" + atag.display + "</span><span class='keyword-value'>" + (atag.value) + "</span></li>";

                            if ((pos + 1) % 3 === 0) {
                                rowdata += "</ul><ul class='keywordlist sublist'>";
                            }
                        });
                    }
                    else {
                        /* Create a sublist container for every 5 keywords*/
                        rowdata += "<ul class='keywordlist sublist'>";

                        $.each(sorted, function (pos, atag) {
                            var flash = find(atag, pos, current);
                            rowdata += "<li class='" + flash + "' tag='" + atag.id + "'><span class='keyword-term'>" + atag.display + "</span><span class='keyword-value'>" + (atag.value) + "</span></li>";

                            if ((pos + 1) % 5 === 0) {
                                rowdata += "</ul><ul class='keywordlist sublist'>";
                            }
                        });
                    }

                    rowdata += "</ul></div>";
                    if (widget_trending_terms.type == "reload") {
                        $("#" + klist + " ul li").not('.title').remove();

                        $("#" + klist + " ul").empty().append(rowdata);
                        if ($("#" + klist + " ul li.flash").length > 0) {
                            $.each($("#" + klist + " ul li.flash"), function (c, row) {
                                keywordFlash(row);
                            });
                        } else {
                            var rand = getRandomInt(1, $("#" + klist + " ul li").length + 1);
                            keywordFlash($("#" + klist + " ul li")[rand]);
                        }
                    } else {
                        $("#" + id).empty().append(rowdata);

                        if (widget_trending_terms.callback) {
                            widget_trending_terms.callback();
                        }
                    }

                    function find(tag, pos, list) {
                        var found = false;
                        var newword = true;

                        $.each(list, function (rownum, row) {
                            var count = $(row).children()[0];

                            if ($(row).attr('tag') == tag.id && (pos != rownum || tag.value != $(count).text()))
                                found = true;
                        });

                        if (!found) {
                            $.each(list, function (rownum, row) {
                                if ($(row).attr('tag') == tag.id)
                                    newword = false;
                            });
                        }

                        if (found || newword)
                            return 'flash';
                        else
                            return '';
                    }

                    function keywordFlash(target) {
                        var flash = "#058DC7";
                        var orig = $(target).css('background-color');

                        $(target).css({'background-color': flash});
                        $(target).animate({'backgroundColor': orig}, 1500);
                    }

                    function getRandomInt(min, max) {
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    if (widget_trending_terms.callback) {
                        widget_trending_terms.callback();
                    }
                }
            });
        }
    }
})();

    