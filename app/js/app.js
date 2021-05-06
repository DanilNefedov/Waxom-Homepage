
$(document).ready(function () {
	const swiperMain = new Swiper('.main-slider', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 3000,
		},
		// If we need pagination
		pagination: {
		  el: '.slider__pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.slider__next',
		  prevEl: '.slider__prev',
		},

	  });

	  $( '.projects__tabs' ).tabs();



	  // Video player
	const playButton = $('#video__play');
	const content = $('.video__content');

	playButton.on('click', function() {
		if (video.paused == true) {
			video.play();
			content.addClass('hidden');
		} else {
			video.pause();
			content.removeClass('hidden');
		}
	});


	 const swiperPosts = new Swiper('.swiper-posts', {
	
	  loop: true,
	  

	  // If we need pagination
	  pagination: {
	    el: '.pagination-posts',
	    clickable: true,
	    
	  },

	  // Navigation arrows
	  // navigation: {
	  //   nextEl: '.swiper-button-next',
	  //   prevEl: '.swiper-button-prev',
	  // },

	  // And if we need scrollbar
	  // scrollbar: {
	  //   el: '.swiper-scrollbar',
	  // },
	});
});