// Abstract Factory interface
class UIFactory {
  createButton() {}
  createSlider() {}
}

// Concrete Factory for Web UI
class WebUIFactory extends UIFactory {
  createButton() {
    return new WebButton();
  }

  createSlider() {
    return new WebSlider();
  }
}

// Concrete Factory for Mobile UI
class MobileUIFactory extends UIFactory {
  createButton() {
    return new MobileButton();
  }

  createSlider() {
    return new MobileSlider();
  }
}

// Abstract Product: Button
class Button {
  render() {}
}

// Concrete Product for Web UI: WebButton
class WebButton extends Button {
  render() {
    console.log("Rendering a web button");
  }
}

// Concrete Product for Mobile UI: MobileButton
class MobileButton extends Button {
  render() {
    console.log("Rendering a mobile button");
  }
}

// Abstract Product: Slider
class Slider {
  render() {}
}

// Concrete Product for Web UI: WebSlider
class WebSlider extends Slider {
  render() {
    console.log("Rendering a web slider");
  }
}

// Concrete Product for Mobile UI: MobileSlider
class MobileSlider extends Slider {
  render() {
    console.log("Rendering a mobile slider");
  }
}

// Client code
function createUI(factory) {
  const button = factory.createButton();
  const slider = factory.createSlider();

  return { button, slider };
}

const webUIFactory = new WebUIFactory();
const mobileUIFactory = new MobileUIFactory();

const webUI = createUI(webUIFactory);
const mobileUI = createUI(mobileUIFactory);

webUI.button.render();
webUI.slider.render();

mobileUI.button.render();
mobileUI.slider.render();
