import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
class Navbar extends Component {
    
   
    render() { 
        console.log('Navbar called');
        return ( <div>
            <nav className="navbar navbar-dark bg-primary text-white fixed-top">
                <a className="navbar-brand">Logo Here</a>
            <div className="d-flex mr-1 font-weight-bold">Total Items : {this.props.tc}</div>
        <div className="d-flex ml-1 font-weight-bold">Total Price : {this.props.tp}$</div>
            </nav>
        </div> );
    }
}
 
export default Navbar;