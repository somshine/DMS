//V_1.1.2

var onlyRoomTyson = [];
onlyRoomTyson.push({name: "Tyson Suite", type: "1 DAY", price: 1200});
onlyRoomTyson.push({name: "Tyson Suite", type: "1 WEEK", price: 7500});
onlyRoomTyson.push({name: "Tyson Suite", type: "2 WEEKS", price: 14000});
onlyRoomTyson.push({name: "Tyson Suite", type: "1 MONTH", price: 22000});

$("#only-room-tyson").on("click", function() {
	changePackage(this, 'tyson', 'Only Room', onlyRoomTyson);
});

var onlyRoomCrawford = [];
onlyRoomCrawford.push({name: "Crawford Suite", type: "1 DAY", price: 1100});
onlyRoomCrawford.push({name: "Crawford Suite", type: "1 WEEK", price: 7000});
onlyRoomCrawford.push({name: "Crawford Suite", type: "2 WEEKS", price: 13000});
onlyRoomCrawford.push({name: "Crawford Suite", type: "1 MONTH", price: 20000});

$("#only-room-crawford").on("click", function() {
	changePackage(this, 'crawford', 'Only Room', onlyRoomCrawford);
});

var onlyRoomCanelo = [];
onlyRoomCanelo.push({name: "Canelo Suite", type: "1 DAY", price: 1000});
onlyRoomCanelo.push({name: "Canelo Suite", type: "1 WEEK", price: 6300});
onlyRoomCanelo.push({name: "Canelo Suite", type: "2 WEEKS", price: 12000});
onlyRoomCanelo.push({name: "Canelo Suite", type: "1 MONTH", price: 18000});

$("#only-room-canelo").on("click", function() {
	changePackage(this, 'canelo', 'Only Room', onlyRoomCanelo);
});

//Room and Sauna second tab on wards
$('#room-sauna-tyson').magnificPopup({
  items: {
      src: '#tyson-suite-modal',
      type: 'inline'
  }
});

var roomSaunaTyson = [];
roomSaunaTyson.push({name: "Tyson Suite", type: "1 DAY", price: 1300});
roomSaunaTyson.push({name: "Tyson Suite", type: "1 WEEK", price: 8000});
roomSaunaTyson.push({name: "Tyson Suite", type: "2 WEEKS", price: 15000});
roomSaunaTyson.push({name: "Tyson Suite",  type: "1 MONTH", price: 24000});

$('#room-sauna-tyson').on("click", function() {
	changePackage(this, 'tyson', 'Room + sauna', roomSaunaTyson);
});


$("#all-room-tyson").magnificPopup({
  items: {
      src: '#tyson-suite-modal',
      type: 'inline'
  }
});

var allTyson = [];
allTyson.push({name: "Tyson Suite", type: "1 WEEK", price: 11500});
allTyson.push({name: "Tyson Suite", type: "2 WEEKS", price: 22000});
allTyson.push({name: "Tyson Suite",  type: "1 MONTH", price: 42000});
allTyson.push({name: "Tyson Suite",  type: "3 MONTHS", price: 118000});

$('#all-room-tyson').on("click", function() {
	changePackage(this, 'tyson', 'Room + All workouts are included + sauna', allTyson);
});

//crawford popup

$('#room-sauna-crawford').magnificPopup({
  items: {
      src: '#crawford-deluxe-modal',
      type: 'inline'
  }
});

var roomSaunaCrawford = [];
roomSaunaCrawford.push({name: "Crawford Suite", type: "1 DAY", price: 1200});
roomSaunaCrawford.push({name: "Crawford Suite", type: "1 WEEK", price: 7500});
roomSaunaCrawford.push({name: "Crawford Suite", type: "2 WEEKS", price: 14000});
roomSaunaCrawford.push({name: "Crawford Suite",  type: "1 MONTH", price: 22000});

$('#room-sauna-crawford').on("click", function() {
	changePackage(this, 'crawford', 'Room + sauna', roomSaunaCrawford);
});

// all room crawford

$('#all-room-crawford').magnificPopup({
  items: {
      src: '#crawford-deluxe-modal',
      type: 'inline'
  }
});

var allCrawford = [];
allCrawford.push({name: "Crawford Suite", type: "1 WEEK", price: 11000});
allCrawford.push({name: "Crawford Suite", type: "2 WEEKS", price: 21000});
allCrawford.push({name: "Crawford Suite",  type: "1 MONTH", price: 38000});
allCrawford.push({name: "Crawford Suite",  type: "3 MONTHS", price: 10600});

$('#all-room-crawford').on("click", function() {
	changePackage(this, 'crawford', 'Room + All workouts are included + sauna', allCrawford);
});

//canelo popup
$('#room-sauna-canelo').magnificPopup({
  items: {
      src: '#canelo-double-modal',
      type: 'inline'
  }
});

var roomSaunaCanelo = [];
roomSaunaCanelo.push({name: "Canelo Suite", type: "1 DAY", price: 1100});
roomSaunaCanelo.push({name: "Canelo Suite", type: "1 WEEK", price: 7000});
roomSaunaCanelo.push({name: "Canelo Suite", type: "2 WEEKS", price: 13000});
roomSaunaCanelo.push({name: "Canelo Suite",  type: "1 MONTH", price: 20000});

$('#room-sauna-canelo').on("click", function() {
	changePackage(this, 'canelo', 'Room + sauna', roomSaunaCanelo);
});

$('#all-room-canelo').magnificPopup({
  items: {
      src: '#canelo-double-modal',
      type: 'inline'
  }
});

var allCanelo = [];
allCanelo.push({name: "Canelo Suite", type: "1 WEEK", price: 10500});
allCanelo.push({name: "Canelo Suite", type: "2 WEEKS", price: 20000});
allCanelo.push({name: "Canelo Suite",  type: "1 MONTH", price: 36000});
allCanelo.push({name: "Canelo Suite",  type: "3 MONTHS", price: 100000});

$('#all-room-canelo').on("click", function() {
	changePackage(this, 'canelo', 'Room + All workouts are included + sauna', allCanelo);
});

function changePackage(objThis, roomType, accommodationType, items) {
	let formType = $(objThis).attr("formType");
	let roomSize = $(objThis).attr("roomSize");
	
	$("#" + roomType + "-package-type-name").html(roomSize + " square meters");
	$("#" + roomType + "-suite-packages").html("");
	$('.accommodation-type').html(accommodationType);
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
