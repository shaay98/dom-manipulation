"use strict";

const string = '{"name": "Nijah", "age": 25, "city": "New Orleans"}';
    const myInfo = JSON.parse("string");
    for (let key in obj) {
    console.log(obj[key]);
};                        

const sameInfo = {
    name: "Nijah",
    age: 25,
    city: "New Orleans"
};
const myString = JSON.stringify("sameInfo");
console.log(sameInfo);                                   
