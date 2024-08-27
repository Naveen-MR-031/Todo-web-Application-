// Select Container

let container = document.querySelector('.container');
 // console.log(container)


// console.log(input)

let form = document.querySelector('form');
// console.log(form)


form.addEventListener('submit',function(event) {
	event.preventDefault();
	let input = document.getElementById('todo-input').value;

				// Empty Value
				document.getElementById('todo-input').value="";	
	// console.log(input)

	let todolist = document.getElementById('todo-list');

	console.log(todolist)

	let li = document.createElement('li');
	// console.log(li)
	li.innerHTML=input + `<button onclick='deleteItems(event)'>delete</button>`;
	// console.log(li)

	// Append Element
	todolist.append(li)

})
function deleteItems(event) {
	
			event.target.parentElement.remove();
		}


