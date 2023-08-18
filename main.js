var Screen_width = 0; 
var Screen_height = 0;
var apple = "";
var Speak_data = "";
var to_number = "";
x = 0;
y = 0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number =Number(content);

    if(Number.isInteger(to_number))
    {
      Status = "Started Drawing Apples"
      draw_apple = "set";
    }

}

function setup() {
     
     Screen_width = window.innerWidth;
     Screen_height = window.innerHeight;
     createCanvas((Screen_width-150), (Screen_height-150));
     canvas.position(150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for(var i = 1; i <= to_number, i++)
  {
     i = 1;
     i = to_number;
     i = +1;

    x = Math.floor(Math.random()*700);
    y = Math.floor(Math.random()*400);
    image(apple, x, y, 50, 50); 

    document.getElementById(("status").innerHTML = to_number + " Apples Drawn")
    speak_data() = to_number + "Apples Drawn";
    Speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function Preload()
{
 apple = Load_image(apple.png);
}
