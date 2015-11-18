function readBOX() {
    function reqListener () {
		document.getElementById('textbox').value = this.responseText;
    }
	var textbox = document.getElementById('loadsubs');
    var txtinput = textbox.value;
    var filePath = "http://stevetonneau.fr/shokata/subtitles/vtt/"+javaScriptName+"/"  + txtinput + ".vtt";

    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", filePath, true);
    oReq.send();
};

function updateTrack() {
	var track = document.createElement("track"); 
	var vid = document.getElementById("video");
	track.kind = "captions"; 
	track.label = "Test"; 
	track.srclang = "en"; 
	var tinput = document.getElementById('loadsubs').value;
	track.src = "http://stevetonneau.fr/shokata/subtitles/vtt/"+javaScriptName+"/" + tinput + ".vtt";
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

function loadSubs()
{
	readBOX();
	updateTrack();
};

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

window.onerror = function(error, url, line) {
	alert(error + url + line);
};

var subFile = document.getElementById('doLoadSub');

  subFile.addEventListener('click', function () { 
   readBOX();
   updateTrack();
  }, false);
 })();
