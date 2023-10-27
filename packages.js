//v1.1.11
//https://cdn.jsdelivr.net/gh/somshine/DMS/
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@a2f100825f48d242b6096b1a8a98a73d258f18cc/packages.js" data-use-service-core defer></script>

var packageTotalPrice = 0;

var isPackageSelected = false;

var bookingTotalPrice = 0;
var bookingTotalWithVatPrice = 0;
var bookingTotalIncludeVatPrice = 0;

var fitnessPackageValue = 0;
var privateLesson = 0;

var packageList = [];
var allInclusivePackageIndex = 0;
var tainingOnlyOptionIndex = 1;
var muayThaiPrivateIndex = 2;
var accommodationIndex = 3;

var paymentLinkMapping = [];
var paymentLink = "";

paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kA01A4s3dl82fScN0", packageName: "Muay Thai Privates - 10 sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/6oEg0ybUv94S2fS8wJ", packageName: "Muay Thai Privates - 5 sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/7sIaGe4s36WK1bO6oA", packageName: "Muay Thai Privates - 1 session"});

paymentLinkMapping.push({paymentId: "https://buy.stripe.com/dR68y66Ab2Gu8Eg7sH", packageName: "Training Only Options - All Inclusive *striking & s&c, S&C - Shaun"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/3cs8y67EfepcbQs7sV", packageName: "Training Only Options - All Inclusive *striking & s&c, Boxing - Vlad"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEU29I0bN6WK3jW9B2", packageName: "Training Only Options - All Inclusive *striking & s&c, Striking - Teiwaz"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN2dSq3nZ4OCcUweVl", packageName: "Training Only Options - All Inclusive *striking & s&c, Boxing - Jimmy"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVa29I4s3bd04o028y", packageName: "Training Only Options - Athlete Factory (all S&C classes), S&C - Shaun"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVaaGebUvgxk07K6oN", packageName: "Training Only Options - Athlete Factory (all S&C classes), Boxing - Vlad"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/14k5lUgaL5SG8Eg9AX", packageName: "Training Only Options - Athlete Factory (all S&C classes), Striking - Teiwaz"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEU7u2aQrgxk9IkcN8", packageName: "Training Only Options - Athlete Factory (all S&C classes), Boxing - Jimmy"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kA7u24s3epc4o05kE", packageName: "Training Only Options - Striking Factory (all striking classes), S&C - Shaun"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVa9Ca4s30ym1bO14n", packageName: "Training Only Options - Striking Factory (all striking classes), Boxing - Vlad"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/14keWu8Ij0ymcUw5kC", packageName: "Training Only Options - Striking Factory (all striking classes), Striking - Teiwaz"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g5lU7Efgxkf2EcN3", packageName: "Training Only Options - Striking Factory (all striking classes), Boxing - Jimmy"});

//All-Inclusive Packages
var buttonResoruces = [$('#trainingOnlyOptionSubmitButton'), $('#allInclusivePackageSubmitButton'), $('#muayThaiPrivateSubmitButton'), $('#accommodationSubmitButton')];
buttonResoruces.forEach(function (element, index) {
	element.attr("type", "button");
	element.attr("onclick", "addNewPackage()");
});

//Process to payment button implimentation
$('#booking-process-payment').attr("type", "button");
$('#booking-process-payment').attr("onclick", "processToPayment()");

//hide the delete booking button
$('#delete-and-add-new-booking-button').hide();

/**
 * All-Inclusive Packages
 */
var inclusiveFitnessPackagePrice = 0;
var inclusiveTimePrice = 0;
var inclusivePrivateLessionPrice = 0;

$('#inclusive-accommodation-first').on("change", function () {
	let packagePrice = getTurkeyCurrency(inclusiveFitnessPackagePrice + inclusiveTimePrice + inclusivePrivateLessionPrice);

	packageList[allInclusivePackageIndex] = {
		packageName: "All-Inclusive Packages",
		itemName: formatItemNameString($('#inclusive-accommodation-first :selected').text(),
			$('#inclusive-fitness-packages :selected').text(),
			$('#inclusive-packages-time :selected').text(),
			$('#inclusive-packages-private-lessons-1 :selected').text()),
		price: packagePrice,
		prirceValue: (inclusiveFitnessPackagePrice + inclusiveTimePrice + inclusivePrivateLessionPrice),
		quantity: 1
	};
	$('#tainingOnlyOptions').html(packagePrice);
	$('.booking-inner-tab-content-item-form-block-bottom-price').html(packagePrice);
});

$('#inclusive-fitness-packages').on("change", function () {
	inclusiveFitnessPackagePrice = parseFloat(this.value);
	let packagePrice = getTurkeyCurrency(inclusiveFitnessPackagePrice + inclusiveTimePrice + inclusivePrivateLessionPrice);

	packageList[allInclusivePackageIndex] = {
		packageName: "All-Inclusive Packages",
		itemName: formatItemNameString($('#inclusive-accommodation-first :selected').text(),
			$('#inclusive-fitness-packages :selected').text(),
			$('#inclusive-packages-time :selected').text(),
			$('#inclusive-packages-private-lessons-1 :selected').text()),
		price: packagePrice,
		prirceValue: (inclusiveFitnessPackagePrice + inclusiveTimePrice + inclusivePrivateLessionPrice),
		quantity: 1
	};
	$('#tainingOnlyOptions').html(packagePrice);
	$('.booking-inner-tab-content-item-form-block-bottom-price').html(packagePrice);
});

$('#inclusive-packages-time').on("change", function () {
	inclusiveTimePrice = parseFloat(this.value);
	let packagePrice = getTurkeyCurrency(inclusiveFitnessPackagePrice + inclusiveTimePrice + inclusivePrivateLessionPrice);

	packageList[allInclusivePackageIndex] = {
		packageName: "All-Inclusive Packages",
		itemName: formatItemNameString($('#inclusive-accommodation-first :selected').text(),
			$('#inclusive-fitness-packages :selected').text(),
			$('#inclusive-packages-time :selected').text(),
			$('#inclusive-packages-private-lessons-1 :selected').text()),
		price: packagePrice,
		prirceValue: (inclusiveFitnessPackagePrice + inclusiveTimePrice + inclusivePrivateLessionPrice),
		quantity: 1
	};
	$('#tainingOnlyOptions').html(packagePrice);
	$('.booking-inner-tab-content-item-form-block-bottom-price').html(packagePrice);
});

$('#inclusive-packages-private-lessons-1').on("change", function () {
	inclusivePrivateLessionPrice = parseFloat(this.value);
	let packagePrice = getTurkeyCurrency(inclusiveFitnessPackagePrice + inclusiveTimePrice + inclusivePrivateLessionPrice);

	packageList[allInclusivePackageIndex] = {
		packageName: "All-Inclusive Packages",
		itemName: formatItemNameString($('#inclusive-accommodation-first :selected').text(),
			$('#inclusive-fitness-packages :selected').text(),
			$('#inclusive-packages-time :selected').text(),
			$('#inclusive-packages-private-lessons-1 :selected').text()),
		price: packagePrice,
		prirceValue: (inclusiveFitnessPackagePrice + inclusiveTimePrice + inclusivePrivateLessionPrice),
		quantity: 1
	};
	$('#tainingOnlyOptions').html(packagePrice);
	$('.booking-inner-tab-content-item-form-block-bottom-price').html(packagePrice);
});

function formatItemNameString(incAccommodationFirst, incFitnessPackages, incPackageTime, incPrivetLessons) {
	return '- ' + incAccommodationFirst + ",<br/>" +
		'- ' + incFitnessPackages + ",<br/>" +
		'- ' + incPackageTime + ",<br/>" +
		'- ' + incPrivetLessons;
}

/**
 * End All-Inclusive Packages
 */

/*
	Tab index 2 Training Only Options
*/
$("#Fitness-Packages-2").on('change', function () {
	fitnessPackageValue = parseFloat(this.value);
	let packagePrice = getTurkeyCurrency(fitnessPackageValue + privateLesson);
	packageList[tainingOnlyOptionIndex] = {
		packageName: "Training Only Options",
		itemName: '- ' + $('#Fitness-Packages-2 :selected').text() + ", " + $('#Private-Lessons :selected').text(),
		price: packagePrice,
		prirceValue: fitnessPackageValue + privateLesson,
		quantity: 1
	};
	$('#tainingOnlyOptions').html(packagePrice);
	$('.booking-inner-tab-content-item-form-block-bottom-price').html(packagePrice);
});

$("#Private-Lessons").on('change', function () {
	privateLesson = parseFloat(this.value);
	let packagePrice = getTurkeyCurrency(fitnessPackageValue + privateLesson);
	packageList[tainingOnlyOptionIndex] = {
		packageName: "Training Only Options",
		itemName: '- ' + $('#Fitness-Packages-2 :selected').text() + ", " + $('#Private-Lessons :selected').text(),
		price: packagePrice,
		prirceValue: fitnessPackageValue + privateLesson,
		quantity: 1
	};

	$('#tainingOnlyOptions').html(getTurkeyCurrency(fitnessPackageValue + privateLesson));
	$('.booking-inner-tab-content-item-form-block-bottom-price').html(getTurkeyCurrency(fitnessPackageValue + privateLesson));
});
/*
End Training Only Options
*/

/**
 * Muay Thai Privates start tab-3 
 */
$("#Fitness-Packages-3").on('change', function () {
	let packagePrice = getTurkeyCurrency(parseFloat(this.value));
	privateLesson = parseFloat(this.value);
	packageList[muayThaiPrivateIndex] = {
		packageName: "Muay Thai Privates",
		itemName: '- ' + $('#Fitness-Packages-3 :selected').text(),
		price: packagePrice,
		prirceValue: parseFloat(this.value),
		quantity: 1
	};

	$('#muay-thai-privates-price').html(packagePrice);
	$('.booking-inner-tab-content-item-form-block-bottom-price').html(packagePrice);
});

/**
 * Muay Thai Privates end here
 */

/**
 * Accommodation start from here tab-4
 */

var checkInDate = "";
var checkOutDate = "";
var accommodationNumberOfDays = 0;

$("#Check-in-Date").on("input", function () {
	accommodationNumberOfDays = 0;
	checkInDate = $(this).val();

	if (new Date(checkOutDate.replace(/-/g, '/')) < new Date(checkInDate.replace(/-/g, '/'))) {
		alert("Please select Check-Out-Date greater or equal to Check-In-Date.");
		$("#Checkout-Date-2").val("");
	} else {
		if (checkOutDate.length > 0 && checkInDate.length > 0) {
			let date1 = new Date(checkOutDate.replace(/-/g, '/'));
			let date2 = new Date(checkInDate.replace(/-/g, '/'));
			let milliSeconds = date1.getTime() - date2.getTime();
			if (milliSeconds == 0) {
				accommodationNumberOfDays = 1;
			} else if (milliSeconds > 0) {
				accommodationNumberOfDays = milliSeconds / (1000 * 3600 * 24);
			}
		}
	}
});

$("#Checkout-Date-2").on("input", function () {
	accommodationNumberOfDays = 0;
	checkOutDate = $(this).val();

	if (new Date(checkOutDate.replace(/-/g, '/')) < new Date(checkInDate.replace(/-/g, '/'))) {
		alert("Please select Check-Out-Date greater or equal to Check-In-Date.");
		$("#Checkout-Date-2").val("");
	} else {
		if (checkOutDate.length > 0 && checkInDate.length > 0) {
			let date1 = new Date(checkOutDate.replace(/-/g, '/'));
			let date2 = new Date(checkInDate.replace(/-/g, '/'));
			let milliSeconds = date1.getTime() - date2.getTime();
			if (milliSeconds == 0) {
				accommodationNumberOfDays = 1;
			} else if (milliSeconds > 0) {
				accommodationNumberOfDays = milliSeconds / (1000 * 3600 * 24);
			}
		}
	}
});

$('._24-radio-button-item').on('click', function () {
	if (accommodationNumberOfDays == 0) {
		alert("Please select Check-In and Check-Out dates and then select the packages.");
		return false;
	}
	let element = $(this).find("input[name='Tyson-Suite']");
	console.log($(element).val(), $(element).attr("price"), accommodationNumberOfDays);

	let price = accommodationNumberOfDays * parseFloat($(element).attr("price"));
	let packagePrice = getTurkeyCurrency(price);
	$('#accommodation-package-price').html(packagePrice);

	packageList[accommodationIndex] = {
		packageName: "Accommodation",
		itemName: '- 24 square meters</br>- ' + $(element).val(),
		price: packagePrice,
		prirceValue: price,
		quantity: 1
	};
});

$('._21-radio-button-item').on('click', function () {
	if (accommodationNumberOfDays == 0) {
		alert("Please select Check-In and Check-Out dates and then select the packages.");
		return false;
	}
	let element = $(this).find("input[name='Tyson-Suite']");
	console.log($(element).val(), $(element).attr("price"), accommodationNumberOfDays);

	let price = accommodationNumberOfDays * parseFloat($(element).attr("price"));
	let packagePrice = getTurkeyCurrency(price);
	$('#accommodation-package-price').html(packagePrice);

	packageList[accommodationIndex] = {
		packageName: "Accommodation",
		itemName: '- 21 square meters</br>- ' + $(element).val(),
		price: packagePrice,
		prirceValue: price,
		quantity: 1
	};
});

$('._18-radio-button-item').on('click', function () {
	if (accommodationNumberOfDays == 0) {
		alert("Please select Check-In and Check-Out dates and then select the packages.");
		return false;
	}
	let element = $(this).find("input[name='Tyson-Suite']");
	console.log($(element).val(), $(element).attr("price"), accommodationNumberOfDays);

	let price = accommodationNumberOfDays * parseFloat($(element).attr("price"));
	let packagePrice = getTurkeyCurrency(price);
	$('#accommodation-package-price').html(packagePrice);

	packageList[accommodationIndex] = {
		packageName: "Accommodation",
		itemName: '- 18 square meters</br>- ' + $(element).val(),
		price: packagePrice,
		prirceValue: price,
		quantity: 1
	};
});

/**
 * Tab-4 end here
 */

/**
 * Delete selected package and clean the data
 */
$('#delete-and-add-new-booking-button').on('click', function () {
	isPackageSelected = false;
	$('.booking-inner-result-table-rows').html("");
	packageList = [];
	$('#delete-and-add-new-booking-button').hide();
	$('#booking-process-payment').hide();

	//Clear final price
	$('#booking-total-exclusive-vat-amount').html("00,000");
	$('#booking-total-vat-amount').html("00,000");
	$('#booking-total-amount').html("00,000");

	bookingTotalPrice = 0;
	bookingTotalWithVatPrice = 0;
	bookingTotalIncludeVatPrice = 0;
});

function getTurkeyCurrency(price) {
	var currency_symbol = "₺"
	var formattedOutput = new Intl.NumberFormat('tr-TR', {
		style: 'currency',
		currency: 'TRY',
		minimumFractionDigits: 2,
	});
	return formattedOutput.format(price).replace(currency_symbol, '');
}

//Clear the old rows if any while add the new package to system.
$('.booking-inner-result-table-rows').html("");
var itemCount = 1;
function addNewPackage() {
	if (packageList.length == 0) {
		alert("Please select the package and then process with 'Add to Booking'.");
		return;
	}

	if (true == isPackageSelected) {
		alert("Only one package allow at a time to purchase. Please delete old selected package and add new package.");
		return false;
	}
	packageList.forEach(function (item, index) {
		let newItemHtml = '<div class="item-row item--' + (index + 1) + '">' +
			'<p class="item-name">' + item.packageName + '<br />' + item.itemName + '</p>' +
			'<p class="item-price">' + item.price + ' <span class="booking-inner-result-table-item-price-small">THB</span></p>' +
			'<p class="item-quantity"><span class="booking-inner-result-table-item-number">' + item.quantity + '</span></p>' +
			'<p class="-total">' + (item.quantity * item.prirceValue) + ' <span class="item-total-small">THB</span></p>' +
			'</div>';
		$('.booking-inner-result-table-rows').append(newItemHtml);

		bookingTotalPrice += parseFloat(item.quantity * item.prirceValue);
		bookingTotalWithVatPrice = (bookingTotalPrice * 7) / 100;
		bookingTotalIncludeVatPrice = (bookingTotalPrice + bookingTotalWithVatPrice);

		$('#booking-total-exclusive-vat-amount').html(bookingTotalPrice);
		$('#booking-total-vat-amount').html(bookingTotalWithVatPrice);
		$('#booking-total-amount').html(bookingTotalIncludeVatPrice);

		isPackageSelected = true;
		$('#booking-process-payment').show();
		$('#delete-and-add-new-booking-button').show();

		let packageName = item.packageName + ' ' + item.itemName;
		console.log(packageName);
		paymentLinkMapping.forEach((item) => {
			if (packageName == item.packageName) {
				paymentLink = item.paymentId;
				console.log(item);
				console.log(paymentLink);
			}
		});
	});
}

function processToPayment() {
	//Process to payment implementation
	if (bookingTotalIncludeVatPrice == 0) {
		alert("Please check your booking details selection done properly. And booking total amount calculated.");
		return false;
	}

	if (paymentLink === undefined && paymentLink.length == 0) {
		alert("Payment cart not associated with selected package. Please try again!");
		return false;
	}

	window.open(paymentLink, '_blank');
	// window.location.href = paymentLink;
}

function bookingSystemRegistration() {

}
