let body = document.querySelector("body");
let tab_div = document.createElement('div');
body.appendChild(tab_div);
tab_div.classList.add('tab-div');

let tab_names = ['About us','Menu','Contact','FAQ']

for(let i=0; i<(tab_names).length; i++){
  let element = document.createElement('p');
  element.textContent = tab_names[i];
  element.classList.add('tab');
  element.setAttribute('data-selected', 'false');
  tab_div.appendChild(element);
}

let tab_array = document.querySelectorAll('.tab');

for(let i=0; i<(Array.from(tab_array)).length;i++){
  tab_array[i].addEventListener("click", event =>{
    for (j of tab_array){
      j.setAttribute('data-selected', 'false');
      if(j.classList.contains('tab-sel')){
        j.classList.remove('tab-sel');
      }
    }
    tab_array[i].setAttribute('data-selected', 'true');
    tab_array[i].classList.add('tab-sel');
  })
}

function select_mod(i){
  console.log("t1");
  for (let j in tab_array){
    console.log("t2."+j);
    j.setAttribute('data-selected', 'false');
    if(j.classList.contains('tab-sel')){
      j.classList.remove('tab-sel');
    }
  }
  console.log("t3");
  i.setAttribute('data-selected', 'true');
  i.classList.add('tab-sel');
}