

// Get references to HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add a click event listener to the button
button.addEventListener('click', function() {
    if (input.value === '') {
        alert("Please enter a Chapter name");
    }  
        else {
        // Create a new list item and a delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set the text of the list item to the input value
        li.textContent = input.value;

        // Set the text of the delete button and add it to the list item
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);

        // Add the list item to the list
        list.appendChild(li);

        // Add a click event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input field and focus on it
        input.value = '';
        input.focus();
    }
});

// This line ensures the input field is initially focused
input.focus();