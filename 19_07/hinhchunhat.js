class Rectan{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    setWidth(value){
        this.width = value;
    }
    getWidth(){
        return this.width;
    }
    setHeight(value){
        this.height = value;
    }
    getHeight(){
        return this.height;
    }
    calP(){
        return (this.height + this.width)*2;
    }
    calS(){
        return this.height * this.width;
    }
}

var rec1 = new Rectan(5,10);
var rec2 = new Rectan(10,15);
rec1.dientich = rec1.calS();
rec1.chuvi = rec1.calP();
console.log(rec1);
console.log(rec2);
