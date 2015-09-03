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
				img:'images/item/pen.jpg'
			},
			{
				name:'Pencil',
				price:3.00,
				qty:1,
				img:'images/item/pencil.jpg'
			}];
		

		return{
			iteminfo: iteminfo,
			cartItem:cartItem
		};
	};




module.factory("orderdata",orderdata);
}());