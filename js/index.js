$(document).ready(function(){
  
  $("button").on('click', function(){
    
    //Initializing Variables.
    var regEx = /[\+\-\*\/]{1}/;
    var val = $(this).val();
    var initStr = $("#subDisp").text();
    var secondStr = '';

    //Clear screen after the error message.
      if (initStr == 'Error!' || initStr == 'Digit Limit Reached!'){
        initStr = '';
        $("#subDisp").html('');
        $("#mainDisp").html('0');
      }
    
    //Algorithm to handle different user stories.
      //Ensure main display & sub display numbers does not exceed the char limit of 10 & 20.
      if ($("#mainDisp").text().length > 9 || $("#subDisp").text().length > 17){
        
        $("#mainDisp").html('0');
        $("#subDisp").html('Digit Limit Reached!');
      
      //Equal button event handler.  
      }else if (val == '='){
        var sol;
        //Trying to catch evaluation errors.
        try{
          sol = eval(initStr);
          if (sol.toString().length > 10){
            sol = sol.toString().slice(0,8);
          }
          $("#mainDisp").html(sol);
          $("#subDisp").html(sol);
        }catch(e){
          if (sol == undefined){
            $("#mainDisp").html('0');
            $("#subDisp").html('Error!');          
          }  
        }
               
      //AC button event handler.  
      }else if (val == 'AC'){
        
        $("#mainDisp").html('0');
        $("#subDisp").html('');
       
      //CE button - making sure only new entries are removed (not the returned solution).  
      }else if (val == 'CE' && regEx.test(initStr)){
        
        initStr = $("#subDisp").text();
        initStr = initStr.slice(0,(initStr.length-1));
        $("#subDisp").html(initStr);
      
      //0-9 digits event handler.  
      }else if (val != 'CE'){
       
        initStr = $("#subDisp").text();
          
          // Removing main display value upon +*/- button press.
          if (regEx.test(initStr.slice(-1))){
            
            secondStr = '';
            $("#mainDisp").html(secondStr.concat(val));
          
          // Removing main display initial 0 if its not 0.1 -0.9 values.  
          }else if ($("#mainDisp").text() == 0 && val != '.' && initStr.slice(-1) != '.'){
            
            $("#mainDisp").html('');
           
          // Make sure main display initial 0 is kept if the entered value is 0.1 - 0.9  
          }else{  
            
            secondStr = $("#mainDisp").text();
            $("#mainDisp").html(secondStr);
            
          }          
          
        $("#subDisp").html(initStr.concat(val));
        $("#mainDisp").html(secondStr.concat(val));
        if (regEx.test(val)){
           $("#mainDisp").html(val);
        } 
        
      }    
  })
  
});