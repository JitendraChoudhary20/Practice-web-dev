const inputComm = document.getElementById("inputComment");
const inputCommPlaceholder = inputComm.setAttribute('placeholder','leave comment');
const getInputPlaceholder = inputComm.getAttribute('placeholder');

inputComm.onclick = function(){
    inputComm.setAttribute('placeholder','');
}
inputComm.onblur = function(){
    this.setAttribute('placeholder', getInputPlaceholder);
}

const addBtn = document.getElementsByClassName('add-btn');
addBtn.onclick = function(){
    const displycomment = document.createElement('div');
    displycomment.classList.add(display);
    displycomment.createElement('div');
}


