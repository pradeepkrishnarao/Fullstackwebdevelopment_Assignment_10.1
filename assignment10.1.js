/* class Rectangle has a contructor with parameters length and breadth */
class Rectangle {
    constructor(length,breadth) {
        this.length = length;
        this.breadth = breadth;        
    }   
/* calculateArea() is the method that returns area of length and breadth in square metres */
    calculateArea() { 
        return "Area is " + this.length * this.breadth + " sqr.mts.";
    }
}
