const user = {
      username : "pawan",
      price: 999,

      welcomeMessage : function() {
              console.log(`${this.username} , welcome to website `);
              console.log(this);  // this is about current comtext
              
              
      }
}

// user.welcomeMessage()
//  user.username = "sandy"   //context or value is changed
// user.welcomeMessage()   

// console.log(this);  // gives empty objects



// function chai (){
//     let username = "rawat"
//       console.log(this);
//       console.log(this.username);  // this works under objects not in function
      
// }

// chai()


// const  chai = function( ){
//        let username = "phoenix"
//        console.log(this.username);
       
// }


// chai()


const  chai = () =>{      // Arrow function
       let username = "phoenix"
    //    console.log(this.username);
        console.log(this);
       
}


chai()   // returns undefined


// Arrow function

// const addTwo = (num1, num2) =>{
//       return num1 + num2
// }


// Implicit return 
// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) =>( num1 + num2)

// const addTwo = (num1, num2) =>{
//      username: "Panku"  // undefined becuse not wrapping it in {}
// }
const addTwo = (num1, num2) =>(
    { username: "Panku" }
)
      

console.log(addTwo(3,6));


// const myArray = [2,3,4,33,22,43]

// myArray.forEach( () => )
