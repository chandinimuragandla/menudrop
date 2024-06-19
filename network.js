
function myFunction(){

    if(navigator.onLine){
        document.querySelector('h3').innerHTML="You're Online Now";
        document.querySelector('p').innerHTML="Internet Is Connected";
        document.querySelector('.icon').classList.remove('offline');
        document.querySelector('.box').classList.remove('offline');
        document.querySelector('.icon').innerHTML='<span class="material-symbols-outlined"> wifi </span>';   
    }
    else{
        document.querySelector('h3').innerHTML="You're Offline Now";
        document.querySelector('p').innerHTML="Internet Is Disconnected";
        document.querySelector('.icon').classList.add('offline');
        document.querySelector('.box').classList.add('offline');
        document.querySelector('.icon').innerHTML='<span class="material-symbols-outlined">wifi_off</span>';
    }
}

setInterval(() =>{
    myFunction();
}, 50);