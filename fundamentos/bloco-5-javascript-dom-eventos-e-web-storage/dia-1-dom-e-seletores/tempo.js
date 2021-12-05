document.querySelector('#header-container').style.background = 'green'
document.querySelector('.emergency-tasks').style.background = 'purple'
let h3 = document.querySelectorAll('h3');

for (let i = 0; i < h3.length; i++){
    h3[i].style.background = 'black'
}

document.querySelector('.no-emergency-tasks').style.background = 'yellow'

document.querySelector('#footer-container').style.background = "green"