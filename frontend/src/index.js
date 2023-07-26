import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/homePage";
import AboutPage from "./routes/aboutPage";
import ArithmeticsPage from "./routes/arithmeticsPage";
import ErrorPage from "./routes/errorPage";
import BranchPage from "./routes/branchPage";
import QuizPage from "./routes/quizPage";
import MoreInfoPage from "./routes/moreInfoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "arithmetics",
        element: <ArithmeticsPage />,
      },
      {
        path: "branch",
        element: <BranchPage />,
      },
      {
        path: "quiz",
        element: <QuizPage />,
      },
      {
        path: "more-info",
        element: <MoreInfoPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
