document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll('.effect');

  questions.forEach(question => {
      question.addEventListener('click', function() {
          const answer = this.querySelector('.answer');
          answer.classList.toggle('show');
          
          // Shift the next question temporarily
          const nextQuestion = this.nextElementSibling;
          if (answer.classList.contains('show')) {
              nextQuestion.classList.add('shifted');
          } else {
              nextQuestion.classList.remove('shifted');
          }
      });
  });
});