import confetti from "canvas-confetti";


const btn = document.querySelector(".confetti");



const scalar = 2;
const moneyFly = confetti.shapeFromText({ text: '💸', scalar });
const moneyRegular = confetti.shapeFromText({ text: '💵', scalar });
const moneyBag = confetti.shapeFromText({ text: '💰', scalar });
const diamond = confetti.shapeFromText({ text: '💎', scalar });




const defaults = {
  spread: 360,
  ticks: 60,
  gravity: 0,
  decay: 0.96,
  startVelocity: 20,
  shapes: [moneyFly, moneyRegular, moneyBag, diamond],
  scalar
};


function shoot() {
  confetti({
    ...defaults,
    particleCount: 30
  });

  confetti({
    ...defaults,
    particleCount: 5,
    flat: true
  });

}


btn.addEventListener("click", () => {

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
  
  }
);