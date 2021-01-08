import content_about from './modules/about.js';
import content_menu from './modules/menu.js';
import content_contact from './modules/contact.js';
import content_faq from './modules/faq.js';

let body = document.querySelector("body");
let tab_div = document.createElement('div');
let display_div = document.createElement('div');

let title = document.querySelector(".title");
let title_text = document.createElement('p');
title_text.textContent = "SpiceItUP";
title.appendChild(title_text);
title_text.classList.add('title-text');

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
      content_menu(display_div, ['/src/modules/images/family-image.png', 
      '/src/modules/images/dog-image.png', 
      '/src/modules/images/food-image.png',
      '/src/modules/images/spices-image.png',
      '/src/modules/images/nerd-image.png',
      '/src/modules/images/show-image.png'
    ], 
      ['Family', 'Pets', 'Food', 'Spices', 'Yourself', 'Your TV-Shows'],
      ['Spice up your family life, so that you can all enjoy a better future!', 'If your pet is too lazy, fat or a hamster, you can spice it up here!', 'Of course we offer the traditional way of spicing things up, and by that we mean spicing up your food.', 
      'Yes, we can make your exotic spices even more exotic and spicier!',"If you don't want to get laughed at again, we can even spice you up so you will be the coolest kid in town!",
      'Or we can spice up the boring, unfunny and repetitive TV-shows no one actually cars about anymore.'
    ]);
      break;
    case 'contact':
      content_contact(display_div);
      break;
    case 'faq':
      let faq_div = document.createElement('div');
      content_faq(faq_div, "How does the service work?", "It doesn't really work.");
      content_faq(faq_div, 'Can I order to put spice into someone elses eyes?', 'Yes, for an extra fee of 20$.'); 
      content_faq(faq_div, 'Is this site legit?', 
      "When we cread this Site, we didn't really think about what to create. But still, the service is working and if you choose to contact us, we will actually fulfill what is promised.");
      content_faq(faq_div, 'Is this service available internationally?', 'Yes, once you contact us and order a spice-hit, we will connect you with our corresponding regional manager.');
      content_faq(faq_div, 'Do you accpet credit cards?', 'Cash only *wink wink*');
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