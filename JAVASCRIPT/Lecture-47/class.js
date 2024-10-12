class Human{
    age = 13;
    wt = 60;
    ht = 180;

    walking(){
        console.log("I am Walking")
    }

    running(){
        console.log("I am Running")
    }
}

let obj = new Human();
console.log(obj.age);

obj.walking();