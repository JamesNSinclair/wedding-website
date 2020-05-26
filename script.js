let question = document.querySelectorAll("#question");
let answer = document.querySelectorAll('#answer');
const hotelModal = document.querySelectorAll('#hotel-modal');
const hotels = document.querySelectorAll('.hotels');
let modal = document.querySelector('#modalHTML');
const button2 = document.querySelector('#button-2');
const button1 = document.querySelector('#button-1');

for (let i=0; i < question.length; i+=1 ) {
    let questions = question[i];
    let answers = answer[i];

questions.addEventListener('click', (e) => {
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


button1.addEventListener('click', () => {
  console.log('yo');
  createScroll(0);
});



function createScroll(index) {

	let next = document.querySelector('.next');
	let previous = document.querySelector('.previous');


		next.addEventListener('click', (e) => {

			if (index < 7) {
					index += 1;
          console.log(index);
				 createModal(index);
				 		} else {
				 console.log('next')
				}
		});

		previous.addEventListener('click', e => {
			if (index > 0) {
					index += -1;
          console.log(index);
		 			createModal(index);
			  } else {
				console.log('previous')
			}
		});

}


function createModal(index) {
 let changeHotel = hotels[index];
	console.log(changeHotel);

  const html = changeHotel;

modal.innerHTML = html.innerHTML;


}
