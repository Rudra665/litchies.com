import React, { useState, useEffect } from 'react';

function AssetLinks() {
  const [assetLinks, setAssetLinks] = useState('');

  useEffect(() => {
    fetch('/.well-known/assetlinks.json')
      .then(response => response.text())
      .then(data => setAssetLinks(data));
  }, []);

  return (
    <div>
      <h1>Displaying Asset Links JSON on Website</h1>
      <div>{assetLinks}</div>
    </div>
  );
}

export default AssetLinks;