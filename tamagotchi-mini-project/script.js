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
            this.hunger--
            // put animation here of it jumping/eating
        }
    }
    petSleeping(){
        if(this.sleepiness > 1){
            this.sleepiness--
            // put animation of it sleeping and turn the lights off (make background colour dark)
        }
    }
    petPlay(){
        if(this.boredom > 1){
            this.boredom--
        }
    }
    increaseAge(){
        this.age++
        setInterval(130000)
        // set interval
    }
    increaseStats(){
        this.hunger++
        this.sleepiness++
        this.boredom++
        setInterval(40000)
        // set interval inside of the submit button
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
//setInterval
let newPet;

function showTextBox(text){
    const textBox = document.getElementById("textPopUp")
    textBox.innerText = text
    textBox.style.display = "block"
}   

const petNameInfo = document.getElementById("name-input").value
const changeName = document.getElementById("name")
const device = document.getElementById("t-device")
const age = document.getElementById("age")

// getting user information for the name and updating the class with it and name for Tamagotchi
document.getElementById("theForm").addEventListener("submit", function(event){
    event.preventDefault();
    const nameInfo = document.getElementById("name-input").value
    changeName.innerText = nameInfo
    newPet = new Pet(nameInfo);
    device.style.display = "flex"
    age.innerText = newPet.age
})

document.getElementById("feed-button").addEventListener("click", function(){
    if (newPet){
        
    }
})



