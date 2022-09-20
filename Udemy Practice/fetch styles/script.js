let reduceFont = document.getElementById("reduce");
let increaseFont = document.getElementById("increase");

let text = document.getElementById("heading");
let font = window.getComputedStyle(text).fontSize; //getElementsByTagName also returns array therefore use index to access a specific element
let numericFont = font.substring(0, (font.length - 2));

function lessFont() {
    numericFont -= 20;
    text.style.fontSize = `${numericFont}px`;
    console.log(text.style.fontSize);
}

function addFont() {
    numericFont += 20;
    text.style.fontSize = `${numericFont}px`;
    console.log(text.style.fontSize);
}

reduceFont.onclick = lessFont;
increaseFont.onclick = addFont;
// function lessFont() {
//   if (font.length <= 4) {
//     let numericFont = font.substring(0, 2);
//     font = numericFont - 20 + "px";
//     console.log(font);
//     text.style.fontSize = font;
//   } else {
//     let numericFont = font.substring(0, 3);
//     font = numericFont - 20 + "px";
//     console.log(font);
//     text.style.fontSize = font;
//   }
// }

// function addFont() {
//   if (font.length <= 4) {
//     let numericFont = font.substring(0, 2);
//     console.log(numericFont);
//     numericFont = numericFont + 20;
//     console.log(font);
//     text.style.fontSize = font;
//   } else {
//     let numericFont = font.substring(0, 3);
//     font = numericFont + 20 + "px";
//     console.log(font);
//     text.style.fontSize = font;
//   }
// }

// reduceFont.onclick = lessFont;
// increaseFont.onclick = addFont;
