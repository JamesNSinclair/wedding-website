let question = document.querySelectorAll("#question");
let answer = document.querySelectorAll('#answer')
const hotel-modal = document.querySelectorAll('#hotel-modal')

for (let i=0; 1 < question.length; i+=1 ) {
    let questions = question[i]
    let answers = answer[i]

questions.addEventListener('click', () => {
  if (answers.style.visibility === "visible") {
      answers.style.transform = "translateY(-5px)";
    answers.classList.toggle("height");
    answers.style.visibility = "hidden";



  } else {
    answers.style.visibility = "visible";
      answers.style.transform = "translateY(10px)";
      answers.classList.toggle("height");

    }

});
}


<div id='hotel-modal' class="modal-body">
  <img src="images/harbour-hotel.jpg" class="hotel">
  <h2 class='pt-1'> This is the Fowley Hotel </h2>
  <p> 5 miles from Eden Project </p>
  <p> 4 stars trip adviser </p>
    <p> Here is sosme tejes psab otehsi aoweojewg jds sdjer j sododjw jwewewej owwj wjo wejfweovewwnfxan hgrd sdwfweffw </p>
</div>
