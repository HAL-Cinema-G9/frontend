// 数字にカンマを追加する関数
// 使用例：addCommas(1234567) -> 1,234,567
export const addCommas = (number: number): string => {
  const parts = number.toString().split('.');
  const integerPart = parts[0];
  const decimalPart = parts[1] || '';

  let formattedInteger = '';
  for (let i = integerPart.length - 1; i >= 0; i--) {
    formattedInteger =
      integerPart.charAt(i) + formattedInteger;
    if ((integerPart.length - i) % 3 === 0 && i !== 0) {
      formattedInteger = ',' + formattedInteger;
    }
  }

  const formattedNumber =
    formattedInteger +
    (decimalPart !== '' ? '.' + decimalPart : '');
  return formattedNumber;
};
