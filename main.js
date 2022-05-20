import './style.scss'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'venobox/dist/venobox'

let carouselControPre = document.getElementById("2carouselControPre");
let carouselControNext = document.getElementById("2carouselControNext");


carouselControPre.addEventListener('click',function () {
document.getElementById("HiddenBtnPre").click();
});
carouselControNext.addEventListener('click',function () {
    document.getElementById("HiddenBtnNext").click();
});
new VenoBox({
    selector: '.venobox'
});