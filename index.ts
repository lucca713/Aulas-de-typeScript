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

//faco um esqueleto

type Author = {
    name: string,
    age: number,
    email: string,
}

type AwardsDatails = {
     name:string,
     date: Date,
}

type Awards = {
    [key:string]: AwardsDatails 
}

type Post = {
    title: string
    content: string,
    date : Date,
    author: Author,
    awards?: Awards //quando colocamos o sinal de ? ele se torna uma propriedade opcional, podmeos colocar readOnly para nao ser modificada, apenas lida
}


let blogPost :Post = {
    title: "this is a blog post",
    content: "content of the post",
    date: new Date(),
    author: {
        name:"jhon",
        age: 32,
        email: "jhon@gmail.com"
    },
    awards : {
        web1:{
            name: "site 1 é o melhor",
            date : new Date(),
        },
        web2: {
            name: "site 2 eh o melhor",
            date: new Date()
        }
    }
}

//uniao de 2 objetos

type Dog = {
    name: string,
    barks: boolean,
    wags: boolean
}

type Cat = {
    name: string,
    purrs: boolean,
}

type dogOrCat = Dog | Cat //aqui voce garante a uniao dos dois /* faz mais sentido fazer o type animal e juntar em um type dogOrCat mas tudo bem */


const dog : dogOrCat = {
    name : "bobi",
    barks: true,
    wags : true,
}

const cat : dogOrCat = {
    name : "bella",
    purrs : true
}


let hybridAnimal : dogOrCat = {
    name : "bobi",
    barks: true,
    wags : true,
    purrs : true
}


//exercicio Nested Objects


type PreferencesDark = {
    dark: boolean,
}

type PreferencesWhite = {
    white : boolean,
}

type Theme =  PreferencesDark | PreferencesWhite

type AdditionalInfo = {
    [key: string]: any;
}  

type Contact = { 
    email : string,
    phone? : number,
}

type User =  {
    id : number,
    name : string,
    age? : number,
    contact : Contact,
    theme : Theme,
    language: "English" | "Spanish",

    AdditionalInfo? : AdditionalInfo,
    //podia ser feito assim:
    [key: string]: any;
}

let user : User = {
    id : 1,
    name : "John Doe",
    
    contact: {
        email: "john@example.com"
    },
    
    theme : {
        dark: true,
    },
    
    language : "English",
    
    additionalInfo : "This is an example of an index signature property"
    
}

//fim exercicios

//aula 34 -> Discriminating Unions 

type NetWorkLoadingState = {
    state: "Loading"
}

type NetWorkFailedState = {
    state: "Failed",
    code : number
}
 type NetWorkSuccessState = {
     state: "Success",
     response : {
        title: string,
        duration: number,
        summary: string
     }
 }

 type NetWorkState = NetWorkLoadingState | NetWorkFailedState | NetWorkSuccessState


 function logger (states: NetWorkState){
    switch(states.state){
        case"Loading":
            return "carregando...";
            break
        case "Failed":
            return `Error${states.code}`
            break
         case "Success":
            return `Success ${states.response.title}`   
    }
 }

 let a: number[] = [1,2,3]; //usar mais

 let b : Array <string> = ["a", "b", "c"]; //menos usado

 let c:(string | number | boolean )[] = ["a", 2, true] //usar tambem


//truplas (arodem sempre ser a mesma)
 let Person : [string,string,number] = ["jhon", "doe", 18]

 type Usuarios = [string, string, number, string?]

 let Usuario :Usuarios = ["francisca","isabelle", 18]

 type listPfStudents = [number, boolean, ...string[]] //só pode ter um desse por lista, posso ter quantas string tiver
 const passingStudents:  listPfStudents = [3,true, "lucca", "ana", "isa"] 
