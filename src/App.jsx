import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Person1 from "./assets/components/hoc/Person1";
import Person2 from "./assets/components/hoc/Person2";
import { GetAPI } from "./assets/components/api_services/GetAPI";
import { TodoList } from "./assets/components/todolist/TodoList";
import { GetApiPagination } from "./assets/components/api_services/GetApiPagination";
import { Login } from "./assets/components/login/Login";
import SearchWithSuggestions from "./assets/components/searchWithSuggestions";
import { ItemListManager } from "./assets/components/item_list_manager/ItemListManager";
import { Sildes } from "./assets/components/slide_show/slides";
import { SLIDES_DATA } from "./assets/components/slide_show/constants";
import { UseFetchHookApi } from "./assets/components/Custom/Hooks/useFetchHookApi";
import { ProgressBarParent } from "./assets/components/progress_bar/ProgressbarParent";

const Home = lazy(() => import("./assets/components/LazyLoading/Home/Home"));
const About = lazy(() => import("./assets/components/LazyLoading/About/About"));
const Contact_Us = lazy(() =>
  import("./assets/components/LazyLoading/Contact Us/Contactus")
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Simulate a delay for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <marquee>
        <h1>Practice Projects,Tasks and Functionality</h1>
      </marquee>
      <div className="card">
        <div className="card-item">
          <h5>HOC (Higher Order Component) </h5>
          <Person1 />
          <Person2 />
        </div>
        <div className="card-item">
          {/* <h5>Data fetching through an API</h5> */}
          {/* <GetAPI/> */}
          {/* <GetApiPagination/> */}
        </div>
        <div className="card-item">
          <h5>To-Do-List</h5> <TodoList />
          <Login />
          <SearchWithSuggestions />
        </div>
        <div className="card-item">
          <p>Hacker Rank Problems</p>
          <ItemListManager />
          <Sildes slides={SLIDES_DATA} />
        </div>
        <UseFetchHookApi />
        <ProgressBarParent />
        <div className="card-item">
          <Router>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Suspense fallback={loading ? <ProgressBarParent /> : null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact_Us />} />
              </Routes>
            </Suspense>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
