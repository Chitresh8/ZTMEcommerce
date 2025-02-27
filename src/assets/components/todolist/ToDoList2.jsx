// 1. Create a Simple Todo Application in React
// Problem: Build a simple "Todo" application with React where users can add, remove, and mark tasks as completed. Implement basic state management without using Redux.

// Answer:

// Key Concepts:
// React Hooks (useState): Used for state management.
// List Rendering: Rendering a list of tasks and dynamically updating their state.
// Event Handling: Handling clicks for adding, toggling completion, and removing tasks (In TodoApp component).

import React,{useState} from "react";

export const ToDoList2 = () => {
    const[todo,setTodo]=useState("");
    const [todoData,setTodoData]=useState([]);
    const [updateIndex,setUpdateIndex]=useState(null);

    const todoChangeHandler=(e)=>{setTodo(e.target.value);};

    const enterClickHandler=()=>{
        if(!todo) return;
        if(updateIndex === null){
            setTodoData([...todoData,todo]);
        }
        else{
            const updatedInfo=[...todoData];
            updatedInfo[updateIndex]=todo;
            setTodoData(updatedInfo);
            setUpdateIndex(null);
        }
        setTodo("");
    };

    const updateClickHandler=(i)=>{
        setTodo(todoData[i]);
        setUpdateIndex(i);
    };

    const deleteClickHandler=(i)=>{
        const updatedData=todoData.filter((_,index)=> index !==i);
        setTodoData(updatedData);

    };


  return <>
  <p>To do List</p> 
  <input type='text' value={todo} onChange={todoChangeHandler}/>
  <button onClick={enterClickHandler}>Enter</button>
  {todoData.map((el,i)=>{
    return <div key={el}>
        <p >{el}</p>
        <button onClick={()=>updateClickHandler(i)}>Update</button>
        <button onClick={()=>deleteClickHandler(i)}>Delete</button>
    </div>
  })}</>;
};


/////////////


