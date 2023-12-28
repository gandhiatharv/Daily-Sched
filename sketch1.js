var x=1;
var wbxyz;

function startTimer() {
  let duration = 10 * 60; // 10 minutes in seconds
  const fiveMinutesLeft = 5 * 60;
  const oneMinuteFortySecondsLeft = 1 * 60 + 40;

  const timer = setInterval(() => {
    duration--;

    if (duration === fiveMinutesLeft) {
      swal({ 
        showCancelButton: false, cancelButtonColor:'#4CAF50', cancelButtonText: 'No',
          background:'#FF6B6B',    title: `5 Minute Warning`, text: "", 
          type: 'info', confirmButtonColor:'#0047AB',
           imageSize: "306x220", confirmButtonText: "Ok", },    function(isConfirm) {
              if (isConfirm) {
                var wbxyz=0;
    
              }});
    } else if (duration === oneMinuteFortySecondsLeft) {
      swal({ 
        showCancelButton: false, cancelButtonColor:'#4CAF50', cancelButtonText: 'No',
          background:'#FF6B6B',    title: `1 Minute 40 Seconds Warning`, text: "", 
          type: 'info', confirmButtonColor:'#0047AB',
           imageSize: "306x220", confirmButtonText: "Ok", },    function(isConfirm) {
              if (isConfirm) {
                wbxyz=0;
    
              }}); 
    }

    if (duration <= 0) {
      clearInterval(timer);
      console.log("Timer complete!");
      swal({ 
        showCancelButton: false, cancelButtonColor:'#4CAF50', cancelButtonText: 'No',
          background:'#FF6B6B',    title: `Time's Up! Get to Work!`, text: "", 
          type: 'info', confirmButtonColor:'#0047AB',
           imageSize: "306x220", confirmButtonText: "Ok", },    function(isConfirm) {
              if (isConfirm) {
                wbxyz=0;
    
              }}); 
    }
  }, 1000); // Run the timer every second (1000 milliseconds)
}

swal({ 
    showCancelButton: true, cancelButtonColor:'#4CAF50', cancelButtonText: 'No',
      background:'#FF6B6B',    title: `Save Progress?`, text: "If it's the same day, click 'Yes'. If it's a new day, click 'No'.", 
      type: 'info', confirmButtonColor:'#0047AB',
       imageSize: "306x220", confirmButtonText: "Yes", },    function(isConfirm) {
        if (isConfirm) {
          // User clicked the "Yes" button
          loadProgress();
          saveProgress();
        } else {
          // User clicked the "No" button (cancel button)
          startTimer();
        }});  

 