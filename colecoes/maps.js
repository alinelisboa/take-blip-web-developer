function getAdmins(map){
    let admins = [];

    for ([key, value] of map){
        if (value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const myMap = new Map();

myMap.set('Aline', 'Admin');
myMap.set('Luiz', 'Admin');
myMap.set('Ana', 'User');
myMap.set('Lara', 'Admin');

console.log(getAdmins(myMap));