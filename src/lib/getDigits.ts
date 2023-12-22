export const getDigits = (number: number): number[] => {
  let digits: number[] = [];
  while(number > 0) {
    const digit = number % 10;
    digits.unshift(digit);
    number = Math.floor(number / 10);
  }

  return digits;
}