import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const colors =  ["red","blue","yellow","aquamarine","cadetblue","cornflowerblue","darkmagenta","darkorchid","fuchsia","gold","greenyellow","hotpink","lightblue","lightcoral","yellowgreen","blueviolet","aqua","cadetblue","brown","chartreuse","chocolate","coral","crimson"]; 
    const fonts = ["Gill Sans","Trebuchet MS","Marker Felt, fantasy","Apple Chancery, cursive","Bradley Hand, cursive","Chalkduster, fantasy","Stencil Std, fantasy	","Times New Roman","Tahoma","Nanum Gothic","Segoe UI","Jazz LET, fantasy","OCR A Std, monospace","DejaVu Sans Mono","Luminari"]; 
    return (
      <div className="box" style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)], fontFamily: fonts[Math.floor(Math.random() * fonts.length)]}}>
        <div> 
          <h3>Box Randon Color, Recargue la página para cambiar el color de la caja.</h3>
          <h4><i>Box Randon Color, Recharge the page to change the color of the box.</i></h4>  
        </div>
      </div>
    );
  }
}

export default App;
