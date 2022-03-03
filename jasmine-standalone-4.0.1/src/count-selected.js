function countSelected(array) {
  let numberSelected = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}