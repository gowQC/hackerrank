function flippingBits(n) {
  // first we convert the number to binary with flipped bits
  let string = "";

  // where 0 should be, add 1 instead and vice versa to flip bits
  while (n >= 1) {
    if (n % 2 == 1) {
      string = "0" + string;
    } else {
      string = "1" + string;
    }
    n = Math.floor(n / 2);
  }
  console.log(string);

  // next, find length of string and make filler equal to however many missing bits for 32-bit
  // if no bits are missing, this for loop never executes
  let filler = "";
  for (let i = string.length; i < 32; i++) {
    filler = filler + "1";
  }
  let fullNumber = filler + string;

  // finally, convert flipped bits to a base 10 integer
  let sum = 0;
  for (let i = 31; i >= 0; i--) {
    let exponant = Math.abs(i - 31);
    if (fullNumber.charAt(i) === "1") {
      sum += 2 ** exponant; // 2 to the power of i
    }
  }

  return sum;
}

console.log(flippingBits(4));

//2147483648
