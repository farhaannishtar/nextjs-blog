function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  console.log(newArray);
  for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          newArray[i / 2] = array[i];
      }
  }
  console.log(newArray)
  return newArray;
}

onlyElementsAtEvenIndex([99, 2, 3, 4, 5])