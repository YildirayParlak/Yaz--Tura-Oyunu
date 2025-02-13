let tura = 0;
let yazi = 0;

let coin = document.querySelector(".coin");
let flipbtn = document.querySelector("#flip-btn");
let resetbtn = document.querySelector("#reset-btn");

//flip butonuna tıklandıgında 
flipbtn.addEventListener('click',()=>{
    //rastgele 0 veya bir sayısını secer 0 = tura ,1= yazı
    let i = Math.floor(Math.random() * 2);
    //animasyonu gecici olarak kapat
    coin.style.animation = 'none';  

    if(i){
        // eger i 1 ise yani yazi ise 100 ms sonra coin'e spin-tura animasyonu uygula
        setTimeout(() => {
            coin.style.animation ="spin-tura 3s forwards";
        }, 100)
        tura++;
    }else{
        //eger i 0 ise yani tura ise 100 ms sonra coin'e spin-yazi animasyonu uygula
        setTimeout(() => {
            coin.style.animation ="spin-yazi 3s forwards";
        }, 100)
        yazi++;
    }

    //değerleri güncelle ve butonu devre dışı bırak
    setTimeout(updateStats, 3000);
    disableButton();

});

function updateStats(){
    document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
    document.querySelector("#yazi-count").textContent = `Yazi: ${yazi}`;

}

function disableButton(){}
flipbtn.disabled = true;
setTimeout(() => {
    flipbtn.disabled = false;
}, 3000)

//reset butonuna tıklama
resetbtn.addEventListener('click',() => {
    coin.style.animation ='none';
    tura =0;
    yazi =0;
    updateStats();
});