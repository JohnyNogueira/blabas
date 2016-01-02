module.exports = function blabas(value) {
  
  //string always bullshit
  if(typeof value === 'string' || value instanceof String)
      return true;
 
  return false;
  
};