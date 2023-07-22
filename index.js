// index.js

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Define getter methods for diameter, circumference, and area
    get diameter() {
      return this.radius * 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Define setter methods for diameter, circumference, and area
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Export the Circle class
  module.exports = Circle;
  