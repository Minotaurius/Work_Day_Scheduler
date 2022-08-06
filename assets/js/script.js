var rightNow = document.querySelector('#currentDay');
rightNow.innerText = moment().format('MMM Do YYYY');
var currentHour = moment().hour();
// var past = '';
// var present = '';
// var future = '';
var timeBlocks = document.querySelectorAll('.time-block');

// setting timeblocks to indicate past present or future

function pastPresFut() {
    timeBlocks.forEach((element) => {
        // console.log(element)
        if (element.dataset.hour < currentHour){
            element.classList.add('past');
            element.classList.remove('future');
            element.classList.remove('present');
        }
        else if (element.dataset.hour == currentHour){
            element.classList.remove('past');
            element.classList.remove('future');
            element.classList.add('present');
        }
        else (element.dataset.hour > currentHour) 
            element.classList.remove('past');
            element.classList.add('future');
            element.classList.remove('present');
        ;
    });
};

pastPresFut();

const saveButton = document.getElementsByClassName(".saveBtn")

function saveText() {
        var text = localStorage.setItem(text, 1);
        var time = localStorage.setItem(time, 2);
}

saveButton.addEventListener("click", saveText);



