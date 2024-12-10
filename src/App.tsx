    import './App.css'

function App() {
  //some basic of any type in tsc
  let sale: number  = 1234;
  // let sale = janam; //u cannot write number into string
  console.log(sale);

  let harry = 'janam'
  console.log(harry);

  let janam; // this means type is any
  janam =1;
  janam = 'hello';
  console.log(janam);


  //array in tsc
  let num = [1,2,"3"] // in js you can have a array which contain numbe and string bcz js array is dynamic
  let nums: number[] = [1,2,3] // this is how done in tsc
  console.log(nums, num) 

  //tuples in tsc
  let user: [number, string] = [1, janam] //tuples are only suitable for two value you can write more but two are sutiable
  user.push(1); // this is the issue now on tsc you can add without defining type of it.
  console.log(user);

  //enums in tsc
  enum Size {small = 1, medium, large}; // in tsc if number value is given then medium and large get value 2,3 and so on.
  let mySize: Size = Size.medium;
  console.log(mySize)



  function calculateTax(income: number, taxYear:number): number{//this are paramater
    if(taxYear > 2000)
      return income * 1.2; //if true
    return income *2.2; //if false
  }
  calculateTax(2000, 4000)//this are arguments
  //suppose we have three arugument like down
  // calculateTax(2000, 4000, 4) this is valid in js because number of parameter and number argument are not relevent
  //but in typescript number of paramaters should be equal to numbers of arguments

  //object in tsc
  let employe: {
    id: number,
    //  name: string
    readonly name: string, //if we use readonly then it show error on complatioin as bellow
    retire : (date: Date) => void;
  } 
  = 
  {
    id: 1,
    name:'janam',
    retire: (date: Date) => {
      console.log(date);
    }
  }
 employe.name = 'hello'; //this is wrong approach readonly is written on above so we can not change its value as tsc rule
 

 console.log(employe)


 //sectoin 3
 //advanec type 
 //Type Aliases
 //Union Types 
 //Intersection Types 
 //Literal Types 
 //Nullable Types 
 //Optional Chaining

  //Type Aliases
  //it is a way to DRY dont repeat yourself suppose in this code if we want add new user then we have to write whole 
  //process again but alice we the process to shortcut it 
  
  //before aliases  in this code if we want to add new user we have to repeate users code again 
  let users: {
    id: number,
    readonly name: string, 
    retire : (date: Date) => void;
  } =  {
    id: 1,
    name:'janam',
    retire: (date: Date) => {
      console.log(date);
    }
  }

 console.log(users)

  //after aliases
  type moreUsers = {
    id: number,
    name: string,
    retire: (date: Date) => void
  }
let newUsers : moreUsers = {
  id: 1, 
  name: 'janam',
  retire: (date: Date) => {
    console.log(date);
  },
}

console.log('newusers',newUsers)

//union Types

function calculateWeight(weight: number | string) : number { // by doing this u can change the type of wight to num and stirng
  
  if (typeof weight === 'number'){
    return weight * 2.2;
  }else {
    return parseInt(weight) * 4.4;
    }
}
calculateWeight(200)
calculateWeight('20kg')

console.log(calculateWeight)

  return (
    <>
    <div>

    </div>
    </>
  )
}

export default App

//Literal Types is a way here variable has exact value in below code quanity must be 50 or 100. it can be number or string.
type Quantity = 50 | 100;
 let value : Quantity = 50 ;

 console.log(value);

 type Animal = "cat" | "dog";
 let ss : Animal = 'cat';

 console.log(ss)
