export default function content_menu(x, images_path_array, subtitle_array, subtext_array){
  let grid_div = document.createElement('div');
  grid_div.classList.add('menu-grid-div');
  x.appendChild(grid_div);

  if (images_path_array.length == subtext_array.length){
    for (let i=0;i<subtext_array.length;i++){
      let element = document.createElement('div');
      element.classList.add('menu-div');
      grid_div.appendChild(element);

      let div_img = document.createElement('img');
      div_img.src = images_path_array[i];
      div_img.classList.add('menu-image');

      let subtitle = document.createElement('h4');
      subtitle.textContent = subtitle_array[i];
      subtitle.classList.add('menu-subtitle');

      let subtext = document.createElement('p');
      subtext.textContent = subtext_array[i];
      subtext.classList.add('menu-subtext');



      element.appendChild(div_img);
      element.appendChild(subtitle);
      element.appendChild(subtext);
    }
  }
  else{
    console.log('error -- zahlen stimmen nicht überrein')
  }
}