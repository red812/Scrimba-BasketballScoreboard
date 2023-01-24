let homeEl = document.getElementById("home-score");

let guestEl = document.getElementById("guest-score");

let homescore = 0;
let guestscore = 0;

function hscore(val) {
    homeEl.classList.remove("animated");
    homescore += parseInt(val,10);
    homeEl.textContent = homescore;
    homeEl.classList.add("animated");
    setTimeout(function() {
        homeEl.classList.remove("animated");
      }, 800);

    if(homescore>guestscore) {
        homeEl.classList.add("leading");
        guestEl.classList.remove("leading");
    }
    else if(homescore === guestscore) {
        homeEl.classList.remove("leading");
        guestEl.classList.remove("leading");
    };
}



function gscore(val) {
    guestscore += parseInt(val,10);
    guestEl.textContent = guestscore;
    guestEl.classList.add("animated");
    setTimeout(function() {
        guestEl.classList.remove("animated");
      }, 800);
    
    if(guestscore>homescore) {
        guestEl.classList.add("leading");
        homeEl.classList.remove("leading");
    }
    else if(homescore === guestscore) {
        homeEl.classList.remove("leading");
        guestEl.classList.remove("leading");
    }
}