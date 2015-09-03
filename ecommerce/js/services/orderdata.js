(function(){
	//Services...
	var module = angular.module("app");
	var orderdata = function($http){
		var iteminfo=this;
		var cartItem=[];

		iteminfo=[{
				name:'Pen',
				price:4.00,
				qty:1,
				img:'images/item/pen.png'
			},
			{
				name:'Pencil',
				price:3.00,
				qty:1,
				img:'images/item/pencil.png'
			},
			{
				name:'Eraser',
				price:3.00,
				qty:1,
				img:'images/item/eraser.png'
			},
			{
				name:'Compass Box',
				price:10.00,
				qty:1,
				img:'images/item/compass.jpg'
			}];
		

		return{
			iteminfo: iteminfo,
			cartItem:cartItem
		};
	};




module.factory("orderdata",orderdata);
}());