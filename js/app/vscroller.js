//rewritten from vscroller XML function, now parses JSON
var interval = new Array();

(function ($) {
    $.fn.extend({
        vscroller: function (options) {
            var settings = $.extend({
                speed: 1000,
                stay: 0,
                tweetfeed: '',
                cache: true,
                unique: ''
            }, options);

            return this.each(function () {
                var mouseIn = false;
                var totalElements;
                var isScrolling = false;
                var h;
                var t;
                var wrapper = $(this).addClass('news-wrapper').attr("id", settings.unique);
                var jsontype;
                if (settings.tweetfeed === '') {
                    console.log('No JSON file specified');
                    return;
                }

                var feedurl = settings.tweetfeed;

                if (feedurl.toLowerCase().indexOf("http") >= 0) {
                    jsontype = "JSONP";
                } else {
                    jsontype = "JSON";
                }

                $.ajax({
                    url: settings.tweetfeed,
                    type: 'GET',
                    dataType: jsontype,
                    beforeSend: function (data) {
                        $("#test").append("<div class='loading'><img src='/img/loading_03.gif'></div>");
                    },
                    error: function (data) {
                        //console.log("Error Loading Top Tweets");
                    },
                    success: function (data) {
                        console.log('Success Initializing and Loading Twitter Stream');

                        //if there are news headlines then build the html
                        var contentWrapper = $('<div/>').addClass('news-contents-wrapper');
                        var newsHeader = $('<div/>').addClass('news-header');
                        var newsContents = $('<div/>').addClass('news-contents');
                        wrapper.append(contentWrapper);
                        contentWrapper.append(newsContents);
                        var i = 0;
                        totalElements = data.statuses.length;

                        function replaceURLWithHTMLLinks(text) {
                            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                            return text.replace(exp, "<a href='$1' target='_blank'>$1</a>");
                        }

                        //console.log(newsContents);
                        $.each(data.statuses, function (j) {
                            var news = $('<div/>').addClass('news');

                            newsContents.append(news);
                            var history = $('<div/>').addClass('history');
                            var description = $('<div/>').addClass('description');
                            news.append(history);
                            news.append(description);
                            if (this.groups == 2 || this.groups == 14) {
                                //uncomment to highlight influencers.
                                //news.addClass("influencer");
                            }

                            var url = "http://www.twitter.com/" + this.screen_name;
                            var htext = this.screen_name;
                            history.append("<div class='circle-outer'><a href='" + url + "' target='_blank'><img src='" + this.img_url + "'></a></div>");
                            description.append($('<h1/>').html("<a href='" + url + "' target='_blank'>" + htext + "</a>"));
                            var newsText = replaceURLWithHTMLLinks(this.status_text);
                            if (this.status_text.length > 140) {
                                newsText = newsText.substr(0, 140) + "...";
                            }
                            var timesince = $.timeago(this.status_time);
                            description.append($('<div/>').addClass('detail').html(newsText));
                            description.append($('<div/>').addClass('timeago').html(timesince));

                        });


                        h = parseFloat($('.news:eq(0)').outerHeight());
                        $('.news', wrapper).each(function () {
                            $(this).css({
                                top: i++ * h
                            });
                        });
                        t = (totalElements - 1) * h;

                        //$('.news-contents div.news').last().prependTo('#'+settings.unique+' .news-contents').css('top', '-101px');

                        // pause on hover
                        newsContents.mouseenter(function () {
                            mouseIn = true;
                            if (!isScrolling) {
                                $('.news').stop(true, false);
                                clearTimeout(interval[settings.unique]);
                            }
                        });

                        // restart scroller
                        newsContents.mouseleave(function () {
                            mouseIn = false;
                            interval[settings.unique] = setTimeout(scroll, settings.stay);
                        });


                        // handle button control DOWN
                        $('#' + settings.unique + ' .arrow-down:not(.disabled), .arrow-down.tn:not(.disabled)').live('click', function () {
                            //console.log("clicked down " + $(this));
                            var section = $(this).parent().attr("id");

                            if (!isScrolling) {
                                $('#' + section + ' .news').stop(true, false);
                                clearTimeout(interval[settings.unique]);
                            }
                            interval[settings.unique] = setTimeout(scroll, 1);
                        });


                        // Handle button control UP
                        $('#' + settings.unique + ' .arrow-up:not(.disabled)').live('click', function () {
                            //console.log("clicked up " + $(this));
                            var section = $(this).parent().attr("id");

                            if (!isScrolling) {
                                $('#' + section + ' .news').stop(true, false);
                                clearTimeout(interval[settings.unique]);
                            }
                            interval[settings.unique] = setTimeout(scrolldown, 1);
                        });



                        // Pause scroller on hover, then resume on mouseout
                        $('#' + settings.unique + ' .arrow-up, #' + settings.unique + ' .arrow-down, , .arrow_down.tn').on("mouseenter", function () {
                            clearTimeout(interval[settings.unique]);
                        }).on("mouseleave", function () {
                            interval[settings.unique] = setTimeout(scroll, 1);
                        });

                        interval[settings.unique] = setTimeout(scroll, 1);
                    }
                });

                // Handle height of modal
                $('#' + settings.unique).each(function (i) {
                    var parentHeight = $(this).parent().parent().css("max-height");
                    $('#' + settings.unique).css("max-height", parentHeight);
                });



                function scroll() {

                    $('.arrow-up, .arrow-down').addClass('disabled');


                    if (!mouseIn && !isScrolling) {
                        isScrolling = true;
                        $('#' + settings.unique + ' .news:eq(0)').stop(true, false).animate({
                            top: -h
                        }, settings.speed, function () {

                            clearTimeout(interval[settings.unique]);
                            //$('.news-contents div.news').last().prependTo('#'+settings.unique+' .news-contents');
                            var current = $('#' + settings.unique + ' .news:eq(0)').clone(true);
                            current.css({
                                top: t
                            });
                            $('#' + settings.unique + ' .news-contents').append(current);
                            $('#' + settings.unique + ' .news:eq(0)').remove();
                            isScrolling = false;
                            $('.arrow-up, .arrow-down').removeClass('disabled');
                            interval[settings.unique] = setTimeout(scroll, settings.stay);

                        });

                        $('#' + settings.unique + ' .news:gt(0)').stop(true, false).animate({
                            top: '-=' + h
                        }, settings.speed);
                    }
                }

                function scrolldown() {

                    $('.arrow-up, .arrow-down').addClass('disabled');

                    // prepend the div list with content from the last div.
                    $('.news-contents div.news').last().prependTo('#' + settings.unique + ' .news-contents').css('top', '-101px');

                    clearTimeout(interval[settings.unique]);

                    if (!mouseIn && !isScrolling) {
                        isScrolling = true;
                        $('#' + settings.unique + ' .news:eq(0)').stop(true, false).animate({
                            top: 0
                        }, settings.speed, function () {

                            clearTimeout(interval[settings.unique]);

                            isScrolling = false;
                            $('.arrow-up, .arrow-down').removeClass('disabled');
                            interval[settings.unique] = setTimeout(scroll, settings.stay);


                        });
                        $('#' + settings.unique + ' .news:gt(0)').stop(true, false).animate({
                            top: '+=' + h
                        }, settings.speed);
                    }



                }
                // end scrolldown
            });
        }
    });
})(jQuery);