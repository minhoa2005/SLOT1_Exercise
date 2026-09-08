import logo from './logo.svg';
import './App.css';

function App() {

  var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
  ];

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

  var array = [1, 2, 3, 4];


  const firstTeenager = people.find((p) => p.age >= 10 && p.age <= 20);
  const allTeenagers = people.filter((p) => p.age >= 10 && p.age <= 20);
  const checkAllTeenagers = people.every((p) => p.age >= 10 && p.age <= 20);
  const checkAnyTeenagers = people.some((p) => p.age >= 10 && p.age <= 20);

  const reduced = array.reduce((a, b) => {
    return a + b;
  }, 0);

  const arrowFunc = array.reduce((a, b) => a + b, 0);

  const { name, category } = companies[0];

  const newObj = { name, category };

  const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

  const resParam = (...rest) => {
    const arr = [];
    rest.forEach(item => {
      if (Array.isArray(item)) {
        arr.push(...item);
      } else {
        arr.push(item);
      }
    });

    return arr;
  };


  const promise = () => {
    return new Promise((resolve, reject) => {
      const number = Math.floor(Math.random() * 10) + 1;
      if (number > 5) {
        resolve(number);
      } else {
        reject("Error");
      }
    });
  };

  promise().then((number) => {
    console.log("The number is: ", number);
  }).catch((error) => {
    console.log(error);
  });



  return (
    <div style={{ padding: '10px' }}>
      <p style={{ fontWeight: 'bold' }}>Q1: </p>
      <p>Normal: {reduced}</p>
      <p>Arrow Function: {arrowFunc}</p>
      <p style={{ fontWeight: 'bold' }}>Q2: </p>
      <p>First Teenager: {firstTeenager ? firstTeenager.name : "Not found"}</p>
      <p> All Teenagers: {allTeenagers.map((p) => p.name).join(", ")}</p>
      <p> All Teenagers: {checkAllTeenagers ? "Yes" : "No"}</p>
      <p> Any Teenagers: {checkAnyTeenagers ? "Yes" : "No"}</p>
      <p style={{ fontWeight: 'bold' }}>Q3: </p>
      {console.log("Print the name of each company that started after 1987:")}
      {companies.forEach((company) => {
        console.log(company.name);
      })}
      <p>Print the name of each company that started after 1987: s</p>
      {companies.map((c) => {
        if (c.start > 1987) {
          return <p key={c.name}>{c.name}</p>;
        }
        return null;
      })}
      <div>
        {companies.map((c) => c.category === 'Retail' ?
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2px', margin: '2px' }} >
            <div style={{ border: '1px solid black', padding: '5px', width: '300px', textAlign: 'center' }}>{c.name}</div>
            <div style={{ border: '1px solid black', padding: '5px' }}>{c.start + 1}</div>
            <div style={{ border: '1px solid black', padding: '5px' }}>{c.end}</div>
          </div>
          : null
        )}
      </div>
      <p>Print the sum if you add all the ages using reduce: {ages.reduce((a, b) => a + b, 0)}</p>
      <p>Sort the companies based on their end date in ascending order: </p>
      {companies.sort((a, b) => a.end - b.end).map((c) => (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2px', margin: '2px' }} >
          <div style={{ border: '1px solid black', padding: '5px', width: '300px', textAlign: 'center' }}>{c.name}</div>
          <div style={{ border: '1px solid black', padding: '5px' }}>{c.start}</div>
          <div style={{ border: '1px solid black', padding: '5px' }}>{c.end}</div>
        </div>
      ))}
      <p>Sort the ages array in descending order: {ages.sort((a, b) => b - a).join(', ')}</p>
      <p>
        Make a new object that has the properties of name and category same as the companies [0] and a method print that prints out the name, use object restructuring and ES6 JS: {newObj.name} - {newObj.category}
      </p>
      <p>Create a function that takes an unknown number of arguments that are numbers and return their sum: {sum(1, 2, 3, 4, 5)}</p>
      <p>•	Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array,
        if the argument is an array, it should add its values to the array that will be returned by the function: {resParam(1, 2, [3, 4], 5).join(', ')}</p>
    </div>
  );
}

export default App;
