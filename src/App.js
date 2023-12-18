import React from 'react';
import FolderStructure from './FolderStructure';
import LazyLoadingImages from './LazyLoadingImages';

const App = () => {
  // Example JSON data for Task 1
  const folderData = {
    Documents: ['Document1.jpg', 'Document2.jpg', 'Document3.jpg'],
    Desktop: ['Screenshot1.jpg', 'videopal.mp4'],
    Downloads: {
      Drivers: ['Printerdriver.dmg', 'cameradriver.dmg'],
      Applications: ['Webstorm.dmg', 'Pycharm.dmg', 'FileZila.dmg', 'Mattermost.dmg'],
      'chromedriver.dmg': null,
    },
  };

  return (
    <div>
      <FolderStructure data={folderData} />

      <h1>Lazy Loading Images</h1>
      <LazyLoadingImages />
    </div>
  );
};

export default App;
