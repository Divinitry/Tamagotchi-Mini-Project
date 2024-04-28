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
            // put animation here of it jumping/eating
        }
    }
    petSleeping() {
        if (this.sleepiness > 1) {
            this.sleepiness--;
            document.getElementById("sleepbackground").style.display = "block";
            document.getElementById("bunny").src = "darkbunnybackground.png"
            document.getElementById("bunny").style.animation = "sleeping 2s infinite"
            document.getElementById("sleepingText").style.display = "block";
            document.getElementById("sleepingText").style.zIndex = "999";
            const cloudImages = document.querySelectorAll('[class^="cloud"]');
            cloudImages.forEach((cloud) => {
                cloud.src = "starimages.png" 
            });
    
            setTimeout(() => {
                document.getElementById("sleepbackground").style.display = "none";
                document.getElementById("bunny").src = "bunnyforgame.png"
                document.getElementById("bunny").style.animation = "walking 10s infinite"
                cloudImages.forEach((cloud) => {
                    cloud.src = "pixelclouds.png" 
                });
            }, 3000);
        }
    }
    petPlay() {
        if (this.boredom > 1) {
            this.boredom--
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
        }, 20000);}

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
    }
// global variable declaration
let newPet;
bunnyElement = document.getElementById("bunny")

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


