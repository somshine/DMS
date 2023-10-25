
var packageTotalPrice = 0;
var bookingTotalPrice = 0;
var bookingTotalWithVatPrice = 0;
var bookingTotalIncludeVatPrice = 0;

var fitnessPackageValue = 0;
var privateLesson = 0;
$("#Fitness-Packages-2").on('change', function () {
	console.log(this.value);
	fitnessPackageValue = parseFloat(this.value);
	$('#tainingOnlyOptions').html(getTurkeyCurrency(fitnessPackageValue + privateLesson));
	$('.booking-inner-tab-content-item-form-block-bottom-price').html(getTurkeyCurrency(fitnessPackageValue + privateLesson));
});

$("#Private-Lessons").on('change', function () {
	console.log(this.value);
	privateLesson = parseFloat(this.value);
	$('#tainingOnlyOptions').html(getTurkeyCurrency(fitnessPackageValue + privateLesson));
	$('.booking-inner-tab-content-item-form-block-bottom-price').html(getTurkeyCurrency(fitnessPackageValue + privateLesson));
});

booking - inner - result - table

function getTurkeyCurrency(price) {
	var currency_symbol = "₺"
	var formattedOutput = new Intl.NumberFormat('tr-TR', {
		style: 'currency',
		currency: 'TRY',
		minimumFractionDigits: 2,
	});
	return formattedOutput.format(price).replace(currency_symbol, '');
}

function addNewPackage() {
	let newItemHtml = '<div class="booking-inner-result-table-item booking-inner-result-table-item--first">' +
		'<div class="booking-inner-result-table-item-title" > Item(s)</div>' +
			'<p class="booking-inner-result-table-item-desc">' +
				'All-Inclusive Package <br />' +
				'- &nbsp;Basic, Standard, 1 Month' +
			'</p>' +
					'</div >' +
					'<div class="booking-inner-result-table-item">' +
						'<div class="booking-inner-result-table-item-title">Price</div>' +
						'<p class="booking-inner-result-table-item-price">00,000 <span class="booking-inner-result-table-item-price-small">THB</span></p>' +
					'</div>' +
					'<div class="booking-inner-result-table-item">' +
						'<div class="booking-inner-result-table-item-title">Quantity</div>' +
						'<p class="booking-inner-result-table-item-desc"><span class="booking-inner-result-table-item-number">1</span></p>' +
					'</div>' +
					'<div class="booking-inner-result-table-item booking-inner-result-table-item--last">' +
						'<div class="booking-inner-result-table-item-title">Total</div>' +
						'<p class="booking-inner-result-table-item-price">00,000 <span class="booking-inner-result-table-item-price-small">THB</span></p>' +
					'</div>';
	$('.booking-inner-result-table').append(newItemHtml);
}
