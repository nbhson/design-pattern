// ES5: Classic Observer / Publish-Subscribe Pattern

function ClickSubject() {
    this.listeners = []; // Danh sách những người đăng ký (observers)
}

ClickSubject.prototype = {
    subscribe: function (fn) {
        this.listeners.push(fn);
    },

    unsubscribe: function (fn) {
        this.listeners = this.listeners.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
    },

    notify: function (eventPayload) {
        this.listeners.forEach(function (listenerObj) {
            listenerObj(eventPayload);
        });
    },
};

// --- Client Code ---
var clickHandlerA = function (item) {
    console.log("Handler A Fired with data: " + item);
};

var clickHandlerB = function (item) {
    console.log("Handler B Fired with data: " + item);
};

console.log("--- ES5 Observer ---");
var clickEvent = new ClickSubject();

// 1. Subscribe
clickEvent.subscribe(clickHandlerA);
clickEvent.subscribe(clickHandlerB);

// 2. Fire/Notify Event
clickEvent.notify("User Object {id: 1, name: John}");

// 3. Unsubscribe A and Fire again
clickEvent.unsubscribe(clickHandlerA);
clickEvent.notify("Product Object {id: 22}");
