
export const getName = (iconName: string | undefined) => {
  if (isStr(iconName)) {
    iconName = toLower(iconName);
  }

  if (!isStr(iconName) || iconName.trim() === '') {
    return null;
  }

  // only allow alpha characters and dash
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');
  if (invalidChars !== '') {
    return null;
  }

  return iconName;
};

export const isSrc = (str: string) => str.length > 0 && /(\/|\.)/.test(str);

export const isStr = (val: any): val is string => typeof val === 'string';

export const toLower = (val: string) => val.toLowerCase();