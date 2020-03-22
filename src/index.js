module.exports = function check(str, bracketsConfig) {
    
  const removeEqualBrackets = () => {
    let currentLength = str.length;

    bracketsConfig.map(bracketPair => {
        bracketPair = bracketPair.join('');
        str = str.replace(bracketPair, '');
    });

    currentLength !== str.length && removeEqualBrackets();
  };

  removeEqualBrackets();

  return str.length === 0 ? true : false;
}
