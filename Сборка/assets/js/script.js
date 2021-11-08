$(function () {

	const worksSLider = $('[data-slider="slick"]')

	// ФИЛЬТР
	let filter = $("[data-filter]");
	filter.on("click", function (event) {
		event.preventDefault();
		let cat = $(this).data('filter');
		if (cat == 'all') {
			$("[data-cat]").removeClass('hide');
		} else {
			$("[data-cat]").each(function () {
				let workCat = $(this).data('cat');
				if (workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}

			});
		}
	});

	/*====================================
	// Smooth Scroll to section
	======================================*/
	let nameTop = 100;

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let scrollEl = $(this).data("scroll");
		console.log(scrollEl);

		let scrollPos = $(scrollEl).offset().top;
		console.log(scrollPos);

		$("html, body").animate({
			scrollTop: scrollPos - nameTop
		}, 500)
	});


	/*====================================
	// Modal
	======================================*/
	const modalCall = $("[data-modal]");
	const modalCLose = $("[data-close]");


	modalCall.on("click", function (event) {
		event.preventDefault();

		let $this = $(this);
		let modalId = $this.data('modal');
		$(modalId).addClass('show');
		$('body').addClass('no-scroll');

		setTimeout(function () {
			$(modalId).find('.modal__dialog').css({
				transform: "rotateX(0)"
			});
		}, 200);
	});



	modalCLose.on('click', function (event) {
		event.preventDefault();

		let $this = $(this);
		let modalParent = $this.parents('.modal');

		modalParent.find('.modal__dialog').css({
			transform: "rotateX(90deg)"
		});

		setTimeout(function () {
			modalParent.removeClass('show');
			$('body').removeClass('no-scroll')
		}, 200);



	})


	$(".modal").on("click", function (event) {
		let $this = $(this);
		$this.find('.modal__dialog').css({
			transform: "rotateX(90deg)"
		});

		setTimeout(function () {
			$this.removeClass('show');
			$("body").removeClass('no-scroll');
		}, 200);

	});

	$(".modal__dialog").on('click', function (event) {
		event.stopPropagation();
	});

	/*====================================
	// Mobile navigation
	======================================*/
	const navToggle = $("#navToggle");
	const nav = $("#nav");

	navToggle.on("click", function (event) {
		event.preventDefault();

		nav.toggleClass("show");
	});
});



