import React, { useEffect } from "react";
import "./childModal.css";
import { useSelector, useDispatch } from "react-redux";
import { trialFetch } from "../../../../../actions";

export const ChildModal = (props) => {
  if (!props.isModalOpenState) return null;
  const dispatch = useDispatch();
  const { datas, error } = useSelector((state) => state.datas);

  useEffect(() => {
    dispatch(trialFetch());
  }, [dispatch]);

  const destructure = {
    name: "React",
    age: 18,
    designation: [
      { a: 20, b: 20 },
      { a: 30, b: 50 },
    ],
  };

  //   let { name, age, designation } = destructure;
  //   let designationSpread={...designation[1]}; this also we can use
  //   let { b } = designation[1];

  //or

  let { designation } = destructure;
  let [{ b }] = designation;
  console.log("Dest:-", designation);
  //   console.log("Dest2:-",designationSpread);
  console.log("Dest3:-", `b:${b}`);

  //Another method to destructure
  // const {designation}=destructure;
  // const [{a}]=designation;

  //Reverse a string with Inbuilt function
  let practice = "PRACTICE";

  function reverseStr(practice) {
    return practice.split("").reverse().join(" ");
  }
  console.log(reverseStr(practice));

  //Reverse a string without inbilt function

  let practice2 = "Practice";

  //   function reverse(practice2) {
  //     let str = "";
  //     for (let i = practice2.length - 1; i >= 0; i--) {
  //       str += practice2[i];
  //     }
  //     return str;
  //   }

  //   let strOutput = reverse(practice2);
  //   console.log("Reverse string without inbuilt function", strOutput);

  //Sorting an Array (e.g., numbers)
  let arrSort = [1, 2, 5, 4, 3, 6, 7, 8, 9, 3, 0];
  let ascSort = [...new Set(arrSort)];
  console.log("ASC", ascSort);

  //Sorting an Array of Strings
  let arr = ["banana", "apple", "cherry", "date"];
  arr.sort(); // Sorts alphabetically by default
  console.log(arr); // ['apple', 'banana', 'cherry', 'date']

  let arr1 = [
    { name: "John", age: 25 },
    { name: "Alice", age: 22 },
    { name: "Bob", age: 30 },
  ];

  // Sort by age
  arr1.sort((a, b) => a.age - b.age); // Ascending order by age
  arr1.sort((a, b) => b.age - a.age); //Descending order by age
  arr1.sort((a, b) => a.name.localeCompare(b.name)); //Ascending order by taking Alphabet starting
  arr1.sort((a, b) => b.name.localeCompare(a.name)); // Descending order by taking Alphabet starting
  arr1.sort((a, b) => a.name.length - b.name.length); //Ascending order by taking name length
  arr1.sort((a, b) => b.name.length - a.name.length); //Descending order by taking name length
  console.log(arr1);

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-btn" onClick={props.closeModal}>
            X
          </button>
          <div className="modal-body">{props.children}</div>
          <div className='scrollable-content'>
            <ul>
              {datas.map((el) => {
                return (
                  <li key={el.id} className="modal-item" >
                    <img src={el.image} alt={el.image} className="modal-image"/>
                    <p>{el.title}</p>
                  </li>
                );
              })}
            </ul>
            </div>
        </div>
      </div>
    </>
  );
};
