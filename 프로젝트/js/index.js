let slides = document.querySelectorAll('#slides >img');
let prev = document.getElementById('prev')
let next = document.getElementById('next')

let current= 0;
showSlides(current);

prev.onclick =prevSlides;
next.onclick =nextSlides;

function showSlides(n){
  for (let i = 0; i <slides.length; i++){// 배열 첨부터 끝까지 반복
  slides[i].style.display = 'none'; // 모든 이미지를 화면에서 감춤
  }
  slides[n].style.display = 'block'; // n번째 이미지만 회면 출력

}

function prevSlides(){
  if (current > 0) current -= 1; // 0보다크면 이전위치
  
  else current = slides.length -1; // 그렇지 않으면 (첫번쪠 이미지임으로 마지막 위치로 이동)

    showSlides(current)
}
function nextSlides(){
  if (current < slides.length - 1)current += 1; // 그렇지 않으면 (첫번쪠 이미지임으로 마지막 위치로 이동)
  
  else current = 0; //그렇지 않으면 (마지막 이미지임으로 첫번째 위치로 이동)

    showSlides(current)
}