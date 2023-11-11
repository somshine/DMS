//V1.1.3
// https://cdn.jsdelivr.net/gh/somshine/DMS/
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@45c20e2d1c9bc97b7ad21407373ee7be97bc079b/allInclusivePackagesPriceCalculation.js" data-use-service-core defer></script>

var accommodationPackage = $('#accommodation-package').val();
var roomType = $("#first-tab-room-type").val();
var fitnessPackage = $('#inclusive-fitness-packages :selected').text();
var timeType = $('#inclusive-packages-time :selected').text();
var privateLession = $('#Private-Lessons-PT :selected').text();
var session = $('#No-Of-Session').val();

var totalAllInclusivePackagePrice = 0;

$("#input-final-package-price").hide();

var accommodationTypeWisePrices = [];

//Room
accommodationTypeWisePrices.push({package: "Room", type: "Tyson Suite", timeType: "1 Night", price: 1200});
accommodationTypeWisePrices.push({package: "Room", type: "Tyson Suite", timeType: "2 Nights", price: 2400});
accommodationTypeWisePrices.push({package: "Room", type: "Tyson Suite", timeType: "1 Week", price: 7500});
accommodationTypeWisePrices.push({package: "Room", type: "Tyson Suite", timeType: "2 Weeks", price: 14000});
accommodationTypeWisePrices.push({package: "Room", type: "Tyson Suite", timeType: "1 Month", price: 22000});
accommodationTypeWisePrices.push({package: "Room", type: "Tyson Suite", timeType: "3 Months", price: 66000});
accommodationTypeWisePrices.push({package: "Room", type: "Tyson Suite", timeType: "6 Months", price: 132000});

//Room + Pool & Sauna
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Tyson Suite", timeType: "1 Night", price: 1300});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Tyson Suite", timeType: "2 Nights", price: 2600});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Tyson Suite", timeType: "1 Week", price: 8000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Tyson Suite", timeType: "2 Weeks", price: 15000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Tyson Suite", timeType: "1 Month", price: 24000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Tyson Suite", timeType: "3 Months", price: 72000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Tyson Suite", timeType: "6 Months", price: 144000});

//Room + Training (All Inclusive)
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Tyson Suite", timeType: "1 Night", price: 1800});
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Tyson Suite", timeType: "2 Nights", price: 3400});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Tyson Suite", timeType: "1 Week", price: 11000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Tyson Suite", timeType: "2 Weeks", price: 21000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Tyson Suite", timeType: "1 Month", price: 40000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Tyson Suite", timeType: "3 Months", price: 114000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Tyson Suite", timeType: "6 Months", price: 228000});

//Room + Training (All Inclusive) + Pool/Sauna
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Tyson Suite", timeType: "1 Night", price: 1900});
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Tyson Suite", timeType: "2 Nights", price: 3800});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Tyson Suite", timeType: "1 Week", price: 11500});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Tyson Suite", timeType: "2 Weeks", price: 22000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Tyson Suite", timeType: "1 Month", price: 42000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Tyson Suite", timeType: "3 Months", price: 118000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Tyson Suite", timeType: "6 Months", price: 232000});

//Crawford Deluxe
//Room
accommodationTypeWisePrices.push({package: "Room", type: "Crawford Deluxe", timeType: "1 Night", price: 1100});
accommodationTypeWisePrices.push({package: "Room", type: "Crawford Deluxe", timeType: "2 Nights", price: 2200});
accommodationTypeWisePrices.push({package: "Room", type: "Crawford Deluxe", timeType: "1 Week", price: 7000});
accommodationTypeWisePrices.push({package: "Room", type: "Crawford Deluxe", timeType: "2 Weeks", price: 13000});
accommodationTypeWisePrices.push({package: "Room", type: "Crawford Deluxe", timeType: "1 Month", price: 20000});
accommodationTypeWisePrices.push({package: "Room", type: "Crawford Deluxe", timeType: "3 Months", price: 56000});
accommodationTypeWisePrices.push({package: "Room", type: "Crawford Deluxe", timeType: "6 Months", price: 112000});

//Room + Pool & Sauna
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Crawford Deluxe", timeType: "1 Night", price: 1200});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Crawford Deluxe", timeType: "2 Nights", price: 2400});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Crawford Deluxe", timeType: "1 Week", price: 7500});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Crawford Deluxe", timeType: "2 Weeks", price: 14000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Crawford Deluxe", timeType: "1 Month", price: 22000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Crawford Deluxe", timeType: "3 Months", price: 62000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Crawford Deluxe", timeType: "6 Months", price: 126000});

//Room + Training (All Inclusive)
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Crawford Deluxe", timeType: "1 Night", price: 1200});
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Crawford Deluxe", timeType: "2 Nights", price: 2400});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Crawford Deluxe", timeType: "1 Week", price: 10500});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Crawford Deluxe", timeType: "2 Weeks", price: 20000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Crawford Deluxe", timeType: "1 Month", price: 36000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Crawford Deluxe", timeType: "3 Months", price: 102000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Crawford Deluxe", timeType: "6 Months", price: 204000});

//Room + Training (All Inclusive) + Pool/Sauna
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Crawford Deluxe", timeType: "1 Night", price: 1200});
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Crawford Deluxe", timeType: "2 Nights", price: 2400});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Crawford Deluxe", timeType: "1 Week", price: 11000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Crawford Deluxe", timeType: "2 Weeks", price: 21000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Crawford Deluxe", timeType: "1 Month", price: 38000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Crawford Deluxe", timeType: "3 Months", price: 106000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Crawford Deluxe", timeType: "6 Months", price: 212000});

//Canelo 
//Room
accommodationTypeWisePrices.push({package: "Room", type: "Canelo Double", timeType: "1 Night", price: 1000});
accommodationTypeWisePrices.push({package: "Room", type: "Canelo Double", timeType: "2 Nights", price: 2000});
accommodationTypeWisePrices.push({package: "Room", type: "Canelo Double", timeType: "1 Week", price: 6300});
accommodationTypeWisePrices.push({package: "Room", type: "Canelo Double", timeType: "2 Weeks", price: 12000});
accommodationTypeWisePrices.push({package: "Room", type: "Canelo Double", timeType: "1 Month", price: 18000});
accommodationTypeWisePrices.push({package: "Room", type: "Canelo Double", timeType: "3 Months", price: 42000});
accommodationTypeWisePrices.push({package: "Room", type: "Canelo Double", timeType: "6 Months", price: 90000});

//Room + Pool & Sauna
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Canelo Double", timeType: "1 Night", price: 1100});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Canelo Double", timeType: "2 Nights", price: 2200});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Canelo Double", timeType: "1 Week", price: 7000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Canelo Double", timeType: "2 Weeks", price: 13000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Canelo Double", timeType: "1 Month", price: 20000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Canelo Double", timeType: "3 Months", price: 56000});
accommodationTypeWisePrices.push({package: "Room + Pool & Sauna", type: "Canelo Double", timeType: "6 Months", price: 112000});

//Room + Training (All Inclusive)
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Canelo Double", timeType: "1 Night", price: 1200});
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Canelo Double", timeType: "2 Nights", price: 2400});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Canelo Double", timeType: "1 Week", price: 10000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Canelo Double", timeType: "2 Weeks", price: 19000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Canelo Double", timeType: "1 Month", price: 34000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Canelo Double", timeType: "3 Months", price: 96000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive)", type: "Canelo Double", timeType: "6 Months", price: 192000});

//Room + Training (All Inclusive) + Pool/Sauna
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Canelo Double", timeType: "1 Night", price: 1200});
// accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Canelo Double", timeType: "2 Nights", price: 2400});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Canelo Double", timeType: "1 Week", price: 10500});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Canelo Double", timeType: "2 Weeks", price: 20000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Canelo Double", timeType: "1 Month", price: 36000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Canelo Double", timeType: "3 Months", price: 110000});
accommodationTypeWisePrices.push({package: "Room + Training (All Inclusive) + Pool/Sauna", type: "Canelo Double", timeType: "6 Months", price: 220000});

// var fitnessPackagePrices = [];
// fitnessPackagePrices.push({packageName: "Striking Factory (all striking classes)", price: 1500});
// fitnessPackagePrices.push({packageName: "Athlete Factory (all S&C classes)", price: 1500});
// fitnessPackagePrices.push({packageName: "All Inclusive *striking & s&c", price: 2500});

var privateLessionPrices = [];
privateLessionPrices.push({packageName: "Muay Thai", price: 700});
privateLessionPrices.push({packageName: "Western Boxing", price: 1500});
privateLessionPrices.push({packageName: "Kickboxing", price: 1500});
privateLessionPrices.push({packageName: "S&C", price: 1500});
privateLessionPrices.push({packageName: "S & C - Kobe's", price: 4000});

/****************
 * TODO: please do all initilization above
 */

calculateThePrice();

$('#accommodation-package').on("change", function() {
    accommodationPackage = this.value;

    $('#inclusive-packages-time').empty();
    let selectOptions = accommodationTypeWisePrices.filter((item) => {
        return item.package == accommodationPackage && roomType.indexOf(item.type) != -1;
    });
    selectOptions.forEach((item) => {
        $('#inclusive-packages-time').append('<option value="' + item.timeType + ' (Price ' + item.price + ')">' + item.timeType + '</option>');
    });

    timeType = $('#inclusive-packages-time :selected').text();
    calculateThePrice();
});

$("#first-tab-room-type").on("change", function() {
    roomType = this.value;
    calculateThePrice();
});

$("#inclusive-packages-time").on("change", function() {
    timeType = $('#inclusive-packages-time :selected').text();
    calculateThePrice();
});

$("#Private-Lessons-PT").on("change", function() {
    privateLession = $('#Private-Lessons-PT :selected').text();
    calculateThePrice();
    if ($("#No-Of-Session :selected").val() == "1 Default Session") {
        $('#No-Of-Session').val("1 Session");
    }
});

$('#No-Of-Session').on("change", function() {
    session = this.value;
    calculateThePrice();
});

function calculateThePrice() {
    let accommodationPrice = 0;
    let fitnessPrice = 0;
    let privateLessionPrice = 0;
    let afterSessionPrice = 0;

    let accommodationPackageItem = accommodationTypeWisePrices.filter((item) => {
        //console.log("-----------", item.package, accommodationPackage, "Room Type", roomType, "==", item.type);
        return item.package == accommodationPackage && roomType.indexOf(item.type) != -1 && timeType.indexOf(item.timeType) != -1;
    });
    //console.log("1. Accommodation Package selected ::", accommodationPackageItem);

    // let fitnessPackageitem = fitnessPackagePrices.filter((item) => {
    //     return fitnessPackage == item.packageName;
    // });
    // //console.log("2. Fitness type selected:: ", fitnessPackageitem);

    let privateLessionItem = privateLessionPrices.filter((item) => {
        return item.packageName == privateLession;
    });
    //console.log("Private lession : ", privateLessionItem);

    totalAllInclusivePackagePrice = 0;
    console.error("1. Final price is ::", totalAllInclusivePackagePrice);
    if (accommodationPackageItem && accommodationPackageItem[0]) {
        accommodationPrice = parseInt(accommodationPackageItem[0].price);
        totalAllInclusivePackagePrice += accommodationPrice
        console.error("2. Final price is ::", totalAllInclusivePackagePrice, accommodationPrice);
    }

    //Convert session into numbers
    if (session && session.length > 1) {
        session = parseInt(session.split(" ")[0]);
    }

    //console.log("private session selected :: ", session);

    if (privateLessionItem && privateLessionItem[0] && session >= 1) {
        privateLessionPrice = parseInt(privateLessionItem[0].price);
        afterSessionPrice = parseInt(privateLessionPrice * session);

        // $("#Private-Lessons-PT").val(privateLession + "Calculation (" + privateLessionPrice + " * " + session + " = " + afterSessionPrice + ")");

        totalAllInclusivePackagePrice += afterSessionPrice;
        console.error("4. Final price is ::", totalAllInclusivePackagePrice, privateLessionPrice, session, afterSessionPrice);
    } else if (privateLessionItem && privateLessionItem[0]) {
        //Just add the package value with multiply
        privateLessionPrice = parseInt(privateLessionItem[0].price);
        afterSessionPrice = parseInt(privateLessionPrice);


        totalAllInclusivePackagePrice += privateLessionPrice;
        console.error("4. Final price is ::", totalAllInclusivePackagePrice, afterSessionPrice);
    }

    console.error("Final price is ::", totalAllInclusivePackagePrice);
    //console.log("Formular: (Tyson Suite + X night/Week) + Fitnesss Package Price + (privateSession * session) = Final Price");
    //console.log(accommodationPrice, fitnessPrice, "(privateLessionPrice = " + privateLessionPrice + " * session = " + session + ") = ", afterSessionPrice, " = ", totalAllInclusivePackagePrice);

    $('#all-inclusive-package-final-price').html(convertToThb(totalAllInclusivePackagePrice));
    $("#input-final-package-price").val(totalAllInclusivePackagePrice);
}

function getPriceFromString(priceData) {
    let price = priceData.match(/\d+/); // 123456
    return price
}

function convertToThb(price) {
	// var thai = new Intl.NumberFormat('th', { style: 'currency', currency: 'THB' }).format(12345);
	var currency_symbol = "฿"
	var formattedOutput = new Intl.NumberFormat('th', {
		style: 'currency',
		currency: 'THB',
		minimumFractionDigits: 2,
	});
	return formattedOutput.format(price).replace(currency_symbol, '');
}
