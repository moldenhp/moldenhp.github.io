var apikey = "b79606f1042e40b483c8690d72b21ca3";
var apikey2 = "ee90e3a211a046d8ba9c98abf1f93794";
var apikey3 = "b79606f1042e40b483c8690d72b21ca3"

document.getElementById("word").addEventListener('click', function (event){
	var req= new XMLHttpRequest();
	var searchWord = document.getElementById("textBox").value;
	req.open("GET","https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchWord +"&api-key="+apikey, true);
	req.addEventListener("load", function(){
		if(req.status >=200 && req.status < 400){
			var response = JSON.parse(req.responseText);
			console.log(response);
			
			function gotData(response){
				var articles = response.response.docs;
				
				for (var i = 0; i < articles.length; i++){
					console.log(articles[i].headline.main);
					var bigT = document.createElement("h1"); // create h1 element 
					var textOfbigT = document.createTextNode(articles[i].headline.main);
					bigT.appendChild(textOfbigT);
					document.body.appendChild(bigT);
					
					var articleData = document.createElement("p"); // create p element
					var hello = document.createTextNode(articles[i].snippet);
					articleData.appendChild(hello);
					document.body.appendChild(articleData);
				} 
			}
			
			//gotData(response);  
		}
		else
			console.log("Error in network request: " + request.statusText);
		})
					
	req.send(null);
	event.preventDefault();
})

