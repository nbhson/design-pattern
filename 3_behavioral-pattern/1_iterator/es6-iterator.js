// ES6: Native Iterators & Generators

// --- CÁCH 1: NATIVE ITERATOR (Symbol.iterator) ---
// Giả sử có một danh sách sản phẩm, ta muốn object này có thể lặp qua bằng vòng lặp `for...of`
const productCollection = {
    products: ["Laptop", "Mouse", "Keyboard"],

    // Định nghĩa hàm iterator chuẩn của ES6
    [Symbol.iterator]: function () {
        let index = 0;
        const items = this.products;

        // Iterator protocol yêu cầu trả về một object có hàm next()
        return {
            next: function () {
                if (index < items.length) {
                    return { value: items[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

console.log("--- Cách 1: Sử dụng Native Symbol.iterator ---");
// Tự động lặp qua nhờ [Symbol.iterator]
for (const product of productCollection) {
    console.log(product);
}


// --- CÁCH 2: GENERATORS (Cách hiện đại ngắn gọn nhất) ---
// Dấu * đánh dấu đây là một Generator function. Nó tự động tạo ra một Iterator.
function* numberGenerator(limit) {
    let num = 1;
    while (num <= limit) {
        // yield tạm dừng hàm và trả về giá trị
        yield num++;
    }
}

console.log("\n--- Cách 2: Sử dụng ES6 Generators ---");
// Khởi tạo một iterator (chưa chạy ngay)
const iter = numberGenerator(3);

console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: undefined, done: true }

// Cũng lặp qua bằng for...of dễ dàng
console.log("Dùng for...of với Generator:");
for (const n of numberGenerator(4)) {
    console.log("Number:", n);
}
