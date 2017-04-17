var imageFull = document.querySelector('#image-full-size');
var description = document.querySelector('#description');
var thumbailList = document.querySelector('#thumbnail-list');

var promise = $.ajax({
  url: '/api/pics'
});

promise.done(function(data) {
  console.log('got the data', data);
  putOnPage(data);
});


function putOnPage(arr) {
  var thumbnailTemplate = document.querySelector('#thumbnail-template').innerHTML;

  console.log(thumbnailTemplate);

  var totalHtml = '';

  for (var i=0; i<arr.pictures.length; i++) {
    console.log(arr.pictures[i]);

    var html = Mustache.render(thumbnailTemplate, {
      index: i,
      fullSize: arr.pictures[i].fullSize,
      description: arr.pictures[i].description,
      thumbnail: arr.pictures[i].thumbnail
    });
    totalHtml += html;
  }

  thumbailList.innerHTML = totalHtml;
}
