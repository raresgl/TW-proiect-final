// Start task II  2 (1p) - La intrarea pe pagina, sa existe minim 2 sectiuni cu text, in care textul apare cuvant cu cuvant intr-o "animatie" JavaScript (la fiecare treime de secunda apare cate un cuvant din text). 
// Section 1
function show1()
{
    document.getElementById("word1").style.visibility="visible";
}
setTimeout("show1()", 333)

function show2()
{
    document.getElementById("word2").style.visibility="visible";
}
setTimeout("show2()", 666)

function show3()
{
    document.getElementById("word3").style.visibility="visible";
}
setTimeout("show3()", 999)

function show4()
{
    document.getElementById("word4").style.visibility="visible";
}
setTimeout("show4()", 1332)


// Section 2
function show5()
{
    document.getElementById("word5").style.visibility="visible";
}
setTimeout("show5()", 1665)

function show6()
{
    document.getElementById("word6").style.visibility="visible";
}
setTimeout("show6()", 1998)
// End task II 2 





// Start task I  11 (0.5p) - In pagina va exista un input de tip text si un buton cu textul "seteaza culoare background". La click pe buton, se va prelua culoarea din input si daca e valida se va asocia backgroundului, daca nu, se va da un alert cu mesajul "Culoare invalida".
function schimbaCuloarea1(){
    if(document.getElementById("culoare").value=='rosu'){
        document.getElementById("despre").style.backgroundColor = "red";
    } else if(document.getElementById("culoare").value=='albastru'){
        document.getElementById("despre").style.backgroundColor = "blue";
    } else if(document.getElementById("culoare").value=='verde'){
        document.getElementById("despre").style.backgroundColor = "green";
    } else  if(document.getElementById("culoare").value=='custom'){
        document.getElementById("despre").style.backgroundColor = "#917658";
    } else {
        alert("Culoare invalida! Incearca 'rosu', 'verde' si 'albastru'. Pentru a reveni la culoare initiala, scrie 'custom'");
    }
}

function schimbaCuloarea2(){
    if(document.getElementById("culoare2").value=='rosu'){
        document.getElementById("servicii").style.backgroundColor = "red";
    } else if(document.getElementById("culoare2").value=='albastru'){
        document.getElementById("servicii").style.backgroundColor = "blue";
    } else if(document.getElementById("culoare2").value=='verde'){
        document.getElementById("servicii").style.backgroundColor = "green";
    } else  if(document.getElementById("culoare2").value=='custom'){
        document.getElementById("servicii").style.backgroundColor = "#F5EEE6";
    } else {
        alert("Culoare invalida! Incearca 'rosu', 'verde' si 'albastru'. Pentru a reveni la culoare initiala, scrie 'custom'");
    }
}

function schimbaCuloarea3(){
    if(document.getElementById("culoare3").value=='rosu'){
        document.getElementById("preturi").style.backgroundColor = "red";
    } else if(document.getElementById("culoare3").value=='albastru'){
        document.getElementById("preturi").style.backgroundColor = "blue";
    } else if(document.getElementById("culoare3").value=='verde'){
        document.getElementById("preturi").style.backgroundColor = "green";
    } else  if(document.getElementById("culoare3").value=='custom'){
        document.getElementById("preturi").style.backgroundColor = "#F5EEE6";
    } else {
        alert("Culoare invalida! Incearca 'rosu', 'verde' si 'albastru'. Pentru a reveni la culoare initiala, scrie 'custom'");
    }
}

function schimbaCuloarea4(){
    if(document.getElementById("culoare4").value=='rosu'){
        document.getElementById("contact").style.backgroundColor = "red";
    } else if(document.getElementById("culoare4").value=='albastru'){
        document.getElementById("contact").style.backgroundColor = "blue";
    } else if(document.getElementById("culoare4").value=='verde'){
        document.getElementById("contact").style.backgroundColor = "green";
    } else  if(document.getElementById("culoare4").value=='custom'){
        document.getElementById("contact").style.backgroundColor = "#917658";
    } else {
        alert("Culoare invalida! Incearca 'rosu', 'verde' si 'albastru'. Pentru a reveni la culoare initiala, scrie 'custom'");
    }
}
// End task I 11 





// Start task III 7 (1.5p) - Crearea unui mod custom de scrollare prin pagina.
var clicks = 0;
    function scrollNext() {
        clicks += 1;
        if(clicks == 1){
            document.getElementById("scrollBut").href = "#despre";
        } else if(clicks == 2) {
            document.getElementById("scrollBut").href = "#servicii";
        } else if(clicks == 3) {
            document.getElementById("scrollBut").href = "#program";
        } else if(clicks == 4) {
            document.getElementById("scrollBut").href = "#preturi";
        } else if(clicks == 5) {
            document.getElementById("scrollBut").href = "#contact";
        } else {
            document.getElementById("scrollBut").href = "#acasa";
        }
    };
    // Pentru un scroll smooth am folosit urmatorul cod in style.css:
    // html {
    //     scroll-behavior: smooth;
    // }
// End task III 7 





// Start task I 6 (0.5p) - La intrarea pe pagina sa se afiseze cate ore, minute, secunde mai sunt pana la finalul sesiunii (sau o alta data calendaristica). Sa se actualizeze aceasta informatie la fiecare secunda.
var countDownDate = new Date("Jul 18, 2020 15:37:25").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = days + " zile, " + hours + " ore, "
  + minutes + " minute, " + seconds + " secunde";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Perioada de reduceri s-a terminat!";
  }
}, 1000);
// End task I 6





// Start task I 7 (0.5p) - La intrarea pe pagina, intr-o sectiune speciala se va afisa o prezicere aleatoare (dintr-un vector de siruri). De exemplu: "O sa treci toate examenele!", "O sa ai o vara frumoasa!", "O sa te ciupeasca un tantar!" etc.
const mesaje = ["Iubim animalele!", "Bine ati venit!", "Din dragoste pentru animale!", "Servicii de calitate maxima!", "Pleaca in vacanta fara griji!"];
const randomMessage = mesaje[Math.floor(Math.random() * mesaje.length)];
// console.log(randomMessage);
document.getElementById("mesaj").innerHTML = randomMessage;
// End task I 7





// Start task III 15 (1.5p) - Crearea unui meniu custom care sa apara la click-dreapta in pagina.
window.addEventListener("contextmenu",function(event){
    event.preventDefault();
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
  });
  window.addEventListener("click",function(){
    document.getElementById("context-menu").classList.remove("active");
  });


function actiune1(){
    document.getElementById("actiune1").href = "#acasa";
}

function actiune2(){
    document.getElementById("titlu").innerHTML = "tetet";
}
// End task III 15





// Start task I 8 (0.5p) - Va exista un buton in pagina, cu textul "ascunde imagini". La click pe el, orice element de tip imagine de oriunde din pagina, dispare. Textul butonul va fi acum "afiseaza imagini". La click pe el se reafiseaza inapoi toate imaginile, iar textul lui redevine "ascunde imagini".
var clicks2 = 0;
function ascundeImg(){
    clicks2 += 1;
    if(clicks2 % 2 == 0){
        document.getElementById("ascundeImg").innerHTML = "Afiseaza"
        document.getElementById("img1").style.visibility="hidden";
        document.getElementById("img2").style.visibility="hidden";
    } else if(clicks2 % 2 != 0) {
        document.getElementById("ascundeImg").innerHTML = "Ascunde"  
        document.getElementById("img1").style.visibility="visible";
        document.getElementById("img2").style.visibility="visible";
    }
}
// End task I 8