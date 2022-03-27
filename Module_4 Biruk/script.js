
    var speakWord = "Hello";
   
    function Hello(name) {
    console.log(speakWord + " " + name);
    }; 


    var byeWord = "Good Bye";
    
    function Bye(name) {
    console.log(byeWord + " " + name);
    }; 


(function hello() {

    var names = ["Biruk", "Robel", "Biniyam", "Kaleab", "Zeadonay", "Engdawork", "Natnael", "Yonatan", "Sami", "Johnny"];
    
    for (var i = 0; i < names.length; i++) {
    
     
      var firstLetter = names[i].charAt(0);
    
      
      if (firstLetter === 'J') {
        Hello(names[i]);
      } else {
        Bye(names[i]);
      }
    }
    
    })();