function responseReceivedHandler() {
    /* Successful request:
       {
          "success": true,
          "todos": [ '...', '...', ... ]
       }
 
       Unsuccessful request:
       {
          "success": false,
          "error": "..."
       } */
 
    if(this.response) 
    {
       console.log("todo"[0]);
    } else {
       console.log(t);
    }
 
 }
 
 let xhr = new XMLHttpRequest();
 xhr.responseType = "json";
 xhr.addEventListener("load", responseReceivedHandler);
 xhr.open("GET", "https://wp.zybooks.com/todos.php?day=Monday");
 xhr.send();