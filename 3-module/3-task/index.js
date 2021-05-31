function camelize(str) {
  let newArr = str.split ('-');
  let mapedArr = newArr.map((item , index) => {
  if (index == 0) {
    return (item);
  } else {
    return (item[0].toUpperCase() + item.slice(1));
  }
  });
  let finalArr = mapedArr.join('');
  return finalArr;
}