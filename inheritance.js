class Parent {
    constructor () {
       this.father = "Abul";
    }
}
class Child extends Parent {
    constructor (name) {
        super ();
       this.Baby = name;
    }
    getFullName() {
        return this.Baby + " " + this.father;
    }
}

const baby1 = new Child ("Baby1");
const baby2 = new Child ("Baby2");

console.log (baby1, baby2);
console.log (baby1.getFullName())