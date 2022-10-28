// for scrolling
var nav = document.querySelectorAll('#nav-bar a');
var start = 0;
nav.forEach(A=>{
    A.addEventListener('click',function(event){
        event.preventDefault();
        var fetch_id_text = this.textContent.trim().toLowerCase();
        var fetch_sec = document.getElementById(fetch_id_text); 
        // running interval
        var intv = setInterval(function(){
           if(fetch_sec.getBoundingClientRect().top<=0){
               clearInterval(intv);
               return;
           }
            window.scrollBy(0,10);//distance
        },10);//20ms - time after each distance scrolling
            
        });
});


// skills section animation while scrolled to skills section - this is for whole section 

var progress_bar = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkscroll);
var animation = false; // initially not animated


function initial_bars(){
  for(let bar of progress_bar){
    bar.style.width = '0%';
  }
}
initial_bars();

function fillbars(){
    for(let bar of progress_bar){
        let target = bar.getAttribute('data-bar-width');
        let curr = 0;
        let intv = setInterval(function(){
            if(curr > target){
                clearInterval(intv);
                return;
            }
            curr++;
            bar.style.width = curr+'%';
        },10);
      }
}
function checkscroll(){
    // checking the container is visible in the viewport height or not
    var coord = skillContainer.getBoundingClientRect();
    if(!animation && coord.top<window.innerHeight){// meeans skills section is visible in the viewport
        animation = true; // we have to run it only 1 time
        fillbars();
    }else if(coord.top>window.innerHeight){
        animation = false;
        initial_bars();
    }
}


