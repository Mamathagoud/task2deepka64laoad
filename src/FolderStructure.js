import React, { useState } from 'react';

const FolderStructure = ({ data }) => {
  const [expandedFolders, setExpandedFolders] = useState([]);

  const toggleFolder = (folder) => {
    if (expandedFolders.includes(folder)) {
      setExpandedFolders(expandedFolders.filter((f) => f !== folder));
    } else {
      setExpandedFolders([...expandedFolders, folder]);
    }
  };

  const renderNode = (node, depth) => {
    if (Array.isArray(node)) {
      return (
        <ul>
          {node.map((item, index) => (
            <li key={index}>{renderNode(item, depth)}</li>
          ))}
        </ul>
      );
    } else if (typeof node === 'object') {
      const folderName = Object.keys(node)[0];
      const isExpanded = expandedFolders.includes(folderName);

      return (
        <div>
          <div
            style={{ marginLeft: `${depth * 50}px`, cursor: 'pointer' }}
            onClick={() => toggleFolder(folderName)}
          >
            {isExpanded ? '🔽' : '▶️'} {folderName}
          </div>
          {isExpanded && renderNode(node[folderName], depth + 1)}
        </div>
      );
    } else {
      return <div style={{ marginLeft: `${depth * 50}px` }}>{node}</div>;
    }
  };

  return <div>{renderNode(data, 0)}</div>;
};

export default FolderStructure;
