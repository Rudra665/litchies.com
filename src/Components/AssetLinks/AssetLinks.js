export default function GetFile() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
        
    };
    
    fetch("https://v1.nocodeapi.com/rudra665/drive/rGnCafmuYFzhJVDH/getFile?fileId=1YC4hiVhW54nTcFVTB0aOLcxIJhXrBbC8", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }
  
  GetFile();