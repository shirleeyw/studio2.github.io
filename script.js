(function(){
    'use strict';
    console.log("reading js");

    const brushpen = document.getElementById("brushpen");
    const flags = document.getElementById("pageflags");
    const journal = document.getElementById("journal");
    const pen = document.getElementById("pen");
    const tape = document.getElementById("tape");

    const closeBtns = document.querySelectorAll('.close');


    //-----------------open overlays------------------
    
    brushpen.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('brushpen-overlay').className = 'show';
    });

    flags.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('pageflags-overlay').className = 'show';
    });

    journal.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('journal-overlay').className = 'show';
    });

    pen.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('pen-overlay').className = 'show';
    });

    tape.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('tape-overlay').className = 'show';
    });


    //------------closing overlays when 'x' button clicked----------
    for(const eachBtn of closeBtns){
        eachBtn.addEventListener('click', function(event){
            event.preventDefault();
            document.getElementById('brushpen-overlay').className = 'hidden';
            document.getElementById('pageflags-overlay').className = 'hidden';
            document.getElementById('journal-overlay').className = 'hidden';
            document.getElementById('pen-overlay').className = 'hidden';
            document.getElementById('tape-overlay').className = 'hidden';
        })
    }


}());