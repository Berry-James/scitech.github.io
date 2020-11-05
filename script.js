var myVideo=document.getElementById("video1");

function Pause()
{
  myVideo.pause();
}
function Play()
{
if (myVideo.paused)
  myVideo.play();
}

// INTERACTIVE COMPONENT

var context;
var x=900;
var y=700;
var dx= 5;
var dy= 4;
var xdim1= Math.floor((Math.random() * 100) + 1);
var xdim2= Math.floor((Math.random() * 100) + 1 + xdim1);
var xdim3= Math.floor((Math.random() * 100) + 1);
var xdim4= Math.floor((Math.random() * 100) + 1 + xdim3);
var ydim1= Math.floor((Math.random() * 500) + 1);
var ydim2= Math.floor((Math.random() * 500) + 1 + ydim1);
var ydim3= Math.floor((Math.random() * 500) + 1);
var ydim4= Math.floor((Math.random() * 500) + 1 + ydim3);

function init()
{
  context= boxContainer.getContext('2d');
  setInterval(draw,10);
}

function draw()
{
  context.clearRect(0,0,1000,800);
  context.beginPath();
  context.fillStyle="#41f477";
  context.fillRect(xdim3,xdim1,xdim4,xdim2);
  context.fillStyle="#4286f4";
  context.fillRect(ydim1,ydim3,ydim2,ydim4);
  context.fillStyle="#ff1e1e";
  context.arc(x,y,10,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  // Boundary Logic
  if( x<0 || x>1000) dx=-dx;
  if( y<0 || y>800) dy=-dy;
  if( x<xdim3+xdim4 && x>xdim3 && y<xdim1+xdim2 && y>xdim1) dx=-dx, dy=Math.floor((Math.random() * -10) + dx);
  if( x<ydim1+ydim2 && x>ydim1 && y<ydim3+ydim4 && y>ydim3) dx=-dx, dy=Math.floor((Math.random() * -10) + dx);

  x+=dx;
  y+=dy;
}

// RANDOMISE BUTTONS

function randomise() {
  window['xdim1']= Math.floor((Math.random() * 100) + 1);
  window['xdim2']= Math.floor((Math.random() * 100) + 1 + xdim1);
  window['xdim3']= Math.floor((Math.random() * 100) + 1);
  window['xdim4']= Math.floor((Math.random() * 100) + 1 + xdim3);
  window['ydim1']= Math.floor((Math.random() * 500) + 1);
  window['ydim2']= Math.floor((Math.random() * 500) + 1 + ydim1);
  window['ydim3']= Math.floor((Math.random() * 500) + 1);
  window['ydim4']= Math.floor((Math.random() * 500) + 1 + ydim3);
}

function randomiseLaser() {
  window['x']= Math.floor((Math.random() * 1000) + 1);
  window['y']= Math.floor((Math.random() * 800) + 1);
  window['dx']= Math.floor((Math.random() * 10) + 1);
  window['dy']= Math.floor((Math.random() * 10) + 1);
}

// CANVAS SETTINGS

var canvas = document.getElementsByTagName('canvas')[0];
canvas.width  = 1000;
canvas.height = 800;
canvas.style.width = '70vw';
canvas.style.height = '800px';

// BUTTON TO START INTERACTIVE COMPONENT

document.getElementById("startButton").addEventListener("click", init());

// BUTTON FUNCTIONS

$(document).ready(function(){

var questionCounter = 1;

  

  $("#aboutButton").click(function(){
      $('#homeContainer').show();
      $('#cardCenter').hide();
      $('#canvasContainer').css("display", "none");
      $('#canvasCentre').css("display", "none");
      $('#mainTitle').css('display', 'flex');
      $('#textPanelLeft').css('display', 'none')
      $('#textRight').css('display', 'none');
  });
    $('#quizButton').click(function(){
      $('#cardCenter').show();
      $('#homeContainer').hide();
      $('#canvasCentre').css("display", "none");
      $('#canvasContainer').css("display", "none");
      $('#cardContainer').css("display", "inline-block");
      $('#mainTitle').css("display", "none");
      $('#textPanelLeft').css('display', 'none')
      $('#textRight').css('display', 'none');
  });
    $('#startButton').click(function(){
      $('#cardCenter').hide();
      $('#homeContainer').hide();
      $('#canvasContainer').css("display", "inline-block");
      $('#canvasCentre').css('display', 'inline-block');
      $('#mainTitle').css('display', 'none');
      $('#textPanelLeft').css('display', 'inline-block')
      $('#textRight').css('display', 'inline-block');
  });
    $('#scitechLogo').click(function(){
      $('#cardCenter').hide();
      $('#homeContainer').show();
      $('#canvasContainer').css("display", "none");
      $('#mainTitle').css('display', 'flex');

  });
    $('.triangle-right').click(function(){
      $('#slideOne').css("display", "none");
      $('#slideTwo').css("display", "flex");
      $(this).css("display", "none");
      $(".triangle-right-two").css('display', 'inline-block');
      $('.triangle-left').css('display', 'inline-block');
  });
    $('.triangle-right-two').click(function(){
      $('#slideTwo').css("display", "none");
      $('#slideThree').css("display", "block");
      $(this).css("display", "none");
      $('.triangle-left').css('display', 'none');
      $('.triangle-left-two').css('display', 'inline-block');
    });
    $('.triangle-left').click(function(){
      $('#slideOne').css("display", "block");
      $('#slideTwo').css("display", "none");
      $(this).css("display", "none");
      $(".triangle-right-two").css('display', 'none');
      $('.triangle-right').css('display', 'inline-block')
    });
    $('.triangle-left-two').click(function(){
      $('#slideThree').css('display', 'none');
      $('#slideTwo').css('display', 'block');
      $(this).css('display', 'none');
      $('.triangle-left').css('display', 'inline-block');
      $('.triangle-right-two').css('display', 'inline-block');
    });
    $('#mute').click(function(){
      $(this).css('display', 'none');
      $('#unmute').css('display', 'block');
    });
    $('#unmute').click(function(){
      $(this).css('display', 'none');
      $('#mute').css('display', 'block');
    });
    $('#restartQuiz').click(function(){
      questionCounter = 1;
      $('#optionsContainer').css('display', 'block');
      $('.options').css('background-color', '#fe980f');
      $('#finishQuizButton').css('display', 'none');
      $('#optionsContainer5').css('display', 'none');
      $('#restartQuizMain').css('display', 'none');
    });
    $('#restartQuizMain').click(function(){
      questionCounter = 1;
      $(this).css('display', 'none');
      $('#optionsContainer').css('display', 'block');
      $('.options').css('background-color', '#fe980f');
      $('#finishQuizButton').css('display', 'none');
      $('#optionsContainer5').css('display', 'none');
    });
    $('#returnHome').click(function(){
      $('#homeContainer').show();
      $('#cardCenter').hide();
      $('#canvasContainer').css("display", "none");
      $('#mainTitle').css('display', 'flex');
      $('#randomise1').css('display', 'none');
      $('#randomise2').css('display', 'none');
  });

// QUIZ COMPONENT

    $('#nextQuestion').click(function(){
      questionCounter++;
      if(questionCounter == 2) {
        $('#optionsContainer').css("display", "none");
        $('#optionsContainer2').css("display", "block");
        $(this).hide();
        $('#questionName').html("How many mirrors are found in a basic laser?")
      }
      if(questionCounter == 3) {
        $('#optionsContainer2').css("display", "none");
        $('#optionsContainer3').css("display", "block");
        $(this).hide();
        $('#questionName').html("Which particles absorb the released protons?")
      }
      if(questionCounter == 4) {
        $('#optionsContainer3').css("display", "none");
        $('#optionsContainer4').css("display", "block");
        $(this).hide();
        $('#questionName').html("When photons are all the same wavelength, they are known as being...")
      }
      if(questionCounter == 5) {
        $('#optionsContainer4').css("display", "none");
        $('#optionsContainer5').css("display", "block");
        $(this).hide();
        $('#questionName').html("Which of the following are lasers <b>not</b> used in?")
      }
      if(questionCounter == 6) {
        $(this).css('display', 'none');
        $('#finishQuizButton').css('display', 'block');
        $('#restartQuizMain').css('display', 'block');
      }
    });
  });

(function(window, document, undefined) {
  window.onload = function() {
    $(".options").on('click', function(event) {
      if ($(this).attr("answer") == "1") {
        $(this).text(`✔ ${this.innerHTML}`)
        $(this).css("box-shadow", "");
        $(this).css("box-shadow", "2px 2px 15px green");
        $(this).css("background-image", "");
        $(this).css("background-color", "green");
        $("#nextQuestion").show();
      } else {
        $(this).css("background-color", "");
        $(this).css("background-color", "red");
        $(this).css("box-shadow", "2px 2px 15px red");
        $(this).text(`❌ ${this.innerHTML}`);
      }
    });
  }

})(window, document);

// SOUND EFFECT CONTROLS

var soundEffect = document.getElementById("soundEffect");

function playAudio() {
  soundEffect.volume = 0.2;
  soundEffect.play();
}

function muteAudio() {
  soundEffect.muted = true;
}

function unmuteAudio() {
  soundEffect.muted = false;
}

// MODAL ON QUIZ COMPLETION

var modal = document.getElementById('finishModal');
var btn = document.getElementById("finishQuizButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
