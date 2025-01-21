"use strict";

const informationtext = document.getElementById("information");

function typewriter() {
    const text =
        "About Me / I am Luke, a 20-year-old software dev | " +
        "Skills and Hobbies / I like programming and video games / I also work out on a regular basis | " +
        "Education / Finished High school in 2023 / Currently studying at the University of Applied Science in Stralsund | " +
        "Languages / C, C#, Java, JS, Python, HTML, CSS, SQL";

    const textArr = text.split('');
    let index = 0;

    function type() {
        if (index < textArr.length) {
            if (textArr[index] === '|') {
                informationtext.innerHTML += "<br />";
            }
            else if (textArr[index] === '/') {
              informationtext.innerHTML += "<br /> &nbsp";
            } else {
                informationtext.innerHTML += textArr[index];
            }
            index++;
            setTimeout(type, 70);
        }
    }

    type();
}

typewriter();
