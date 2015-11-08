
(function () {
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);
	//~ doLog(text)
    return textFile;
  };
  
  doLog = function (data) {	
    var url = "http://stevetonneau.fr/shokata/js/ajax_log.php?";   
    //your url to the server side file that will receive the data.
    var http = new XMLHttpRequest();
    http.open("POST", url, true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //Send the proper header information along with the request
    //~ http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //~ http.setRequestHeader("Content-length", params.length);
    //~ http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            //~ alert(http.responseText);//check if the data was received successfully.
        }
        else
        {
			//~ alert("erreur");
		}
    }
    http.send(data);
   };
   
	hashCode = function(str) {
		var hash = 0, i, chr, len;
		if (str.length == 0) return hash;
		for (i = 0, len = str.length; i < len; i++)
		{
			chr   = str.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};
   
  var create = document.getElementById('create'),
    textbox = document.getElementById('textbox');

  create.addEventListener('click', function () { 
    var text = textbox.value;
    var ha = hashCode(text);
    var filename = ha.toString()+".vtt";
    var str1 = "filename=../subtitles/vtt/" + filename; 
    var data = str1 + "&data=" + text;
    //next you would initiate a XMLHTTPRequest as following (could be more advanced):
    doLog(data);
    document.getElementById('loadsubs').value = ha.toString();
    alert("Sub Id: " + ha.toString());
    //~ var link = document.getElementById('downloadlink');
    //~ link.href = makeTextFile(textbox.value);
    //~ link.style.display = 'block';
  }, false);
})();
