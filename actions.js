//src/actions.js

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_DATA_FAILURE", payload: error });
      });
  };
};


export const trialFetch=()=>{
  return (dispatch)=>{
    dispatch({type:"FETCH_TRIAL_REQUEST"});

    fetch("https://fakestoreapi.com/products/category/jewelery").then ((response)=>response.json()).then((datas)=>{
      dispatch({type:"FETCH_TRIAL_SUCCESS",payload:datas});
    })
    .catch((error)=>{
      dispatch({type:"FETCH_TRIAL_FAILURE", payload:error});
    })
  }
};
