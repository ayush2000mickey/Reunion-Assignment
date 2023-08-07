import React, { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeContent from "../components/HomeContent";
import { getDummyData } from "../DummyData/DummyData";

const Home = () => {
  const [dummyProperties, setDummyProperties] = useState([]);

  useEffect(() => {
    setDummyProperties(getDummyData());
  }, []);
  return (
    <>
      <HomeHeader />
      <HomeContent dummyProperties={dummyProperties} />
    </>
  );
};

export default Home;
