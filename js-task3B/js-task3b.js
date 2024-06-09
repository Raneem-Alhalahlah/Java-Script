//exercise #2
function red(){
    const content = document.getElementById("colors");
    content.style.backgroundColor = "red";
}


//exercise #5

const pinInput = document.getElementById('pin');
const confirmPinInput = document.getElementById('confirmPin');
const pinError = document.getElementById('pinError');
const confirmPinError = document.getElementById('confirmPinError');
const submitButton = document.getElementById('submitButton');

function validatePin() {
    const pin = pinInput.value;
    if (pin.length < 6) {
        pinError.style.display = 'inline';
    } else {
        pinError.style.display = 'none';
    }
    validateForm();
}

function validateConfirmPin() {
    const confirmPin = confirmPinInput.value;
    const pin = pinInput.value;
    if (confirmPin !== pin) {
        confirmPinError.style.display = 'inline';
    } else {
        confirmPinError.style.display = 'none';
    }
    validateForm();
}

function validateForm() {
    const pin = pinInput.value;
    const confirmPin = confirmPinInput.value;

    if (pin.length >= 6 && confirmPin === pin) {
        submitButton.style.display = 'inline';
    } else {
        submitButton.style.display = 'none';
    }
}


//exercise #6 
function addSong() {
    var songInput = document.getElementById("songInput");
    var songName = songInput.value.trim();

    if (songName === "") {
        alert("Please enter a song name");
        return;
    }

    var playlist = document.getElementById("playlist");
    var listItem = document.createElement("li");
    listItem.textContent = songName;
    playlist.appendChild(listItem);

    
    songInput.value = "";
}