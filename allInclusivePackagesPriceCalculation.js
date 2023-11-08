//V1.1.1
// https://cdn.jsdelivr.net/gh/somshine/DMS/
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@61ba31e9743c7f3497a35e5d915f5fb8c8931e5c/packages.js" data-use-service-core defer></script>
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@master/accommodation.js" data-use-service-core defer></script>

var accommodationType = $('#inclusive-accommodation-first').val();
var fitnessPackage = $('#inclusive-fitness-packages :selected').text();
var timeType = $('#inclusive-packages-time :selected').text();
var privateLession = $('#inclusive-packages-private-lessons-1 :selected').text();
var session = $('#Private-Session').val();

var totalAllInclusivePackagePrice = 0;

$("#input-final-package-price").hide();

var accommodationTypeWisePrices = [];
accommodationTypeWisePrices.push({type: "Tyson Suite", timeType: "1 Night", price: 1200});
accommodationTypeWisePrices.push({type: "Tyson Suite", timeType: "2 Nights", price: 2400});
accommodationTypeWisePrices.push({type: "Tyson Suite", timeType: "1 Week", price: 7500});
accommodationTypeWisePrices.push({type: "Tyson Suite", timeType: "2 Weeks", price: 1400});
accommodationTypeWisePrices.push({type: "Tyson Suite", timeType: "1 Month", price: 22000});

accommodationTypeWisePrices.push({type: "Crawford Deluxe", timeType: "1 Night", price: 1100});
accommodationTypeWisePrices.push({type: "Crawford Deluxe", timeType: "2 Nights", price: 2200});
accommodationTypeWisePrices.push({type: "Crawford Deluxe", timeType: "1 Week", price: 7000});
accommodationTypeWisePrices.push({type: "Crawford Deluxe", timeType: "2 Weeks", price: 1300});
accommodationTypeWisePrices.push({type: "Crawford Deluxe", timeType: "1 Month", price: 20000});

accommodationTypeWisePrices.push({type: "Canelo Double", timeType: "1 Night", price: 1000});
accommodationTypeWisePrices.push({type: "Canelo Double", timeType: "2 Nights", price: 2000});
accommodationTypeWisePrices.push({type: "Canelo Double", timeType: "1 Week", price: 6300});
accommodationTypeWisePrices.push({type: "Canelo Double", timeType: "2 Weeks", price: 1200});
accommodationTypeWisePrices.push({type: "Canelo Double", timeType: "1 Month", price: 18000});

var fitnessPackagePrices = [];
fitnessPackagePrices.push({packageName: "Striking Factory (all striking classes)", price: 1500});
fitnessPackagePrices.push({packageName: "Athlete Factory (all S&C classes)", price: 1500});
fitnessPackagePrices.push({packageName: "All Inclusive *striking & s&c", price: 2500});

var privateLessionPrices = [];
privateLessionPrices.push({packageName: "Western Boxing", price: 1500});
privateLessionPrices.push({packageName: "Striking", price: 1500});
privateLessionPrices.push({packageName: "S&C", price: 4000});

/****************
 * TODO: please do all initilization above
 */

calculateThePrice();

$('#inclusive-accommodation-first').on("change", function() {
    accommodationType = this.value;
    calculateThePrice();
});

$('#inclusive-fitness-packages').on("change", function() {
    fitnessPackage = $('#inclusive-fitness-packages :selected').text();
    calculateThePrice();
});

$("#inclusive-packages-time").on("change", function() {
    timeType = $('#inclusive-packages-time :selected').text();
    calculateThePrice();
});

$('#inclusive-packages-private-lessons-1').on("change", function() {
    fitnessPackage = $('#inclusive-packages-private-lessons-1 :selected').text();
    calculateThePrice();
});

$('#Private-Session').on("change", function() {
    session = parseInt(this.value);
    calculateThePrice();
});

function calculateThePrice() {
    let accommodationPrice = 0;
    let fitnessPrice = 0;
    let privateLessionPrice = 0;
    let afterSessionPrice = 0;

    let accommodationTypeItem = accommodationTypeWisePrices.filter((item) => {
        return item.type == accommodationType && item.timeType == timeType;
    });
    console.log("1. Accommodation Type selected ::", accommodationTypeItem);

    let fitnessPackageitem = fitnessPackagePrices.filter((item) => {
        return fitnessPackage == item.packageName;
    });
    console.log("2. Fitness type selected:: ", fitnessPackageitem);

    let privateLessionItem = privateLessionPrices.filter((item) => {
        return item.packageName == privateLession;
    });
    console.log("Private lession : ", privateLessionItem);

    totalAllInclusivePackagePrice = 0;
    console.error("1. Final price is ::", totalAllInclusivePackagePrice);
    if (accommodationTypeItem && accommodationTypeItem[0]) {
        accommodationPrice = parseInt(accommodationTypeItem[0].price);
        totalAllInclusivePackagePrice += accommodationPrice
        console.error("2. Final price is ::", totalAllInclusivePackagePrice, accommodationPrice);
    }

    if (fitnessPackageitem && fitnessPackageitem[0]) {
        fitnessPrice = parseInt(fitnessPackageitem[0].price);
        totalAllInclusivePackagePrice += fitnessPrice
        console.error("3. Final price is ::", totalAllInclusivePackagePrice, fitnessPrice);
    }

    //Convert session into numbers
    if (session && session.length > 1) {
        session = parseInt(session.split(" ")[0]);
    }

    console.log("private session selected :: ", session);

    if (privateLessionItem && privateLessionItem[0] && session >= 1) {
        privateLessionPrice = parseInt(privateLessionItem[0].price);
        afterSessionPrice = parseInt(privateLessionPrice * session);

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
    console.log("Formular: (Tyson Suite + X night/Week) + Fitnesss Package Price + (privateSession * session) = Final Price");
    console.log(accommodationPrice, fitnessPrice, "(privateLessionPrice = " + privateLessionPrice + " * session = " + session + ") = ", afterSessionPrice, " = ", totalAllInclusivePackagePrice);

    $('#all-inclusive-package-final-price').html(convertToThb(totalAllInclusivePackagePrice));
    $("#input-final-package-price").val(totalAllInclusivePackagePrice);
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
