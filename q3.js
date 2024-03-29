// HEX to RGB
function hexToRGB(h) {
    let r = 0,
        g = 0,
        b = 0;

    // 3 digits
    if (h.length == 4) { // type coercion for conversion between hex to rgb 
        r = '0x' + h[1] + h[1];
        g = '0x' + h[2] + h[2];
        b = '0x' + h[3] + h[3];

        // 6 digits
    } else if (h.length == 7) {
        r = '0x' + h[1] + h[2];
        g = '0x' + h[3] + h[4];
        b = '0x' + h[5] + h[6];
    }

    // prepend variables with + to convert them from strings back to numbers 
    // which yield the decimals needed
    return 'rgb(' + +r + ',' + +g + ',' + +b + ')';
}

// RGB to HEX
function rgbToHEX(r, g, b) {
    r = r.toString(16); // rgb values are changed from decimal to hexadecimal
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1)
        r = '0' + r;
    if (g.length == 1)
        g = '0' + g;
    if (b.length == 1)
        b = '0' + b;

    return '#' + r + g + b;
}

console.log(hexToRGB('#fff'));
console.log(hexToRGB('#ffffff'));
console.log(rgbToHEX(255, 255, 255));