import React, { Component } from 'react';
import Item from './item';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
class Items extends Component {
    state = {  }
 
    render() { 
        console.log('Items Called');
        return ( <div>
            <div className="container mt-5">
                
                   <div className="row">
                   {this.props.it.map((i)=>{
                return (<Item uniItem={i} key={i.id} onIncrement={this.props.onIncrement} onRemove={this.props.onRemove}/>);
                     })}
                   </div> 
            </div>
           
        </div> );
    }
}
 
export default Items;