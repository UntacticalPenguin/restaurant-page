(()=>{"use strict";let e=document.querySelector("body"),t=document.createElement("div"),n=document.createElement("div");e.appendChild(t),e.appendChild(n),n.classList.add("display-div"),t.classList.add("tab-div");let l=["About us","Menu","Contact","FAQ"],a=["about","menu","contact","faq"];for(let e=0;e<l.length;e++){let n=document.createElement("p");n.textContent=l[e],n.classList.add("tab"),n.setAttribute("data-selected","false"),n.setAttribute("data-content",a[e]),t.appendChild(n)}let i=document.querySelectorAll(".tab");for(let e=0;e<Array.from(i).length;e++)i[e].addEventListener("click",(t=>{for(const e of i)e.setAttribute("data-selected","false"),e.classList.contains("tab-sel")&&e.classList.remove("tab-sel");i[e].setAttribute("data-selected","true"),i[e].classList.add("tab-sel"),s(),d(i[e].getAttribute("data-content"))}));function d(e){switch(e){case"about":!function(e){let t=document.createElement("p");e.appendChild(t),t.textContent="We make your life spicier!",t.style.margin="2em 0 0 1em",t.style.color="white",t.style.fontFamily="Dosis",t.style.fontSize="3em";let n=document.createElement("div");e.appendChild(n),n.style.margin="2em 0 0 3em",n.style.width="60em",n.style.height="20em";let l=document.createElement("p");n.appendChild(l),l.textContent="For the past couple of decades, people have felt a significant drop in spiciness in their life. What used to be exciting and full of spice, is now the human equivalent of a mild cheese that has been in the sun for 3 weeks. SpiceItUP has come to the resuce, to make your life spicier!",l.style.color="white",l.style.fontFamily="Dosis",l.style.fontSize="2em",l.style.textAlign="justify"}(n);break;case"menu":!function(e){let t=document.createElement("p");e.appendChild(t),t.textContent="Here is our menu!"}(n);break;case"contact":!function(e){let t=document.createElement("p");e.appendChild(t),t.textContent="Saint elsewhere"}(n);break;case"faq":!function(e){let t=document.createElement("div");t.classList.add("title-div"),e.appendChild(t);let n=document.createElement("div");t.appendChild(n),n.classList.add("sub-div");let l=document.createElement("p");l.textContent="Is there something you cant make spicy?",n.appendChild(l);let a=document.createElement("i");a.classList.add("gg-chevron-down"),n.appendChild(a),a.addEventListener("click",(e=>{let l=document.createElement("div"),i=document.createElement("p");i.textContent="We dont know lmao",i.classList.add("answer"),l.classList.add("sub-answer"),l.appendChild(i),t.appendChild(l),t.style.height="200px";let d=document.createElement("i");d.classList.add("gg-chevron-left"),n.removeChild(n.lastChild),n.appendChild(d),d.addEventListener("click",(e=>{n.removeChild(n.lastChild),n.appendChild(a),t.removeChild(t.lastChild),t.style.height="100px"}))}))}(n);break;default:console.log("error")}}function s(){for(;n.firstChild;)n.removeChild(n.lastChild)}})();