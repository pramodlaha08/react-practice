
let state = [1, 2, 3, 4];
let copy = state;
// this method gives refernce dont exactly copy it
copy.pop();
console.log(state, copy);

let state2 = [1, 2, 3, 4, 5];
let copy2 = [...state2];
copy2.pop();
// this method exactly copy the state2 in copy2
console.log(state2, copy2);

let stateObj = {
    name: "pramod",
    age: 18
};
let copyObj = stateObj;
// this method also giives reference
copyObj.name = "muskan";
console.log(stateObj, copyObj);

let stateObj2 = {
    name: "pramod",
    age: 18
};
let copyObj2 = { ...stateObj2 };
copyObj2.name = "shikha";

console.log(stateObj2, copyObj2);

const { name } = stateObj2;
console.log(name);

const obj = {
    name: "pramod",
    social: {
        facebook: {
            first: "pramodlaha",
            second: "pramodlaha08"
        },
        instagram: {
            first: "muskan",
            second: "muskan08"
        }
    }
};

const { first } = obj.social.facebook;
const { second } = obj.social.instagram;

console.log(first);
console.log(second);

const arr = ["Pramod", function (a, b) { return a + b }, "Muskan"];

// cwife, sum] = arr;

// console.log(sum(5, 6));

const [husband, , wife] = arr;
console.log("Husband", husband);
console.log("Wife", wife);


const oneParameter = (one) => {
    return one;
}

const oneParameter1 = one => {
    return one;
} //for one parameter we can just remove the parameter brackets

const abcd = () => 12;

console.log(abcd() + 1);

const myname = () => "pramod";
console.log(myname());

const gfname = name => name;
console.log(gfname("muskan"));


// to implicit return an object

const impObj = () => ({
    name: "Pramod",
    age: 18
});

console.log(impObj());

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newarr = array.map(elem => elem * 2);

console.log(newarr);

const ans = array.map(elem => {
    if (elem >= 5)
        return elem + 5;
    else
        return elem;
});

console.log(ans);


const arrayObj = [
    { name: "pramod", gender: "male" },
    { name: "muskan", gender: "female" },
    { name: "shreya", gender: "female" }
];

const ansObj = arrayObj.filter(elem => elem.gender === "female");

console.log(ansObj);

let products = [
    { name: 'Iphone', cost: 120000 },
    { name: 'samsung a53', cost: 55000 },
    { name: 'redmi note 9', cost: 30000 }
];

const cheap = products.filter(elem => elem.cost < 60000);
console.log(cheap);






