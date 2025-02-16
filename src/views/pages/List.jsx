import React, { useState } from "react";

const List = ({ list }) => {
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
          </span>
          {isExpanded?.[node.name] && node?.children && (
            <List list={node?.children} />
          )}
        </div>
      ))}
    </>
  );
};

export default List;
