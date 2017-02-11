$.ajax({
  url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCApiTj5VadJOkbm1ogWUUTkJbKdNq3-WE&channelId=UCI7JcZ2PqARtQZvJatpYAiA&part=snippet,id&order=date&maxResults=3"
}).done(function(result) {
  $('.video-loader').hide();
  console.log();
  var template = '';

  result.items.map(function(item) {
    template += getIFrameVideo(item.id.videoId);
  });

  $('.video-area').html(template);
});

function getIFrameVideo(id){
  return '<div class="col-sm-4"><iframe width="100%" height="300" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
}