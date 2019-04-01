var totoro = document.getElementById("totoro");
var castel= document.getElementById("castle");
var loFi = document.getElementById("lo-fi");

spiritTheme = document.getElementById("SA");
nTotoroTheme = document.getElementById("NT");
castelTheme = document.getElementById("CS");
loFiTheme = document.getElementById("LF");
home = document.getElementById("music");


body = document.getElementById("Homepage");
div = document.getElementById("div");
title = document.getElementById("title");
text = document.getElementById("relax");


var spirit = new Boolean(false);
var neighborTot = new Boolean(false);
var castle = new Boolean(false);
var lo = new Boolean(false);


//                                                                Music
function audioPlayer(){
  console.log("help");
        if(playing == true) {
          var sounds = document.getElementsByTagName('audio');
          for(i=0; i<sounds.length; i++) sounds[i].pause();
          playing = true;
          playing = 1;
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
        spirit = true;
        neighborTot = false;
        castle = false;
        lo = false;
        slideshow();
        setInterval(relax, 10000);
      }

var playing = new Boolean(false);
var check = 0;
function totoroTheme() {
  console.log("Me");
  if(playing == true) {
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
    totoro.play();
    check = 1;
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
  neighborTot = true;
  spirit = false;
  castle = false;
  lo = false;
  slideshow();
  setInterval(relax, 10000);
}

function castleTheme() {
  console.log("Please");
  if(playing == true) {
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
    castel.play();
    check = 1;
  }
    playing = true;
    castel.play();
    castelTheme.style.color = "#FFD75B";
    nTotoroTheme.style.color = "white";
    spiritTheme.style.color = "white";
    loFiTheme.style.color = "white";
    body.style.backgroundImage = "url(images/castle.gif)";
    div.style.backgroundColor = "#4F8266";
    title.style.color = "#FFD75B";
    castle = true;
    spirit = false;
    neighborTot = false;
    lo = false;
    slideshow();
    setInterval(relax, 10000);
}

function lofiTheme(){
  if(playing == true) {
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
    playing = true;
    playing = 1;
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#loPlaylist li a")[1];
    $("#audioPlayer")[0].play();
    $("#loPlaylist li a").click(function(e){
       e.preventDefault();
       $("#loPlaylist")[0].src = this;
       $("#loPlaylist")[0].play();
       $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });

    $("#audioPlayer")[0].addEventListener("ended", function(){
       currentSong++;
        if(currentSong == $("#loPlaylist li a").length)
            currentSong = 0;
        $("#loPlaylist li").removeClass("current-song");
        $("#loPlaylist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#loPlaylist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
  } else {
    playing = true;
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#loPlaylist li a")[0];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){
       e.preventDefault();
       $("#audioPlayer")[0].src = this;
       $("#audioPlayer")[0].play();
       $("#loPlaylist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });

    $("#audioPlayer")[0].addEventListener("ended", function(){
       currentSong++;
        if(currentSong == $("#playlist li a").length)
            currentSong = 0;
        $("#loPlaylist li").removeClass("current-song");
        $("#loPlaylist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#loPlaylist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
  }
    loFiTheme.style.color = "#FFD75B";
    castelTheme.style.color = "white";
    nTotoroTheme.style.color = "white";
    spiritTheme.style.color = "white";
    body.style.backgroundImage = "url(images/lowFi.gif)";
    div.style.backgroundColor = "#37595E";
    title.style.color = "#FFD75B";
    lo = true;
    spirit = false;
    neighborTot = false;
    castle = false;
    slideshow();
    setInterval(relax, 10000);
}

//                                                               Theme controls
html = document.getElementById("html");
function relax(){
  console.log("rip")
  div.style.display = "none";
  html.addEventListener("mouseover", show);
  var myListener = function () { //Checks for Mouse Movement
    document.removeEventListener('mousemove', myListener, false);
    div.classList.add("fade-in");
    text.innerHTML = "Relax";
    show();
  };
  setInterval(space, 1000);
  html.addEventListener('mousemove', myListener, false);
}

function space(){
  text.classList.add("slow-fade-in");
  text.style.display = "block";
    setTimeout(time, 7000);
    function time(){
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      m = checkTime(m);
      text.innerHTML =  h + ":" + m;
      var t = setTimeout(time, 500);
    }
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
}
function show(){
  console.log("Help");
  div.style.display = "block";
  text.classList.remove("slow-fade-in");
  text.style.display = "none";
  window.removeEventListener("mouseover", show);
}

// Auto Direct
function autoMove(){
  console.log("Memes");
  window.setTimeout(function(){
    document.getElementById("music").play();
  }, 3000);
  window.setTimeout(function(){
    window.location.href = "homepage.html";
  }, 30000);
}


//                                                               Theme slideshow
function slideshow(){
  var pic = 0;
  var choice = 0;
  if(spirit == true){
    choice = 1;
    pic = 0;
  } else if(neighborTot == true){
    choice = 2;
    pic = 12;
  } else if(castle == true){
    choice = 3;
    pic = 24;
  } else if(lo == true){
    pic = 36;
    choice = 4;
  }

  theme = choice
  if(choice == 1){
    theme = SA;
  } else if(choice == 2){
    theme = NT
  } else if(choice == 3){
    theme = CS
  } else if(choice == 4){
    theme = LF;
  }
  i = theme
    if(playing == true && check == 1){ //In place to stop overlap
      reset();
    }
  slide = setInterval(i, 20000);
    function SA(){ // Spirtited Away
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
    function NT(){
        if(pic == 12){
          body.style.backgroundImage = "url(images/myNeighborTotoro/1.gif)"
          pic++;
        }else if(pic == 13){
          body.style.backgroundImage = "url(images/myNeighborTotoro/2.gif)"
          pic++;
        }else if(pic == 14){
          body.style.backgroundImage = "url(images/myNeighborTotoro/3.gif)"
          pic++;
        }else if(pic == 15){
          body.style.backgroundImage = "url(images/myNeighborTotoro/4.gif)"
          pic++;
        }else if(pic == 16){
          body.style.backgroundImage = "url(images/myNeighborTotoro/5.gif)"
          pic++;
        }else if(pic == 17){
          body.style.backgroundImage = "url(images/myNeighborTotoro/6.gif)"
          pic++;
        }else if(pic == 18){
          body.style.backgroundImage = "url(images/myNeighborTotoro/7.gif)"
          pic++;
        }else if(pic == 19){
          body.style.backgroundImage = "url(images/myNeighborTotoro/8.gif)"
          pic++;
        }else if(pic == 20){
          body.style.backgroundImage = "url(images/myNeighborTotoro/9.gif)"
          pic++;
        }else if(pic == 21){
          body.style.backgroundImage = "url(images/myNeighborTotoro/10.gif)"
          pic++;
        }else if(pic == 22){
          body.style.backgroundImage = "url(images/myNeighborTotoro/11.gif)"
          pic++;
        } else if (pic == 23) {
          pic = 12;
        }
      }
      function CS(){
          if(pic == 24){
            body.style.backgroundImage = "url(images/castleSky/1.gif)"
            pic++;
          }else if(pic == 25){
            body.style.backgroundImage = "url(images/castleSky/2.gif)"
            pic++;
          }else if(pic == 26){
            body.style.backgroundImage = "url(images/castleSky/3.gif)"
            pic++;
          }else if(pic == 27){
            body.style.backgroundImage = "url(images/castleSky/4.gif)"
            pic++;
          }else if(pic == 28){
            body.style.backgroundImage = "url(images/castleSky/5.gif)"
            pic++;
          }else if(pic == 29){
            body.style.backgroundImage = "url(images/castleSky/6.gif)"
            pic++;
          }else if(pic == 30){
            body.style.backgroundImage = "url(images/castleSky/7.gif)"
            pic++;
          }else if(pic == 31){
            body.style.backgroundImage = "url(images/castleSky/8.gif)"
            pic++;
          }else if(pic == 32){
            body.style.backgroundImage = "url(images/castleSky/9.gif)"
            pic++;
          }else if(pic == 33){
            body.style.backgroundImage = "url(images/castleSky/10.gif)"
            pic++;
          }else if(pic == 34){
            body.style.backgroundImage = "url(images/castleSky/11.gif)"
            pic++;
          } else if (pic == 35) {
            pic = 24;
          }
        }
        function LF(){
            if(pic == 36){
              body.style.backgroundImage = "url(images/loFi/1.gif)"
              pic++;
            }else if(pic == 37){
              body.style.backgroundImage = "url(images/loFi/2.gif)"
              pic++;
            }else if(pic == 38){
              body.style.backgroundImage = "url(images/loFi/3.gif)"
              pic++;
            }else if(pic == 39){
              body.style.backgroundImage = "url(images/loFi/4.gif)"
              pic++;
            }else if(pic == 40){
              body.style.backgroundImage = "url(images/loFi/5.gif)"
              pic++;
            }else if(pic == 41){
              body.style.backgroundImage = "url(images/loFi/6.gif)"
              pic++;
            }else if(pic == 42){
              body.style.backgroundImage = "url(images/loFi/7.gif)"
              pic++;
            }else if(pic == 43){
              body.style.backgroundImage = "url(images/loFi/8.gif)"
              pic++;
            }else if(pic == 44){
              body.style.backgroundImage = "url(images/loFi/9.gif)"
              pic++;
            }else if(pic == 45){
              body.style.backgroundImage = "url(images/loFi/10.gif)"
              pic++;
            }else if(pic == 46){
              body.style.backgroundImage = "url(images/loFi/11.gif)"
              pic++;
            } else if (pic == 47) {
              pic = 35;
            }
          }
      function reset(){
        if( i == SA && check == 1){
          clearInterval(slide);
          pic = 0;
          i = SA
        } else if( i == NT && check == 1){
          clearInterval(slide);
          pic = 12;
          i = NT
        } else if( i == CS && check == 1){
          clearInterval(slide);
          pic = 24;
          i = CS
        } else if( i == LF && check == 1){
          clearInterval(slide);
          pic = 36;
          i = LF
        }
      }
}
