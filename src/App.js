import "./App.css";
import React, { useState } from "react";
import LoveForm from "./components/LoveForm";
import CouplesList from "./components/CouplesList";

function App() {
  const [couples, setCouples] = useState([]);

  const addCouple = (fname, lname) => {
    let id = 1;
    if (couples.length > 0) {
      id = couples[0].id + 1;
    }
    let couple = { id: id, fname: fname, lname: lname };
    let newCouples = [couple, ...couples];
    setCouples(newCouples);
  };
  return (
    <div>
      <h1 className="text-center mt-4">
        Is It A <span className="text-danger">Match</span>
      </h1>
      <LoveForm addCouple={addCouple} />
      {couples.map((couple) => {
        return <CouplesList couple={couple} key={couple.id} />;
      })}
    </div>
  );
}

export default App;
