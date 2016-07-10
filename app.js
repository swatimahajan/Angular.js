(function(){
	var app = angular.module("store",[]);

	app.controller("StoreController" , function(){
		this.products = gems;

	});
	
	app.controller("PanelController" , function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;

		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller("ReviewController" , function(){
		this.review = {};

		this.addReview = function(product) {
		product.reviews.push(this.review);
		this.review = {};
	};

	});

	var gems = [
	{
		name : 'Dodecahedron',
		price: '4',
		description : 'some gems have hidden qualities beyond their lusture, beyond their shine..dodeca is one of them. ',
        canPurchase: true,
        SoldOut: false,
        /*images:[
        {
        	full:"img1.jpg"
        },
          {
          	full:"img2.jpg"
          },
        ]*/
        reviews: [
        {
            stars:5,
            body:"I love this product.",
            author:"john@gmail.com",
        },
        {
 			stars:1,
            body:"I hate this product.",
            author:"john@yahoo.com",
        }
       ]
        },
	{
	    name : 'Pentagonal Gem',
		price: '123',
		description : 'origin of the pentagonal is known, hence its low value. it has very high shine and 12 sides.',
        canPurchase: false,
        SoldOut: false,
    }
	];
	
 
})();
