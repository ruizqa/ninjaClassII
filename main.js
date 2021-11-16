function Ninja(name){
    this.name= name;
    this.health = 100;
    var speed =3;
    var strength =3;
    this.getSpeed = function() {
        return speed;
    } 
    this.setSpeed = function(number){
        speed = number;
    }

    this.getStrength = function() {
        return strength;
    } 
    this.setStrength = function(number){
        strength = number;
    }

    this.sayName = function(){
        console.log(`My ninja name is ${this.name}`)
    }
    this.showStats = function(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.getSpeed()}, Strength: ${this.getStrength()}`)
    }
    
    this.drinkSake = function(){
        this.health += 10;
    }
    this.punch = function (ninja){
        if(ninja instanceof Ninja){
        ninja.health -=5;
        console.log(`${ninja.name} was punched by ${this.name} and lost 5 Health! `)
    }}

    this.kick = function (ninja){
        if(ninja instanceof Ninja){
        lost = 15*this.getStrength();
        ninja.health -= lost
        console.log(`${ninja.name} was kicked by ${this.name} and lost ${lost} Health! `)}
    }

}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);