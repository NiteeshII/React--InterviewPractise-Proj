import React, { useState } from "react";

function Folder({ explorer, handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [showinput, setShowinput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowinput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      e.stopPropagation();
      // AddLogic to
      handleInsertNode(explorer.id, e.target.value, showinput.isFolder);
      setShowinput({ ...showinput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "10px" }}>
        <div
          className="folder-container"
          onClick={() => setExpand((expand) => !expand)}
        >
          <span>📂 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showinput.visible && (
            <div>
              <span>{showinput.isFolder ? "📂" : "📄"}</span>
              <input
                type="text"
                className="inputcontainer__input"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowinput({ ...showinput, visible: false })}
              />
            </div>
          )}
          {explorer?.items.map((item) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={item}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}

export default Folder;
