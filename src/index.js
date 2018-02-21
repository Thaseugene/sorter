var array = [];
class Sorter {
    constructor() {

    }

    add(element) {
        array.push(element);
    }

    at(index) {
        // your implementation
    }

    get length() {
        return array.lenght;
    }

    toArray() {
        return array;
    }

    sort(indices) {
        // your implementation
    }

    setComparator(compareFunction) {
        // your implementation
    }
}

module.exports = Sorter;