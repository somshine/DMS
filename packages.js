//V1.1.12
//https://cdn.jsdelivr.net/gh/somshine/DMS/
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@a2f100825f48d242b6096b1a8a98a73d258f18cc/packages.js" data-use-service-core defer></script>

var paymentLinkMapping = [];
var paymentLink = "";

paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_28o8xXb428lCaqc3cP", packageName: "Training Only Options - Striking Factory (all striking classes) - Boxing"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_6oE7tT3BAatK9m8bJk", packageName: "Training Only Options - Striking Factory (all striking classes) - Boxing - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_4gw4hH6NMeK0eGs8x7", packageName: "Training Only Options - Striking Factory (all striking classes) - Boxing - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_14kbK9gom0Ta9m85kU", packageName: "Training Only Options - Striking Factory (all striking classes) - Boxing - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_7sI8xXdcacBS1TGfZx", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_eVa7tT6NMatKfKw8x4", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_6oE5lL6NMgS81TG28F", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_14k15v6NMatK0PC28E", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_5kAcOdfki45m7e09B5", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_eVa8xXgom31i69WaF8", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_00gaG5egefO40PC3cF", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_28o7tTegedFWaqcdRi", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_dR629zb4259qdCoeVl", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Boxing"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_8wMaG5ege59q0PCbJ8", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Boxing - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_5kA01r6NM7hy1TG14t", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Boxing - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_dR6g0p8VUfO441OcNa", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Boxing - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_14keWlb42cBSgOAcN9", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_00g8xXfkiatK0PC28u", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_14k9C1c8659q55S9AV", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_7sI9C1c869pG2XK6oI", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_aEUcOdfkiatKcykbJ1", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_fZeeWl0pocBS55S00i", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_dR6aG59ZY7hy7e0dR7", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_8wM8xXfki1Xe7e014k", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_3cs5lLege9pGaqc3cr", packageName: "Training Only Options - All Inclusive *striking & s&c - Boxing"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_28og0pfkiatKdCo8wK", packageName: "Training Only Options - All Inclusive *striking & s&c - Boxing - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_eVa01rc869pG0PC4gt", packageName: "Training Only Options - All Inclusive *striking & s&c - Boxing - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_dR63dD1tscBSfKw4gs", packageName: "Training Only Options - All Inclusive *striking & s&c - Boxing - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_bIYg0p8VUbxOfKw28j", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_9AQ29z6NM9pGgOA3cm", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_eVabK93BAbxO1TG6ox", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_6oE6pPege59q9m85ks", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_14k4hHfki1Xe8i4dQX", packageName: "Training Only Options - All Inclusive *striking & s&c - S&C"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_fZe8xX3BA0Ta41O4gm", packageName: "Training Only Options - All Inclusive *striking & s&c - S&C - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_eVa7tTdcaatK1TGdQV", packageName: "Training Only Options - All Inclusive *striking & s&c - S&C - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_cN2bK9b420TaeGs004", packageName: "Training Only Options - All Inclusive *striking & s&c - S&C - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_cN28xX0pobxO7e0aEH", packageName: "Private Training Sessions - Boxing - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_cN215vfki7hy7e0bIK", packageName: "Private Training Sessions - Boxing - 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/test_00gcOd3BA6dudCodQR", packageName: "Private Training Sessions - Boxing - 10 Sessions"});


var packageTotalPrice = 0;

var isPackageSelected = false;

var bookingTotalPrice = 0;
var bookingTotalWithVatPrice = 0;
var bookingTotalIncludeVatPrice = 0;

var packageList = [];

var defaultIndex = 0;

//All-Inclusive Packages
var buttonResoruces = [$('#allInclusivePackageSubmitButton'), $('#trainingOnlyOptionSubmitButton'), $('#privateSessionSubmitButton'), $('#accommodationSubmitButton')];
buttonResoruces.forEach(function (element, index) {
	element.attr("type", "button");
	let actions = "";
	if (index == 2) {
		actions += "calculatePrivateSessionPrice();";
	} else if (index == 1) {
		actions += "trainingOnlyOptionsPriceCalc();";
	}
	actions += "addNewPackage();";
	element.attr("onclick", actions);
});

//Process to payment button implimentation
$('#booking-process-payment').attr("type", "button");
$('#booking-process-payment').attr("onclick", "processToPayment()");

//hide the delete booking button
$('#delete-and-add-new-booking-button').hide();

/**
 * All-Inclusive Packages
 */
var inclusivePackageFirst = 0;
var inclusivePackageSecond = 0;
var inclusivePackageThirdNight = 0;
var inclusivePackageCheckInDay = 0;
var inclusivePackageFourthLesson = 0;
var inclusivePackageFifthSession = 0;

allInclusivePackagePriceCalc();

$('#inclusive-accommodation-first').on("change", function () {
	inclusivePackageFirst = parseFloat(this.value);
	allInclusivePackagePriceCalc();
});

$('#inclusive-fitness-packages').on("change", function () {
	inclusivePackageSecond = parseFloat(this.value);
	allInclusivePackagePriceCalc();
});

$('#inclusive-packages-time').on("change", function () {
	inclusivePackageThirdNight = parseFloat(this.value);
	allInclusivePackagePriceCalc();
});

$('#inclusive-packages-private-lessons-1').on("change", function () {
	inclusivePackageFourthLesson = parseFloat(this.value);
	allInclusivePackagePriceCalc();
});

$('#all-inclusive-package-session').on("change", function() {
	inclusivePackageFifthSession = parseFloat(this.value);
	allInclusivePackagePriceCalc();
});

function allInclusivePackagePriceCalc() {
	inclusivePrivateLessionPrice = parseFloat(this.value);
	let sessionPrice = inclusivePackageFourthLesson;
	if (inclusivePackageFifthSession > 0) {
		sessionPrice = inclusivePackageFourthLesson * inclusivePackageFifthSession;
	}
	let packagePrice = getTurkeyCurrency(inclusivePackageFirst + inclusivePackageSecond + inclusivePackageThirdNight + sessionPrice);

	packageList[defaultIndex] = {
		packageName: "All-Inclusive Packages",
		itemName: formatItemNameString(inclusivePackageFifthSession),
		price: packagePrice,
		prirceValue: (inclusivePackageFirst + inclusivePackageSecond + inclusivePackageThirdNight + sessionPrice),
		quantity: 1
	};
	$('#allInclusivePackagePrice').html(packagePrice);
}

function formatItemNameString(sessionValue) {
	return ' - ' + $('#inclusive-accommodation-first :selected').text() + ' - ' +
			$('#inclusive-fitness-packages :selected').text() + ' - ' +
			$('#inclusive-packages-time :selected').text() +
			(sessionValue > 0 ? ' - ' + $('#inclusive-packages-private-lessons-1 :selected').text() : "");
}

/**
 * End All-Inclusive Packages
 */

/*
	Tab index 2 Training Only Options
*/
var trainingOnlyOptionFitnessPackageValue = parseFloat($("#Fitness-Packages-2").val());
var trainingOnlyOptionPrivateLesson = parseFloat($("#Private-Lessons").val());
var trainingOnlyOptionSessionValue = parseFloat($("#training-only-option-session").val());

trainingOnlyOptionsPriceCalc();

$("#Fitness-Packages-2").on('change', function () {
	trainingOnlyOptionFitnessPackageValue = parseFloat(this.value);
	trainingOnlyOptionsPriceCalc();
});

$("#Private-Lessons").on('change', function () {
	trainingOnlyOptionPrivateLesson = parseFloat(this.value);
	trainingOnlyOptionsPriceCalc();
});

$("#training-only-option-session").on('change', function () {
	trainingOnlyOptionSessionValue = parseFloat(this.value);
	trainingOnlyOptionsPriceCalc();
});

function trainingOnlyOptionsPriceCalc() {
	let itemName = '- ' + $('#Fitness-Packages-2 :selected').text() + " - " + $('#Private-Lessons :selected').text();
	let sessionPrice = trainingOnlyOptionPrivateLesson;
	if (trainingOnlyOptionSessionValue > 0) {
		sessionPrice = trainingOnlyOptionPrivateLesson * trainingOnlyOptionSessionValue;
		itemName += " - " + $('#training-only-option-session :selected').text();
	}

	let packagePrice = getTurkeyCurrency(trainingOnlyOptionFitnessPackageValue + sessionPrice);
	packageList[defaultIndex] = {
		packageName: "Training Only Options",
		itemName: itemName,
		price: packagePrice,
		prirceValue: trainingOnlyOptionFitnessPackageValue + sessionPrice,
		quantity: 1
	};
	$('#tainingOnlyOptions').html(packagePrice);
}
/*
End Training Only Options
*/

/**
 * Muay Thai Privates start tab-3 
 */
var privateSessionFirst = parseFloat($("#private-session-item").val());
var privateSessionSecond = parseFloat($("#private-session-packages-day").val());

calculatePrivateSessionPrice();

$("#private-session-item").on('change', function () {
	privateSessionFirst = this.value;
	calculatePrivateSessionPrice();
});

$("#private-session-packages-day").on('change', function () {
	privateSessionSecond = this.value;
	calculatePrivateSessionPrice();
});

function calculatePrivateSessionPrice() {
	let packagePrice = getTurkeyCurrency(parseFloat(privateSessionFirst) * parseFloat(privateSessionSecond));
	let privateSessionPrice = parseFloat(privateSessionFirst) * parseFloat(privateSessionSecond);
	packageList[defaultIndex] = {
		packageName: "Private Training Sessions",
		itemName: '- ' + $('#private-session-item :selected').text() + ' - ' + $('#private-session-packages-day :selected').text(),
		price: packagePrice,
		prirceValue: privateSessionPrice,
		quantity: 1
	};

	$('#private-session-price').html(packagePrice);
}

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

	packageList[defaultIndex] = {
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

	packageList[defaultIndex] = {
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

	packageList[defaultIndex] = {
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
		console.log("package comapre", packageName);
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
