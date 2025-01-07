/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
   // Conditional logic to change the <div> text
   if (document.querySelector('button').classList.contains('btn-primary')) {
    document.querySelector('.text-dark').innerHTML = '&check; blue';
  }// Put your answers in here
})();
