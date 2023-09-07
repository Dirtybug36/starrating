import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import RatingStar from "./RatingStar";
import "./index.css";
// import App from "./App";

const Test: React.FC = () => {
  const [testRating, setTestRating] = useState<number>(0);
  return (
    <div>
      <RatingStar
        onTestRating={setTestRating}
        colorClass="text-yellow-500"
        sizeClass="text-3xl"
      />
      <p> This movie has {testRating} rating</p>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Test />
    <RatingStar
      starRating={5}
      colorClass="text-white-500"
      sizeClass="text-2xl"
      message={["terrible", "bad", "okey", "good", "very good"]}
    />
    <RatingStar
      starRating={10}
      colorClass="text-blue-400"
      sizeClass="text-5xl"
      defaultRating={3}
    />
    <RatingStar
      starRating={3}
      colorClass="text-pink-200"
      sizeClass="text-5xl"
    />

    {/* <App /> */}
  </React.StrictMode>
);
