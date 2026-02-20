// ES6: Object-Oriented Strategy Pattern (Gang of Four chuẩn)

// Bước 1: Tạo các chiến lược (các Strategies) triển khai chung một dạng hàm (Interface)
class PayByCreditCard {
    pay(amount) {
        console.log(`Đã thanh toán $${amount} bằng Credit Card`);
        // Các logic gọi API ngân hàng, trừ tiền phức tạp có thể để ở đây
    }
}

class PayByPayPal {
    pay(amount) {
        console.log(`Đã chuyển hướng và thanh toán $${amount} qua PayPal`);
    }
}

class PayByCash {
    pay(amount) {
        console.log(`Ghi nhận nợ $${amount} trong hệ thống. Khách thanh toán bằng tiền mặt khi nhận hàng (COD).`);
    }
}

// Bước 2: Tạo lớp Context chứa chiến lược
class ShoppingCart {
    constructor(paymentStrategy) {
        // Inject strategy vào context
        this.paymentStrategy = paymentStrategy;
        this.items = [];
    }

    // Cho phép đổi phương thức thanh toán runtime (rất linh hoạt)
    setPaymentStrategy(strategy) {
        this.paymentStrategy = strategy;
    }

    addItem(item) {
        this.items.push(item);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    checkout() {
        const totalAmount = this.calculateTotal();
        console.log(`\nBắt đầu checkout đơn hàng tổng $${totalAmount}`);
        // Uỷ quyền (delegate) việc tính toán cho strategy đang được set
        this.paymentStrategy.pay(totalAmount);
    }
}

// --- Client Code ---

// Chọn thanh toán bằng thẻ tín dụng
const cart = new ShoppingCart(new PayByCreditCard());

cart.addItem({ name: 'Laptop', price: 1000 });
cart.addItem({ name: 'Mouse', price: 50 });

cart.checkout(); // Đã thanh toán $1050 bằng Credit Card

// Người dùng bất ngờ đổi ý muốn thanh toán PayPal
console.log("-> Khách hàng đổi phương thức thanh toán...");
cart.setPaymentStrategy(new PayByPayPal());
cart.checkout(); // Đã chuyển hướng và thanh toán $1050 qua PayPal
