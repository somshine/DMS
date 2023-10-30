//V1.1.22
//https://cdn.jsdelivr.net/gh/somshine/DMS/
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@61ba31e9743c7f3497a35e5d915f5fb8c8931e5c/packages.js" data-use-service-core defer></script>

var paymentLinkMapping = [];
var paymentLink = "";

paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wM6pY9Mnepc1bOeZv", packageName: "Training Only Options - Striking Factory (all striking classes) - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g4hQbUvbd0aMo9Fc", packageName: "Training Only Options - Striking Factory (all striking classes) - 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g7u23nZ3Kyg6I04D", packageName: "Training Only Options - Striking Factory (all striking classes) - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g8y6e2D2Gu9Ik4kU", packageName: "Training Only Options - Athlete Factory (all S&C classes) - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/9AQ29I0bN0ym6w8cRr", packageName: "Training Only Options - Athlete Factory (all S&C classes) - 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/bIYdSq4s380Og6IaJk", packageName: "Training Only Options - Athlete Factory (all S&C classes) - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN229IaQr4OCf2E18L", packageName: "Training Only Options - All Inclusive *striking & s&c - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEUbKi4s36WK2fSbNq", packageName: "Training Only Options - All Inclusive *striking & s&c - 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/7sI5lU3nZ1Cq9IkdVz", packageName: "Training Only Options - All Inclusive *striking & s&c - 1 Month"});

paymentLinkMapping.push({paymentId: "https://buy.stripe.com/14k6pYbUvepc1bO9Dd", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/3cs6pY7Ef1CqbQseXy", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gw4hQcYzftg6w89Df", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wMg0y7Efftg4o018E", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/28ocOm0bNbd0cUwaHl", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEU5lUbUv0ymdYAbLq", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/14kbKi7Efbd0f2E02J", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/dR601A0bN80O7AcdTA", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/fZeaGe1fRftg8EgdTB", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g6pYe2D0ym3jW3eY", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN229I9Mna8Wg6IaHr", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gw29IgaLbd0f2E6rc", packageName: "Training Only Options - Striking Factory (all striking classes) - Muay Thai - 1 Month - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/fZe7u26Ab3Ky4o07vh", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVadSq0bNa8W6w8g1O", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/9AQ9Ca2jV3Ky1bO16V", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/28ocOmaQra8W6w8cPE", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/6oE5lU0bN4OC1bO16X", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/28odSq3nZgxkcUw8zq", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/bIYg0ye2Ddl8aModTL", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/3cs8y69Mn3Ky1bOcPI", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/bIY8y67Efbd01bO8zt", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wMeWu6Ab6WK5s4g1W", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/14kbKi3nZ0ym4o002Z", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN2cOm1fR1Cq4o09DA", packageName: "Training Only Options - All Inclusive *striking & s&c - Western Boxing - 1 Month - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/28obKi9Mnftg3jWdTR", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEUbKie2D5SG07K6rq", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEU4hQ9Mn3Ky5s4dTT", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wM7u2f6Hdl8dYA7vw", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gw7u2cYza8W8Eg035", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gwg0y0bN1Cq6w8036", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/fZeeWu6Abepc5s4dTX", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/7sI6pY2jV80Of2EbLQ", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kA8y68Ij1CqbQseY3", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/6oE5lUgaLftg2fS03a", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gw15EbUv3Ky4o09DL", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wMdSq3nZ94S8EgbLU", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Western Boxing - 1 Month - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/7sI9Ca3nZ5SGbQs6rC", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gwcOm0bNch4bQs8zL", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEUbKiaQrdl807KbLY", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/dR64hQ4s32GucUw5nB", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gw5lU8Ijftg1bO5nC", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVa8y68Ij5SGcUw03j", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN29Ca8IjepcdYA7vM", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN28y6cYz6WK8Eg3fx", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN25lU3nZ1Cq3jW8zS", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/7sI6pY6Ab6WKdYAaI1", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/28o15E0bNgxk4o003o", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g9Ca7Efbd04o017t", packageName: "Training Only Options - Striking Factory (all striking classes) - Western Boxing - 1 Month - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kAcOm1fR5SGdYA8zW", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/9AQbKibUv0ymcUw03r", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/dR601AcYz6WK1bO8zY", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/7sIg0y6Abdl82fSg2r", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVacOm4s3dl85s43fG", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g15E8Ij0ymcUwg2t", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gw4hQaQrbd007K9E6", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/bIY9Caf6H80OaMo4jN", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/9AQbKibUvftgdYAdUo", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00gcOme2D2Gu7Acg2x", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gw5lUf6H80O6w82bI", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kAbKicYz3KydYAaIf", packageName: "Training Only Options - All Inclusive *striking & s&c - Striking - 1 Month - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVadSqbUvftgcUw17G", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/7sI01A5w7a8W2fS7w5", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g29I2jV6WK1bOg2C", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00gdSqcYz3KybQsbMn", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wM5lU8Ijdl89IkcQs", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/9AQ7u2cYz4OCdYA3fT", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/28o4hQ4s380OcUw17M", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEU01A1fRftgaMog2H", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/bIY01A3nZepc2fS17O", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEU4hQ8Ij94S4o0cQx", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/3cs6pY1fR3Ky7Ac7we", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEU01A2jV1Cq4o0g2L", packageName: "Training Only Options - Athlete Factory (all S&C classes) - Striking - 1 Month - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVaaGe8Ij0ymcUw6sc", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/bIYaGe9Mn6WK5s43g1", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/28o5lUgaL1CqaMo5oa", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEUbKibUv80O07KdUH", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/dR63dMbUv80OaMoaIw", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wM29IgaL0ymaMo17X", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/fZe4hQ2jVgxk7Ac17Y", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kA3dM3nZ94Sf2EaIz", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/bIY7u2cYz3KybQs6sk", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/7sIdSq4s33Kyf2E03X", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wM8y60bNftg8EgeYS", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/7sIeWubUv94Sg6I9Ez", packageName: "Training Only Options - Striking Factory (all striking classes) - Striking - 1 Month - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g4hQgaLch4dYA6so", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wM9Cae2D94S9Ik8Ax", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/fZeeWue2Dch46w8dUS", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kA8y6cYza8W07K6sr", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/fZeaGe8Ij4OC7Ac9EE", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEUeWue2D0ym6w8bMN", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEU4hQbUvbd05s4bMO", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kAaGe0bN1Cq1bOaIL", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/fZe8y67Ef1CqcUw3gk", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/4gwg0y0bN5SGf2E6sx", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVa6pY4s30ym2fScQW", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/bIY4hQ1fR0ym5s4dV1", packageName: "Training Only Options - All Inclusive *S&C & s&c - S&C - 1 Month - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN2g0y0bN3Ky3jW5ow", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/3csg0ye2D80ObQs4kt", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/fZe3dMaQr0ymcUwaIS", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/14k01Ae2D5SG1bOaIT", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kA4hQ3nZa8WbQs8AM", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/fZe8y6aQr3Ky7AcbMZ", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/3csdSqe2Depc6w8eZc", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/eVabKigaL2Gu6w8g3h", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/28o8y60bNdl807K8AQ", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/dR64hQf6Hch45s4eZf", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wM29I8Ijdl8cUwbN4", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/8wM9Ca6Abdl89Ik6sL", packageName: "Training Only Options - Athlete Factory (all S&C classes) - S&C - 1 Month - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/9AQaGe7Ef3Ky7AccRa", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C - 1 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/6oEbKi0bNch4cUw6sN", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C – 2 Week"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/5kA3dM9Mn3Ky8EgdVg", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C - 1 Month"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN2eWu6Ab3Ky9Ik8AX", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C - 1 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/28ocOme2Dgxk3jW2cA", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C - 1 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/00g6pY0bNftgg6IcRf", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C - 1 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN24hQ4s3a8Wf2EcRg", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C – 2 Week - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/cN28y69Mngxkf2EcRh", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C – 2 Week – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/aEUeWu6Abgxk1bO5oQ", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C – 2 Week - 10 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/6oEeWubUv5SG5s43gJ", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C - 1 Month - 1 Session"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/6oEg0y9Mndl807K9F8", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C - 1 Month – 5 Sessions"});
paymentLinkMapping.push({paymentId: "https://buy.stripe.com/dR6g0y6Ab2Gu8Eg18D", packageName: "Training Only Options - S&C Factory (all S&C classes) - S&C - 1 Month - 10 Sessions"});


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
	if (trainingOnlyOptionPrivateLesson == 0) {
		trainingOnlyOptionPrivateLesson = 0;
	}
	trainingOnlyOptionsPriceCalc();
});

$("#training-only-option-session").on('change', function () {
	trainingOnlyOptionSessionValue = parseFloat(this.value);
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
			durationPrice = 2000;
		} else if ($("#training-duration :selected").text() == "1 Month") {
			durationPrice = 5500;
		}
	} else {
		if ($("#training-duration :selected").text() == "1 Week") {
			durationPrice = 0;
		} else if ($("#training-duration :selected").text() == "2 Week") {
			durationPrice = 1000;
		} else if ($("#training-duration :selected").text() == "1 Month") {
			durationPrice = 2500;
		}
	}
	
	let sessionPrice = trainingOnlyOptionPrivateLesson;
	
	if ($("#training-duration :selected").text().length > 0) {
		itemName += " - " + $("#training-duration :selected").text();
	}
	
	if (trainingOnlyOptionSessionValue > 0) {
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
