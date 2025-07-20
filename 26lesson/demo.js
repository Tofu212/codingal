class animals{
    constructor(name, sound, herbivore, carnivore){
        this.name = name
        this.sound = sound
        this.herbivore = herbivore
        this.carnivore = carnivore
    }


livesInJungle(){
    if(this.name != 'human being'){
        return true
    }else{
        return false
    }
}

const a1 = new animals('Tiger', 'roar', false, true)
const a2 = new animals('Elephant', 'trrhaooooon', true, false)
const a3 = new animals('Ant eater', 'hisss', false, true, )
console.log(a2.livesInJUngle())

class Human_Beings extends animals{
    constructor(name, sound, herbivore, carnivore, email, house){
        this.name = name
        this.sound = sound
        this.herbivore = herbivore
        this.carnivore = carnivore
        this.email = email
        this.house = house
    }
}

const h1 = new Human_Beings('human', 'speaks', true, true, 'dummy@gmail.com', true)