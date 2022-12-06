//return price without vat
function excludingVatPrice(price) {
    if (price == null) {
        return -1;
    }
    else {
        return +(price - ((price * 15) / 115)).toFixed(2);

    }

}

console.log(excludingVatPrice(230));