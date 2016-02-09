$("#tag-btn").click(function() {
  $("#tag-details").show();
  $("#text-btn").hide();
  $("#sticker-btn").hide();
  var tags = getTags(Url);

  for (var tagId in tags) {
  	if (tags.hasOwnProperty(tagId)) {
  		var tag = tags[tagId];
  		addTagView(tagId, tag);
  	}
  }
});

$("#tag-back").click(function() {
	$("#tag-details").hide();
	$("#text-btn").show();
  $("#sticker-btn").show();
  $("#tag-list").children().remove();
});

$("#tag-add").click(function() {
	var tag = $('#tag-text').val();
	var tagId = addTag(Url, tag);
	addTagView(tagId, tag);
	$('#tag-text').val('');
});

function addTagView(tagId, tag) {
	$("#tag-list").append("<span class=\"bg-info tag\" onclick=\"deleteTagView('"+tagId+"')\" id=\""+tagId+"\">"+tag+"</span>");
}

function deleteTagView(tagId) {
	removeTag(Url, tagId);
	$("#"+tagId).remove();
}

//TODO update with proper value
var Url = "dummy"

