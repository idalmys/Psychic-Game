window.onload= function(){
    // iniciate variable
      var wins=0,
          losses =0,
          guessleft=9,
          guessesSoFar = new Array(),
          alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
          guessletter="";
          user_letter=""; 
         
  
     //add values to the HTML
     function add_values(){
         document.getElementById("win").value=wins;
         document.getElementById("lose").value=losses;
         document.getElementById("guessleft").value=guessleft;
         document.getElementById("guessesfar").value=guessesSoFar;    
  
     }
  
     //computer choice
     function random()
     {
         var computerchoice =alphabet[Math.floor(Math.random() * alphabet.length)];
             guessletter=computerchoice;
         
     }
      //if the user win or lost restart values
     function restart_values(){  
          guessleft=9,
          guessesSoFar=[];
     }
     random(); 
     add_values();
  
    document.onkeyup = function(event) 
      {
      // key  pressed.
      user_letter = event.key;      
     
   //validate letter
      if(user_letter.match("[a-zA-Z]")&& (user_letter.length===1)){
         if(user_letter===guessletter){
              wins++;
              restart_values();        
              add_values();              
              random();      
         
              } else if((user_letter !== guessletter) &&  !guessesSoFar.includes(user_letter) ){//avoid repeat letters inside the array
               guessleft--;               
               guessesSoFar.push(user_letter);       
               add_values();
               random();       
                   
              }
              if(guessleft===0){
                   losses ++;  
                   restart_values();   
                   add_values();   
                   random();
              }
  
          }
      }
    }