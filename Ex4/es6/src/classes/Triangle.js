import { Shape } from "./Shape";

export class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }

    toString() {
        return `Color: ${this.color}, Base: ${this.base}, Height: ${this.height}`;
    }
}