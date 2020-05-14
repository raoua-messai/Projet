import React from 'react';
import styles from '../cssModules/NavBar.module.css';
import {link, Link} from 'react-router-dom';


class NavBar extends React.Component {
    render(){
        return (
            <div className= {styles.spacer}>
        <div className= {styles.navbar}>
            <p className= {styles.brand}>brand</p>
         <Link to="/"  > <span className= {styles.navbtn} >Upload</span></Link>
         <Link to="/about"  ><span className= {styles.navbtn} >Process</span></Link>
            <span className= {styles.navbtn} >Design</span>
            <span className= {styles.navbtn} >Export </span>
         
</div>
        </div>
        );
    }
}



export default NavBar;