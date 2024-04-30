class Pet {
    constructor(name) {
        this.name = name
        this.age = 1
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
    }
    petFeed() {
        if (this.hunger > 1) {
            this.hunger--
            bunnyElement.src = "feedbunnyimg.png"
            bunnyElement.style.animation = "bunnyEatAnimation 0.3s linear infinite alternate"
            sleepText.style.display = "block"
            sleepText.style.color = "black"
            sleepText.innerText = "NOM NOM NOM"
            document.querySelectorAll('[class^="cloud"]');
            document.querySelectorAll('[class^="cloud"]').forEach((cloud) => {
                cloud.src = "carrot.png"
            });

            setTimeout(() => {
                bunnyElement.src = "bunnyforgame.png"
                bunnyElement.style.animation = "walking 10s infinite"
                sleepText.style.color = "white"
                sleepText.innerText = "ZZZZZ"
                document.querySelectorAll('[class^="cloud"]').forEach((cloud) => {
                    cloud.src = "pixelclouds.png"
                });
            }, 3000)
        }
    }
    petSleeping() {
        if (this.sleepiness > 1) {
            this.sleepiness--;
            document.getElementById("sleepbackground").style.display = "block";
            bunnyElement.src = "darkbunnybackground.png"
            bunnyElement.style.animation = "sleeping 2s infinite"
            sleepText.style.display = "block";
            sleepText.style.zIndex = "999";
            document.querySelectorAll('[class^="cloud"]');
            document.querySelectorAll('[class^="cloud"]').forEach((cloud) => {
                cloud.src = "starimages.png"
            });

            setTimeout(() => {
                document.getElementById("sleepbackground").style.display = "none";
                bunnyElement.src = "bunnyforgame.png"
                bunnyElement.style.animation = "walking 10s infinite"
                document.querySelectorAll('[class^="cloud"]').forEach((cloud) => {
                    cloud.src = "pixelclouds.png"
                });
            }, 3000);
        }
    }
    petPlay() {
        if (this.boredom > 1) {
            this.boredom--
            bunnyElement.src = "playbunny.png"
            bunnyElement.style.animation = "playingAnimation 1s ease-in-out infinite"
            sleepText.style.display = "block"
            sleepText.style.color = "black"
            sleepText.innerText = "WAHOOOO"
            document.querySelectorAll('[class^="cloud"]').forEach((cloud) => {
                cloud.src = "discoball.png"
            })

            setTimeout(() => {
                bunnyElement.src = "bunnyforgame.png"
                bunnyElement.style.animation = "walking 10s infinite"
                sleepText.style.color = "white"
                sleepText.innerText = "ZZZZZ"
                document.querySelectorAll('[class^="cloud"]').forEach((cloud) => {
                    cloud.src = "pixelclouds.png"
                });
            }, 3000)
        }
    }
    increaseAge() {
        setInterval(() => {
            this.age++;
            age.innerText = `Age: ${this.age}`
            if (this.age < 7) {
                const currentWidth = parseInt(window.getComputedStyle(bunnyElement).width);
                const currentHeight = parseInt(window.getComputedStyle(bunnyElement).height);
                bunnyElement.style.width = (currentWidth + 10) + "px";
                bunnyElement.style.height = (currentHeight + 10) + "px";
            }
            this.oldAgeDead()
        }, 30000);
    }

    increaseStats() {
        setInterval(() => {
            this.hunger++;
            hungerNumber.innerText = this.hunger;
            this.gameOver()
        }, 12000);
        setInterval(() => {
            this.sleepiness++;
            sleepNumber.innerText = this.sleepiness;
            this.gameOver()
        }, 10000)
        setInterval(() => {
            this.boredom++
            boredomNumber.innerText = this.boredom;
            this.gameOver()
        }, 9000)
    }
    gameOver() {
        if (this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10) {
            showTextBox("Game over, you are a bad owner!")
            setTimeout(() => location.reload(), 4000)
        } 
    }
    oldAgeDead() {
        if (this.age === 15){
            showTextBox("Your pet has died of old age...")
            setTimeout(() => location.reload(), 4000)
        }
    }
}
// global variable declaration
let newPet;
bunnyElement = document.getElementById("bunny")
sleepText = document.getElementById("sleepingText")

function showTextBox(text) {
    const textBox = document.getElementById("textPopUp")
    textBox.innerText = text
    textBox.style.display = "block"
}

const petNameInfo = document.getElementById("name-input").value
const changeName = document.getElementById("name")
const device = document.getElementById("t-device")
const agee = document.getElementById("age")
const form = document.getElementById("theForm")

// Starting the game
document.getElementById("theForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInfo = document.getElementById("name-input").value
    changeName.innerText = nameInfo
    newPet = new Pet(nameInfo);
    device.style.display = "flex"
    agee.innerText = `Age: ${newPet.age}`
    form.style.display = "none";
    newPet.increaseAge()
    newPet.increaseStats()
})

const hungerNumber = document.getElementById("hunger-number")
const sleepNumber = document.getElementById("sleep-number")
const boredomNumber = document.getElementById("boredom-number")

document.getElementById("feed-button").addEventListener("click", function () {
    if (newPet) {
        newPet.petFeed()
        hungerNumber.innerText = newPet.hunger
    }
})

document.getElementById("play-button").addEventListener("click", function () {
    if (newPet) {
        newPet.petPlay()
        boredomNumber.innerText = newPet.boredom
    }
})

document.getElementById("lights-button").addEventListener("click", function () {
    if (newPet) {
        newPet.petSleeping()
        sleepNumber.innerText = newPet.sleepiness
    }
})


