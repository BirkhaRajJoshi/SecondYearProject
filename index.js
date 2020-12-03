var image = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg'];
var image2 = ['photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg'];
var image3 = ['photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg'];
var image4 = ['photos/10.jpg', 'photos/11.jpg', 'photos/12.jpg'];
var image5 = ['photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg'];
var image6 = ['photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg'];
var image7 = ['photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg'];
var image8 = ['photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg'];
i = 0;
function first_image_slider() {
    document.getElementById('dodhara').src = image[i];
    document.getElementById('bajura').src = image2[i];
    document.getElementById('api_himal').src = image3[i];
    document.getElementById('suklaphata').src = image4[i];
    document.getElementById('ugaatara').src = image5[i];
    document.getElementById('batkot').src = image6[i];
    document.getElementById('lenga').src = image7[i];
    document.getElementById('tripura').src = image8[i];
    if (i < (image.length - 1)) {
        i++;
    } else {
        i = 0;
    }
}
setInterval(first_image_slider, 2000);


// ..................first-image slider....................
// var image1 = ['photos/bedkot-lake.jpg','photos/mustang.jpg','photos/viagale.jpg'];
// var i=0;
// function second_image_slider(){
//     document.getElementById('bajura'). src = image1[i];
//     if(i<(image1.lenth-1)){
//         i++;
//     }else{
//         i=0;
//     }
// }
// setInterval(second_image_slider,2000);