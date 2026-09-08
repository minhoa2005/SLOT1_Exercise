import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `Color: ${this.color}, Width: ${this.width}, Height: ${this.height}`;
    }
}