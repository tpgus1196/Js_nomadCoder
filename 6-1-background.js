const  images = ["bg1.jpg","bg2.jpg","bg3.jpg"];

//random()은 0-1사이 숫자 랜덤으로 준다.
const chosenImage = images[Math.floor(Math.random()*images.length)]; //random에 배열길이까지 숫자(10)곱하면 0에서 10까지 랜덤수 얻을 수 있다 

console.log(chosenImage);

//이미지 html에 추가(js로 > createElement)
const bgImage = document.createElement("img");
// console.log(bgImage); //이건 페이지에서 찾을 수 없다.
bgImage.src = `img/${chosenImage}`; //아직 document에서 존재하지 않음
document.body.appendChild(bgImage); //body에 html 추가