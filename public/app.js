var app = function(){
     var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
     makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
     var request = new XMLHttpRequest();
     request.open("GET", url);
     request.onload = callback;
     request.send();
}

var allAlbums = []

var requestComplete = function(){
     if (this.status !==200) return;
     var jsonString = this.responseText;
     var objects = JSON.parse(jsonString);
     for (item of objects['albums']['items']){
          allAlbums.push(item);
     };
     populateList(allAlbums);
     console.log(allAlbums);
}

var populateList = function(albumList){
     var albums = document.querySelector('#albums'); 
     for (eachAlbum of allAlbums) {
          var pTag = document.createElement('p');
          pTag.innerText = eachAlbum.name;
          albums.appendChild(pTag);
     }
}

window.onload = app;