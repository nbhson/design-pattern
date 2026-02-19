// Abstract Product: Button
class Button {
    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

// Concrete Product: Windows Button
class WindowsButton extends Button {
    render() {
        console.log("Render a button in Windows style");
    }
}

// Concrete Product: MacOS Button
class MacOSButton extends Button {
    render() {
        console.log("Render a button in MacOS style");
    }
}

// Abstract Product: Checkbox
class Checkbox {
    toggle() {
        throw new Error("Method 'toggle()' must be implemented.");
    }
}

// Concrete Product: Windows Checkbox
class WindowsCheckbox extends Checkbox {
    toggle() {
        console.log("Toggle a checkbox in Windows style");
    }
}

// Concrete Product: MacOS Checkbox
class MacOSCheckbox extends Checkbox {
    toggle() {
        console.log("Toggle a checkbox in MacOS style");
    }
}

// Abstract Factory
class GUIFactory {
    createButton() {
        throw new Error("Method 'createButton()' must be implemented.");
    }
    createCheckbox() {
        throw new Error("Method 'createCheckbox()' must be implemented.");
    }
}

// Concrete Factory: Windows Factory
class WindowsFactory extends GUIFactory {
    createButton() {
        return new WindowsButton();
    }
    createCheckbox() {
        return new WindowsCheckbox();
    }
}

// Concrete Factory: MacOS Factory
class MacOSFactory extends GUIFactory {
    createButton() {
        return new MacOSButton();
    }
    createCheckbox() {
        return new MacOSCheckbox();
    }
}

// Client Code
function loadApplication(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.render();
    checkbox.toggle();
}

console.log("--- Windows OS ---");
loadApplication(new WindowsFactory());

console.log("\n--- MacOS ---");
loadApplication(new MacOSFactory());
