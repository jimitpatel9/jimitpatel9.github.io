(function(){
	//Services...
	var module = angular.module("app");
	var orderdata = function($http){
		var iteminfo=this;
		var cartItem=[];

		iteminfo=[{
				name:'Pen',
				orignalprice:5.00,
				ourprice:4.00,
				qty:1,
				rate:4,
				img:'images/item/pen.png'
			},
			{
				name:'Pencil',
				orignalprice:5.00,
				ourprice:3.00,
				qty:1,
				rate:3,
				img:'images/item/pencil.png'
			},
			{
				name:'Eraser',
				orignalprice:5.00,
				ourprice:3.00,
				qty:1,
				rate:4,
				img:'images/item/eraser.png'
			},
			{
				name:'Compass Box',
				orignalprice:15.00,
				ourprice:10.00,
				qty:1,
				rate:3,
				img:'images/item/compass.jpg'
			}];
		

		return{
			iteminfo: iteminfo,
			cartItem:cartItem
		};
	};




module.factory("orderdata",orderdata);
}());