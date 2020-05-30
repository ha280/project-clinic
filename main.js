const tabs = document.querySelector('.section__curibility');
const panels = document.querySelectorAll('.curability__test-1');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('d-block');
        tabs.style.display = "none";
        panel.style.display = "block";

      }else{
        panel.classList.remove('d-block');
      }
    });
  }
});

const backs = document.querySelectorAll('#back');
  Array.from(backs).forEach((back) => {
    back.addEventListener('click',(e) => {
      tabs.style.display = "block";
      Array.from(panels).forEach((panel) => {
        panel.style.display = "none";
        panel.classList.remove('d-block');
      });
    });
});
const dis_list_tabs = document.querySelector('.disease_list');
const dis_list_panels = document.querySelectorAll('.disease_name_list-A');
dis_list_tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(dis_list_panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('d-block');
        panel.style.display = "block";

      }else{
        panel.classList.remove('d-block');
        panel.style.display = "none";
      }
    });
  }
}); 
function random(){
  var a=document.getElementById('name').value;
  console.log(a);
  if(a == 'USA ,Canada'){
     var array= ['Select t','haha','hyewdbhjnd','bhrbh'];
  }
  else if(a == 'Europe,Australia'){
    var array= ['Select t','haha','hyewdbhjnd','bhrbh'];
  }
  else if(a == 'Asia,Africa,S.America'){
    var array= ['Select t','haha','hyewdbhjnd','bhrbh'];
  }
  else if(a == 'India'){
    var array= ['Select t','haha','hyewdbhjnd','bhrbh'];
  }
  else {
    var array= ['Select t'];
  }
  var string='';
  for(i=0; i<array.length ; i++){
    string = string+"<option>" + array[i] + "</option>";
  }
  string= "<select name='lol' class='custom-select-lg w-75 my-3'>" + string+ "</select>";
  document.getElementById('output').innerHTML= string;
}


 