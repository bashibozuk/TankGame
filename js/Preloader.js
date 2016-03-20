/**
 * Created by vasil on 2/20/16.
 */
var Preloader;

$(document).ready(function () {
    Preloader = (function () {
        var $dom = $('#preloader');
        return {
            init: function () {
                var containerDimensions = {
                    w: $(window).width(),
                    h: $(window).height()
                };

                var spinnerDimensions = {
                    w: $('.fa-spinner', $dom).width(),
                    h: $('.fa-spinner', $dom).height()
                }

                $('.spinner-holder', $dom).css({
                    position: 'absolute',
                    top: Math.round(containerDimensions.h / 2 - spinnerDimensions.h / 2) + 'px',
                    left: Math.round(containerDimensions.w / 2 - spinnerDimensions.w / 2) + 'px',
                }).addClass('show-spinner');
            },
            show: function() {
                $dom.show();
            },
            hide: function () {
                $dom.hide();
            }
        }
    }())
});
