const arrayIsEqual = (a: any[], b: any[]) =>
    a.length === b.length &&
    a.every((value, index) => value === b[index])

export { arrayIsEqual }