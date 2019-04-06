//Executes when page loads and it's ready to view
var step = 0;

var titles = [
  'Load Sylenth1 Into Your Channel Strip', // this is 0 titles[0]
  'Set Sylenth1 to INIT Preset', // this is 1 titles[1]
  'Set Both Oscillators in Section A to a Saw Waveform', // this is 2
  'Add Eight Voices to Each Oscillator in Section A and Turn Off "Retrig"', // this is 3
  'Detune Both Oscillators in Section A' //this is 4
  ];

$(function(){
  $("#stepinfo, section, footer, .prev").hide();
});

$('body').css('background-color','#b3f0ff');
$('body').css('font-size','25px');
$('body').css('font-family','Oswald','sans-serif');



// We use the start button to begin our tutorial
$('.start').on('click',function(){
  //do stuff when the button is clicked
  $('.intro').hide();
  //$('.start').hide();
  $('footer, #stepinfo').show();


  step = 1;
$('#step'+step).show();
  //f(x) = x + 2
  // Set the title for our current step
  $('#stepinfo').text('Step '+step+': '+titles[step-1]);
  //$('#stepinfo').text(step + step);
});
// Next to advance each slide
$('.next').on('click',function(){
  //make the change only if we are under our number of steps
  $('#step'+step).hide();
  step++;
  if(step == 2){
    $('.prev').show();
  }

  if(step == 5) {
    $('.next').hide();
  }

  if(step <= 5) {
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+ titles[step-1]);
  } else {
    step--;
    $('#step'+step).show();
    $('.next').hide();
  }

});

//Previous

$('.prev').on('click',function(){
  //make the change only if we are under our number of steps
  $('#step'+step).hide();
  step--;
  if(step == 1){
    $('.prev').hide();
  }

  if(step == 5) {
    $('.next').hide();
  } else {
    $('.next').show();
  }

  if(step >= 1) {
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+ titles[step-1]);
  } else {
    step--;
    $('#step'+step).show();

  }

  if(step == 5) {
    $('.next').hide();
    $('#final').html('Finished! <strong>Start Again?</strong>');
  }

});
