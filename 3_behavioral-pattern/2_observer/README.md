# Observer Pattern

> A way of notifying change to a number of classes

> Observer patter cung cấp một mô hình đăng ký (subscription) trong đó các đối tượng đăng ký một sự kiện và nhận thông báo khi sự kiện xảy ra. Mô hình này là nền tảng của lập trình theo hướng sự kiện, bao gồm cả JavaScript.

## Diagram

![javascript-observer.jpg](javascript-observer.jpg)

## Participants

- Subject -- In example code: Click
    + Duy trì danh sách observers. Bất kỳ số lượng đối tượng Observer nào cũng có thể quan sát một Subject
    + Thực hiện một giao diện cho phép các observer objects subscribe or unsubscribe
    + Gửi thông báo cho observers khi trạng thái của nó thay đổi
- Observers -- In example code: clickHandler
    + Has a function signature that can be invoked when Subject changes (i.e. event occurs)

## Using Observer

Khi xây dựng ứng dụng web, bạn phải viết nhiều trình xử lý sự kiện. Trình xử lý sự kiện là các chức năng sẽ được thông báo khi một sự kiện được kích hoạt.

Sự kiện và mô hình xử lý sự kiện trong JavaScript là thể hiện của Observer pattern.

Trong RxJS, một đối tượng có tên Subject lưu giữ danh sách Listeners đã đăng ký với nó. Bất cứ khi nào trạng thái Subject thay đổi (bắn đi event), nó sẽ thông báo cho tất cả các Listeners của nó (multicasting)


``` js
function Click() {
    this.listeners = [];  // observer list
}

Click.prototype = {
    subscribe: function (fn) {
        this.listeners.push(fn);
    },

    notify: function (event) {
        this.listeners.forEach((item) => {
            item(event);
        });
    }
}

var clickHandler = function (item) {
    console.log("Fired: " + item);
};

var click = new Click();

click.subscribe(clickHandler);
click.notify('event #1');
click.notify('event #2');
click.subscribe(clickHandler);
click.notify('event #3');
```