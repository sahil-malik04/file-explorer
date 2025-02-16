import React, { useState } from "react";
import List from "./List";
import json from "../../../mock/data.json";

const Home = () => {
  const [data, setData] = useState(json);

  const addNode = (parentId) => {
    const name = prompt("Enter name");
    const file = prompt("Folder ?");
    const isFolder = file === "yes" ? true : false;
    if (name === null || file === null) return;

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
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

  const deleteNode = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
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

  return <List list={data} addNode={addNode} deleteNode={deleteNode} />;
};

export default Home;
