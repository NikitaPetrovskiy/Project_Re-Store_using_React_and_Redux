const compose = (...func) => (component) => {
    return func.reduceRight(
        (wrapped, f) => f(wrapped), component);
};

export default compose;
