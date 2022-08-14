export const toPascal = (name) => {
    return name
        .replace(
            /\w+/g, 
            (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()
        )
        .replace(/-/, '');
}

export const toKebab = (name) => {
    return name
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}