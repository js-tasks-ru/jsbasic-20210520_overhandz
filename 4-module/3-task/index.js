function highlight(table) {

for (i=1; i < table.rows.length; i++) {
  let row = table.rows[i];
  let statuscell = row.lastElementChild;
  let gendercell = statuscell.previousElementSibling;
  let agecell = +gendercell.previousElementSibling.innerHTML;

  if (statuscell.getAttribute ('data-available') == 'true') {
    statuscell.parentElement.classList.add ('available');
  } else if (statuscell.getAttribute ('data-available') == 'false') {
    statuscell.parentElement.classList.add ('unavailable');
  } else {
    statuscell.parentElement.hidden = 'true';
  }

  if (gendercell.innerHTML == 'm') {
    gendercell.parentElement.classList.add ('male');
  } else if 
  (gendercell.innerHTML == 'f') {
      gendercell.parentElement.classList.add ('female');
  }

  if (agecell < 18) {
    gendercell.parentElement.style.textDecoration = 'line-through';
  }
}
}