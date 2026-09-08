var array = [1, 2, 3, 4]

console.log("Normal:", array.reduce((a, b) => {
    return a + b;
}, array[0]));

console.log("Arrow:", array.reduce((a, b) => a + b, array[0]));
