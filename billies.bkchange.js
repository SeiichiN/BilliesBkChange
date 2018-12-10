/*!
 * billies.bkchange.js
 * jQueryプラグイン bkchanger
 *
 * @version  1.0
 * @author   Seiichi Nukayama <billie175@gmail.com>
 *
 * 使い方
 *   （例）footer.php などで以下のような記述でこのプラグインを呼び出す。（WordPressの場合）
 *   var path = "<?php echo get_template_directory_uri(); ?>";  
 *   var images = [path + '/img/header_bak1.jpg', path + '/img/header_bak2.jpg', path + '/img/header_bak3.jpg'];
 *   jQuery('#bkimage').bgchanger(images);
 *
 *   <htmlの例>
 *       <header id="bkimage">
 *            <h1>XXXX</h1>
 *       </header>
 *
 *   <cssの例>
 *     #bkimage {
 *       position: relative;
 *     }
 *     #bkimage .slides {
 *       position: absolute;
 *       width: 100%;
 *       height: 100%;
 *       background-repeat: no-repeat;
 *       background-position: center center;
 *     }
 *
 *     #bkimage .slides:not(:first-child) {
 *       display: none;
 *     }
 *
 */
;(function($) {
    'use strict';

    /**
     * @param: bgArray <Array> 
     *
     */
    $.fn.bgchanger = function(bgArray, options) {

		options = $.extend({
			speed: 3000,
			times: 5000
		}, options);
//        var speed = 3000;
//        var times = 5000;

        var target = this;
        
        $.each(bgArray.reverse(), function(i, value) {
            $(target).prepend('<div class="slides" style="background-image:url(' + value + ');"></div>');
        });

        var bgNo = 1;
        var bgLength = bgArray.length;
        setInterval(function() {
            $(target).children('.slides:nth-child(' + bgNo + ')').fadeOut(options.speed);
            $(target).children('.slides:nth-child(' + (bgNo === bgLength ? 1 : bgNo + 1) + ')').fadeIn(options.speed/3);
            if (bgNo >= bgLength) {
                bgNo = 1;
            } else {
                bgNo += 1;
            }
        }, options.times);

        return this;
    };
})(jQuery);
