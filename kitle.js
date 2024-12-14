var kilo=document.querySelector("#kilo");
var boy=document.querySelector("#boy");
var kilodegeri=document.querySelector("#kilodegeri");
var boydegeri=document.querySelector("#boydegeri");
var pt=document.querySelector("#text");
var pn=document.querySelector("#number");
var button=document.querySelector("button");



kilo.addEventListener("click",function(e) {
    kilodegeri.innerHTML=kilo.value+" kg";});

    boy.addEventListener("click",function(a) {

        boydegeri.innerHTML=boy.value +" cm";});



button.addEventListener("click",function(e) {


var hesapla=(kilo.value)/(boy.value*boy.value)*10000;
console.log(hesapla);

pn.innerHTML=hesapla;




if(hesapla<18.5){ 
    pt.innerHTML="Düşük Kilo"; 
    pt.style.color="burlywood"; 
}else if(hesapla >= 18.5 && hesapla <= 24.9){ 
    pt.innerHTML="Sağlıklı Kilo"; 
    pt.style.color="darkgreen"; 
}else if(hesapla >= 25 && hesapla <= 29.9){
    pt.innerHTML="Fazla Kilo"; 
    pt.style.color="red"; 

}else if(hesapla >= 30 && hesapla <= 34.9){
    pt.innerHTML="1.Sınıf Obezite"; 
    pt.style.color="red"; 
  
}else if(hesapla >= 35 && hesapla <= 39.9){ 
    pt.innerHTML="2.sınıf obezite"; 
    pt.style.color="red"; 

}else  if(hesapla >= 40) {
     pt.innerHTML="3.sınıf obezite"; 
     pt.style.color="darkred"; } 
     pt.style.textDecoration="underline";



});
