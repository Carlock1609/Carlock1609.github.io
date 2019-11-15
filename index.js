var p = document.getElementsByTagName('p')[0];
p.onclick = function() {
 // Trigger the `hover` event on the paragraph
 p.onhover.call(p);
};