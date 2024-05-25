"use client";
import { AArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [mydata, setMydata] = useState(null);

  useEffect(() => {
    const dummyFunction = async () => {
      const res = await fetch("api/test");

      const dummydata = await res.json();
      setMydata(dummydata);
      
    };
    dummyFunction();
  }, []);
  return (
    <div>
      <h1> testing</h1>
      {mydata !== null && <p>{mydata.name} </p>}
    </div>
  );
};

export default Test;
