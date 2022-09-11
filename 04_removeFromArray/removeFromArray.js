const removeFromArray = function(array, ...arrayItems) {
  for (let i = 0; i < arrayItems.length; i++) {
    const item = arrayItems[i];
    const index = array.indexOf(item);
    if (index === -1) continue;
    array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
