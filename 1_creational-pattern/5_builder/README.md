# Builder (Tách biệt việc xây dựng đối tượng khỏi sự thể hiện của nó)

> Mẫu Builder cho phép khách hàng xây dựng một đối tượng phức tạp bằng cách chỉ xác định loại và nội dung. Chi tiết xây dựng được ẩn hoàn toàn khỏi khách hàng.

## Using Builder

- `Builder` pattern thường được sử dụng trong các tình huống khi bạn muốn tạo ra các đối tượng phức tạp, chẳng hạn như đối tượng có nhiều thuộc tính tùy chọn, hoặc khi bạn muốn tái sử dụng quy trình xây dựng của đối tượng.

## Diagram

![javascript-builder](javascript-builder.jpg);

## Participants

**Director** (`Shop`)

- Xây dựng các sản phẩm bằng cách sử dụng multistep interface của Builder

**Builder** -- not used in JavaScript

- Declares a multistep interface for creating a complex produc

**ConcreteBuilder** (`CarBuilder`, `TruckBuilder`)

- implements the multistep Builder interface
- maintains the product through the assembly process
- offers the ability to retrieve the newly created product

**Products** (`Car`, `Truck`)

- represents the complex objects being assembled

```js
function Shop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

function CarBuilder() {
  this.car = null;

  this.step1 = function () {
    this.car = new Car();
  };

  this.step2 = function () {
    this.car.addParts();
  };

  this.get = function () {
    return this.car;
  };
}

function TruckBuilder() {
  this.truck = null;

  this.step1 = function () {
    this.truck = new Truck();
  };

  this.step2 = function () {
    this.truck.addParts();
  };

  this.get = function () {
    return this.truck;
  };
}

function Car() {
  this.doors = 0;

  this.addParts = function () {
    this.doors = 4;
  };

  this.say = function () {
    console.log("I am a " + this.doors + "-door car");
  };
}

function Truck() {
  this.doors = 0;

  this.addParts = function () {
    this.doors = 2;
  };

  this.say = function () {
    console.log("I am a " + this.doors + "-door truck");
  };
}

function run() {
  var shop = new Shop();
  var carBuilder = new CarBuilder();
  var truckBuilder = new TruckBuilder();
  var car = shop.construct(carBuilder);
  var truck = shop.construct(truckBuilder);

  car.say();
  truck.say();
}
```
