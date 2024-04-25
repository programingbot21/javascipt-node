let n= 17;
let binary = "0b" + n.toString(2);
let octal = "0o" +n.toString(8);
let hex = "0x" + n.toString(16);
console.log(binary,`\n`, octal, `\n`,hex);

let  p = 123456.789654;
let fix = +p.toFixed(0);
let fix1 = +p.toFixed(5);
let fix2 = +p.toFixed(4);
let fix3 = p.toExponential();
let fix4  = p.toExponential(4);
let fix5  = p.toExponential(7);
let fix6 = p.toPrecision(7);
let fix7 = p.toPrecision(10);



