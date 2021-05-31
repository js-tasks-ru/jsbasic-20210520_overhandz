function makeFriendsList(friends) {
    let newArr = friends.map (item => item.firstName + ' ' + item.lastName);
        let list = document.createElement ('ul');
        let listItem;
            for (let i = 0; i < newArr.length; i++) {
                item = newArr[i];
                listItem = document.createElement ('li');
                listItem.innerHTML = item;
                list.appendChild (listItem);
    }
    return list;
}