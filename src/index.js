class Sorter {

    constructor() {

    }

    add(element) {

        this.array = String(element).split('');
    }

    at(index) {
        // your implementation
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        // your implementation
    }

    setComparator(compareFunction) {
        // your implementation
    }
}

module.exports = Sorter;