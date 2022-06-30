class Polygon {
    constructor(sides){
      this.sides = sides
    }
    get countSides(){
       return this.sides.length 
    }
    get perimeter(){
        return this.sides.reduce((accumulator, element) => accumulator + element)
    }
}
class Triangle extends Polygon {
    get isValid(){
       for(let i = 0; i < this.countSides; i++){
        if(this.sides[i] + this.sides[i  + 1 ] <= this.sides[i + 2] || this.sides[i + 1] + this.sides[i  + 2 ] <= this.sides[i] || this.sides[i] + this.sides[i  + 2 ] <= this.sides[i + 1]) return false;
       }
       return true;
    }
    
}
class Square extends Polygon {
    get isValid(){
        for(let i = 0; i < this.countSides; i++){
            if(this.sides[i] === this.sides[i  + 1 ] && this.sides[i] === this.sides[i + 2] && this.sides[i] === this.sides[i + 3]) return true;
           }
           return false;
        }
        get area(){
            return this.sides[0] * this.sides[1]
        }
}
   


const newI = new Square([1,1,1,1]);
console.log(newI.isValid)