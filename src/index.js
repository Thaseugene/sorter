class Sorter {

    constructor() {
        this.array = [];
        this.arr = [];
        this.arrka = [];
        this.arm = [];
        this.temp_array = [];
    }

    add(element) {

        this.array.push(element);

    }

    at(index) {

        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        for (var i = 0; i < indices.length; i++) {
            this.temp_array.push(this.array[indices[i]]);
        }
        this.temp_array.sort(compareNumbers);
        //indices.sort(compareNumbers);

        function compareNumbers(a, b) { return a - b; }
        for (var k = 0; k < indices.length; k++) {
            this.array[indices[k]] = this.temp_array[k];
        }
this.temp_array = [];
    }



    setComparator(compareFunction) {
        // your implementation
    }
}

module.exports = Sorter;
