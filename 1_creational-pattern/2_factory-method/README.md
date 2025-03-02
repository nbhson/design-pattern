# JavaScript Factory Method (Tạo một thể hiện của nhiều lớp)

> Nhiệm vụ chính của `Factory Method` là tạo ra đối tượng mà không phải chỉ định cụ thể lớp (class) của đối tượng đó.

## Using Factory Method

- Mục tiêu chính của `Factory Method` là khả năng mở rộng.
- `Factory Method` cho phép bạn tạo ra đối tượng **một cách động** dựa trên các điều kiện, ngữ cảnh hoặc thông tin khác mà bạn có.
- Thay vì việc khởi tạo đối tượng bằng cách sử dụng trực tiếp từ khóa **"new"** để tạo một thể hiện của lớp cụ thể, bạn tạo ra một phương thức (gọi là Factory Method) trong một interface hoặc lớp cơ sở. Các lớp con sẽ triển khai Factory Method này để tạo ra các đối tượng cụ thể.
- Các ưu điểm của Factory Method pattern bao gồm:

## Advantages

- Tách biệt mã tạo đối tượng và mã sử dụng đối tượng, giúp dễ dàng mở rộng và bảo trì mã.
- Cho phép bạn thay đổi cách tạo đối tượng mà không cần sửa đổi mã sử dụng đối tượng.
- Factory Method giúp giảm sự phụ thuộc vào các lớp cụ thể của đối tượng trong mã nguồn của bạn, giúp mã nguồn dễ dàng bảo trì và mở rộng.

## Diagram

![javascript-factory-method](javascript-factory-method.jpg);

## Participants

**Creator** (`Factory`)

- the 'factory' object that creates new products
- implements 'factoryMethod' which returns newly created products

**AbstractProduct** (not used in JavaScript)

- declares an interface for products

**ConcreteProduct**

- the product being created
- all products support the same interface (properties and methods)

```js
var Factory = function () {
  this.createEmployee = function (type) {
    var employee;

    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }

    employee.type = type;

    employee.say = function () {
      console.log(this.type + ": rate " + this.hourly + "/hour");
    };

    return employee;
  };
};

var FullTime = function () {
  this.hourly = "$12";
};

var PartTime = function () {
  this.hourly = "$11";
};

var Temporary = function () {
  this.hourly = "$10";
};

var Contractor = function () {
  this.hourly = "$15";
};

function run() {
  var employees = [];
  var factory = new Factory();

  employees.push(factory.createEmployee("fulltime"));
  employees.push(factory.createEmployee("parttime"));
  employees.push(factory.createEmployee("temporary"));
  employees.push(factory.createEmployee("contractor"));

  for (var i = 0, len = employees.length; i < len; i++) {
    employees[i].say();
  }
}
```

> `Factory Method` pattern thường được sử dụng trong các tình huống khi bạn muốn để lại việc tạo đối tượng cho các lớp con hoặc khi bạn không biết chính xác loại đối tượng nào cần được tạo tại thời điểm biên dịch mà muốn quyết định tại thời điểm chạy.
