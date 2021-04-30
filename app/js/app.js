
$(document).ready(function () {
	const swiperMain = new Swiper('.main-slider', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 3000,
		},
		// If we need pagination
		pagination: {
		  el: '.sliper__pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.slider__next',
		  prevEl: '.slider__prev',
		},

	  });

	  $( '.projects__tabs' ).tabs();


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