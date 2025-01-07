class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"


// ------------------------



class Phone{
    calling(){
        console.log("calling freinds")
    }
}

class Laptop extends Phone{
    calling(){
        super.calling()
            console.log("Video calling.")
        
    }
}

class Pc extends Phone{
    calling(){
        console.log("Calling only with Dial ups!")
    }
}


var macBookPro = new Laptop
var gamingPc = new Pc

macBookPro.calling();
gamingPc.calling();