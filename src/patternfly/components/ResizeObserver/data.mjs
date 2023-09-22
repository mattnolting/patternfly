export const exampleArray = () => (
  [
    { username: 'alan', firstName: 'Alan', lastName: 'Johnson', email: 'alan@test.com' },
    { username: 'allison', firstName: 'Allison', lastName: 'House', email: 'allison@test.com' },
    { username: 'ryan', firstName: 'Ryan', lastName: 'Carson', email: 'ryan@test.com' }
  ]
);

export const exampleObject = () => (
  {
    example1: {
      name: 'First example',
      age: 32,
      items: {
        shoes: 'Running shoes',
        bike: 'Specialized',
        url: 'http://www.specialized.com'
      },
      html: '<button>Hello</button>'
    },
    example2: {
      name: 'Second example',
      age: 42,
      items: {
        shoes: 'Walking shoes',
        bike: 'AMG',
        url: 'http://www.amg.com'
      },
      html: '<button>Goodbye</button>'
    }
  }
);

// export const dothis = () => {
//   console.log('Current Context');

//   return 'Current Context';
// }

// export const dothis = function () {
//   return 'hello';
// }

// export const helloWorld = () => {
//   return 'this thing';
// };

// export const helloWorld = () => {
//   console.log('Current Context');

//   // return 'Current Context';
// };

// export const helloWorld = () => {
//   const mybasic = this.getElementById('basic');

//   console.log(mybasic);
// };
