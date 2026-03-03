// learned from this video 
// 0. what is JSON--> JSON : javaScript object with Notation;
// 1 JSON.stringify() ---> convert object to a JSON file,;
// 2. JSON.parse() ---> convert to JSON file a Object;

const person = {
    name:"tahmid",
    fruit:"watermelon",
    dish:'biryani',
    age:25,
    friends:["Yamin","Osama","Salman"],
    isRich:false,
    money:5500,
}

console.log(person,typeof person)

const personJson = JSON.stringify(person);
console.log(personJson, typeof personJson)

const personParse = JSON.parse(personJson);
console.log(personParse)