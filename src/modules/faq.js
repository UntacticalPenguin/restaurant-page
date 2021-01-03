export default function create_slide_tab(x, question, q_answer){
    let title_div = document.createElement('div');
    title_div.classList.add('title-div');
    x.appendChild(title_div);
  
    let sub_div = document.createElement('div');
    title_div.appendChild(sub_div);
    sub_div.classList.add('sub-div');
  
    let title = document.createElement('p');
    title.textContent = '' + question;
    sub_div.appendChild(title);
    title.classList.add('title-faq');
  
    let icon1 = document.createElement('i');
    icon1.classList.add('gg-chevron-down');
    sub_div.appendChild(icon1);
  
    icon1.addEventListener('click', event =>{
      let sub_div_answer = document.createElement('div');
      let answer = document.createElement('p');
      answer.textContent = '' + q_answer;
      answer.classList.add('answer');
      sub_div_answer.classList.add('sub-answer');
      sub_div_answer.appendChild(answer);
      title_div.appendChild(sub_div_answer);
      //title_div.style.height = '200px';
      let icon2 = document.createElement('i');
      icon2.classList.add('gg-chevron-left');
      sub_div.removeChild(sub_div.lastChild);
      sub_div.appendChild(icon2);
      icon2.addEventListener('click', event=>{
        sub_div.removeChild(sub_div.lastChild);
        sub_div.appendChild(icon1);
        title_div.removeChild(title_div.lastChild);
        //title_div.style.height = '100px';
      });
    });
  }