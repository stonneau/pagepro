(function () {
	'use strict';

var videoload = document.getElementById('load_video');

  videoload.addEventListener('click', function () { 
	var e = document.getElementById("selectvideo");
	var strUser = e.options[e.selectedIndex].text;
   window.location.href = "http://stevetonneau.fr/shokata/index.php?name="+strUser;
  }, false);
 })();
