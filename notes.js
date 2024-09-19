//////////////////////// Array///////////////////////////////
// pop, push, shift, unshift
// forEach, map, filter, reduce

// Exercise: write a function to transform a list of numbers into a list of JavaScript objects.
// Eg: input [1,2,3], output [{val: 1}, {val: 2}, {val: 3}] 
// const func = (arr)=>{
//     let arr2 = []
//     // arr.forEach(ele=>{
//     //     arr2.push({val:ele})
//     // })
//     arr2=arr.map(ele=>{return {val:ele}})
//     return arr2
// }
// console.log(func([1,2,3]))

/////////////////////// Destructuring//////////////////////////
// For Array
// const userName = ["Lucy","Li"]
// const firstName = userName[0]
// const lastName = userName[1]

// const [firstName, lastName]= userName
// console.log(firstName)
// console.log(lastName)

// For Object
// const {user: userName, age}={
//     user:'Lucy',
//     age:20
// }
// // console.log(user)
// console.log(userName)
// console.log(age)

/////////////////////// Spread operator/////////////////////////
// For Array
// const numbers = [1,2,3]
// const newNumber = [4,5]
// No.1
// newNumber.forEach(n=>{
//     numbers.push(n)
// })
// console.log(numbers)

// No.2
// const result = numbers.concat(newNumber)
// console.log(result)

// No.3
// const result = [...numbers, ...newNumber]
// console.log(result)

// For Object
// const user = {
//     user:'Lucy',
//     age:20
// }
// const newUser = {
//     id: 1,
//     ...user
// }
// console.log(newUser)

//////////////////////////////loop//////////////////////////
// For Array
// const numbers = [4,5,6]
// for (const n in numbers){
//     console.log(n)
// }
// for (const n of numbers){
//     console.log(n)
// }

// For Object
// let student = {
//     name: 'Mary',
//     id: 1234,
//     courses: ['Tech1101', 'SODV1101']
// }

// for (let key in student) {
//     console.log('key is: ', key)
// }
// console.log(Object.keys(student))
// console.log(Object.values(student))
// for (let value of Object.values(student)) {
//     console.log('value is: ', value)
// }
// for (let [key, value] of Object.entries(student)) {
//     console.log('key is: ', key, 'value is: ', value)
// }

//////////////////////// Function, Parameter, Arrow function////////////////
// Pass function as parameter
// function print(text) {
//     console.log(text)
// }
// function myCalculator(num1, num2, callback) {
//     let sum = num1 + num2
//     callback(sum)
// }
// myCalculator(5, 5, print)
// myCalculator(5, 5, text=>{
//     console.log(text)
// })

///////////////////////// Reference Values and Primitive Values/////////////////
///////string, number, boolean are primitive values (the variable saves value)
///////array, object are reference (the variable saves address)

//////////No.1 update the variable
// const str = 'hello'
// str = "Hello"
// console.log(str)

// const arr = [1,2,3]
// // arr=[2,3,4]
// arr[2]=4
// console.log(arr)

////////No.2 assign to another variable
// let a = 10;      
// let b = a;       
// b = 20;          
// console.log(a); 
// console.log(b);

// let obj1 = { name: 'Alice' };   
// let obj2 = obj1;               
// obj2.name = 'Bob';              
// console.log(obj1.name);        
// console.log(obj2.name); 


///////////No.3 pass to parameter
// let str='hello'
// const func = (text)=>{
//      text='Hello'
//      console.log(text)
// }
// func(str)
// console.log(str)


// let arr=[1,2,3]
// const func = (numbers)=>{
//     numbers[0] = 0
//     console.log(numbers)
// }
// func(arr)
// console.log(arr)

///////use spread operator
// let arr=[1,2,3]
// const func = (numbers)=>{
//     numbers =[...numbers]
//     numbers[0]=0
//     console.log(numbers)
// }
// func(arr)
// console.log(arr)

// let arr=[1,2,3]
// const func = (numbers)=>{
//     numbers[0]=0
//     console.log(numbers)
// }
// func([...arr])
// console.log(arr)