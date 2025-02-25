// import React, { useEffect,useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../../../../../actions";
// import { useNavigate } from "react-router-dom";
// import { ProgressBarParent } from "../../progress_bar/ProgressbarParent";

// const Home = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.data);
//   const [progressBarComplete,setProgressBarComplete]=useState(false);

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   useEffect(()=>{
//     if(!loading){
//       setTimeout(
//         ()=>{setProgressBarComplete(true)},500
//       )
//     }
//   },[loading])
//   // if (loading) return <div>Loading...</div>;
//   if (loading && progressBarComplete) {
//     return <ProgressBarParent />;
//   }
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <>
//       <p>Home Page</p>
//       {!loading&&!progressBarComplete?
//       <ul>
//       {data.map((item) => {
//         return <li key={item.id}>{item.title}</li>;
//       })}
//     </ul>:null}
      
//       <p>
//         Go to<button onClick={() => navigate("/about")}>About</button>page{" "}
//       </p>
//     </>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../../../actions";
import { useNavigate } from "react-router-dom";
import { ProgressBarParent } from "../../progress_bar/ProgressbarParent";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.data);

  const [loading, setLoading] = useState(false);  // To manage loading state
  const [progress, setProgress] = useState(0);    // To track progress bar status

  useEffect(() => {
    if (loading && progress < 100) {
      // Simulate progress bar completion by incrementing the progress
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval); // Stop progress when it reaches 100
            setLoading(false); // Stop loading after progress is complete
            return 100;
          }
          return prevProgress + 2; // Increment progress in small steps
        });
      }, 50); // 50ms to simulate smooth progress
    }
  }, [loading, progress]);

  useEffect(() => {
    if (!loading && progress === 100) {
      // Fetch data once progress reaches 100%
      dispatch(fetchData());
    }
  }, [loading, progress, dispatch]);

  const handleHomeButtonClick = () => {
    setLoading(true); // Start loading (progress bar)
    setProgress(0);   // Reset progress to 0
  };

  if (loading && progress < 100) {
    return (
      <div>
        {/* Show progress bar while loading */}
        <ProgressBarParent progress={progress} />
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <p>Home Page</p>

      {/* Show the data once loading is complete */}
      {!loading && progress === 100 && (
        <ul>
          {data.map((item) => {
            return<ul>
              <li key={item.id}>{item.title}</li>
            </ul> ;
          })}
        </ul>
      )}

      <button onClick={handleHomeButtonClick}>Go to Home</button>
      <p>
        Go to{" "}
        <button onClick={() => navigate("/about")}>About</button> page{" "}
      </p>
    </>
  );
};

export default Home;
