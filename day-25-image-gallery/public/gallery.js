var imageFull = document.querySelector('#image-full-size');
var description = document.querySelector('#description');
var thumbnailList = document.querySelector('#thumbnail-list');
var fullSizeBox = document.querySelector('#full-size-box');
var thumbnailTemplate = document.querySelector('#thumbnail-template').innerHTML;
var fullSizeTemplate = document.querySelector('#full-size-template').innerHTML;

var promise = $.ajax({
  url: '/api/pics'
});

var galleryData = [];
promise.done(function(data) {
  galleryData = data.pictures;
  console.log(galleryData);

  thumbnailListHtml = '';
  galleryData.forEach(function(item) {
    thumbnailListHtml += Mustache.render(thumbnailTemplate, {
      index: galleryData.indexOf(item),
      thumbnail: item.thumbnail
    });
  });
  thumbnailList.innerHTML = thumbnailListHtml;
});

thumbnailList.addEventListener('click', function(evt) {
  var previouslySelected = document.querySelector('.selected');
  if (previouslySelected !== null) {
    previouslySelected.classList.remove('selected');
  }

  if (evt.target.tagName === 'IMG') {
    var index = evt.target.getAttribute('data-index');
    var picInfo = galleryData[index];
    fullSizeBox.innerHTML = Mustache.render(fullSizeTemplate, picInfo);
    evt.target.classList.add('selected');
  }
});
