function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return (str.slice(0, maxlength - 1) + '…');
  } else {
    return str;
  }
}
truncate('Вот, что мне хотело…', 20);