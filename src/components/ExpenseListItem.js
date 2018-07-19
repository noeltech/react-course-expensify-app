import React from 'react';


import {Link} from 'react-router-dom';


const ExpenseListItem = ({dispatch,id,description, amount, createdAt},props) => (
   <div>
   <Link to={`/edit/${id}`}>
   <h3> {description}</h3>
   </Link>
   <p>Amount: {amount} - Created At: {createdAt}</p>
  
   </div>
);



export default ExpenseListItem;

