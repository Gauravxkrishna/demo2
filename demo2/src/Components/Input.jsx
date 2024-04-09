import { useState } from "react";
import "../CSS/Input.css";
let Input=(props)=>{
let [row,setRow ]=  useState( {
    brand:"",
    name:"",
    size:"",
    price:"",
    image:""
  });
  
let onIdChangeHandler=(event)=>{
    setRow({...row,item_id:event.target.value})
    console.log(row);
}
let onBrandChangeHandler=(event)=>{
    setRow({...row,brand:event.target.value})
    console.log(row);
}
let onImageChangeHandler=(event)=>{
    setRow({...row,image:event.target.value})
    console.log(row);
}
let onSizeChangeHandler=(event)=>{
    setRow({...row,size:event.target.value})
    console.log(row);
}
let onPriceChangeHandler=(event)=>{
    setRow({...row,price:event.target.value})
    console.log(row);
}

let onNameChangeHandler=(event)=>{
    setRow({...row,name:event.target.value})
    console.log(row);
}
return <div className="form">
    <h1>Add Employee</h1>
    
<input type="text" onChange={onIdChangeHandler}  placeholder="Item ID"></input>

<input type="text" onChange={onNameChangeHandler}  placeholder="Name"></input>
<input type="text" onChange={onBrandChangeHandler}  placeholder="Brand" ></input>
<input type="text" onChange={onImageChangeHandler}  placeholder="Image"></input>
<input type="text" onChange={onSizeChangeHandler}  placeholder="Size"></input>
<input type="text" onChange={onPriceChangeHandler}  placeholder="Price"></input>

<button onClick={()=>props.updateProps(row)}>Add Card</button>
</div>

    
}

export default Input;