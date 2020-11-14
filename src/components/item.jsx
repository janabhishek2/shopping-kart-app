import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
class Item extends Component {
    state = {  }
    getBadgeClasses=()=>{
        if(this.props.uniItem.count==0)
        {
            return "d-none";
        }
        else return "badge badge-primary";
    }
    render() { 
        return ( <div className="col col-sm-6 col-md-4 d-flex">
            
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex">
                                    <span className="mr-auto" >{this.props.uniItem.name}</span>
                                 <span className={this.getBadgeClasses()}>{this.props.uniItem.count}</span>

                                </div>
                                 
                            </div>
                            <div className="card-body ">
                             <img src={this.props.uniItem.url} className="img img-fluid" alt={this.props.uniItem.name} height="200" width="300"></img>
                             
                            <div className="card-footer">
                                <div className="d-flex justify-content-center">
                                    {this.props.uniItem.price}$ per kg. *
                                </div>
                                <div className="btn-group">
                                <button className="btn btn-success btn-sm m-2" onClick={()=>{this.props.onIncrement(this.props.uniItem)}}>Add to Cart</button>
                                <button className="btn btn-danger btn-sm m-2" onClick={()=>{this.props.onRemove(this.props.uniItem)}}>Remove from Cart</button>
                                </div>
                           

                            </div>
                            </div>
                        </div>
            
        </div> );
    }
}
 
export default Item;