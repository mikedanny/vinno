function randomString(len, charSet) {
			charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			var randomString = '';
			for (var i = 0; i < len; i++) {
				var randomPoz = Math.floor(Math.random() * charSet.length);
				randomString += charSet.substring(randomPoz,randomPoz+1);
			}
			return randomString;
		}

function base64ImgSrc(base64EncodedImg) {

	return 'data:image/png;base64, ' + base64EncodedImg;
}

function getTagsKey(url) {

	return url + '#tags';
}

function getTextKey(url) {

	return url + '#text';
}
function getImagesKey(url) {

	return url + '#images';
}

// returns the json map of tags, indexed by their id
function getTags(url) {

	return JSON.parse(localStorage.getItem(getTagsKey(url))) || {};
	
}
// returns a tag by id
function getTag(url, id) {
	var tags = JSON.parse(localStorage.getItem(getTagsKey(url))) || {};
	return tags[id];
	
}
// returns the json text
function getText(url) {

	return localStorage.getItem(getTextKey(url));

}
// returns the json map of images encoded in base64 indexed by their id
function getImages(url) {

	return JSON.parse(localStorage.getItem(getImagesKey(url))) || {};

}
function getImage(url, id) {
	var imgs = JSON.parse(localStorage.getItem(getImagesKey(url))) || {};
	return imgs[id];

}

function addTag(url, tag) {
	
	var tags = getTags(url) || {}; // a map of tags indexed by their id
	do {
		var id = "tag-" + randomString(5);
	} while (tags.hasOwnProperty(id)); 
	tags[id] = tag;
	localStorage.setItem(getTagsKey(url), JSON.stringify(tags));
	
	return id;
	
}
function addImage(url, img) {
	
	var imgs = getImages(url) || {}; // a map of images indexed by their id
	do {
		var id = "img-" + randomString(5);
	} while (imgs.hasOwnProperty(id)); 
	imgs[id] = img;
	localStorage.setItem(getImagesKey(url), JSON.stringify(imgs));
	
	return id;
	
}

function setText(url, text) {
	
	localStorage.setItem(getTextKey(url), text);
}

function removeTag(url, tagId) {
	
	var tags = getTags(url);
	if (tags != null) {
		delete tags[tagId];
		localStorage.setItem(getTagsKey(url), JSON.stringify(tags));
	}
}

function removeImage(url, imgId) {
	
	var imgs = getImages(url);
	if (imgs != null) {
		delete imgs[imgId];
		localStorage.setItem(getImagesKey(url), JSON.stringify(imgs));
	}
}

function removeText(url) {
	
	localStorage.removeItem(getTextKey(url));
}