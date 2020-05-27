let question = document.querySelectorAll("#question");
let answer = document.querySelectorAll('#answer');
const hotelModal = document.querySelectorAll('#hotel-modal');
const hotels = document.querySelectorAll('.hotels');
const activities = document.querySelectorAll('.activities');
let modals = document.querySelectorAll('#modalHTML');
const button3 = document.querySelector('#button-3');
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
  createScroll(0, 0);
});

button2.addEventListener('click', () => {
  console.log('yo');
  createScroll(0, 1);
});

button3.addEventListener('click', () => {
  console.log('yo');
  createScroll(0, 2);
});

function createScroll(index, button) {

  let nexts = document.querySelectorAll('.next');
  let previouss = document.querySelectorAll('.previous');

console.log(nexts);
	let next = nexts[button];
	let previous = previouss[button];


		next.addEventListener('click', (e) => {

			if (index < 7) {
					index += 1;
          console.log(index);
				 createModal(index, button);
				 		} else {
				 console.log('next')
				}
		});

		previous.addEventListener('click', e => {
			if (index > 0) {
					index += -1;
          console.log(index);
		 			createModal(index, button);
			  } else {
				console.log('previous')
			}
		});

}


function createModal(index, button) {
  modal = modals[button]
  if (button === 0) {
 let changeHotel = hotels[index];
	console.log(changeHotel);

  const html = changeHotel;

modal.innerHTML = html.innerHTML;
} else if (button === 1) {

let changeActivities = activities[index];
 console.log(changeActivities);

 const html = changeActivities;

modal.innerHTML = html.innerHTML;
}
}
