class Singleton {
  static instance;
  constructor() {
    if (!Singleton.instance) {
      this._state = [];
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
  add(stuff) {
    this._state.push(stuff);
  }
}

const a = new Singleton();
a.add("phone");

const b = new Singleton();
console.log(b._state);
