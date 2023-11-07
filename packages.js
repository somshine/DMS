//V1.1.25
//https://cdn.jsdelivr.net/gh/somshine/DMS/
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@61ba31e9743c7f3497a35e5d915f5fb8c8931e5c/packages.js" data-use-service-core defer></script>
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@master/accommodation.js" data-use-service-core defer></script>

var linkMapping = [];
var packageLink = "";

linkMapping.push({linkId: "https://buy.stripe.com/cN2bKi1fRgxk4o007r", packageName: "Training Only Options - Striking Factory (all striking classes) - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/9AQ3dM6AbgxkdYAbQa", packageName: "Training Only Options - Striking Factory (all striking classes) - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/cN28y6cYz80O3jW9I3", packageName: "Training Only Options - Striking Factory (all striking classes) - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/14k8y6f6H3Ky07K9I4", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/8wM01Ae2Dch48Eg7zX", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA3dM3nZbd0g6I2fE", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/7sI3dM8Ij4OCdYAdYn", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/aEU8y68Ij5SG07KcUk", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/9AQ3dMf6H80ObQs5rT", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA15EbUv6WK8EgcUm", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/14k8y62jV94Sf2E07B", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/eVag0y0bN4OCdYA07C", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa9Cae2D80OaMo5rX", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa9Ca9Mn1CqaMog6C", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/aEUaGe6Abch4g6I9If", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/8wM3dMaQrftg4o0bQo", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/14kg0y2jVa8WcUwf2B", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/dR6aGeaQr1CqcUw7Aa", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA3dM5w7ch4aMo07J", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/7sIbKi5w71Cq9IkbQs", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/6oEaGe8Ij0ym07Kg6J", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA6pY0bN4OCcUwf2G", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gw7u2bUv6WKdYAbQv", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/9AQ5lUe2Dftgf2E7Ag", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/3csbKi7Efa8W5s49Ip", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/dR6aGe2jVbd02fS4o6", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/8wMcOmaQr3Ky07Kf2L", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/fZeg0yaQrgxk8Eg3k4", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/3csaGeaQr3Ky7Ac07T", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/cN201A0bNbd0bQsbQC", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gw5lU1fR80O1bO1bZ", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/8wMg0y9Mnbd0dYAbQE", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/fZe4hQ8Ij4OCdYAf2R", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/cN2bKi5w76WK7Acf2S", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/cN215EcYz1Cqf2E9Iz", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa5lU4s36WK4o0g6Y", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/fZe6pY3nZ80O8Eg8Ex", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/cN2aGe9Mn80O8Eg6wq", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA9Ca8Ij0ymcUw3kf", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/aEU3dMe2Dgxkf2E4ok", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/3csdSq4s3ftg1bO3kh", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/14k15E1fR1Cq3jWaMK", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gwaGebUv94SaMo7Az", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/6oEdSq1fRftgdYA2gg", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/4gwcOm9Mn3Kyf2E089", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/6oE15EcYzftgaMo5su", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/8wM4hQbUv3Kyg6Ig79", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/dR6aGe5w7epc4o0cUY", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/aEU9CabUv80OdYA9IN", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/aEU01A2jVbd08EgbQW", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/eVacOm4s3epcbQs6wD", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/3cs4hQ7Ef6WK2fS8EM", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/3cs3dMbUv1Cq3jW08h", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/cN215E4s34OC6w84oy", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/dR63dMbUvepcbQs6wH", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gwg0y5w780OdYAdZa", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa15EbUv80ObQs7AN", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/28o7u28Ijftg3jW2gu", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/aEUeWu4s380O07KbR5", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/00gcOme2D5SG8EgdZe", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/14k01Ae2D94S4o08EV", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/28o8y6gaL1Cq3jW1cu", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/aEU8y61fRdl82fSg7p", packageName: "Training Only Options - Striking Factory (all striking classes) - S&C - Kobes - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/6oE8y67Efa8Wf2E9J2", packageName: "Training Only Options - Athlete Factory (all S&C classes) - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa4hQaQrgxk4o06wR", packageName: "Training Only Options - Athlete Factory (all S&C classes) - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/5kAeWu8Ij2GuaMo7AW", packageName: "Training Only Options - Athlete Factory (all S&C classes) - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa5lU2jVftg8EgbRd", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/8wM9Ca0bNftg1bO4oM", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/dR66pY2jV2GudYA9J7", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/bIY01A7Ef2GuaMo5sS", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/6oEg0ygaL5SGg6I9J9", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/dR6aGe7Ef3Kyg6IdZq", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/4gwaGe0bNa8WcUw1cF", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/9AQg0y8Ijgxk4o08F8", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/bIYdSq1fRepc1bO08D", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/3cs01Ae2D4OC7AcaNi", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/28og0y6Abgxk9Ik3kR", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/7sIcOm9Mn5SG6w808G", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Muay Thai - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gw7u2cYz1CqdYA6x5", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/cN2cOmaQr1CqcUw9Ji", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/7sI9CagaL5SG1bO6x7", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa29I9MnepcbQsaNo", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/8wM15EcYzdl8g6I6x9", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/aEU4hQ7Ef94Sg6I2gU", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/fZe4hQ9Mn94S8Eg8Fj", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/dR629I6Ab3KydYA3l0", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kAg0y6Ab3Ky4o06xd", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA3dM1fR0ymdYA5ta", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/6oEbKi8Ij2Gu2fScVD", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/8wM8y6bUvgxk5s4f3M", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/28o8y6cYz2Gu6w82h1", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/cN2cOmf6H2GubQsdZK", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/7sI6pY9Mnbd007KdZL", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/aEUg0y0bNch4dYA7Bo", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/aEU01A6Abch42fS8Ft", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/3cs8y6cYzgxkaMo4pe", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/6oE9Ca0bNch42fS4pf", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA3dMf6H0ym3jWf3U", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gw4hQf6Hftg3jW8Fx", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/fZe7u23nZch44o0dZS", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/00gcOm2jVdl88Egf3X", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA7u25w794S5s44pk", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/bIYeWu8Ijgxk8Eg9JF", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/5kAcOm5w74OCf2EbRO", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/14k8y68Ija8Wf2EbRP", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/aEU01AaQr2Gu3jWdZY", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/14k15EcYz80O07K2hh", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/3cs29If6Hbd08Eg1de", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/fZedSqe2Ddl88EgbRT", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/00g01Ae2D1Cq07K7BE", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/3cseWu5w7bd0g6If47", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/7sIaGe7Efch4aMo3lq", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/dR6dSqe2Dch4dYAcW1", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gw9Ca8Ij3Ky07K7BI", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/bIY29I6Abepc8Eg09h", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/3csbKie2D2GuaMo2hq", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/cN28y62jVa8Wf2E8FP", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/eVaaGe7Efch4dYAbS2", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/cN2aGe5w7epc4o0cW7", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/00g01A6Abch407K3ly", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/9AQdSq6Ab6WKf2EbS5", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gw29I3nZ3Ky1bOg8m", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/9AQ4hQ0bNa8WbQsf4j", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/8wMeWu0bNa8W9Ik9K0", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/4gw01Af6H1CqcUwcWd", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/cN2dSqf6H80O9Ik5tM", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S & C - Kobes - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA29I0bNbd01bOaO7", packageName: "Training Only Options - All Inclusive *striking & s&c - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/14k8y6cYz6WKg6I7BW", packageName: "Training Only Options - All Inclusive *striking & s&c - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/8wM3dM1fR5SG8Eg3lH", packageName: "Training Only Options - All Inclusive *striking & s&c - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa29I9Mndl83jW1dA", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/00g6pY0bN5SG07K2hF", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/dR68y63nZ0ymf2E1dC", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/28o5lU5w75SGaMoaOd", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa3dM4s30ymaMo4pQ", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/6oEg0y0bNch4dYA8G7", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/fZecOm0bNdl89IkcWo", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/00gcOm5w780O1bO8G9", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/9AQaGef6Hftg2fS1dI", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/14k5lU6Abch49Ik7C7", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/7sIaGe4s32Gu07KaOk", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/9AQeWuaQrbd01bO09H", packageName: "Training Only Options - All Inclusive *striking & s&c - Muay Thai - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/28oaGe3nZ6WKdYA5u2", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/eVabKi4s31Cqg6I09J", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/00g6pY7Ef0ymdYA8Gg", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/28obKif6H5SG5s44q1", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa3dM6Abbd0cUw4q2", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/fZe29I0bN80O5s48Gj", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/8wM15E9Mn2GudYAbSw", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/6oE8y6bUvftgcUw09P", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gw7u26Abbd05s4g8O", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/bIY6pY2jVdl88EgcWD", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/28o01A0bNftg07Kg8Q", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/cN201A0bNa8WbQs09T", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/dR6g0y7Efdl88Eg5ue", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/6oEcOm4s380OcUw7Cn", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/aEUaGe9Mnepc9IkaOA", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/cN201A6Ab2Gu4o0bSF", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/bIYeWu6Abgxk7Ac6ym", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/14k29I4s3a8W07K7Cr", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/fZe3dMbUv6WKf2E3mc", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gw9Caf6H80O9Ik8Gx", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/aEU01A0bN4OC5s46yq", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/6oE7u28Ij1Cq5s4e0T", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/14k29IcYzgxk07KaOI", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/00gg0y3nZdl85s42id", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kAg0yf6H80O7Ac6yu", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/dR66pY0bN5SGdYA3mj", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/9AQeWu7Ef94SaMo1ec", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/bIY9Ca3nZ6WK9Ik8GF", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/6oE4hQ5w75SGf2E8GG", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/bIY29I9Mn94SdYAe11", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/bIY4hQe2Dch4f2EcWY", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/7sIdSqbUv3Ky1bO9KN", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/3csaGe7EfepcaMoaOS", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/dR68y61fR5SG07Kg9d", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/aEUg0y2jVftgcUw0ag", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/cN2bKif6H4OC3jW3mt", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Month - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gwcOm4s31Cq9Ikf5c", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 1 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/cN2cOm6Aba8W07K2ir", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 1 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/bIYaGe7EfftgcUw4qA", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 1 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gwbKi0bN0ym07KcX7", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 1 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/fZe7u24s3ch49Ikf5g", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 2 Week"});
linkMapping.push({linkId: "https://buy.stripe.com/fZecOmbUv6WK1bO3mz", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 2 Week - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/fZe7u27Efdl8dYAbT6", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 2 Week - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kAaGee2Dbd0aMoaP3", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 2 Week - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gweWu2jV2GuaMo5uK", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 1 Month"});
linkMapping.push({linkId: "https://buy.stripe.com/28o15Ef6Hdl8cUwaP5", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 1 Month - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/28o8y69Mn6WKf2E0as", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 1 Month - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/dR66pY5w75SGf2EbTb", packageName: "Training Only Options - All Inclusive *S&C & s&c - S & C - Kobes - 1 Month - 10 Sessions"});

linkMapping.push({linkId: "https://buy.stripe.com/bIY29I0bN2Gu9Ik9HO", packageName: "Private Training Sessions - Muay Thai - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gwg0y3nZ94S2fS2fn", packageName: "Private Training Sessions - Western Boxing - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/eVa29Ie2Ddl84o0bPY", packageName: "Private Training Sessions - Western Boxing - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/4gwdSqf6H80OcUw3jt", packageName: "Private Training Sessions - Western Boxing - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kAaGe9Mn6WKg6I3ju", packageName: "Private Training Sessions - Striking - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/00gbKi7Efgxk07KbQ1", packageName: "Private Training Sessions - Striking - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/5kA9Caf6Hdl8bQsbQ2", packageName: "Private Training Sessions - Striking - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/00gdSq4s3ftg9Ik9HV", packageName: "Private Training Sessions - S & C - Kobes - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/bIY15E0bN4OCcUwcU8", packageName: "Private Training Sessions - S & C - Kobes - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/cN2aGe4s30ym07K5rH", packageName: "Private Training Sessions - S & C - Kobes - 10 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/eVag0y2jV94S7AcdYe", packageName: "Private Training Sessions - S & C - 1 Session"});
linkMapping.push({linkId: "https://buy.stripe.com/6oE01A4s3a8W3jWdYf", packageName: "Private Training Sessions - S & C - 5 Sessions"});
linkMapping.push({linkId: "https://buy.stripe.com/fZe9CaaQr0ym1bO9I0", packageName: "Private Training Sessions - S & C - 10 Sessions"});

var packageTotalPrice = 0;

var isPackageSelected = false;

var bookingTotalPrice = 0;
var bookingTotalWithVatPrice = 0;
var bookingTotalIncludeVatPrice = 0;

var packageList = [];

var defaultIndex = 0;

//All-Inclusive Packages
var buttonResoruces = [$('#trainingOnlyOptionSubmitButton'), $('#privateSessionSubmitButton')];
buttonResoruces.forEach(function (element, index) {
	element.attr("type", "button");
	let actions = "";
	if (index == 1) {
		actions += "calculatePrivateSessionPrice();";
	} else if (index == 0) {
		actions += "trainingOnlyOptionsPriceCalc();";
	}
	actions += "addNewPackage();";
	element.attr("onclick", actions);
});

//Process to payment button implimentation
$('#booking-process-payment').attr("type", "button");
$('#booking-process-payment').attr("onclick", "openPackageLink()");

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
var durationPrice = 0;

var trainingDescriptions = [];
trainingDescriptions.push("The Striking Department: The Striking Department is where you go to sharpen the axe.");
trainingDescriptions.push("Athlete factory: The Athlete Factory is where you go to build the Armour.");
trainingDescriptions.push("All Access: Our All Access pass includes a free 30-minute consultation with our onsite Mindset & Performance Specialist, Shaun Kober.");

trainingOnlyOptionsPriceCalc();

$("#Fitness-Packages-2").on('change', function () {
	trainingOnlyOptionFitnessPackageValue = parseFloat(this.value);
	trainingOnlyOptionsPriceCalc();
	
	let selectedIndex = $("#Fitness-Packages-2 option:selected").index();
	$('#text-training-package-section').html(trainingDescriptions[selectedIndex]);
});

$("#Private-Lessons").on('change', function () {
	trainingOnlyOptionPrivateLesson = parseFloat(this.value);
	// if (trainingOnlyOptionPrivateLesson == 0) {
		// trainingOnlyOptionPrivateLesson = 1;
	// }
	trainingOnlyOptionsPriceCalc();
});

$("#training-only-option-session").on('change', function (e) {
	trainingOnlyOptionSessionValue = parseFloat(this.value);
	// if (trainingOnlyOptionSessionValue == 0) {
		// trainingOnlyOptionSessionValue = 1;
	// }
	if (trainingOnlyOptionSessionValue > 0 && $('#Private-Lessons :selected').val() == 0) {
		alert("Please select Training Options before selecting the Session(s)");
		e.preventDefault();
		return false;
	}
	trainingOnlyOptionsPriceCalc();
});

$("#training-duration").on('change', function () {
	trainingOnlyOptionsPriceCalc();
});

function trainingOnlyOptionsPriceCalc() {
	let itemName = '- ' + $('#Fitness-Packages-2 :selected').text();
	if ($('#Private-Lessons :selected').val() > 0) {
		itemName += " - " + $('#Private-Lessons :selected').text();
	}
	
	if ($('#Fitness-Packages-2 :selected').text() == "All Inclusive *striking & s&c") {
		if ($("#training-duration :selected").text() == "1 Week") {
			durationPrice = 0;
		} else if ($("#training-duration :selected").text() == "2 Week") {
			durationPrice = 2500;
		} else if ($("#training-duration :selected").text() == "1 Month") {
			durationPrice = 6500;
		}
	} else if ($('#Fitness-Packages-2 :selected').text() == "Athlete Factory (all S&C classes)") {
		//Athlet and Striking option having same pricing.
		if ($("#training-duration :selected").text() == "1 Week") {
			durationPrice = 0;
		} else if ($("#training-duration :selected").text() == "2 Week") {
			durationPrice = 1500;
		} else if ($("#training-duration :selected").text() == "1 Month") {
			durationPrice = 4000;
		}
	} else {
		if ($("#training-duration :selected").text() == "1 Week") {
			durationPrice = 0;
		} else if ($("#training-duration :selected").text() == "2 Week") {
			durationPrice = 1500;
		} else if ($("#training-duration :selected").text() == "1 Month") {
			durationPrice = 4000;
		}
	}
	
	let sessionPrice = trainingOnlyOptionPrivateLesson;
	
	if ($("#training-duration :selected").text().length > 0) {
		itemName += " - " + $("#training-duration :selected").text();
	}
	
	if (trainingOnlyOptionSessionValue > 0) {
		if ($('#Private-Lessons :selected').val() == 0) {
			alert("Please select Training Options before selecting the Session(s)");
			return false;
		}
		sessionPrice = trainingOnlyOptionPrivateLesson * trainingOnlyOptionSessionValue;
		itemName += " - " + $('#training-only-option-session :selected').text();
	}
	
	sessionPrice += durationPrice;

	let packagePrice = getTurkeyCurrency(trainingOnlyOptionFitnessPackageValue + sessionPrice);
	console.log(trainingOnlyOptionFitnessPackageValue, trainingOnlyOptionPrivateLesson, trainingOnlyOptionSessionValue, durationPrice);
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
		linkMapping.forEach((item) => {
			if (packageName == item.packageName) {
				packageLink = item.linkId;
				console.log(item);
				console.log(packageLink);
			}
		});
	});
}

function openPackageLink() {
	if (bookingTotalIncludeVatPrice == 0) {
		alert("Please check your booking details selection done properly. And booking total amount calculated.");
		return false;
	}

	if (packageLink === undefined && packageLink.length == 0) {
		alert("Package Detail not associated with selected item. Please try again!");
		return false;
	}

	window.open(packageLink, '_blank');
	// window.location.href = packageLink;
}

function bookingSystemRegistration() {
}
