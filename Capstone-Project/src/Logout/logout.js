import React from 'react';
import './logout.css';
import {Link} from 'react-router-dom'


 const Logout = () => {


return(
    <div>
     <Link to = '/'><button className = 'Log_out' onClick = {() => window.location.href = '/'}>Log Out</button>
         
         </Link>
    </div>
)
}

export default Logout