class Pet{
    constructor(name){
        this.name = name
        this.age = 1
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
    }
    petFeed(){
        if(this.hunger > 1){
            this.hunger++
            // put animation here of it jumping/eating
        }else if (this.hunger = 1){
            showTextBox(`Stubborn little ${petNameInfo} refuses to eat!`)
        }
    }
    petSleeping(){
        if(this.sleepiness > 1){
            this.sleepiness++
            // put animation of it sleeping and turn the lights off (make background colour dark)
        }else if (this.sleepiness = 1){
            showTextBox(`Stubborn little ${petNameInfo} refuses to sleep!`)
            // put animation for him refusing to sleep
        }
    }
    petPlay(){
        if(this.boredom > 1){
            this.boredom++
        }else if (this.border = 1){
            showTextBox(`Stubborn little ${petNameInfo} refuses to play`)
        }
    }
    increaseAge(){
        this.age++
        setInterval(130000)
        // make for loop to make this function run if age is less than 10
    }
    increaseStats(){
        this.hunger++
        this.sleepiness++
        this.boredom++
        setInterval(40000)
        // make this an infinite loop
    }
    gameOver(){
        if(this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10){
            showTextBox("Game over, you are a bad owner!")
            this.hunger = 1
            this.sleepiness = 1
            this.boredom = 1
            this.age = 1
        }
    }
}

function showTextBox(text){
    const textBox = document.getElementById("textPopUp")
    textBox.innerHTML = text
    textBox.style.display = "block"
}   

// getting user information for the name and updating the class with it and name for Tamagotchi

const petNameInfo = document.getElementById("name-input").value
const changeName = document.getElementById("name")

document.getElementById("theForm").addEventListener("submit", function(event){
    event.preventDefault();
    const nameInfo = document.getElementById("name-input").value
    changeName.innerText = nameInfo
    const newPet = new Pet(nameInfo)
    const device = document.getElementsByClassName("tamagotchi-device")
    device.style.display = "flex"
})


