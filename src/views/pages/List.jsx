import React, { useState } from "react";

const List = ({ list, addNode, deleteNode }) => {
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
                height={14}
                width={14}
                className="action-btn-add icon"
                onClick={() => addNode(node?.id)}
              />
            )}
            <img
              src="https://icon-library.com/images/delete-icon-image/delete-icon-image-15.jpg"
              height={14}
              width={14}
              className="action-btn-delete icon"
              onClick={() => deleteNode(node?.id)}
            />
          </span>
          {isExpanded?.[node.name] && node?.children && (
            <List
              list={node?.children}
              addNode={addNode}
              deleteNode={deleteNode}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default List;
