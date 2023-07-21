// class Lamp{
//     constructor(status){
//         this.status = status
//     }
//     getStatus(){
//         return this.status;
//     }
//     setStatus(value){
//         return this.status = value;
//     }
// }   
//  class  Switch_1{
//     constructor(status){
//         this.status = status;
//     }
//     getStatus(){
//         return this.status;
//     }
//     setStatus(value){
//         this.status = value;
//     }
//     switchButton(){
//         this.setStatus(!this.status);
//     }
//  }
//  var L1 = new Lamp(false);
//  var S1 = new Switch_1();
//  var value_Switch = true;
//  S1.setStatus(value_Switch);
//  S1.switchButton();
//  L1.setStatus(S1.getStatus());
//  console.log(L1.status);
//  console.log(S1.getStatus());

// class Lamp{
//     constructor(status){
//         this.status = status;
//     }
//     getLampValue(){
//         return this.status;
//     }
//     setLampValue(value){
//         this.status = value;
//     }
// }

// class Switch_2{
//     constructor(status){
//         this.status = status;
//     }
//     getSwitchValue(){
//         return this.status;
//     }
//     setSwitchValue(value){
//         this.status = value;
//     }
//     Switching(){
//         return this.setSwitchValue(!this.getSwitchValue())
//     }
// }
// var L1 = new Lamp(false);
// var S1 = new Switch_2(false);
// var switch_Value = false;
// S1.setSwitchValue(switch_Value);
// console.log(S1);
// console.log(L1);
// S1.Switching();

// L1.setLampValue(S1.getSwitchValue());
// console.log(S1);
// console.log(L1);

class Mobile{
    constructor(){
        this.energy = 100;
        this.draft = "";
        this.inboxs = [];
        this.sents = [];
        this.status = false;

    }
    turnOn(){
        this.status = false;

    }
    turnOff(){
        this.status = true;
    }
    chargeEnergy(){
        this.energy +=5;
    }
    draft(message){
        this.draft = message;
    }
    receive(mobile, message){
        this.inboxs.push(message);
        mobile.sents
    }
}   