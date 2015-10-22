document.addEventListener("DOMContentLoaded", function(event) {
	var btn = document.querySelector('.add'),
		input = document.querySelector('input');
	btn.addEventListener('click', function(){
 		if(input.value == '') {
   			return;
  		} else {
   			toDo.addItem();
  		}
	});
});