export const validateEmail = (str: string): boolean =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  );

export const validatePlate = (str: string): boolean => {
  return /^(?!.*[Zz][Oo][Rr][Aa])(?!.*[Pp][Ii][Cc][Oo])(?!.*[Aa][Nn][Aa][Ll])(?!.*[Cc][Uu][Ll][Oo])(?!.*[Pp][Ee][Nn][Ee])(?=.{1,6}$)([A-Za-z]{2}[0-9]{4}|[A-Za-z]{4}[0-9]{2})$/.test(
    str
  );
};

export const hasSpace = (str: string): boolean => {
  const regex = /\s/;
  return regex.test(str);
};
