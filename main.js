
const currency = {
    USD : 1,
    JPY : 113.5,
    EUR : 0.89,
    RUB : 74.36,
    GBP : 0.75
}
const input = require('sync-input');
const stream = require("stream");

function converting() {

    console.log('What do you want to convert?');
    let cur1 = input("From: ").toUpperCase();

    if (!(cur1 in currency)) {
        console.log("Unknown currency");
        return;
    }


    let cur2 = input("To: ").toUpperCase();

    if (!(cur2 in currency)) {
        console.log("Unknown currency");
        return;
    }

    let am = Number(input("Amount: "));

    if (am < 0) {
        console.log("The amount cannot be less than 1");
    }
    else if (isNaN(am)) {
        console.log("The amount has to be a number");
    }
    else {
        const convert = currency[cur2] * (am / currency[cur1]);
        console.log(`Result: ${am} ${cur1} equals ${convert.toFixed(4)} ${cur2}`);
    }
}
function start() {
    console.log('Welcome to Currency Converter!');
    console.log('1 USD equals 1 USD');
    console.log('1 USD equals 113.5 JPY');
    console.log('1 USD equals 0.89 EUR');
    console.log('1 USD equals 74.36 RUB');
    console.log('1 USD equals 0.75 GBP');
    while (true) {
        console.log("What do you want to do?");
        let choose = input("1-Convert currencies 2-Exit program\n");

        if (choose === "2") {
            console.log("Have a nice day!");
            break;
        } else if (choose === "1") {
            converting();
        } else {
            console.log("Unknown input")
        }
    }
}

start();