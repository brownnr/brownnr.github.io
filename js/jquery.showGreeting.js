(function ($) {
    var isActive = false;

    $.fn.showGreeting = function(shuffleResult, options){
        var $this = $(this);

        // Add/Remove Chars You Want To Appear During Shuffle In This Array
        var aChars = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z",
                               "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                              "1","2","3","4","5","6","7","8","9","0","-","=","!","@","#","$","%","^","&","*","(",")","_","+","[","]",
                               "{","}","\\","|",";","'",";","\"",",",".","/","<",">","?","`","~");

        var times = Math.floor(Math.random() * (12 - 3) + 3);
        
        var func = function(trash) {
            $("#world").fadeIn(1000);
        }
        
        // Defaults Settings
        var defaults = $.extend({
            time     : 40,              // Time In ms (Milliseconds) Of Shuffle For Each Letter
            amount   : times,           // Amount Of Shuffle For Each Letter
            complete : func             // Do Something When Shuffle Is Completed
        }, options);

        if(shuffleResult == undefined)
            shuffleResult = '';

        // Init Variables
        var aToShuffle     = $this.text().split(''),
            aShuffleResult = shuffleResult.split(''),
            iFlag = 0, n = 0, duration = 0, iLength = 0,
            interval, aLetters;

        if(!isActive){
            isActive = true;
            // Launch Shuffle
            return $this.each(function(){
                replaceEntry();

                aLetters = $this.find('span');

                // Debugging
                if(defaults.amount < 0)
                    defaults.amount = 0;

                duration = defaults.time;

                randomChars();
                interval = setInterval(randomChars,Math.floor(duration));

                // Create The Correct DOM Structure
                function replaceEntry(){
                    $this.empty();

                    if(aToShuffle.length > aShuffleResult.length)
                        iLength = aToShuffle.length;
                    else
                        iLength = aShuffleResult.length;

                    for(i = 0; i < iLength; i++){
                        if(aToShuffle[i] == undefined)
                            $this.append($('<span></span>'));
                        else 
                            $this.append($('<span>'+aToShuffle[i]+'</span>'));
                    }
                }

                console.log(typeof defaults.complete);
                
                // The Shuffle Function
                function randomChars(){
                    var randomChars = aChars[Math.floor(Math.random() * aChars.length)];

                    if(iFlag >= iLength){
                        isActive = false;
                        $this.text(shuffleResult);

                        clearInterval(interval);
                        if(typeof defaults.complete == 'function')
                            defaults.complete.call($this);
                    }else{
                        if(n == defaults.amount){
                            if(iFlag >= aShuffleResult.length)
                                $(aLetters[iFlag]).text('');
                            else
                                $(aLetters[iFlag]).text(aShuffleResult[iFlag]);

                            iFlag++; n = 0;
                        }else{
                            $(aLetters[iFlag]).text(randomChars);
                            n++;
                        }
                    }
                }

            });
            
        }
              
    };
}(jQuery));
