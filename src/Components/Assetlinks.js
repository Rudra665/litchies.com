import React, { useState, useEffect } from 'react';

function AssetLinks() {
  const [assetLinks, setAssetLinks] = useState('');

  useEffect(() => {
    fetch('https://drive.google.com/uc?id=1YC4hiVhW54nTcFVTB0aOLcxIJhXrBbC8')
      .then(response => response.json())
      .then(data => setAssetLinks(data));
  }, []);

  return (
    <div>
      <pre>{assetLinks}</pre>
    </div>
  );
}

export default AssetLinks;