import React from 'react';
import moment from 'moment';
import numeral from 'numeral'

import {Link} from 'react-router-dom';


const ExpenseListItem = ({dispatch,id,description, amount, createdAt},props) => (
   <div>
   <Link to={`/edit/${id}`}>
   <h3> {description}</h3>
   </Link>
   <p>
   Amount: {numeral(amount/ 100).format('$0,0.00')} - 
   Created At: {moment(createdAt).format('MMMM Do, YYYY')}</p>
  
   </div>
);



export default ExpenseListItem;

