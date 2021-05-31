function showSalary(users, age) {
    let filteredArr = users.filter(item => item.age <= age);
    let mappedArr = filteredArr.map (item => `${item.name}, ${item.balance}`);
    let finalStr = mappedArr.join('\n');
    return finalStr;
}