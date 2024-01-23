import React from "react";

function useTraverse(props) {
  const insertNode = function (tree, Folderid, item, isFolder) {
    console.log(tree, Folderid);
    if (tree.id === Folderid && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, Folderid, item, isFolder);
    });

    console.log(tree, latestNode, Folderid);

    return { ...tree, items: latestNode };
  };

  return { insertNode };
}

export default useTraverse;
