import React,{useState} from "react";

export const ItemListManager=()=>{

 const [items,setItems]=useState([]);
 const [input,setInput]=useState("");


 const handleOnChange=(event)=>{
    setInput(event.target.value);
 }

 const handleItemAdded=()=>{
    if(!input) return ;
    setItems([...items,input]);
    setInput("");
 };

    return <>
    <h5>Item List Manager</h5>
    <input type="text" name="name" value={input} onChange={handleOnChange}/>
    <button onClick={handleItemAdded}>Enter</button>
    {items.map((el)=>{
        return <div>
            {el}
        </div>
    })}
    </>
};