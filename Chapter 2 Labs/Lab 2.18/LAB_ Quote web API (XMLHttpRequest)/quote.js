window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   let xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";
   let url = new URL("https://wp.zybooks.com/quotes.php")
   url.searchParams.set('topic', topic);
   url.searchParams.set('count', count);
   xhr.open("GET", url)
   xhr.send();

}

function responseReceivedHandler() {
   if(this.status === 200) {
      let quote = this.response;

      let html = "";
      for(let i = 0; i < quote.length; i++) {
         html += `<li>${quote[i].quote}</li>`;  
      }
      document.getElementById("quotes").innerHTML = html;                                                                                                                                                     
   }
}