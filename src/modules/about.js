export default function content_about(x){

    let text_title = document.createElement('p');
    x.appendChild(text_title);
    text_title.textContent = 'We make your life spicier!';
    text_title.style.margin = '2em 0 0 1em';
    text_title.style.color = 'white';
    text_title.style.fontFamily = 'Dosis';
    text_title.style.fontSize = '3em';


    let text_div_1 = document.createElement('div');
    x.appendChild(text_div_1);
    text_div_1.style.margin = '2em 0 0 3em';
    text_div_1.style.width = '60em';
    text_div_1.style.height = '20em';

    let text1 = document.createElement('p');
    text_div_1.appendChild(text1);
    text1.textContent = 'For the past couple of decades, people have felt a significant drop in spiciness in their life. What used to be exciting and full of spice, is now the human equivalent of a mild cheese that has been in the sun for 3 weeks. SpiceItUP has come to the resuce, to make your life spicier!';
    text1.style.color = 'white';
    text1.style.fontFamily = 'Dosis';
    text1.style.fontSize = '2em';
    text1.style.textAlign = 'justify';
  }
