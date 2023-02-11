import React from 'react';

const jsonData = {
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.litchies",
    "sha256_cert_fingerprints": [
      "EB:79:C2:00:73:22:8F:AE:67:05:A7:E5:20:C1:FD:75:5F:30:8E:CF:52:FA:A0:59:A2:EB:4D:52:90:09:2E:58"
    ]
  }
};

const JSONDisplay = () => {
  return (
    <pre>
      {JSON.stringify(jsonData, null, 2)}
    </pre>
  );
};

export default JSONDisplay;