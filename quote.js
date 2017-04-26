var title;
var author;
var quotes = [];
function getData(){
  $.getJSON("https://www.reddit.com/r/showerthoughts/.json?limit=100&after=t3_10omtd/", function retrieve(data) {
       $.each(data.data.children.slice(0, 100), function (i,post) {
         quotes.push([post.data.title,post.data.author]);
       });
       $("#quote").html( '<span style = "font-size: 20px"><br>"' + quotes[0][0]
       + '"</span><br><br><em> - ' + quotes[0][1] + '</em>');
  });
}
function getQuote(){
  var rand = Math.floor(Math.random() * 100);
  for(var i=0;i<quotes.length;i++){
    if(i === rand){
      title = quotes[i][0];
      author = quotes[i][1];
      $("#quote").html( '<span style = "font-size: 20px"><br>"' + title
      + '"</span><br><br><em> - ' + author + '</em>');
    }
  }
}
function tweet(){
  var address = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(title + ' \n' + author)
  window.open(address, '_blank');
}
getData();
getQuote();
