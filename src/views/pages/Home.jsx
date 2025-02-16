import React, { useState } from "react";
import List from "./List";
import json from "../../../mock/data.json";

const Home = () => {
  const [data, setData] = useState(json);

  const addFolder = (parentId) => {
    const name = prompt("Enter name");
    const file = prompt("Folder ?");
    const isFolder = file === "yes" ? true : false;

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Math.random(),
                name,
                isFolder,
                children: [],
              },
            ],
          };
        }

        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }
        return node;
      });
    };

    setData((prev) => updateTree(prev));
  };

  return <List list={data} addFolder={addFolder} />;
};

export default Home;
