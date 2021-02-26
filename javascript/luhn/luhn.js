// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.

export const valid = (idNumber) => {
  const specialcharacters = /[a-zA-Z\-#$:]/;
  if (specialcharacters.test(idNumber)) return false;

  let array = idNumber.replace(/\s/g,'').split('')
  if (array.length <= 1) return false;

  let ansArray = array.reverse().map((num, index) => {
    num = Number(num)
    if ((index + 1) % 2 === 0) num *= 2
    if (num > 9) num -= 9

    return num
  })

  let sum = ansArray.reduce((x, y) => Number(x) + Number(y))
  
  return sum % 10 === 0
};
