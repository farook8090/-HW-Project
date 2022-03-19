// Color Change on clicking the colors.

function changeColor(color) {
    document.getElementById('demo').style.backgroundColor = color;
    document.getElementById('button1').style.backgroundColor = color;
    document.getElementById('button2').style.backgroundColor = color;
    document.getElementById('button3').style.backgroundColor = color;
    document.getElementById('button4').style.backgroundColor = color;
    document.getElementById('button5').style.backgroundColor = color;
    document.getElementById('button6').style.backgroundColor = color;
    document.getElementById('button7').style.backgroundColor = color;
    document.getElementById('button8').style.backgroundColor = color;
    document.getElementById('paragraph').style.color = color;
}

function openNav() {
    var element = document.getElementById("picker-container");
    if (element.style.left == "-20px") {
        element.style.left = "-275px";
    } else {
        element.style.left = "-20px";
    }
}





// const aqua = document.getElementById('demo');

// // 👇️ Change text color on mouseover
// aqua.addEventListener('click', function changeColor() {
//   box.style.background = blue;
// });

// 👇️ Change text color back on mouseout
// aqua.addEventListener('mouseout', function handleMouseOut() {
//   box.style.background = 'black';
// });




// Opening and Closing.

// function openNav() {
//     document.getElementById('picker-container').style.left = "-20px";
// }

// function closeNav() {
//     document.getElementById('picker-container').style.left = "-270px";
// }



// function openNav() {
//     openNav_();
//     closeNav();
// }

// function openNav_() {
//     document.getElementById('picker-container').style.left = "-20px";
// }

// function closeNav() {
//     document.getElementById('picker-container').style.left = "-270px";
// }