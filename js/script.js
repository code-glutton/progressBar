let inputVar = document.getElementsByTagName("input");

console.log(inputVar);

var arr = Array.from(inputVar);
let currentNum = getComputedStyle(document.documentElement)
    .getPropertyValue('--progress');
     
arr.map(x => {
    console.log("osas");
    x.addEventListener("change", () => {
        let progressNum = 20;
        let currentNum = getComputedStyle(document.documentElement)
    .getPropertyValue('--progress');
     
    let parsedCurrent = parseInt(currentNum);
    console.log(parsedCurrent);

    let sum = progressNum + parsedCurrent;
    console.log(sum);
    document.documentElement.style
    .setProperty('--progress', `${sum}%`);
    })
});

console.log(currentNum);