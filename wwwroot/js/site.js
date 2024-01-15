function fnLoadImage() {
    var path = window.location.href+".html";
	$('.nav-item').each(function () {
		var item = this;
		$(item).find('a').removeClass('btn btn-primary');
		$(item).find('a').addClass('btn btn-secondary');
		$(item).find('a').css('color', 'white');
    });
    $('.nav-item').each(function () {
        var item = this;
        var val = $(item).find('a').attr('href');
		val = val.replace('.\\','');
        if (path.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) != -1) {
			$(item).find('a').removeClass('btn btn-secondary');
            $(item).find('a').addClass('btn btn-primary');
			return;
        }
    });
}

let current = -1;
function showNextImage() {
    var len = model.length;
    for (var i = 0; i < len; i++) {
        var name = $('#zoomImg').prop('src');
        var namesrc = decodeURI(name);
        var src = model[i].imageURL;
		var fnsrc = namesrc.substring(namesrc.lastIndexOf('/')+1);
		var fsrc = src.substring(src.lastIndexOf('/')+1);
		
        if (fnsrc.toLocaleLowerCase().indexOf(fsrc.toLocaleLowerCase()) != -1) {
            current = i;
            var isrc = getNextImage(len);
            $('#zoomImg').prop('src', isrc);
            return;
        }
    }
}

function getNextImage(len) {
    if (current + 1 > len - 1) {
        current = 0;
    }
    current = current + 1;
    return model[current].imageURL;
}

window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator && document.URL.split(":")[0] !== "file") {
      navigator.serviceWorker.register("./serviceworker.js");
    }
  }