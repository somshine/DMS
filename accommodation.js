//V-1.1.6
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@master/accommodation.js" data-use-service-core defer></script>

/***********************
 * Section to open the popup
 */
//All tyson popups
$('#room-pool-sauna-tyson, #room-workouts-tyson, #all-room-tyson').magnificPopup({
	items: {src: '#tyson-suite-modal', type: 'inline'}
});

$('#room-pool-sauna-crawford, #room-workouts-crawford, #all-room-crawford').magnificPopup({
	items: {src: '#crawford-deluxe-modal', type: 'inline'}
});

$('#room-pool-sauna-canelo, #room-workouts-canelo, #all-room-canelo').magnificPopup({
	items: {src: '#canelo-double-modal', type: 'inline'}
});

/***********************************
 * Next Tab
 * Second tab Room +Poll & Sauna
 */
var onlyRoomPoolSaunaTyson = [];
onlyRoomPoolSaunaTyson.push({name: "Tyson Suite", type: "1 DAY", price: 1300});
onlyRoomPoolSaunaTyson.push({name: "Tyson Suite", type: "1 WEEK", price: 8000});
onlyRoomPoolSaunaTyson.push({name: "Tyson Suite", type: "2 WEEKS", price: 15000});
onlyRoomPoolSaunaTyson.push({name: "Tyson Suite", type: "1 MONTH", price: 24000});

$("#room-pool-sauna-tyson").on("click", function() {
	changePackage(this, 'tyson', 'Room +Pool & Sauna', onlyRoomPoolSaunaTyson);
});

var onlyRoomPoolSaunaCrawford = [];
onlyRoomPoolSaunaCrawford.push({name: "Crawford Suite", type: "1 DAY", price: 1200});
onlyRoomPoolSaunaCrawford.push({name: "Crawford Suite", type: "1 WEEK", price: 7500});
onlyRoomPoolSaunaCrawford.push({name: "Crawford Suite", type: "2 WEEKS", price: 14000});
onlyRoomPoolSaunaCrawford.push({name: "Crawford Suite", type: "1 MONTH", price: 22000});

$("#room-pool-sauna-crawford").on("click", function() {
	changePackage(this, 'crawford', 'Room +Pool & Sauna', onlyRoomPoolSaunaCrawford);
});

var onlyRoomPoolSaunaCanelo = [];
onlyRoomPoolSaunaCanelo.push({name: "Canelo Suite", type: "1 DAY", price: 1100});
onlyRoomPoolSaunaCanelo.push({name: "Canelo Suite", type: "1 WEEK", price: 7000});
onlyRoomPoolSaunaCanelo.push({name: "Canelo Suite", type: "2 WEEKS", price: 13000});
onlyRoomPoolSaunaCanelo.push({name: "Canelo Suite", type: "1 MONTH", price: 20000});

$("#room-pool-sauna-canelo").on("click", function() {
	changePackage(this, 'canelo', 'Room +Pool & Sauna', onlyRoomPoolSaunaCanelo);
});

/************************
 * Next Tab
 * Room and Workouts third tab on wards
 */
var roomApolloAccessTyson = [];
roomApolloAccessTyson.push({name: "Tyson Suite", type: "1 DAY", price: 1900});
roomApolloAccessTyson.push({name: "Tyson Suite", type: "1 WEEK", price: 11500});
roomApolloAccessTyson.push({name: "Tyson Suite", type: "2 WEEKS", price: 22000});
roomApolloAccessTyson.push({name: "Tyson Suite", type: "1 MONTH", price: 35000});
roomApolloAccessTyson.push({name: "Tyson Suite", type: "3 MONTHS", price: 101000});

$("#room-workouts-tyson").on("click", function() {
	changePackage(this, 'tyson', 'Room + Apollo Acess*', roomApolloAccessTyson);
});

var roomApolloAccessCrawford = [];
roomApolloAccessCrawford.push({name: "Crawford Suite", type: "1 DAY", price: 1800});
roomApolloAccessCrawford.push({name: "Crawford Suite", type: "1 WEEK", price: 11000});
roomApolloAccessCrawford.push({name: "Crawford Suite", type: "2 WEEKS", price: 21000});
roomApolloAccessCrawford.push({name: "Crawford Suite", type: "1 MONTH", price: 33000});
roomApolloAccessCrawford.push({name: "Crawford Suite", type: "3 MONTHS", price: 95000});

$("#room-workouts-crawford").on("click", function() {
	changePackage(this, 'crawford', 'Room + Apollo Acess*', roomApolloAccessCrawford);
});

var roomApolloAccessCanelo = [];
roomApolloAccessCanelo.push({name: "Canelo Suite", type: "1 DAY", price: 1700});
roomApolloAccessCanelo.push({name: "Canelo Suite", type: "1 WEEK", price: 10500});
roomApolloAccessCanelo.push({name: "Canelo Suite", type: "2 WEEKS", price: 20000});
roomApolloAccessCanelo.push({name: "Canelo Suite", type: "1 MONTH", price: 31500});
roomApolloAccessCanelo.push({name: "Canelo Suite", type: "3 MONTHS", price: 89000});

$("#room-workouts-canelo").on("click", function() {
	changePackage(this, 'canelo', 'Room + Apollo Acess*', roomApolloAccessCanelo);
});

/*********
 * Common functions
 */

function changePackage(objThis, roomType, accommodationType, items) {
	let formType = $(objThis).attr("formType");
	let roomSize = $(objThis).attr("roomSize");
	
	$("#" + roomType + "-package-type-name").html(roomSize + " square meters");
	$("#" + roomType + "-suite-packages").html("");
	$('.accommodation-type').html(accommodationType);
	$('#selected-package-detail').val(accommodationType);
	items.forEach((item, index) => {
		let value = item.name + ' - ' + item.type + "(" + item.price + ")";
		let radioButton = '<label class="radiobutton-item w-radio" id="isDynamic">' +
						'<div class="w-form-formradioinput w-form-formradioinput--inputType-custom radiobutton-item-checkmark w-radio-input"></div>'+
						'<input type="radio" id="' + item.price + '" name="' + item.name + '" value="' + value + '"' +
							'data-name="' + item.name + '" style="opacity:0;position:absolute;z-index:-1">'+
						'<span class="radiobutton-item-label w-form-label" for="' + item.price + '">'+
						'	' + item.type +
						'	<span class="radiobutton-item-label-price">' + item.price + '</span>'+
						'</span>'+
					'</label>';
		$("#" + roomType + "-suite-packages").append(radioButton);
	});
}
