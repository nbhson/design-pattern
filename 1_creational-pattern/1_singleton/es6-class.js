class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        // Khởi tạo state hoặc property
        this.data = "Initial Data";
        this.timestamp = new Date();

        // Lưu instance
        Singleton.instance = this;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }
}

// Client usage
const instance1 = new Singleton();
console.log("Instance 1 created at:", instance1.timestamp);

// Giả lập delay hoặc logic khác
const instance2 = new Singleton();
console.log("Instance 2 retrieved at:", instance2.timestamp);

console.log("Same instance? " + (instance1 === instance2)); // true

instance1.setData("Updated Data");
console.log("Instance 2 data: " + instance2.getData()); // "Updated Data"
