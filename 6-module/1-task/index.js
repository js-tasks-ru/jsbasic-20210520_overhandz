export default class UserTable {
constructor(rows) {
let newTable = document.createElement('table');
let tbody = document.createElement('tbody');
rows.forEach (item => {
let newRow = document.createElement('tr');
newRow.innerHTML = `
<td>${item.name}</td>
<td>${item.age}</td>
<td>${item.salary}</td>
<td>${item.city}</td>
<td><button>X</button></td>
`;
newTable.append(tbody);
tbody.append(newRow);
});
newTable.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.parentElement.remove(); 
  }
});
this.elem = newTable;
}
}