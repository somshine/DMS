//V1.1.29
// https://cdn.jsdelivr.net/gh/somshine/DMS/
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@61ba31e9743c7f3497a35e5d915f5fb8c8931e5c/packages.js" data-use-service-core defer></script>
//<script src="https://cdn.jsdelivr.net/gh/somshine/DMS@master/accommodation.js" data-use-service-core defer></script>

var linkMapping = [];
var packageLink = "";

linkMapping.push({linkId: "https://buy.stripe.com/9AQ7u2gaLgxkdYAeaH", packageName: "All Inclusive - 1 Month"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oEbKiaQrepcdYA3w4", packageName: "All Inclusive - 1 Month - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/9AQdSq5w7bd05s4eaK", packageName: "All Inclusive - 1 Month - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/eVa9Ca0bNa8W7Ac3w5", packageName: "All Inclusive - 1 Month - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oE01AbUv6WKbQsc2G", packageName: "All Inclusive - 1 Month - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cs5lU3nZftg7AceaQ", packageName: "All Inclusive - 1 Month - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oEg0y0bN3Ky6w8giX", packageName: "All Inclusive - 1 Month - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIYaGegaL2Guf2Ec2J", packageName: "All Inclusive - 1 Month - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00g4hQ9Mnftg6w81o7", packageName: "All Inclusive - 1 Month - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU4hQ4s380OaMoeaS", packageName: "All Inclusive - 1 Month - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/dR69CacYzepc4o02s3", packageName: "All Inclusive - 1 Month - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3csbKi2jVgxk1bO5Eh", packageName: "All Inclusive - 1 Month - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/14keWu1fR4OCf2EeaM", packageName: "All Inclusive - 1 Month - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oE8y66Ab3Ky7Acd6d", packageName: "All Inclusive - 1 Week"}); 
linkMapping.push({linkId: "https://buy.stripe.com/9AQ3dM6Abftg1bO1nw", packageName: "All Inclusive - 1 Week - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oEeWu7Efbd09Ik2rC", packageName: "All Inclusive - 1 Week - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/8wM4hQaQr80O3jW2rB", packageName: "All Inclusive - 1 Week - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3csg0y2jVgxk3jW5DS", packageName: "All Inclusive - 1 Week - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gwdSqaQra8WdYAfeu", packageName: "All Inclusive - 1 Week - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kAeWue2Dgxk6w81nD", packageName: "All Inclusive - 1 Week - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZe3dMaQr94SbQs4zR", packageName: "All Inclusive - 1 Week - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU9Ca8Ij1CqcUw2rL", packageName: "All Inclusive - 1 Week - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kA5lU8Ijch46w84zS", packageName: "All Inclusive - 1 Week - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU15E4s3ch4bQs4zL", packageName: "All Inclusive - 1 Week - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIYcOmbUv0ym2fS1nB", packageName: "All Inclusive - 1 Week - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/dR6eWu8Ijgxk6w8aYa", packageName: "All Inclusive - 1 Week - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oEcOmaQr5SG8Egeau", packageName: "All Inclusive - 2 Week"}); 
linkMapping.push({linkId: "https://buy.stripe.com/cN24hQ2jV1Cqf2E1nJ", packageName: "All Inclusive - 2 Week - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cseWu1fR94S6w89Uh", packageName: "All Inclusive - 2 Week - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU15E0bN80O3jWeaw", packageName: "All Inclusive - 2 Week - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/dR615E9Mngxk8EgfeF", packageName: "All Inclusive - 2 Week - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gwdSq0bN4OC9IkeaD", packageName: "All Inclusive - 2 Week - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZe7u27Efgxk3jW6Ia", packageName: "All Inclusive - 2 Week - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/7sIg0y7Efdl89Ik9Uo", packageName: "All Inclusive - 2 Week - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/8wM01A5w7dl81bOd6C", packageName: "All Inclusive - 2 Week - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/7sI4hQ4s380O9Ik8Ql", packageName: "All Inclusive - 2 Week - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cseWu7Ef80OcUwfeC", packageName: "All Inclusive - 2 Week - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZeg0y9Mn3Ky9Ik7Mc", packageName: "All Inclusive - 2 Week - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/14k7u2bUvch407K6I7", packageName: "All Inclusive - 2 Week - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00g5lU5w75SGaMo8QA", packageName: "All Inclusive - 3 Months"}); 
linkMapping.push({linkId: "https://buy.stripe.com/cN2aGe8Ija8W9Ik2sd", packageName: "All Inclusive - 3 Months - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/cN2cOm8Ij6WKaMo4An", packageName: "All Inclusive - 3 Months - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/7sIaGe2jV6WKcUw9UG", packageName: "All Inclusive - 3 Months - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kAbKi1fR2GucUwc2T", packageName: "All Inclusive - 3 Months - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/14k9Cae2Da8Wf2E0kd", packageName: "All Inclusive - 3 Months - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU9Ca3nZ3KycUw0kc", packageName: "All Inclusive - 3 Months - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/dR6aGebUv5SG6w88QK", packageName: "All Inclusive - 3 Months - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gw9Caf6H1Cqg6I7MI", packageName: "All Inclusive - 3 Months - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIY7u2e2Da8W6w81oj", packageName: "All Inclusive - 3 Months - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/8wM6pYcYz0ymbQs5Es", packageName: "All Inclusive - 3 Months - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kAeWuf6Ha8Wg6Ic2S", packageName: "All Inclusive - 3 Months - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU29I3nZ0ym4o08QF", packageName: "All Inclusive - 3 Months - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/dR615Ee2Dftg4o02r9", packageName: "Athlete Factory (all S&C classes) - 1 Month"}); 
linkMapping.push({linkId: "https://buy.stripe.com/8wMbKibUv94ScUw7Lu", packageName: "Athlete Factory (all S&C classes) - 1 Month - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00gaGe1fRftg2fS8PA", packageName: "Athlete Factory (all S&C classes) - 1 Month - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kAeWu0bN6WKdYA2rb", packageName: "Athlete Factory (all S&C classes) - 1 Month - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU8y63nZch43jW8PE", packageName: "Athlete Factory (all S&C classes) - 1 Month - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEUaGee2Dftg6w8aXO", packageName: "Athlete Factory (all S&C classes) - 1 Month - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIY01A2jVa8WcUw9TJ", packageName: "Athlete Factory (all S&C classes) - 1 Month - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gw8y61fR4OCcUwc1T", packageName: "Athlete Factory (all S&C classes) - 1 Month - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU8y64s32Gug6Id5Z", packageName: "Athlete Factory (all S&C classes) - 1 Month - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kA7u28Ijch46w87LE", packageName: "Athlete Factory (all S&C classes) - 1 Month - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/cN201A1fRgxkf2E3vh", packageName: "Athlete Factory (all S&C classes) - 1 Month - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEUg0ye2D94SaMo4zn", packageName: "Athlete Factory (all S&C classes) - 1 Month - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gwcOm4s3a8W6w88PC", packageName: "Athlete Factory (all S&C classes) - 1 Month - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/9AQ8y6f6H4OCaMo5CV", packageName: "Athlete Factory (all S&C classes) - 1 Week"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIY4hQgaLch43jW6H0", packageName: "Athlete Factory (all S&C classes) - 1 Week - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU29Ie2Ddl807Ke9u", packageName: "Athlete Factory (all S&C classes) - 1 Week - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kA7u23nZ4OC6w85CX", packageName: "Athlete Factory (all S&C classes) - 1 Week - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/eVadSq1fR1CqbQs1mM", packageName: "Athlete Factory (all S&C classes) - 1 Week - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00geWuf6H1Cq7Ac3uW", packageName: "Athlete Factory (all S&C classes) - 1 Week - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/28oaGe6Ab6WKaMo1mN", packageName: "Athlete Factory (all S&C classes) - 1 Week - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gwg0y8Ij80ObQs0iL", packageName: "Athlete Factory (all S&C classes) - 1 Week - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIYaGee2D3Ky07KghL", packageName: "Athlete Factory (all S&C classes) - 1 Week - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kA3dMbUvftg4o0e9C", packageName: "Athlete Factory (all S&C classes) - 1 Week - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00g15E5w73Ky7Ac0iF", packageName: "Athlete Factory (all S&C classes) - 1 Week - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/cN24hQ1fR94Sg6I8Pd", packageName: "Athlete Factory (all S&C classes) - 1 Week - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kAcOm3nZ80O5s4fdA", packageName: "Athlete Factory (all S&C classes) - 1 Week - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/14k4hQaQr2GuaMo2qW", packageName: "Athlete Factory (all S&C classes) - 2 Week"}); 
linkMapping.push({linkId: "https://buy.stripe.com/dR63dM9Mnbd03jW5D9", packageName: "Athlete Factory (all S&C classes) - 2 Week - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU01A5w75SG6w8ghP", packageName: "Athlete Factory (all S&C classes) - 2 Week - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/14kg0y1fR6WKbQsc1y", packageName: "Athlete Factory (all S&C classes) - 2 Week - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cs01A3nZ80O3jW1mZ", packageName: "Athlete Factory (all S&C classes) - 2 Week - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/7sI15E2jV1CqdYA9Tx", packageName: "Athlete Factory (all S&C classes) - 2 Week - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIYeWu9Mn80O6w87Lo", packageName: "Athlete Factory (all S&C classes) - 2 Week - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZecOm7Ef6WKg6Ic1G", packageName: "Athlete Factory (all S&C classes) - 2 Week - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/28oaGe3nZgxkbQs1n4", packageName: "Athlete Factory (all S&C classes) - 2 Week - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/dR601A2jVftgaMo8Pv", packageName: "Athlete Factory (all S&C classes) - 2 Week - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gw8y62jV80Og6I4z8", packageName: "Athlete Factory (all S&C classes) - 2 Week - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZe4hQ6Ab1Cq5s4d5G", packageName: "Athlete Factory (all S&C classes) - 2 Week - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oEbKi0bN1Cq3jWc1B", packageName: "Athlete Factory (all S&C classes) - 2 Week - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oE5lU8Ij80O6w88PK", packageName: "Athlete Factory (all S&C classes) - 3 Months"}); 
linkMapping.push({linkId: "https://buy.stripe.com/28obKi6Ab0ym3jW9TP", packageName: "Athlete Factory (all S&C classes) - 3 Months - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZecOmcYzbd03jWd63", packageName: "Athlete Factory (all S&C classes) - 3 Months - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00g4hQ8Ijbd02fS7LI", packageName: "Athlete Factory (all S&C classes) - 3 Months - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00gg0y5w73Kyg6Ic23", packageName: "Athlete Factory (all S&C classes) - 3 Months - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/eVa6pY7Efftg07Kd69", packageName: "Athlete Factory (all S&C classes) - 3 Months - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/7sIg0ye2Ddl86w82ru", packageName: "Athlete Factory (all S&C classes) - 3 Months - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/cN26pYgaL94S6w81ns", packageName: "Athlete Factory (all S&C classes) - 3 Months - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oEbKicYz3Ky9Ik4zG", packageName: "Athlete Factory (all S&C classes) - 3 Months - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gw15EcYz0ym8Eg0jp", packageName: "Athlete Factory (all S&C classes) - 3 Months - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oEeWuaQr94Sg6Ic20", packageName: "Athlete Factory (all S&C classes) - 3 Months - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/28oaGebUv1CqcUwgii", packageName: "Athlete Factory (all S&C classes) - 3 Months - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gw8y67Ef2GudYA7LL", packageName: "Athlete Factory (all S&C classes) - 3 Months - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kAaGe9Mn6WKg6I3ju", packageName: "Private Training Sessions - Kickboxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kA9Caf6Hdl8bQsbQ2", packageName: "Private Training Sessions - Kickboxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00gbKi7Efgxk07KbQ1", packageName: "Private Training Sessions - Kickboxing - 5 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cs01AaQrch49Ik07c", packageName: "Private Training Sessions - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIY29I0bN2Gu9Ik9HO", packageName: "Private Training Sessions - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/dR615EgaL2Gu3jW5rx", packageName: "Private Training Sessions - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/eVag0y2jV94S7AcdYe", packageName: "Private Training Sessions - S & C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZe9CaaQr0ym1bO9I0", packageName: "Private Training Sessions - S & C - 10 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oE01A4s3a8W3jWdYf", packageName: "Private Training Sessions - S & C - 5 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00gdSq4s3ftg9Ik9HV", packageName: "Private Training Sessions - S & C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/cN2aGe4s30ym07K5rH", packageName: "Private Training Sessions - S & C - Kobes - 10 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIY15E0bN4OCcUwcU8", packageName: "Private Training Sessions - S & C - Kobes - 5 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gwg0y3nZ94S2fS2fn", packageName: "Private Training Sessions - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gwdSqf6H80OcUw3jt", packageName: "Private Training Sessions - Western Boxing - 10 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/eVa29Ie2Ddl84o0bPY", packageName: "Private Training Sessions - Western Boxing - 5 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU6pY1fR6WK07Kc0T", packageName: "Striking Factory (Select Your Weapon) - 1 Month"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00geWu0bNgxk6w81mg", packageName: "Striking Factory (Select Your Weapon) - 1 Month - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kAaGee2Da8Wf2Efd8", packageName: "Striking Factory (Select Your Weapon) - 1 Month - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZedSq9Mn3Ky1bO8OJ", packageName: "Striking Factory (Select Your Weapon) - 1 Month - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cseWu2jVftg7Ac2qq", packageName: "Striking Factory (Select Your Weapon) - 1 Month - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gw9Ca5w76WKcUw3uw", packageName: "Striking Factory (Select Your Weapon) - 1 Month - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/cN23dM2jV0ymaMo8OP", packageName: "Striking Factory (Select Your Weapon) - 1 Month - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEU7u29Mn80O9Ik4yB", packageName: "Striking Factory (Select Your Weapon) - 1 Month - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIY29IbUv6WKf2E2qv", packageName: "Striking Factory (Select Your Weapon) - 1 Month - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oE01A8IjepcbQs9SW", packageName: "Striking Factory (Select Your Weapon) - 1 Month - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/8wM7u24s3ftg07K0if", packageName: "Striking Factory (Select Your Weapon) - 1 Month - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/7sIeWu3nZ94S8Eg3ut", packageName: "Striking Factory (Select Your Weapon) - 1 Month - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/28oeWu9Mn0ymbQsfda", packageName: "Striking Factory (Select Your Weapon) - 1 Month - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00g6pY0bN2Gu07K4y1", packageName: "Striking Factory (Select Your Weapon) - 1 Week"}); 
linkMapping.push({linkId: "https://buy.stripe.com/14k29I3nZch41bOd4y", packageName: "Striking Factory (Select Your Weapon) - 1 Week - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/00g6pY2jVa8W2fSggM", packageName: "Striking Factory (Select Your Weapon) - 1 Week - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gweWuaQrch407K2pV", packageName: "Striking Factory (Select Your Weapon) - 1 Week - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/7sI7u2f6H80ObQs1lW", packageName: "Striking Factory (Select Your Weapon) - 1 Week - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIY01A3nZbd07Ac8Oq", packageName: "Striking Factory (Select Your Weapon) - 1 Week - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/8wMbKi3nZ1Cq4o02q1", packageName: "Striking Factory (Select Your Weapon) - 1 Week - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/9AQ15EcYz94SbQs4yb", packageName: "Striking Factory (Select Your Weapon) - 1 Week - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/8wM29I2jVdl84o09Sx", packageName: "Striking Factory (Select Your Weapon) - 1 Week - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZeeWu6Ab80ObQsaWA", packageName: "Striking Factory (Select Your Weapon) - 1 Week - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIY3dMcYz4OC1bO8Ol", packageName: "Striking Factory (Select Your Weapon) - 1 Week - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/9AQ3dM0bN2GubQs7Kj", packageName: "Striking Factory (Select Your Weapon) - 1 Week - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/aEUg0y9Mnbd08Eg2pY", packageName: "Striking Factory (Select Your Weapon) - 1 Week - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/8wM7u2aQr3Ky2fS8Ou", packageName: "Striking Factory (Select Your Weapon) - 2 Week"}); 
linkMapping.push({linkId: "https://buy.stripe.com/9AQ5lUf6Hch48Eg9Sz", packageName: "Striking Factory (Select Your Weapon) - 2 Week - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cs5lUcYzgxk07K5Cl", packageName: "Striking Factory (Select Your Weapon) - 2 Week - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZe3dMe2Ddl8f2E2q8", packageName: "Striking Factory (Select Your Weapon) - 2 Week - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/eVa5lUe2D94S4o09SF", packageName: "Striking Factory (Select Your Weapon) - 2 Week - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kAcOmgaLbd007Ke8X", packageName: "Striking Factory (Select Your Weapon) - 2 Week - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/eVa01Ae2Dch407K8OC", packageName: "Striking Factory (Select Your Weapon) - 2 Week - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/8wM6pYe2Dbd08Egc0Q", packageName: "Striking Factory (Select Your Weapon) - 2 Week - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oE15E4s33Ky07Kc0S", packageName: "Striking Factory (Select Your Weapon) - 2 Week - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIY7u23nZ2Gu07K9SJ", packageName: "Striking Factory (Select Your Weapon) - 2 Week - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cs8y69Mn2Gu9Ikc0K", packageName: "Striking Factory (Select Your Weapon) - 2 Week - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kA5lU8Ij94S1bO6Gs", packageName: "Striking Factory (Select Your Weapon) - 2 Week - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/bIYdSqcYzgxkf2E9SD", packageName: "Striking Factory (Select Your Weapon) - 2 Week - Western Boxing - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/9AQ5lU6Abftg7Ac0io", packageName: "Striking Factory (Select Your Weapon) - 3 Months"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oEeWu3nZ94ScUw5CJ", packageName: "Striking Factory (Select Your Weapon) - 3 Months - Muay Thai - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/7sIaGeaQr3Kyg6Ic19", packageName: "Striking Factory (Select Your Weapon) - 3 Months - Muay Thai - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/fZe6pY1fRgxkf2Ed5c", packageName: "Striking Factory (Select Your Weapon) - 3 Months - Muay Thai - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/6oE01AcYzdl87Ac1mz", packageName: "Striking Factory (Select Your Weapon) - 3 Months - S&C - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/28og0y9Mndl8cUw5CR", packageName: "Striking Factory (Select Your Weapon) - 3 Months - S&C - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/4gw7u21fR94S7Ac3uI", packageName: "Striking Factory (Select Your Weapon) - 3 Months - S&C - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cs15EcYz94S1bO0iy", packageName: "Striking Factory (Select Your Weapon) - 3 Months - S&C - Kobes - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/9AQ5lUbUvch407K1mE", packageName: "Striking Factory (Select Your Weapon) - 3 Months - S&C - Kobes - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/3cs8y6bUva8WbQs5CT", packageName: "Striking Factory (Select Your Weapon) - 3 Months - S&C - Kobes - 5 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/dR6cOmaQr4OC07Kfdm", packageName: "Striking Factory (Select Your Weapon) - 3 Months - Western Boxing - 1 Session"}); 
linkMapping.push({linkId: "https://buy.stripe.com/cN229I0bN2Gu4o02qC", packageName: "Striking Factory (Select Your Weapon) - 3 Months - Western Boxing - 10 Sessions"}); 
linkMapping.push({linkId: "https://buy.stripe.com/5kA7u25w7bd0cUw2qB", packageName: "Striking Factory (Select Your Weapon) - 3 Months - Western Boxing - 5 Sessions"}); 

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
trainingDescriptions.push("The Striking Factory: You may choose between Muay Thai, Western Boxing or Kickboxing/MMA Striking");
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
	let itemName = $('#Fitness-Packages-2 :selected').text();
	itemName = itemName.replace(" *striking & s&c", "");
	
	if ($('#Fitness-Packages-2 :selected').text() == "All Inclusive *striking & s&c") {
		if ($("#training-duration :selected").text() == "1 Week") {
			durationPrice = 0;
		} else if ($("#training-duration :selected").text() == "2 Week") {
			durationPrice = 3000;
		} else if ($("#training-duration :selected").text() == "1 Month") {
			durationPrice = 8000;
		} else if ($("#training-duration :selected").text() == "3 Months") {
			durationPrice = 30000;
		}
	} else if ($('#Fitness-Packages-2 :selected').text() == "Athlete Factory (all S&C classes)") {
		//Athlet and Striking option having same pricing.
		if ($("#training-duration :selected").text() == "1 Week") {
			durationPrice = 0;
		} else if ($("#training-duration :selected").text() == "2 Week") {
			durationPrice = 2000;
		} else if ($("#training-duration :selected").text() == "1 Month") {
			durationPrice = 5000;
		} else if ($("#training-duration :selected").text() == "3 Months") {
			durationPrice = 19000;
		}
	} else {
		if ($("#training-duration :selected").text() == "1 Week") {
			durationPrice = 0;
		} else if ($("#training-duration :selected").text() == "2 Week") {
			durationPrice = 2000;
		} else if ($("#training-duration :selected").text() == "1 Month") {
			durationPrice = 5000;
		} else if ($("#training-duration :selected").text() == "3 Months") {
			durationPrice = 19000;
		}
	}
	
	let sessionPrice = trainingOnlyOptionPrivateLesson;
	
	if ($("#training-duration :selected").text().length > 0) {
		itemName += " - " + $("#training-duration :selected").text();
	}

	if ($('#Private-Lessons :selected').val() > 0) {
		itemName += " - " + $('#Private-Lessons :selected').text();
	}
	
	if (trainingOnlyOptionSessionValue > 0) {
		if ($('#Private-Lessons :selected').val() == 0) {
			alert("Please select Training Options before selecting the Session(s)");
			return false;
		}
		sessionPrice = trainingOnlyOptionPrivateLesson * trainingOnlyOptionSessionValue;
		itemName += " - " + $('#training-only-option-session :selected').text();
	} else if ($('#Private-Lessons :selected').val() > 0) {
		itemName += " - 1 Session";
	}
	
	sessionPrice += durationPrice;
	// sessionPrice = durationPrice;

	let packagePrice = getTurkeyCurrency(trainingOnlyOptionFitnessPackageValue + sessionPrice);
	// let packagePrice = getTurkeyCurrency(durationPrice);

	console.log("Item Data : " + itemName);

	console.log(trainingOnlyOptionFitnessPackageValue, trainingOnlyOptionPrivateLesson, trainingOnlyOptionSessionValue, durationPrice);
	packageList[defaultIndex] = {
		//packageName: "Training Only Options",
		packageName: "",
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

	document.getElementById("booking-package-section").scrollIntoView({ behavior: "smooth" });
});

function getTurkeyCurrency(price) {
	// var thai = new Intl.NumberFormat('th', { style: 'currency', currency: 'THB' }).format(12345);
	var currency_symbol = "฿"
	var formattedOutput = new Intl.NumberFormat('th', {
		style: 'currency',
		currency: 'THB',
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
		console.log("package comapre --" + packageName.trim() + "--");
		linkMapping.forEach((item) => {
			if (packageName.trim() == item.packageName.trim()) {
				packageLink = item.linkId;
				console.log(item);
				console.log(packageLink);
			}
		});
	});

	document.getElementById("payment-section").scrollIntoView({ behavior: "smooth" });
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
