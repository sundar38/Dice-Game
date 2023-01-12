let playername = document.querySelectorAll("input")
let btns = document.getElementsByClassName("dicerollbtn")
let scores = document.getElementsByTagName("span")
let winnerbtn = document.getElementById("winner")
let output=document.querySelector(".output")

let noofbtns = 0;
winnerbtn.disabled = true;

for (let i = 0; i <= btns.length - 1; i++) {
    btns[i].addEventListener("click", () => { rolldice(btns[i].id) })
}



function rolldice(id) {
    noofbtns++;
    btns[id].disabled = true //only once the button can be pressed so that user cannot enter multiple times
    let arr = ["1", "2", "3", "4", "5", "6"]
    let randomindex = Math.floor(Math.random() * arr.length)
    // console.log(randomindex);
    let randomnumber = arr[randomindex]
    console.log(randomnumber)
    scores[id].innerHTML = randomnumber
    // if(randomnumber>winnerpoints){
    //     winnerpoints=randomnumber;        
    // }
    if (noofbtns == 5) {
        winnerbtn.disabled = false
        // console.log(winnerpoints);
        winnerbtn.addEventListener("click",() => {declaringwinner(0)});
    }
        
    
}


function declaringwinner(winnerpoints) {
    for (let t of scores) {
        if (t.innerText > winnerpoints) {
            winnerpoints = t.innerText
        }
    }
    console.log(winnerpoints);
    let winnerslist=""
    for(let i=0;i<=scores.length-1;i++){
        if(scores[i].innerText==winnerpoints){
            winnerslist=winnerslist+" "+playername[i].value
        }
    }
    output.innerText=winnerslist+" won the game"
}
