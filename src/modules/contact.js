export default function content_contact(x){
  let contact_div = document.createElement('div');
  contact_div.style.margin = '6em 0 0 3em';

  let contact_text = document.createElement('p');
  contact_text.textContent = "You can reach us at ";
  contact_text.classList.add("menu-subtitle");

  let contact = document.createElement('i');
  contact.classList.add('menu-subtitle');
  contact.style.color = '#e84545';
  contact.textContent = 'Saint elsewhere';

  let contact_text2 = document.createElement('p')
  contact_text2.classList.add("menu-subtitle");
  contact_text2.textContent = "or just call us at";4
  contact_text2.style.margin = "0 0 0 0.7em"

  let contact2 = document.createElement('i');
  contact2.classList.add('menu-subtitle');
  contact2.style.color = '#e84545';
  contact2.textContent = '+66 666 666 420';

  contact_div.appendChild(contact_text);
  contact_div.appendChild(contact);
  contact_div.appendChild(contact_text2);
  contact_div.appendChild(contact2);
  x.appendChild(contact_div);
}