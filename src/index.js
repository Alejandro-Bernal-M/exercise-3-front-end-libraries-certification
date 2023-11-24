
$(document).ready(function () {
  $('#Heater-1').click(function () {
    $('#display').text('Heater-1');
    $('#Q')[0].play();
  });
  $('#Heater-2').click(function () {
    $('#display').text('Heater-2');
    $('#W')[0].play();
  });
  $('#Heater-3').click(function () {
    $('#display').text('Heater-3');
    $('#E')[0].play();
  });
  $('#Heater-4').click(function () {
    $('#display').text('Heater-4');
    $('#A')[0].play();
  });
  $('#Clap').click(function () {
    $('#display').text('Clap');
    $('#S')[0].play();
  });
  $('#Open-HH').click(function () {
    $('#display').text('Open-HH');
    $('#D')[0].play();
  });
  $('#Kick-n-Hat').click(function () {
    $('#display').text('Kick-n-Hat');
    $('#Z')[0].play();
  });
  $('#Kick').click(function () {
    $('#display').text('Kick');
    $('#X')[0].play();
  });
  $('#Closed-HH').click(function () {
    $('#display').text('Closed-HH');
    $('#C')[0].play();
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 81) {
      $('#display').text('Heater-1');
      $('#Q')[0].play();
    }
    if (e.keyCode == 87) {
      $('#display').text('Heater-2');
      $('#W')[0].play();
    }
    if (e.keyCode == 69) {
      $('#display').text('Heater-3');
      $('#E')[0].play();
    }
    if (e.keyCode == 65) {
      $('#display').text('Heater-4');
      $('#A')[0].play();
    }
    if (e.keyCode == 83) {
      $('#display').text('Clap');
      $('#S')[0].play();
    }
    if (e.keyCode == 68) {
      $('#display').text('Open-HH');
      $('#D')[0].play();
    }
    if (e.keyCode == 90) {
      $('#display').text('Kick-n-Hat');
      $('#Z')[0].play();
    }
    if (e.keyCode == 88) {
      $('#display').text('Kick');
      $('#X')[0].play();
    }
    if (e.keyCode == 67) {
      $('#display').text('Closed-HH');
      $('#C')[0].play();
    }
  });
});