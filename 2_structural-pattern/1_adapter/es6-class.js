// 1. Target Interface (Interface cũ mà ứng dụng đang dùng)
class OldCalculator {
  constructor() {
    this.operations = function(term1, term2, operation) {
      switch (operation) {
        case 'add': return term1 + term2;
        case 'sub': return term1 - term2;
        default: return NaN;
      }
    };
  }
}

// 2. Adaptee (Hệ thống mới/Thư viện bên thứ 3 với interface khác)
class NewCalculator {
  add(term1, term2) {
    return term1 + term2;
  }
  sub(term1, term2) {
    return term1 - term2;
  }
}

// 3. Adapter (Lớp trung gian giúp Client dùng hệ thống mới nhưng gọi theo cách cũ)
class CalculatorAdapter {
  constructor() {
    const newCalc = new NewCalculator();

    this.operations = function(term1, term2, operation) {
      switch (operation) {
        case 'add':
          // Map method cũ sang method mới
          return newCalc.add(term1, term2);
        case 'sub':
          return newCalc.sub(term1, term2);
        default:
          return NaN;
      }
    };
  }
}

// --- Client Code ---

const oldCalc = new OldCalculator();
console.log("Old Calculator:", oldCalc.operations(10, 5, 'add')); // 15

// Thay vì sửa toàn bộ code đang dùng `oldCalc.operations(...)`,
// ta chỉ cần đổi khởi tạo ban đầu sang Adapter.
const adaptedCalc = new CalculatorAdapter();
console.log("New Calculator via Adapter:", adaptedCalc.operations(10, 5, 'add')); // 15
