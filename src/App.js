import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import API from './utils/API.js';

function App() {
  // const wings = { title: 'Wings', price: 50000, type: 'Appetizer' }
  // const fries = { title: 'Fries', price: 2.99, type: 'Side' }
  // const ribs = { title: 'Ribs', price: 19.99, type: 'Main' }
  // const pubFood = [wings, fries, ribs]
  
 
  const [employees, setEmployees] = useState([]);
  API.getUsers().then((res) => {
    console.log(res);
    setEmployees(res);
  });

  return <div className="App">{employees}</div>;
}
  
  // const [food, setFood] = useState(pubFood);
  // const [filterValue, setFilterValue] = useState('All') 

  // const mappedFood = food.map(el => {

//     const style = {
//       padding: '2em',
//       margin: '2em',
//       color: 'black',
//       border: '3px solid blue'
//     }
//     return (
//       <div style={style}> 
//         <h3 >{el.title}</h3>
//         <hr/>
//         <h4>{el.type}</h4>
//         <p>{el.price}</p>
//       </div>
//     )
//   })


//   return (
//     <div  className="App">
//       <select type='select'>
//         <option value='All'>All</option>
//         <option value="Appetizer">Appetizer</option>
//         <option value="Main">Main</option>
//         <option value="Side">Side</option>
//       </select>
//       {mappedFood}
//     </div>
//   );
// } */

export default App;
