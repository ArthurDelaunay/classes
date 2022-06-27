// 1- Batmobile
// class Car {
//     constructor(brand, speed){
//         this.brand = brand
//         this.speed = speed
//     }
//     accelerate = (number) => {
//         this.speed += number
//     }
//     brake = (number) => {
//         this.speed -= number
//     }
//     describe = () => {
//         console.log(`${this.brand} running at ${this.speed}km/h`)
//     }
// }

// let ford = new Car("Ford", 0)
// console.log(ford)
// ford.accelerate(50)
// console.log(ford)
// ford.brake(25)
// console.log(ford)

// let batmobile = new Car("Batcar", 0)
// batmobile.accelerate(100)
// console.log(batmobile)
// batmobile.brake(20)
// console.log(batmobile)

// 02 - TV
// class Tv {
//     constructor(brand){
//         this.brand = brand
//         this.channel = 1
//         this.volume = 50
//     }
//     volumeUp = () => {
//         if (this.volume + number < 100){
//             this.volume += 1
//         }
//     }
//     volumeDown = () => {
//         if (this.volume > 0){
//             this.volume -= 1
//         }
//     }
//     setChannel = (number) => {
//         if (number >= 0 && number <= 50){
//             this.channel = number
//         }
//     }
//     reset = () => {
//         this.channel = 1
//         this.volume = 50
//     }
//     describe = () => {
//         console.log(`brand: ${this.brand}\nchannel: ${this.channel}\nvolume: ${this.volume}\n`)
//     }
// }
// let tv1 = new Tv ("Sony")
// tv1.setChannel(13)
// tv1.setChannel(55)
// tv1.volumeUp(40)
// tv1.volumeDown(70)
// tv1.volumeDown(30)
// tv1.describe()
// tv1.reset()
// tv1.describe()

// 03 - Video games
// TFT
// class Champion {
//     constructor (name, cost, baseHp, startMana, maxMana, spellName){
//         this.name = name
//         this.cost = cost
//         this.baseHp = baseHp
//         this.startMana = startMana
//         this.actualMana = null
//         this.maxMana = maxMana
//         this.spellName = spellName
//     }
//     launchSpell = () => {
//         if (this.actualMana >= this.maxMana){
//             console.log("Spell lancé")
//             this.actualMana = 0
//         }
//     }
//     autoAttack = () => {
//         this.actualMana += 10
//         this.launchSpell()
//     }
//     displayMana = () => {
//         console.log(`${this.actualMana} / ${this.maxMana}`)
//     }
//     startFight = () => {
//         this.actualMana += this.startMana
//         this.launchSpell()
//     }
//     addManaObject(object) {
//         this.actualMana += object.stat[1]
//         this.launchSpell()
//     }
// }
// class Object {
//     constructor (name, iD, typeOfStat,statAdd) {
//         this.name = name
//         this.iD = iD
//         this.stat = [typeOfStat, statAdd] 
//     }
// }
// let tears = new Object("test", 123, "mana", 20)
// let ezreal = new Champion("Ezreal", 1, 600, 20, 40, "Tir enchanté")
// console.log(ezreal)
// ezreal.startFight()
// ezreal.autoAttack()
// ezreal.displayMana()
// ezreal.autoAttack()
// ezreal.displayMana()
// ezreal.addManaObject(tears)
// console.log(tears)
// ezreal.displayMana()
// ezreal.addManaObject(tears)
// ezreal.displayMana()