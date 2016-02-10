var tagBtn = $("#tag-btn"),
		tagDetails = $("#tag-details"),
		tagList = $("#tag-list"),
		textBtn = $("#text-btn"),
		stickerBtn = $("#sticker-btn"),
		tagBackBtn = $("#tag-back-btn"),
		tagAddBtn = $("#tag-add-btn"),
		tagText = $('#tag-text')



tagBtn.on('click', function() {
	clearTagList();
  tagDetails.show(0, populateTagList());
  textBtn.hide();
  stickerBtn.hide();
});

tagBackBtn.on('click', function() {
	tagDetails.hide();
	textBtn.show();
  stickerBtn.show();
  clearTagList();
});

tagAddBtn.on('click', function() {
	var tag = tagText.val();
	var tagId = addTag(Url, tag);
	addTagView(tagId, tag);
	tagText.val('');
});

function clearTagList() {
	tagList.children().remove();
}
function populateTagList() {
	var tags = getTags(Url);

  for (var tagId in tags) {
  	if (tags.hasOwnProperty(tagId)) {
  		var tag = tags[tagId];
  		addTagView(tagId, tag);
  	}
  }
}

function addTagView(tagId, tag){
	var newTag = $('<span>' + tag + '</span>');
	newTag.addClass('bg-info tag');
	newTag.on('click', function() {
		removeTag(Url, tagId);
		newTag.remove();
	});
	tagList.append(newTag)
}

var Url = window.location.href;

