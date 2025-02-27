import React from "react";
import { useNavigate } from "react-router-dom";
import HelloWorld from "../../beginner_level_tasks/HelloWorld";
import IncrementCounter from "../../beginner_level_tasks/IncrementCounter";
import { SearchableDropDownList } from "../../beginner_level_tasks/SearchableDropDownList";


const About=()=>{
    const navigate = useNavigate();
    return <>
    <p>About Page</p>
    <p>Beginner Tasks</p>
    <ol>
        <li><HelloWorld/></li>
        <li><IncrementCounter/></li>
        <li><SearchableDropDownList/></li>
    </ol>
    <p>Go to<button onClick={()=>navigate('/contact')}>Contact</button>page </p>
    </>
};
export default About;