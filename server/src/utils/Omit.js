const Omit = (obj, keys) => {  
  const keysSet = new Set(keys);
  return Object.keys(obj).reduce((acc, key) => {
    if (!keysSet.has(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
export default Omit