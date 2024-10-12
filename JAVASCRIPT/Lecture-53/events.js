function changeText(){
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Abhijeet";
}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changeText);