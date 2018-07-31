const button = document.getElementById("submit_button");

const input= document.getElementById("title_input");
input.addEventListener("keydown", function(event) {
    let str = event.key;
    let el = document.createElement("span");
    el.innerHTML = str;
    if ((event.keyCode >= 48 && event.keyCode <= 57 )||(event.keyCode >= 65 && event.keyCode <= 90)){
    document.getElementById("main_title").appendChild(el);
    }else if(event.keyCode == 32) {
    el.innerHTML = " ";
    document.getElementById("main_title").appendChild(el);        
    }


  }, true);


button.addEventListener('click',submitClick);

function submitClick(event){
    event.preventDefault();

    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adjective = document.getElementById("adjective").value;

    const madlib = document.getElementById("story_result");

 
    if (noun&&verb&&adjective){
           const success = document.createTextNode(`Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`);
           madlib.appendChild(success);
    }
    else{
        alert('Please fill in all fields');
    }
    
}