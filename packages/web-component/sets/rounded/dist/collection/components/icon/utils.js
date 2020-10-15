export const getName = (iconName) => {
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
export const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
export const isStr = (val) => typeof val === 'string';
export const toLower = (val) => val.toLowerCase();
