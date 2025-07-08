function makeChanges() {
    const A = document.querySelector('img[alt="Image 1"]');
    A.src = "timepass.png";

    const B = document.querySelector('img[alt="Image 2"]');
    B.src = "timepass.png";

    let C = document.querySelector("h1");
    C.remove();

    let D = document.querySelectorAll("p");
    D.forEach(p => {
        p.innerHTML = "Enough of JavaScript, lets stop.";
    });

    let E = document.querySelectorAll("h2");
    E.forEach(h2 => {
        h2.innerHTML = h2.innerHTML.toUpperCase();
    });

    let F = document.getElementById("div1");
    let F1 = document.createElement("h3");
    F.appendChild(F1);
    
}
let btn = document.querySelector("button");
btn.onclick = makeChanges;