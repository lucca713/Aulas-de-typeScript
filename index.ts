let city = "new York";
let population = 840000;
const age = 32;
let oldAge = 79 as const;
let newAge = oldAge;
let date = new Map()
let score = [30, 28, 14]

type primitive = string | number | boolean;
type customName = "jhon" extends string ? string : "JHON";
type customAge = typeof newAge extends number ? 79 : number  
type checkData = typeof date extends Object ? true : false;


//Objects

let person = {
  name: "mark",
  age: 32
};

let car: object = {
    brand: "BMW",
    color: "black"
};

let newCar: {
    brand: string,
    color: string
 } = {
    brand: "BMW",
    color: "black",
};

car = []
//newCar = [] retonar um erro pq agora o objeto newCar tem novas propriedades ligadasa ela que nao receberam valor para entrarem em um array




// nao se usar muito assim, pois se eu tiver 20 objetos vou ter que toda vez escrever os 20? nao enta ofaco uma variavel para isso.

type Post = {
    title:  string,
    content: string,
    date : Date,
}

let post: Post = {
    title:  "this is a block post",
    content: "content of the post",
    date :  new Date(),
};
