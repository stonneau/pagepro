<!DOCTYPE html>
<html lang="en-IE">
<head>
	<meta charset="utf-8" />
	<title>Steve Shokata</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="css/styles.css" />
<!--
	[if lt IE 9]><script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv-printshiv.min.js" type="text/javascript"></script><![endif]
-->
</head>
<body>
	<h1>Add your own subtitles to the videos!</h1>
	<figure id="videoContainer" height="500" data-fullscreen="false">
		<video id="video" controls preload="metadata">			
			<?php $name=$_GET['name']; if(empty($name)){$name='shokata_1';}
				  $sub=$_GET['sub']; if(empty($sub)){$sub=$name;}
				  echo '<source src="video/'.$name .'.mp4" type="video/mp4">'; 
				  echo '<source src="video/'.$name .'.webm" type="video/webm">'; 
		     ?> 	
			<track label="English" kind="subtitles" srclang="en" src="subtitles/vtt/sintel-en.vtt" default>
		</video>
		<div id="video-controls" class="controls" data-state="hidden">
			<button id="playpause" type="button" data-state="play">Play/Pause</button>
			<button id="stop" type="button" data-state="stop">Stop</button>
			<div class="progress">
				<progress id="progress" value="0" min="0">
					<span id="progress-bar"></span>
				</progress>
			</div>
			<button id="mute" type="button" data-state="mute">Mute/Unmute</button>
			<button id="volinc" type="button" data-state="volup">Vol+</button>
			<button id="voldec" type="button" data-state="voldown">Vol-</button>
			<button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
			<button id="subtitles" type="button" data-state="subtitles">CC</button>
		</div>
		<figcaption>
<!--
			&copy; copyright Blender Foundation | <a href="http://www.sintel.org">www.sintel.org</a>
-->
		</figcaption>
	</figure>	
	<div align="center">
		<div class="box" id="address">
			<?php
				  echo '<p>direct link to video: http://stevetonneau.fr/shokata/index.php?name='.$name.'&sub='.$sub.'</p>'; 
		     ?> 	
		</div>
	</div>
	<div align="center">
		<div class="box">
			<?php
				  echo '<textarea id="loadsubs">'.$sub .'</textarea>'; 
		     ?> 	
			<button id="doLoadSub">loadSub</button>
		</div>
	</div>
	<div align="center">
		<div class="box">	
		<select id="selectvideo">
			<?php
				  $i = 1;	
				  foreach (glob('./subtitles/vtt/*' , GLOB_ONLYDIR) as $value)
				  {  
					$i = $i +1;
					echo '<option value="'.i.'">'.substr($value,16) .'</option>'; 
				  }
		     ?>
		</select>
		<button id="load_video">Load video</button>
		</div>
	</div>
	<div align="center">
		<div class="box">
			<textarea id="textbox" rows="15" cols="50">Write subtitle here</textarea> 
			<button id="create">Create file</button> <a download="info.txt" id="downloadlink" style="display: none">Download</a>
		</div>
	</div>
	<script src="js/video-player.js"></script>
	<script src="js/createfile.js"></script>
	<script src="js/loadsub.js"></script>
	<script src="js/loadvideo.js"></script>
	<script type="text/javascript">		
    function vidplay() {
       var video = document.getElementById("video");
       if (video.paused) {
          video.play();
       } else {
		  video.currentTime = 0;
          video.play();
       }
    }
</script>
	<script type="text/javascript">		
		var javaScriptName = "<?php echo $name; ?>";
		loadSubs();
    </script>
</body>
</html>
