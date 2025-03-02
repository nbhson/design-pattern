# Adapter Pattern

> Mục tiêu chính của Adapter pattern là tạo ra một lớp trung gian (adapter) để làm cho các đối tượng không tương thích với nhau có thể làm việc cùng nhau.

`The Adapter pattern` translates one interface (thuộc tính và phương thức của đối tượng) to another. `Adapters` cho phép các thành phần lập trình hoạt động cùng nhau, mà nếu không thì sẽ không hoạt động được do giao diện không khớp. `Adaptor pattern` còn được gọi là `Wrapper pattern `.

## Diagram

![javascript-adapter](javascript-adapter.jpg)

## Participants

The objects participating in this pattern are:

- Client -- In example code: the `run()` function.
  calls into Adapter to request a service

- Adapter -- In example code: `ShippingAdapter`
  implements the interface that the client expects or knows

- Adaptee -- In example code: `AdvancedShipping`
  the object being adapted has a different interface from what the client expects or knows

## Using Adapter

- Adapters thường được sử dụng là khi các thành phần mới cần được tích hợp và hoạt động cùng với các thành phần hiện có trong ứng dụng.
  + Tích hợp các hệ thống hoặc thành phần khác nhau
  + Sử dụng các thư viện hoặc công cụ bên ngoài
- Tái cấu trúc/Mở rộng chức năng: khi bạn muốn mở rộng chức năng của một lớp cụ thể mà không thay đổi mã nguồn của lớp đó, bạn có thể tạo một adapter để bao bọc lớp đó và thêm chức năng mới.

```js
// old interface

function Shipping() {
  this.request = function (zipStart, zipEnd, weight) {
    // ...
    return "$49.75";
  };
}

// new interface

function AdvancedShipping() {
  this.login = function (credentials) {
    /* ... */
  };
  this.setStart = function (start) {
    /* ... */
  };
  this.setDestination = function (destination) {
    /* ... */
  };
  this.calculate = function (weight) {
    return "$39.50";
  };
}

// adapter interface

function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    },
  };
}

function run() {
  var shipping = new Shipping();
  var credentials = { token: "30a8-6ee1" };
  var adapter = new ShippingAdapter(credentials);

  // original shipping object and interface

  var cost = shipping.request("78701", "10010", "2 lbs");
  console.log("Old cost: " + cost);

  // new shipping object with adapted interface

  cost = adapter.request("78701", "10010", "2 lbs");

  console.log("New cost: " + cost);
}
```
