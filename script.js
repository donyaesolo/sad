var totoro = document.getElementById("totoro");
var castle = document.getElementById("castle");
var loFi = document.getElementById("lo-fi");

spiritTheme = document.getElementById("SA");
nTotoroTheme = document.getElementById("NT");
castelTheme = document.getElementById("CS");
loFiTheme = document.getElementById("LF");
home = document.getElementById("music");


body = document.getElementById("Homepage");
div = document.getElementById("div");
title = document.getElementById("title")

//                                                                Music
function audioPlayer(){
  console.log("help");
        if(playing == true) {
          var sounds = document.getElementsByTagName('audio');
          for(i=0; i<sounds.length; i++) sounds[i].pause();
          playing = true;
          var currentSong = 0;
          $("#audioPlayer")[0].src = $("#playlist li a")[1];
          $("#audioPlayer")[0].play();
          $("#playlist li a").click(function(e){
             e.preventDefault();
             $("#audioPlayer")[0].src = this;
             $("#audioPlayer")[0].play();
             $("#playlist li").removeClass("current-song");
              currentSong = $(this).parent().index();
              $(this).parent().addClass("current-song");
          });

          $("#audioPlayer")[0].addEventListener("ended", function(){
             currentSong++;
              if(currentSong == $("#playlist li a").length)
                  currentSong = 0;
              $("#playlist li").removeClass("current-song");
              $("#playlist li:eq("+currentSong+")").addClass("current-song");
              $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
              $("#audioPlayer")[0].play();
          });
        } else {
          playing = true;
          var currentSong = 0;
          $("#audioPlayer")[0].src = $("#playlist li a")[1];
          $("#audioPlayer")[0].play();
          $("#playlist li a").click(function(e){
             e.preventDefault();
             $("#audioPlayer")[0].src = this;
             $("#audioPlayer")[0].play();
             $("#playlist li").removeClass("current-song");
              currentSong = $(this).parent().index();
              $(this).parent().addClass("current-song");
          });

          $("#audioPlayer")[0].addEventListener("ended", function(){
             currentSong++;
              if(currentSong == $("#playlist li a").length)
                  currentSong = 0;
              $("#playlist li").removeClass("current-song");
              $("#playlist li:eq("+currentSong+")").addClass("current-song");
              $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
              $("#audioPlayer")[0].play();
          });
        }
        console.log($("#playlist li a")[currentSong].href)
        spiritTheme.style.color = "#FF9E9E";
        nTotoroTheme.style.color = "black";
        castelTheme.style.color = "black";
        loFiTheme.style.color = "black";
        title.style.color = "#FF9E9E";
        div.style.backgroundColor = "white";
        body.style.backgroundImage = "url(images/background.gif)";
        slideshow();
      }

var playing = new Boolean(false);
function totoroTheme() {
  console.log("Me");
  if(playing == true) {
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
    totoro.play();
  }
  totoro.play();
  playing = true;
  nTotoroTheme.style.color = "#FF9E9E";
  spiritTheme.style.color = "white";
  castelTheme.style.color = "white";
  loFiTheme.style.color = "white";
  body.style.backgroundImage = "url(images/totoro.gif)";
  div.style.backgroundColor = "#4C435C";
  title.style.color = "#FF9E9E";
}

function castleTheme() {
  console.log("Please");
  if(playing == true) {
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
    castle.play();
  }
    playing = true;
    castle.play();
    castelTheme.style.color = "#FFD75B";
    nTotoroTheme.style.color = "white";
    spiritTheme.style.color = "white";
    loFiTheme.style.color = "white";
    body.style.backgroundImage = "url(images/castle.gif)";
    div.style.backgroundColor = "#4F8266";
    title.style.color = "#FFD75B";
}

function lofiTheme(){
  if(playing == true) {
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
    loFi.play();
  }
    playing = true;
    loFi.play();
    loFiTheme.style.color = "#FFD75B";
    castelTheme.style.color = "white";
    nTotoroTheme.style.color = "white";
    spiritTheme.style.color = "white";
    body.style.backgroundImage = "url(images/lowFi.jpg)";
    div.style.backgroundColor = "#37595E";
    title.style.color = "#FFD75B";
    setTimeout(relax, 1000);
}

//                                                               Theme controls
function relax(){
  console.log("rip")
  div.style.display = "none";
  body.addEventListener("mouseover", show);
}

function show(){
  console.log("Help");
  div.style.display = "block";
  body.removeEventListener("mouseover", show);
}

// Auto Direct
function autoMove(){
  console.log("Memes");
  window.setTimeout(function(){
    document.getElementById("music").play();
  }, 1000);
  window.setTimeout(function(){
    window.location.href = "homepage.html";
  }, 30000);
}


//                                                               Theme slideshow
// Spirtited Away
function slideshow(){
  var pic = 0;
  slide = setInterval(frame, 20000);
    function frame(){
        if(pic == 0){
          body.style.backgroundImage = "url(images/spiritedAway/1.gif)"
          pic++;
        }else if(pic == 1){
          body.style.backgroundImage = "url(images/spiritedAway/2.gif)"
          pic++;
        }else if(pic == 2){
          body.style.backgroundImage = "url(images/spiritedAway/3.gif)"
          pic++;
        }else if(pic == 3){
          body.style.backgroundImage = "url(images/spiritedAway/4.gif)"
          pic++;
        }else if(pic == 4){
          body.style.backgroundImage = "url(images/spiritedAway/5.gif)"
          pic++;
        }else if(pic == 5){
          body.style.backgroundImage = "url(images/spiritedAway/6.gif)"
          pic++;
        }else if(pic == 6){
          body.style.backgroundImage = "url(images/spiritedAway/7.gif)"
          pic++;
        }else if(pic == 7){
          body.style.backgroundImage = "url(images/spiritedAway/8.gif)"
          pic++;
        }else if(pic == 8){
          body.style.backgroundImage = "url(images/spiritedAway/9.gif)"
          pic++;
        }else if(pic == 9){
          body.style.backgroundImage = "url(images/spiritedAway/10.gif)"
          pic++;
        }else if(pic == 10){
          body.style.backgroundImage = "url(images/spiritedAway/11.gif)"
          pic++;
        } else if (pic == 11) {
          pic = 0;
        }
    }

}
