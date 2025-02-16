import React, { useState } from "react";
import List from "./List";
import json from "../../../mock/data.json";

const Home = () => {
  const [data, setData] = useState(json);
  return <List list={data} />;
};

export default Home;
