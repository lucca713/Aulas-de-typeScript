"use strict";
let city = "new York";
let population = 840000;
const age = 32;
let oldAge = 79;
let newAge = oldAge;
let date = new Map();
let score = [30, 28, 14];
//Objects
let person = {
    name: "mark",
    age: 32
};
let car = {
    brand: "BMW",
    color: "black"
};
let newCar = {
    brand: "BMW",
    color: "black",
};
car = [];
let blogPost = {
    title: "this is a blog post",
    content: "content of the post",
    date: new Date(),
    author: {
        name: "jhon",
        age: 32,
        email: "jhon@gmail.com"
    },
    awards: {
        web1: {
            name: "site 1 é o melhor",
            date: new Date(),
        },
        web2: {
            name: "site 2 eh o melhor",
            date: new Date()
        }
    }
};
const dog = {
    name: "bobi",
    barks: true,
    wags: true,
};
const cat = {
    name: "bella",
    purrs: true
};
let hybridAnimal = {
    name: "bobi",
    barks: true,
    wags: true,
    purrs: true
};
let user = {
    id: 1,
    name: "John Doe",
    contact: {
        email: "john@example.com"
    },
    theme: {
        dark: true,
    },
    language: "English",
    additionalInfo: "This is an example of an index signature property"
};
function logger(states) {
    switch (states.state) {
        case "Loading":
            return "carregando...";
            break;
        case "Failed":
            return `Error${states.code}`;
            break;
        case "Success":
            return `Success ${states.response.title}`;
    }
}
let a = [1, 2, 3]; //usar mais
let b = ["a", "b", "c"]; //menos usado
let c = ["a", 2, true]; //usar tambem
//truplas (arodem sempre ser a mesma)
let Person = ["jhon", "doe", 18];
let Usuario = ["francisca", "isabelle", 18];
const passingStudents = [3, true, "lucca", "ana", "isa"];
