let inputVar = document.getElementsByClassName("input");

console.log(inputVar);

var arr = Array.from(inputVar);

     
arr.map(x => {
    console.log(x);
    x.addEventListener("change", () => {
        let progressNum = 25;
        let currentNum = getComputedStyle(document.documentElement)
    .getPropertyValue('--progress');
    
    console.log(currentNum + " num2");
    let parsedCurrent = parseInt(currentNum);
    if (parsedCurrent < 100){
        console.log(parsedCurrent + " parsed Current");
        
        let sum = progressNum + parsedCurrent;
        console.log(sum + " sum");
        document.documentElement.style
        .setProperty('--progress', `${sum}%`);
        console.log(getComputedStyle(document.documentElement)
        .getPropertyValue('--progress') + " num");


        }
        else{
            console.log("full");
        }
    })
    
});
