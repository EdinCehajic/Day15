// Only
const product = (aa, bb, cc) => {
    const args = [aa, bb, cc];
    // Only
    return args.reduce((a, b) => a * b, 1);

}
console.log(product(1, 2)); // Change
console.log(product(4, 3, 10, 2)); // Change
console.log(product(7)); // Change
console.log(product()); // Change
module.exports = product;