const cleanRut = (rut: string): string =>
  rut.toLocaleLowerCase().replace(/[^0-9k]/g, '');

const formatRut = (rut: string, withDots?: boolean): string => {
  rut = cleanRut(rut);

  let dv;

  if (rut.length > 2) {
    dv = rut[rut.length - 1];
    rut = rut.substring(0, rut.length - 1);
    rut = withDots ? parseInt(rut).toLocaleString('es-CL') : rut.toString();
    rut = `${rut}-${dv}`;
  }

  return rut;
};

const validateRut = (rut: string): boolean => {
  let valid = false;

  try {
    rut = cleanRut(rut);

    let rutAux = parseInt(rut.substring(0, rut.length - 1));
    const dv = rut.charAt(rut.length - 1);
    let m = 0,
      s = 1;

    for (; rutAux; rutAux = Math.floor(rutAux / 10))
      s = (s + (rutAux % 10) * (9 - (m++ % 6))) % 11;
    valid = (s > 0 ? (s - 1).toString() : 'k') === dv;
  } catch (error) {
    console.error(error);
  }

  return valid;
};

export { cleanRut, formatRut, validateRut };
