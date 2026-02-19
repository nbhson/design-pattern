class Employee {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(this.name + ": rate " + this.hourly + "/hour");
    }
}

class FullTime extends Employee {
    constructor(name) {
        super(name);
        this.hourly = "$12";
    }
}

class PartTime extends Employee {
    constructor(name) {
        super(name);
        this.hourly = "$11";
    }
}

class Temporary extends Employee {
    constructor(name) {
        super(name);
        this.hourly = "$10";
    }
}

class Contractor extends Employee {
    constructor(name) {
        super(name);
        this.hourly = "$15";
    }
}

class EmployeeFactory {
    createEmployee(type, name) {
        switch (type) {
            case "fulltime":
                return new FullTime(name);
            case "parttime":
                return new PartTime(name);
            case "temporary":
                return new Temporary(name);
            case "contractor":
                return new Contractor(name);
            default:
                return new Contractor(name);
        }
    }
}

// Client usage
const factory = new EmployeeFactory();
const employees = [];

employees.push(factory.createEmployee("fulltime", "Alice"));
employees.push(factory.createEmployee("parttime", "Bob"));
employees.push(factory.createEmployee("temporary", "Charlie"));
employees.push(factory.createEmployee("contractor", "Dave"));

employees.forEach(emp => emp.say());
