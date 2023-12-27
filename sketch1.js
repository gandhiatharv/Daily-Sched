swal({ 
    showCancelButton: true, cancelButtonColor:'#4CAF50', cancelButtonText: 'No',
      background:'#FF6B6B',    title: `Save Progress?`, text: "If it's the same day, click 'Yes'. If it's a new day, click 'No'.", 
      type: 'info', confirmButtonColor:'#0047AB',
       imageSize: "306x220", confirmButtonText: "Yes", },    function(isConfirm) {
          if (isConfirm) {
            loadProgress();
            saveProgress();

          }});  

          
          