const userName = document.querySelector("#username");
const container = document.querySelector(".container");
const main = document.querySelector("#main");
const closeForm = document.querySelector("#close__form");
const registration = document.querySelector('#registration');
const userNickname = document.querySelector('#user__nickname');
const buttonClicker = document.querySelector('.click');
const coins = document.querySelector('.coins');
const plus = document.querySelector('.plus');
const userAge = document.querySelector('#user__age');
const userMail = document.querySelector('#user__mail');


const profile = document.querySelector('.profile');
const profileCoins = document.querySelector('.profile__coins');
const profileName = document.querySelector('.profile__name');
const profileAge = document.querySelector('.profile__span');
const profileMail = document.querySelector('.profile__mail');
const profileButton = document.querySelector('.profile__button');
const profileClose = document.querySelector('#close__profile');
const profileId = document.querySelector('.profile__id');
profileId.innerText ='ID :' + generateRandomId(8)
function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function register() {

    userName.addEventListener("click", (e) => {
        if (userName.innerText === 'SIGN UP') {
            main.style.display = "none";
            container.style.display = "flex";
        } else {
            main.style.display = "none";
            profile.style.display = "flex";
            profileCoins.innerText ='COINS :' +  coins.innerText;
            profileName.innerText ='NAME :' +  userName.innerText;
            profileAge.innerText ='AGE :' +  userAge.value;
            profileMail.innerText ='MAIL :' +  userMail.value;

            profileClose.addEventListener('click', (e) => {
                main.style.display = "flex";
                profile.style.display = "none";
            });

            profileButton.addEventListener('click',(e)=>{
                location.reload()
            })
        }
    });

    closeForm.addEventListener('click', (e) => {
        main.style.display = "flex";
        container.style.display = "none";
    });

    registration.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(registration);

        fetch("submit_url", {
            method: "POST",
            body: formData
        })
            .then(response => {

                userName.innerText = userNickname.value
                main.style.display = "flex";
                container.style.display = "none";

            })
    });

}

function clicker() {
    buttonClicker.addEventListener('click', (e) => {
        if (userName.innerText === 'SIGN UP') {
            main.style.display = "none";
            container.style.display = "flex";
        } else {
            plus.classList.add('fade-in');
            plus.style.transition = '0.3s';
            coins.innerText++
            setTimeout(() => {
                plus.classList.remove('fade-in');
                plus.style.transition = '0.3s';
            }, 500);
            changeImages()
        }
    });
}

function changeImages() {
    const coinCount = parseInt(coins.innerText);
    if (coinCount >= 50 && coinCount < 100) {
        buttonClicker.src = 'pictures/neSlabiy.jpg';
    } else if (coinCount >= 100 && coinCount < 150) {
        buttonClicker.src = 'pictures/silni.jpg';
    } else if (coinCount >= 150) {
        buttonClicker.src = 'pictures/ochenSilni.jpg';
    }
}



clicker();
register();
changeImages();
