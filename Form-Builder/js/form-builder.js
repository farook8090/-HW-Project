// console.log('This is form-builder js');

// // item i want to drop.
// let auto_complete = document.querySelector('.auto-complete');
// let button = document.querySelector('.button');
// let checkbox_group = document.querySelector('.checkbox-group');
// let date_field = document.querySelector('.date-field');
// let file_upload = document.querySelector('.file-upload');
// let header = document.querySelector('.header');
// let hidden_input = document.querySelector('.hidden-input');
// let number = document.querySelector('.number');
// let paragraph = document.querySelector('.paragraph');
// let radio_group = document.querySelector('.radio-group');
// let select = document.querySelector('.select');
// let text_filed = document.querySelector('.text-filed');
// let text_area = document.querySelector('.text-area');

// // Place where i want to drop the dragged item.
// let drop_area = document.getElementsByClassName('drop-area');

// // !EventListener for Draggable Element.

// // This function is telling what wil happen when start drag.
// auto_complete.addEventListener('dragstart', (e) => {
//     // adding of class.
//     e.target.className += ' drag-item';
//     // setTimeout(() => {
//     //     e.target.className = ' hide';
//     // }, 0);
//     console.log('Auto Complete DragStart has been triggered.')
// });

// // This function is telling what wil happen when end drag.
// auto_complete.addEventListener('dragend', (e) => {

//         console.log('Auto Complete DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// button.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.
// button.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// checkbox_group.addEventListener('dragstart', () => {
//     console.log('Auto Complete DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.
// checkbox_group.addEventListener('dragend', () => {
//     console.log('Auto Complete DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// date_field.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.
// date_field.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// file_upload.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });

// // This function is telling what wil happen when end drag.
// file_upload.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// header.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });

// // This function is telling what wil happen when end drag.
// header.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// hidden_input.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.
// header.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// number.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.

// number.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// paragraph.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.

// paragraph.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// radio_group.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.

// radio_group.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// select.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.

// select.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.
// text_filed.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.

// text_filed.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });
// // This function is telling what wil happen when start drag.

// text_area.addEventListener('dragstart', () => {
//     console.log('Button DragStart has been triggered.')
// });
// // This function is telling what wil happen when end drag.

// text_area.addEventListener('dragend', () => {
//     console.log('Button DragEnd has been triggered.')
// });

// // !Event Listener on where we want to drop the dragged element.

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");

//     //alert(data);

//     var getinput = document.getElementById(data).getAttribute('data-type');

//     var maindiv = document.getElementById(ev.target.id)

//     maindiv.innerHTML += getinput;


// }

// !drag
function onDragStart(event) {

    // Add the target element's id to the data transfer object
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.effectAllowed = "copy";
}


// !DragOver
function onDragOver(event) {
    event.preventDefault();
    // Set the dropEffect to move
    event.dataTransfer.dropEffect = "copy"
}

// !Drop
function onDrop(event) {

    //CASE 1: Single drop effect is defined for this drop location
    // event.preventDefault();
    // // Get the id of the target and add the moved element to the target's DOM
    // var data = event.dataTransfer.getData('<input type="text">');
    // event.target.appendChild(document.getElementById(data));
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    //alert(data);
    var getinput = document.getElementById(data).getAttribute('data-input');
    var maindiv = document.getElementById(event.target.id);
    maindiv.innerHTML += getinput;
}