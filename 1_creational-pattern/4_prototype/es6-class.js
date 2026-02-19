// Cách 1: Sử dụng Object.create (Prototypal Inheritance thuần túy)
const carPrototype = {
    wheels: 4,
    start() {
        console.log("Vroom vroom!");
    },
    clone() {
        return Object.create(this);
    }
};

const myCar = carPrototype.clone();
myCar.owner = "John";
console.log(`Car owner: ${myCar.owner}, Wheels: ${myCar.wheels}`);
myCar.start();

// Cách 2: Sử dụng Class và phương thức clone (Deep or Shallow Copy)
class Component {
    constructor(name, status) {
        this.name = name;
        this.status = status;
        this.metadata = { created: new Date() };
    }

    // Phương thức clone để tạo bản sao
    clone() {
        // Lưu ý: Đây là shallow copy (sao chép nông)
        // Nếu object có thuộc tính là object con (như this.metadata),
        // bản copy sẽ trỏ chung vùng nhớ với bản gốc. 
        // Cần cẩn thận deep clone nếu cần thiết.
        const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);

        // Xử lý riêng cho metadata nếu muốn deep clone đơn giản
        clone.metadata = { ...this.metadata };

        return clone;
    }
}

const original = new Component("Button", "Active");
const copy = original.clone();

console.log("\n--- Class Cloning ---");
console.log(`Original: ${original.name}, ${original.status}`);
console.log(`Copy: ${copy.name}, ${copy.status}`);

copy.name = "Submit Button";
console.log(`Modified Copy: ${copy.name}`);
console.log(`Original remains: ${original.name}`); // Original không bị đổi theo
