import content_about from './modules/about.js';
import content_menu from './modules/menu.js';
import content_contact from './modules/contact.js';
import content_faq from './modules/faq.js';

let body = document.querySelector("body");
let tab_div = document.createElement('div');
let display_div = document.createElement('div');
let test_1;

body.appendChild(tab_div);
body.appendChild(display_div);
display_div.classList.add('display-div');
tab_div.classList.add('tab-div');

let tab_names = ['About us','Menu','Contact','FAQ']
let tab_content_distinguisher = ['about','menu','contact','faq'];

for(let i=0; i<(tab_names).length; i++){
  let element = document.createElement('p');
  element.textContent = tab_names[i];
  element.classList.add('tab');
  element.setAttribute('data-selected', 'false');
  element.setAttribute('data-content', tab_content_distinguisher[i]);
  tab_div.appendChild(element);
}

let tab_array = document.querySelectorAll('.tab');

for(let i=0; i<(Array.from(tab_array)).length;i++){
  tab_array[i].addEventListener("click", event =>{
    for (const j of tab_array){
      j.setAttribute('data-selected', 'false');
      if(j.classList.contains('tab-sel')){
        j.classList.remove('tab-sel');
      }
    }
    tab_array[i].setAttribute('data-selected', 'true');
    tab_array[i].classList.add('tab-sel');
    clear();
    run_corr_display(tab_array[i].getAttribute('data-content'));
  })
}

function run_corr_display(x){
  switch(x){
    case 'about':
      content_about(display_div);
      break;
    case 'menu':
      content_menu(display_div);
      break;
    case 'contact':
      content_contact(display_div);
      break;
    case 'faq':
      let faq_div = document.createElement('div');
      content_faq(faq_div, "Is there?", "Nope.");
      content_faq(faq_div, 'How about?', 'still no'); 
      content_faq(faq_div, 'How about?', 'still nooooooo ooooooooo ooooooooooooooooo oooooooooooooooooooooooooo oooooooooooooooo00000 000 0000000000 0000000 00000000 000000000 00000000 00000 00000000000o 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 oo oooooooooooooooooooooooooo oooooooooooooooo00000 000 0000000000 0000000 00000000 000000000 00000000 00000 00000000000o 0000 0000 0000 0000 0000 0000 0000 0000 00 oo oooooooooooooooooooooooooo oooooooooooooooo00000 000 0000000000 0000000 00000000 000000000 00000000 00000 00000000000o 0000 0000 0000 0000 0000 0000 0000 0000 00 oo oooooooooooooooooooooooooo oooooooooooooooo00000 000 0000000000 0000000 00000000 000000000 00000000 00000 00000000000o 0000 0000 0000 0000 0000 0000 0000 0000 00');
      content_faq(faq_div, 'How about?', 'still no'); 
      content_faq(faq_div, 'How about?', 'still no');
      content_faq(faq_div, 'How about?', 'still no');
      display_div.appendChild(faq_div);
      faq_div.style.margin = '4em 4em 4em 4em';
      break;
    default:
      console.log('error');
  }
}

function clear(){
  while (display_div.firstChild){
    display_div.removeChild(display_div.lastChild);
  }
}