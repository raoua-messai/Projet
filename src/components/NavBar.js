import React from 'react';
import styles from '../cssModules/NavBar.module.css';
import {link, Link} from 'react-router-dom';


class NavBar extends React.Component {
    render(){
        return (
            <div className= {styles.spacer}>
        <div className= {styles.navbar}>
            <p className= {styles.brand}>Hello</p>
         <Link to="/about"  > <span className= {styles.navbtn} >Btn1</span></Link>
            <span className= {styles.navbtn} >Btn2</span>
            <span className= {styles.navbtn} >Btn </span>
         
</div>
        </div>
        );
    }
}



export default NavBar;