
// & onclick

function changealphabet(small_alphabet) {
    // This function will make the small alphabet get print on big alphabet.
    document.getElementById("big-image").src = "img-alphabet/" + small_alphabet;
    // alert('error');
}

// & adding Sounds
function sounds(key_sound) {
    switch (key_sound) {

        // Number Row
        case 1:
            var audio01 = new Audio(sounds / one.mp3);
            audio01.play();
            break;
        case 2:
            var audio02 = new Audio(sounds / two.mp3);
            audio02.play();
            break;
        case 3:
            var audio03 = new Audio(sounds / three.mp3);
            audio03.play();
            break;
        case 4:
            var audio04 = new Audio(sounds / four.mp3);
            audio04.play();
            break;
        case 5:
            var audio05 = new Audio(sounds / five.mp3);
            audio05.play();
            break;
        case 6:
            var audio06 = new Audio(sounds / six.mp3);
            audio06.play();
            break;
        case 7:
            var audio07 = new Audio(sounds / seven.mp3);
            audio07.play();
            break;
        case 8:
            var audio08 = new Audio(sounds / eight.mp3);
            audio08.play();
            break;
        case 9:
            var audio09 = new Audio(sounds / nine.mp3);
            audio09.play();
            break;
        case 0:
            var audio09 = new Audio(sounds / zero.mp3);
            audio09.play();
            break;
        // Row 1st
        case q:
            var audio1 = new Audio(sounds / q.mp3);
            audio1.play();
            break;
        case w:
            var audio2 = new Audio(sounds / w.mp3);
            audio2.play();
            break;
        case e:
            var audio3 = new Audio(sounds / e.mp3);
            audio3.play();
            break;
        case r:
            var audio4 = new Audio(sounds / r.mp3);
            audio4.play();
            break;
        case t:
            var audio5 = new Audio(sounds / t.mp3);
            audio5.play();
            break;
        case y:
            var audio6 = new Audio(sounds / y.mp3);
            audio6.play();
            break;
        case e:
            var audio7 = new Audio(sounds / u.mp3);
            audio7.play();
            break;
        case i:
            var audio8 = new Audio(sounds / i.mp3);
            audio8.play();
            break;
        case o:
            var audio9 = new Audio(sounds / o.mp3);
            audio9.play();
            break;
        case p:
            var audio10 = new Audio(sounds / p.mp3);
            audio10.play();
            break;
        // ROw 2nd
        case a:
            var audio11 = new Audio(sounds / a.mp3);
            audio11.play();
            break;
        case s:
            var audio12 = new Audio(sounds / s.mp3);
            audio12.play();
            break;
        case d:
            var audio13 = new Audio(sounds / d.mp3);
            audio13.play();
            break;
        case f:
            var audio14 = new Audio(sounds / f.mp3);
            audio14.play();
            break;
        case g:
            var audio15 = new Audio(sounds / g.mp3);
            audio15.play();
            break;
        case h:
            var audio16 = new Audio(sounds / h.mp3);
            audio16.play();
            break;
        case j:
            var audio17 = new Audio(sounds / j.mp3);
            audio17.play();
            break;
        case k:
            var audio18 = new Audio(sounds / k.mp3);
            audio18.play();
            break;
        case l:
            var audio19 = new Audio(sounds / l.mp3);
            audio19.play();
            break;

        // Row 3rd
        case z:
            var audio21 = new Audio(sounds / z.mp3);
            audio21.play();
            break;
        case x:
            var audio22 = new Audio(sounds / x.mp3);
            audio22.play();
            break;
        case c:
            var audio23 = new Audio(sounds / c.mp3);
            audio23.play();
            break;
        case v:
            var audio24 = new Audio(sounds / v.mp3);
            audio24.play();
            break;
        case b:
            var audio25 = new Audio(sounds / b.mp3);
            audio25.play();
            break;
        case n:
            var audio26 = new Audio(sounds / n.mp3);
            audio26.play();
            break;
        case m:
            var audio27 = new Audio(sounds / m.mp3);
            audio27.play();
            break;

    }
}

var key = document.querySelectorAll('key').length;

for (let i = 0; i < key; i++) {
    document.querySelectorAll('key')[i].addEventListener('click', function () {
        var buttonHTML = this.innerHTML;
        sounds(buttonHTML);
    })
}
// Image change on click.
// let key = document.getElementsByClassName('key');
// console.log(key);---worked.

// where i want to display.
// var big_image = document.getElementById('big-image');

// key to display.
// var key = document.getElementsByClassName('key');

// from where i want to display img.
// created a pics array.
// var pics = {
//     "img-alphabet:": ["q.jpg", "w.jpg", "e.jpg", "r.jpg", "t.jpg", "y.jpg"]
// };

// var p;

// var key = document.getElementsByClassName('key');

// !For...Loop...This is the or loop syntax.
// for (let p = 0; p < key.length; p++) {
//     key[p].addEventListener('click', function () {
//         alert("Hello")
//         big_image.src = pics.src;
//         // big-image.src = small_image.src.replace();
//         // document.getElementsByid(big-image).innerHTML.style.display.block;
//         document.getElementsByClassName('')
//     })

// }



