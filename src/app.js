import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header/header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProgressBar from "./component/progressbar/progressbar"
import HomePage from "./component/Home/home";

const App = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    erorrElement:<Error/>,
    children:[
      {
        path:"/",
        element:<HomePage/>,
      },
      {
        path:"/progressbar",
        element:<ProgressBar/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
