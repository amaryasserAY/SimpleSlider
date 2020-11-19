// Get Slider Imges

let sliderImge = Array.from(document.querySelectorAll('.slider-container img'));

let sliderCount = sliderImge.length;

let currentSlider =1;

let sliderNumber = document.getElementById('slider-number');

let nextButton = document.getElementById('next'),
    prevButton =document.getElementById('prev');


nextButton.onclick = next;
prevButton.onclick = prev;


let pagenationC = document.createElement('ul');

pagenationC.setAttribute('id', 'pagenation-ul');




let pagenationUl = document.getElementById('pagenation-ul');  


for (let i = 1; i <= sliderCount; i++){

    let pageli = document.createElement('li');

    pageli.setAttribute('data-index', i);

    pageli.appendChild(document.createTextNode(i));

    pagenationC.appendChild(pageli);

}

document.getElementById('indicators').appendChild(pagenationC);

let pagArra = Array.from(document.querySelectorAll(' #pagenation-ul li'));


for (let i = 0; i < pagArra.length; i++) {

    pagArra[ i ].onclick = function () {

        currentSlider = parseInt(this.getAttribute('data-index'));

        cheker();
    };
}

function prev() {

    if (prevButton.classList.contains('disabled')){
        return 'false';
    } else {
        currentSlider--;

        cheker();
    }
        
}

function next() { 
        if (nextButton.classList.contains('disabled')){
        return 'false';
    } else {
        currentSlider++;
        
        cheker();
    }
}

cheker();

function cheker() {
    
    sliderNumber.textContent = `Slider # ${currentSlider} Of  ${sliderCount}`; 
    
    removeCh();
    
    sliderImge[currentSlider - 1].classList.add('active');

    pagenationC.children[currentSlider - 1].classList.add('active');
    
    if (currentSlider == 1) {

        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
}

        if (currentSlider == sliderCount) {

        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
}

}

function removeCh() {

    sliderImge.forEach(function (img) {
        img.classList.remove('active');
    });

    pagArra.forEach(function (boli) {

        boli.classList.remove('active');
        
    });

}




