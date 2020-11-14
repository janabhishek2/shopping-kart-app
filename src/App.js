
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Items from './components/items';
class App extends Component{

  state ={
    foods : [{
      id:1,
      name:"Apples",
      url : 'https://cdn.pixabay.com/photo/2016/10/27/22/52/apple-1776744_1280.jpg',
      price: 1,
      count:0
    },{
      id:2,
      name:"Berries",
      url : "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg",
      price: 0.5,
      count:0
    },{
      id:3,
      name:"Guavas",
      url : "https://cdn.pixabay.com/photo/2018/04/26/11/17/guava-3351709_1280.jpg",
      price: 0.7,
      count:0
    },{
      id:4,
      name:"Oranges",
      url : "https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056_1280.jpg",
      price: 1,
      count:0
    },{
      id:5,
      name:"Papaya",
      url : "https://cdn.pixabay.com/photo/2017/03/07/04/32/fruit-2123166_1280.jpg",
      price: 2,
      count:0
    },{
      id:6,
      name:"Peaches",
      url : "https://cdn.pixabay.com/photo/2016/07/16/20/48/apricots-1522680_1280.jpg",
      price: 1,
      count:0
    }
  ,
    {
  id:7,
  name:"Pineapples",
  url : "https://cdn.pixabay.com/photo/2015/07/30/11/05/pineapple-867245_1280.jpg",
  price: 3,
  count:0
    },
  { id:8,
    name:"Grapes",
    url : "https://cdn.pixabay.com/photo/2014/02/27/17/51/grapes-276070_1280.jpg",
    price: 0.4,
    count:0},
  { id:9,
    name:"Bananas",
    url : "https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg",
    price: 0.5,
    count:0}
  ]
  }
  totalCost=()=>{
    let cost=0;
    this.state.foods.forEach((i)=>{
      if(i.count>0)
      {
        cost=cost+i.count*i.price;
      }
    });
    return cost;
  }
 totalCount=()=>{
  let x=0;
  this.state.foods.forEach((i)=>{if(i.count>0) x++;});
  return x;
 }
 handleIncrement=(item)=>{
  const foods=[...this.state.foods];
  const index=this.state.foods.indexOf(item);
  foods[index].count++;
  this.setState({foods});
 }
 handleRemove=(item)=>{
  const arr=[...this.state.foods];
  const index=this.state.foods.indexOf(item);
  arr[index].count=0;
  this.setState({foods:arr});
 }
  render () {

  return (
    <div>
      <Navbar it={this.state.foods} tc= {this.totalCount()} tp={this.totalCost()}/>
      <Items it={this.state.foods} onIncrement={this.handleIncrement} onRemove={this.handleRemove}/>
    </div>
  );
  }
}

export default App;
