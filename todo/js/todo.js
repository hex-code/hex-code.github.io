var toDo = (function() {
   	// method to add element to the list
	function addItem() {
		// create template for list items
		var listItem = document.createElement('li'),
      		deleteBtn = document.createElement('button'),
      		addContainer = document.querySelector('.todo'),
      		input = document.querySelector('input'),
   			text = document.createElement('p');
   		deleteBtn.innerHTML = 'x';
		deleteBtn.className = 'del-but';
		text.innerHTML = input.value;
		addContainer.appendChild(listItem);
		listItem.appendChild(text);
		text.appendChild(deleteBtn);
		input.value = '';
		console.log(deleteBtn);
		delItem(deleteBtn, listItem);
	}
	function delItem(delBtn, list) {
		delBtn.addEventListener('click', function(){
      		list.parentNode.removeChild(list);
    	})
	}
	return {
		addItem: addItem
	}
})();

	

