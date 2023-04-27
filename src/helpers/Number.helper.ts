export const onlyNumbers = (str: string): string => {
  let out = '';
  const filtro = '1234567890';

  for (let i = 0; i < str.length; i++) {
    if (filtro.indexOf(str.charAt(i)) !== -1) out += str.charAt(i);
  }

  return out;
};
