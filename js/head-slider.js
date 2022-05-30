
flashSlider('.head-slider', {
	gap: 17,
	autoplay: true,
	autoplaySpeed: "fast",
	slideToShow: 2,
	width: "100%",
	dots: false,
	slideToScrollAbsolutely: true,
	height: "65vw",
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slideToShow: 3,
				height: "47vw",
				dots: false,

			}
		},
		{
			breakpoint: 768,
			settings: {
				slideToShow: 4,
				height: "35vw",
				dots: false,

			}
		},
		{
			breakpoint: 992,
			settings: {
				slideToShow: 5,
				dots: true,
				height: "19vw"
			}
		}
	]
});
