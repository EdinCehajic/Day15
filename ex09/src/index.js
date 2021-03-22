// Only
const product = (aa, bb, cc) => {
    const args = [aa, bb, cc];
    // Only
    return args.reduce((a, b) => a*b, 1);

}
console.log(product()); // Change
module.exports = product;