(function(){
<!-- //-->
	var app = angular.module("store",[]);

	app.controller("StoreController" , function(){
		this.products = gems;

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
        },
	{
	    name : 'Pentagonal Gem',
		price: '123',
		description : 'origin of the pentagonal is ukown, hence its low value. it has very high shine and 12 sides.',
        canPurchase: false,
        SoldOut: false,
    }
	];
 
})();
