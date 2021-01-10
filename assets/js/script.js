(function($){
	'use script';

	// WOW JS
	new WOW().init();

	//Menu Responsive
	$(document).ready(function(){
		$('.mobile-menu').click(function(){
			$('.menu ul').slideToggle();
		});
	});

	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});

	// LineProgressbar
	$('#jqhtml').LineProgressbar({
		percentage: 90,// 90%
		ShowProgressCount:true,
		backgroundColor:'#127b71',
		fillBackgroundColor:'#00ff40',
		height:'6px',

	});

	$('#jqcss').LineProgressbar({
		percentage: 85,// 90%
		ShowProgressCount:true,
		backgroundColor:'#127b71',
		fillBackgroundColor:'#e88808',
		height:'6px',

	});
	$('#jqphp').LineProgressbar({
		percentage: 80,// 90%
		ShowProgressCount:true,
		backgroundColor:'#127b71',
		fillBackgroundColor:'#1a1ae8',
		height:'6px',

	});
	$('#jqwordpress').LineProgressbar({
		percentage: 95,// 90%
		ShowProgressCount:true,
		backgroundColor:'#127b71',
		fillBackgroundColor:'#00fda8',
		height:'6px',

	});
	$('#jqwoocommerce').LineProgressbar({
		percentage: 90,// 90%
		ShowProgressCount:true,
		backgroundColor:'#127b71',
		fillBackgroundColor:'#ea0505',
		height:'6px',

	});

	$('#jqjavascript').LineProgressbar({
		percentage: 80,// 90%
		ShowProgressCount:true,
		backgroundColor:'#127b71',
		fillBackgroundColor:'#dca52e',
		height:'6px',

	});

	var mixer = mixitup('.portfolio-item-full');
	var mixer = mixitup('.portF');
	var mixer = mixitup('.portF', {
		selectors: {
			target: '.blog-item'
		},
		animation: {
			duration: 100
		}
	});


	$('.portfolio-item-single a').magnificPopup({
	  	type: 'image',
	   	gallery: {
	    	enabled: true
	  	},
	  	
	});


	

	$(document).ready(function(){
	  	$(".testimonial-full").owlCarousel({
	  		loop: true,
            margin: 0,
            nav:false,
            items:2,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 1
              },
              991: {
                items: 2
              },
              1140: {
                items: 2
              }
            }
	  	});
	});

	// WOW JS
	new WOW().init();


	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.header_top').removeClass('sticky');
			}else{
				$('.header_top').addClass('sticky');
			}
		});
	});

	$(document).ready(function(){
		
		$('.mode_change .black').click(function(){
			$('body').addClass('bodyblack');
		});
		$('.mode_change .white').click(function(){
			$('body').removeClass('bodyblack');
		});

	});


	$(window).on("load",function(){
				
		/* Page Scroll to id fn call */
		$(".menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id();

		$(".contact-hire a,a[href='#top']").mPageScroll2id();

		// demo functions 
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
		
	});


	$(document).ready(function(){
		let mainNavLinks = document.querySelectorAll(".menu ul li a");
		let mainSections = document.querySelectorAll("main section");

		let lastId;
		let cur = [];

		
		window.addEventListener("scroll", event => { 
		  let fromTop = window.scrollY;

		  	mainNavLinks.forEach(link => {
		    let section = document.querySelector(link.hash);

		   	if (
		      section.offsetTop <= fromTop &&
		      section.offsetTop + section.offsetHeight > fromTop
		    ) {
		      link.classList.add("current");
		    } else {
		      link.classList.remove("current");
		    }
		  	});
		});
	});



}(jQuery));



















