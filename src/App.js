import "./App.css";
import Folder from "./Component/Folder";
import explorer from "./Data/fileData";
import useTraverse from "./Hooks/useTraverse";
import React, { useState } from "react";
function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverse();

  const handleInsertNode = (formid, item, isFolder) => {
    const finalTree = insertNode(explorerData, formid, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default App;
