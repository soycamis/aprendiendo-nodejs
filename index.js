// Declaration variables const and let

let userName = 'Camilo';
const userLastName = 'Sosa Morales';

let fullName = `${userName} ${userLastName}`;

console.log(fullName);
console.log('---------')


// Templates string

let githubUser = '@soycamis'
let templateHTML = `<div>
  <p>Github: <strong>${githubUser}</strong></p>
</div>`;

console.log(templateHTML);
console.log('---------')


// Destructuring objets

let myObj = {
  myName: 'Camilo',
  lastName: 'Sosa Morales',
  ocupation: 'Developer 🧑🏽‍💻'
}
  // New
  const { myName, lastName, ocupation } = myObj;
  console.log(myName, lastName, ocupation);
  console.log('---------')

  // Old 1
  const oldName = myObj.myName;
  const oldLastName = myObj.lastName;
  const oldOcupation = myObj.ocupation;

  console.log(oldName, oldLastName, oldOcupation);
  console.log('---------')

  // Old 2 with functions
  let myObj2 = {
    myName: 'Camilo',
    lastName: 'Sosa Morales',
    ocupation: 'Developer 🧑🏽‍💻',
    getName: function() {
      return this.myName;
    },
    getFullName() {
      return `${this.myName} ${this.lastName}`;
    }
  }

  console.log(myObj2.getName());
  console.log(myObj2.getFullName());
  console.log('---------');


// Destructuring arrays


const programming = ['javascript', 'python', 'ruby'];

  // New
  const [js, py, rb] = programming;
  console.log(js, py, rb);

  const [onlyJS,,] = programming;
  console.log(`Only print Javascript ${onlyJS}`);
  console.log('---------');

  // Old
  const javascript = programming[0];
  const python = programming[0];
  const ruby = programming[0];
  console.log(javascript, python, ruby);
  console.log('---------');

// Arrow functions

const sayHello = () => {
  console.log('¡Hi!');
  console.log('---------');
  console.log('this value in arrow function:')
  console.log(this);
}
sayHello();

function sayThis() {
  console.log('this value in function:')
  console.log(this);
}
sayThis();


// Callback

const employed = [
  {
    id: 1,
    name: 'Camilo'
  },
  {
    id: 2,
    name: 'Hector'
  },
  {
    id: 3,
    name: 'Pedro'
  },
  {
    id: 4,
    name: 'Luis'
  }
];

const salary = [
  {
    id: 1,
    amount: 1000
  },
  {
    id: 2,
    amount: 1422
  },
  {
    id: 3,
    amount: 2000
  },
  {
    id: 4,
  }
];

// console.log(employed);
// console.log(salary);

// employed.find((emp) => {
//   if(emp.id == 1) {
//     console.log(`¡OK! id: ${emp.id} found by ${emp.name}`);
//   }
// });

console.log('Callback!')

function getSalaryById(employed, cb) {
  if(employed) {
    let employedSalary = salary.find( (emp) => emp.id === employed.id );

    if(employedSalary.amount) {
      cb(null, employedSalary);
    } else {
      cb('¡Employed not have salary!');
    }
  } else {
    cb('¡Employed not exist!');
  }
};

getSalaryById(employed[0], (error, emp) => {
  if(error) {
    console.log('Error!')
    return undefined;
  }

  console.log(`The salary of ${employed[0].name } is: ${emp.amount}`);
});

getSalaryById(employed[3], (error, emp) => {
  if(error) {
    console.log(error)
    return undefined;
  }

  console.log(`The salary of ${employed[3].name } is: ${emp.amount}`);
});

getSalaryById(employed[100], (error, emp) => {
  if(error) {
    console.log(error)
    return undefined;
  }

  console.log(`The salary of ${employed[100].name } is: ${emp.amount}`);
});
