/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	"use strict";

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();


	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly({
				speed: 2000
			});

		// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
							'assets/img/image1.jpg': 'center',
							'assets/img/image2.jpg': 'center',
							'assets/img/image3.jpg': 'center',
							'assets/img/image4.jpg': 'center',
							'assets/img/image5.jpg': 'center',
							'assets/img/image6.jpg': 'center'
						},

					// Delay.
						delay: 6000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					document.body.appendChild($wrapper);

				for (k in settings.images) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);

				}

			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

		// // Menu.
		// 	var $menu = $('#menu');

		// 	$menu._locked = false;

		// 	$menu._lock = function() {

		// 		if ($menu._locked)
		// 			return false;

		// 		$menu._locked = true;

		// 		window.setTimeout(function() {
		// 			$menu._locked = false;
		// 		}, 350);

		// 		return true;

		// 	};

		// 	$menu._show = function() {

		// 		if ($menu._lock())
		// 			$body.addClass('is-menu-visible');

		// 	};

		// 	$menu._hide = function() {

		// 		if ($menu._lock())
		// 			$body.removeClass('is-menu-visible');

		// 	};

		// 	$menu._toggle = function() {

		// 		if ($menu._lock())
		// 			$body.toggleClass('is-menu-visible');

		// 	};

		// 	$menu
		// 		.appendTo($body)
		// 		.on('click', function(event) {

		// 			event.stopPropagation();

		// 			// Hide.
		// 				$menu._hide();

		// 		})
		// 		.find('.inner')
		// 			.on('click', '.close', function(event) {

		// 				event.preventDefault();
		// 				event.stopPropagation();
		// 				event.stopImmediatePropagation();

		// 				// Hide.
		// 					$menu._hide();

		// 			})
		// 			.on('click', function(event) {
		// 				event.stopPropagation();
		// 			})
		// 			.on('click', 'a', function(event) {

		// 				var href = $(this).attr('href');

		// 				event.preventDefault();
		// 				event.stopPropagation();

		// 				// Hide.
		// 					$menu._hide();

		// 				// Redirect.
		// 					window.setTimeout(function() {
		// 						window.location.href = href;
		// 					}, 350);

		// 			});

		// 	$body
		// 		.on('click', 'a[href="#menu"]', function(event) {

		// 			event.stopPropagation();
		// 			event.preventDefault();

		// 			// Toggle.
		// 				$menu._toggle();

		// 		})
		// 		.on('keydown', function(event) {

		// 			// Hide on escape.
		// 				if (event.keyCode == 27)
		// 					$menu._hide();

		// 		});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

	});

})(jQuery);