(function(){
	//Services...
	var module = angular.module("app");
	var orderdata = function($http){
		var iteminfo=this;
		var cartItem=[];

		iteminfo=[{
				uid:'1',
				name:'Pen',
				orignalprice:5.00,
				ourprice:4.00,
				qty:1,
				rate:4,
				img:'images/item/pen.png'
			},
			{
				uid:'2',
				name:'Pencil',
				orignalprice:5.00,
				ourprice:3.00,
				qty:1,
				rate:3,
				img:'images/item/pencil.png'
			},
			{
				uid:'3',
				name:'Eraser',
				orignalprice:5.00,
				ourprice:3.00,
				qty:1,
				rate:4,
				img:'images/item/eraser.png'
			},
			{
				uid:'4',
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