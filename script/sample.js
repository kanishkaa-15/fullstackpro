/* named function
function welcome(){
    alert("Welcome");
}
welcome()
*/
/* Anonymous function*/
const greet = function(){
    console.log("Hello");
}
greet()
/* sample*/
var a = 10;
var b = 30;
const add = function(a,b){
    c=a+b;
    console.log(c);
}
add(a,b);

const mul = function(a,b){
    c=a*b;
    console.log(c);
}
mul(5,4);

const multiply = function(a,b){
    return a*b;
}
console.log(multiply(3,2));

/* constructor function*/
function person(name){
    this.name = name;
}
const user = new person("Kani");
console.log(user.name);


/* generator function*/
function* count(){
    yield 1;
    yield 2;
    yield 3;
}
const counter = count();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

/* async function*/

async function fetchData() {
    try{
        const response = await fetch("https://dummyjson.com/user");
        if (!response.ok){
            throw new Error("no network");

        }
        const data = await response.json();
        //console.log(data);
       // console.log(data.users);
        console.log(data.users[1].firstName);
        console.log(data.users[1].lastName);
        console.log(data.users[1].email);
        console.log(data.users[1].id);
        console.log(data.users[1].image);
        console.log(data.users[1].hair.color);
        console.log(data.users[1].hair.type);
    } catch(error){
        console.error("Error fetch:",error);
    }
    
}
fetchData();

/* callback function*/
setTimeout(function(){
    console.log("Executed after 2 seconds");
},2000);

const people = {
    speak: function(){
        console.log("they are speaking");
    }
};
people.speak();

/* switch case */
let i = 1;
while(i<=5){
    if(i==3){
        console.log("Skipping the rest of the loop");
        i++;
        continue;
    }
    if(i==4){
        console.log("Breaking the loop");
        break;
    }
    console.log("Current value of i:",i);
    i++;
}

/*do while*/
let j = 1;
do{
    console.log("Current value of j:",j);
    j++;
}
while(false);

/*for loop*/
for (let k = 1;k<=5;k++){
    console.log("Currect value of i:",i);
}

/* for of loop*/
let arr = [1,2,3,4,5];
let names =["Alice", "Bob","Charlie","David"];
for(const person of names){
    console.log("Current Person name:",person);
}

/* for in loop*/

const p = { name: "John", age: 30, city: "New York" };

for (const key in p) {
    console.log(`Key: ${key}, Value: ${p[key]}`);
}

/*for each loop*/
Object.entries(p).forEach(([key,value])=>
{
    console.log(`${key}: ${value}`);
});