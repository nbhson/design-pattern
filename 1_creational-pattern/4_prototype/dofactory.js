function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = function () {
    var customer = new Customer();

    customer.first = proto.first;
    customer.last = proto.last;
    customer.status = proto.status;

    return customer;
  };
}

function Customer(first, last, status) {
  this.first = first;
  this.last = last;
  this.status = status;

  this.say = function () {
    console.log(
      "name: " + this.first + " " + this.last + ", status: " + this.status
    );
  };
}

const proto = new Customer("n/a", "n/a", "pending");
const prototype = new CustomerPrototype(proto);

const customer = prototype.clone();
customer.say(); // function từ object nguyên mẫu