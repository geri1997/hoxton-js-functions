/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)


//Not sure if by output you mean return or log so I'll do both.


function add(a, b) {
    let sum=a+b
  console.log(sum);
  return sum
}

add(5,20)
add(61,580)
add(56,864)
add(895,892)
add(563,102)

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(a) {
    console.log(a%2===0)
  return a%2===0
}

isEven(5)
isEven(4)
isEven(305)
isEven(240)
isEven(958)

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(str) {
  console.log(`Greetings ${str}`)
  return `Greetings ${str}`
}

greet('geri1')
greet('geri2')
greet('geri3')
greet('geri4')
greet('geri5')

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(a) {
    console.log(a>=18)
  return a>=18
}

isAnAdult(12)
isAnAdult(40)
isAnAdult(5)
isAnAdult(84)
isAnAdult(3)

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(a) {
    console.log(18 - a)
  return 18-a
}

yearsToAdulthood(15)
yearsToAdulthood(5)
yearsToAdulthood(3)
yearsToAdulthood(12)
yearsToAdulthood(17)

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(obj) {
  // write your code here
  // use greet, isAnAdult and yearsToAdulthood to help you!
    isAnAdult(obj.age)?greet(obj.name):
    yearsToAdulthood(obj.age)>1?console.log(`Come back in ${yearsToAdulthood(obj.age)} years`):
    console.log(`Come back in ${yearsToAdulthood(obj.age)} year`)
  //comment the console.logs of isAnAdult() and of yearsToAdulthood() to get better console log for admit()

}

admit({age:51, name:'geri'})
admit({age:10, name:'geri1'})
admit({age:2, name:'geri2'})
admit({age:30, name:'geri3'})
admit({age:17, name:'geri4'})
