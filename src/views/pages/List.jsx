import React, { useState } from "react";

const List = ({ list, addFolder }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <>
      {list?.map((node) => (
        <div className="container" key={node?.id}>
          <span
            className="icon"
            onClick={() =>
              setIsExpanded((prev) => ({
                ...prev,
                [node.name]: !prev[node.name],
              }))
            }
          >
            {" "}
            {node?.isFolder ? (isExpanded?.[node.name] ? "-" : "+") : ""}
          </span>
          <span>
            {" "}
            {node?.isFolder ? "📂" : "🗃️"} {node?.name}
            {node?.isFolder && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/9238/9238208.png"
                height={15}
                width={15}
                className="add-folder icon"
                onClick={() => addFolder(node?.id)}
              />
            )}
          </span>
          {isExpanded?.[node.name] && node?.children && (
            <List list={node?.children} addFolder={addFolder}/>
          )}
        </div>
      ))}
    </>
  );
};

export default List;
