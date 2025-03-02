const FullTime = function () {
  this.hourly = "$12";
};
const PartTime = function () {
  this.hourly = "$11";
};
const Temporary = function () {
  this.hourly = "$10";
};
const Contractor = function () {
  this.hourly = "$15";
};

const Factory = function () {
  this.createEmployee = function (type) {
    let employee;
    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else {
      employee = new Contractor();
    }

    employee.type = type;

    employee.say = function () {
      console.log(this.type + ": rate " + this.hourly + "/hour");
    };
    return employee;
  };
};

const factory = new Factory(); 
const employees = [];

employees.push(factory.createEmployee("fulltime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("temporary"));
employees.push(factory.createEmployee("contractor"));

for (let i = 0, len = employees.length; i < len; i++) {
  employees[i].say();
}
