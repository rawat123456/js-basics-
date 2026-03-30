// const myArr = [0,1,2,3,4,5]
// const myHeroes = ["rawat", "pawan"]

// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);



// // arrays methods

// // myArr.push(6)
// // myArr.push(9)
// // myArr.pop()


// myArr.unshift(7) // time consuming 
// myArr.shift()

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(3));

// // const newArr = myArr.join()


// // console.log(myArr);
// // console.log(newArr);
// // console.log(typeof  newArr);

// // slice 

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C", myArr);

// console.log(myn2);


// Arrays 2

const marvelHeroes = ["thor","ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvelHeroes.push(dc)
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][1])

//   const allheros = marvelHeroes.concat(dc)
// console.log(allheros);


const allnew = [...marvelHeroes, ...dc]
console.log(allnew);


const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realarray = anotherarray.flat(Infinity)

console.log(realarray);

console.log(Array.isArray("Pawan"))
console.log(Array.from("Pawan"))
console.log(Array.from({name :"Pawan"}))

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2, score3))