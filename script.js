let btnRef = document.querySelectorAll(".btn");
let popupRef = document.getElementsByClassName("popup")[0];
let newgameBtn = document.getElementById("new-game");
let resetBtn = document.getElementById("reset");
let msgRef = document.getElementById("message");


//winning options

let winningOption = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
let arr=[false,false,false,false,false,false,false,false,false];

let count = 1;
function reset(){
   // alert(count);
  for(let i=0;i<arr.length;i++){
       arr[i]=false;
      document.getElementById("i"+(i+1)).disabled=false;
      document.getElementById("i"+(i+1)).innerText="";
  }
  count=1;
//  alert(count);
  // disable popup 
  popupRef.classList.add("hide");
  

}

// function  executed when a player wins
const win = (word) => {
//   count=0;
  //enable popup
  popupRef.classList.remove("hide");
  if (word == "X") {
    msgRef.innerHTML = " 'User' Wins";
  } else {
    msgRef.innerHTML = " 'Computer' Wins";
  }
};

//Function for draw
const drawFunction = () => {
  
  popupRef.classList.remove("hide");
  msgRef.innerHTML =" It's a Draw";

};


//Win Logic
const winCheck = () => {
  //  alert(count);
  count++;
  //traverse through all win options
  for (let i of winningOption) {
  
    let element1=btnRef[i[0]].innerText;
    let element2=btnRef[i[1]].innerText;
    let element3=btnRef[i[2]].innerText;
    
    //If 3 empty elements are same 
    if (element1 != "" && (element2 != "") && (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass  value to win
        win(element1);
        break;
        
      }
    }
    
  }
  if(count>9){ 
    // alert(count);
    drawFunction();
  } 
  
};




function start(btnId){
  // player logic
  player(btnId);
  winCheck();
  
  // computer logic
 
  computer();
//   winCheck();
  
}

function player(btnId){
 document.getElementById(btnId).innerText="X";

 let idx=btnId.charAt(1);
 arr[idx-1]=true;// reserve the button position
 document.getElementById(btnId).disabled=true;
 
 
}

function computer(){
    if(count<=8){
        
   
  while(true){
        
    let x=Math.floor(Math.random()*9)+1;
    // console.log(x);
    if(arr[x-1]==false){
      let text="i"+x;
      document.getElementById(text).innerText="O";
      arr[x-1]=true;// reserve the button position
      document.getElementById(text).disabled=true;
      winCheck();
      break;
       
    }
    

  }
}

}
//Enable Buttons and disable on page load
window.onload = reset();