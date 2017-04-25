var title;
var author;
function getQuote(){
  var rand = Math.floor(Math.random() * 100);
  $.getJSON("https://www.reddit.com/r/showerthoughts/.json?limit=100&after=t3_10omtd/", function retrieve(data) {
       $.each(data.data.children.slice(0, 100), function (i,post) {
         if(i === rand){
           title = post.data.title;
           author = post.data.author;
           $("#quote").html( '<span style = "font-size: 20px"><br>"' + title
           + '"</span><br><br><em> - ' + author + '</em>');
         }
        }
      )
    }
  );
}
getQuote();
function tweet(){
  var address = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(title + ' \n' + author)
  window.open(address, '_blank');
}
