const question = document.getElementById("question");



question.addEventListener('click', () => {
  let answer = document.getElementById('answer')
  console.log('answer');



  if (answer.style.display === "none") {
    answer.style.display = "show";
     console.log('hello');
  } else { answer.style.display = "none";
   console.log('goodbye');;
}

});
