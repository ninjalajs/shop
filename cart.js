$(function() {
	$('#cart').after($('<button id="reset-cart">Nollställ cart</button>'));

	$('#reset-cart').click(function() {
		cart = [];
		store.set('cart', cart);
		$('#cart').empty();
	});
});