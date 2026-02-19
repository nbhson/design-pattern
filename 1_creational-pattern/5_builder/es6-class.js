class Car {
    constructor(builder) {
        this.brand = builder.brand;
        this.model = builder.model;
        this.engine = builder.engine;
        this.color = builder.color || "White"; // Default value
        this.sunroof = builder.sunroof || false;
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }
}

class CarBuilder {
    constructor() {
        // Giá trị mặc định hoặc khởi tạo rỗng
        this.brand = "Unknown";
        this.model = "Unknown";
    }

    setBrand(brand) {
        this.brand = brand;
        return this; // Trả về `this` để chain method
    }

    setModel(model) {
        this.model = model;
        return this;
    }

    setEngine(engine) {
        this.engine = engine;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    setSunroof(hasSunroof) {
        this.sunroof = hasSunroof;
        return this;
    }

    build() {
        return new Car(this);
    }
}

// Client usage using Method Chaining (Fluent Interface)
const myCar = new CarBuilder()
    .setBrand("Tesla")
    .setModel("Model S")
    .setEngine("Electric")
    .setColor("Red")
    .setSunroof(true)
    .build();

console.log("My Custom Car:");
console.log(myCar.toString());

// Another example with minimal configuration
const simpleCar = new CarBuilder()
    .setBrand("Toyota")
    .setModel("Corolla")
    .build();

console.log("\nSimple Car (Default values):");
console.log(simpleCar.toString());
