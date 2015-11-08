(function () {
	'use strict';

	if (typeof XMLHttpRequest === "undefined") {
    XMLHttpRequest = function () {
        try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
        catch (e) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
        catch (e) {}
        try { return new ActiveXObject("Microsoft.XMLHTTP"); }
        catch (e) {}
        throw new Error("This browser does not support XMLHttpRequest.");
    };
}

function readBOX() {
    function reqListener () {
		document.getElementById('textbox').value = this.responseText;
    }
	var textbox = document.getElementById('loadsubs');
    var txtinput = textbox.value;
    var filePath = "http://stevetonneau.fr/shokata/subtitles/vtt/" + txtinput + ".vtt";

    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", filePath, true);
    oReq.send();
};

window.onerror = function(error, url, line) {
	alert(error + url + line);
};

function updateTrack() {
	var track = document.createElement("track"); 
	var vid = document.getElementById("video");
	track.kind = "captions"; 
	track.label = "Test"; 
	track.srclang = "en"; 
	var tinput = document.getElementById('loadsubs').value;
	track.src = "http://stevetonneau.fr/shokata/subtitles/vtt/" + tinput + ".vtt";
    track.addEventListener("load", function() { 
      for (var i = 0; i < vid.textTracks.length; i++)
      {
		  vid.textTracks[i].mode = "hidden";
	  }
      this.mode = "showing"; 
      vid.textTracks[vid.textTracks.length-1].mode = "showing"; // thanks Firefox 
   }); 
   vid.appendChild(track);
};

var subFile = document.getElementById('doLoadSub');

  subFile.addEventListener('click', function () { 
   readBOX();
   updateTrack();
  }, false);
 })();
