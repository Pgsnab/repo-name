window.addEventListener('DOMContentLoaded', () =>{


function showhide(item, arrow){
  if(item.classList.contains('show')){
      item.classList.remove('show');
      if (arrow.classList.contains('six_item_wrapper_rot')){
        arrow.classList.remove('six_item_wrapper_rot');
      } 
      return
  }
  item.classList.add('show');
  arrow.classList.add('six_item_wrapper_rot');
}

const tab = document.querySelectorAll('.tab');


tab.forEach(item => {
  item.addEventListener('click', function () {
      const content = item.children[1];
      // const arrow = item.children[0].children[2];
      let arrow;
      if (item.children[0].children[2]){
        arrow = item.children[0].children[2];
      }
      else{
        arrow = item.children[0].children[1];
      }
      showhide(content, arrow);
  });
});

const ticketBtn = document.querySelectorAll('.btn_ticket'),
    sponsorBtn = document.querySelectorAll('.btn_sponsor'),
    overlay   = document.querySelector('.js-overlay-modal'),
    linkMenu = document.querySelector('.header_list_item_link_speak'),
    modalTicket = document.querySelector('.modal_ticket'),
    modalSponsor = document.querySelector('.modal_sponsor'), 
    closeButtons = document.querySelectorAll('.js-modal-close');


/* Перебираем массив кнопок , открываем модальное окно */
ticketBtn.forEach(function(item){

item.addEventListener('click', function(e) {

e.preventDefault();

modalTicket.classList.add('active');
menu.classList.remove('header_list_active');
overlay.classList.add('active');

});

});



linkMenu.addEventListener('click', function(e) {
menu.classList.remove('header_list_active');
});

sponsorBtn.forEach(function(item){

item.addEventListener('click', function(e) {

  e.preventDefault();

  modalSponsor.classList.add('active');
  overlay.classList.add('active');

});

});

/* Перебираем массив кнопок , закрывае модальные окна */
closeButtons.forEach(function(item){

item.addEventListener('click', function(e) {
var parentModal = item.parentNode;

parentModal.classList.remove('active');
overlay.classList.remove('active');

});

});


/* Закрыаем модальное окна по Esc */
document.body.addEventListener('keyup', function (e) {
var key = e.keyCode;

if (key == 27) {
  if( modalTicket.classList.contains('active')){
      modalTicket.classList.remove('active');
  }
  if( modalSponsor.classList.contains('active')){
      modalSponsor.classList.remove('active');
  }
  document.querySelector('.overlay').classList.remove('active');
};
}, false);

/* Закрыаем модальное окна по щелчку по подложке */
overlay.addEventListener('click', function() {
  if( modalTicket.classList.contains('active')){
      modalTicket.classList.remove('active');
  }
  if( modalSponsor.classList.contains('active')){
      modalSponsor.classList.remove('active');
  }
this.classList.remove('active');
});


const ham = document.querySelector('.hamburger_big'),
    close = document.querySelector('.header_list__close'),
    menu = document.querySelector('.header_list');


ham.addEventListener('click', function() {
  menu.classList.add('header_list_active');
});

close.addEventListener('click', function() {
menu.classList.remove('header_list_active');
});


// Таймер
let today = new Date();
let dd = String(today.getDate() + 3).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd

function getTimeRemaining (endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 *60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60)

    return {
            'total': t,
            'days': days,
            'hours':hours,
            'minutes': minutes,
            'seconds':seconds
        };
}

function getZero(num){
    if (num >= 0 && num < 10){
        return `0${num}`;
    }else{
        return num;
    }
}

function setClock(selector, endtime){
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    
    updateClock();

    function updateClock (){
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0){
            clearInterval(timeInterval);
        }

    }




}

try{
  setClock('.timer', today);
}
catch{
  console.log('No timer');
}





});

