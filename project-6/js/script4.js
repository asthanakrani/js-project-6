class Shape {
    constructor() {}
  
    Rectangle(width, height) {
        document.getElementById("hight").innerHTML = `Rectangle area: ${width * height}`
    }
  
    Circle(radius) {
        document.getElementById("width").innerHTML = `Circle area: ${3.14 * radius * radius}`
    }
  }

let shape1 = new Shape();
shape1.Rectangle(8, 5);

let shape2 = new Shape();
shape2.Circle(3);