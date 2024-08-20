# Navigation Wizard

Navigation Wizard is a lightweight JavaScript vanilla library to create multi-step wizards or screen navigation flows in your web applications. 

It provides an easy-to-use interface for managing screen transitions, navigation controls, and custom logic for screen progression.

## Features

- Automatic handling of next, previous, and home navigation based on syntax
- Custom callbacks for controlling navigation flow
- Event dispatching for navigation actions
- Flexible and customizable

## Installation

To use Navigation Wizard in your project, simply include the `NavigationWizard.js` file in your project and import it into your JavaScript file:

```javascript
import NavigationWizard from './path/to/NavigationWizard.js';
```

## Usage

1. Set up your HTML structure with screens and navigation buttons:

```html
<div class="wizard">Screen 1 content</div>
<div class="wizard">Screen 2 content</div>
<div class="wizard">Screen 3 content</div>

<button class="wizard-next">Next</button>
<button class="wizard-prev">Previous</button>
<button class="wizard-home">Home</button>
```

2. Initialize the Navigation Wizard in your JavaScript:

```javascript
const wizard = new NavigationWizard('wizard');
```

3. (Optional) Set up custom navigation logic:

```javascript
wizard.setCanGoNext(screenIndex, () => {
  // Your custom validation logic here for a specific page  
  return true; // or false to prevent navigation
});

wizard.setCanGoPrevious(screenIndex, () => {
  // Your custom logic here if for whatever reason, 
  // you don't want your user to go back.
  return true; // or false to prevent navigation
});
```

4. (Optional) Listen for navigation events:

```javascript
wizard.onNext = ((event) => {
    console.log('Moved to next screen.');
});

wizard.onPrevious = ((event) => {
    console.log('Moved to previous screen.');
});

wizard.onBackHome = ((event) => {
    console.log('Returned to home screen.');
});
```

## API Reference

### Constructor

```javascript
new NavigationWizard(className)
```

- `className`: The class name used for the wizard screens.

### Methods

- `next()`: Move to the next screen.
- `previous()`: Move to the previous screen.
- `home()`: Return to the first screen.
- `setCanGoNext(screenIndex, callback)`: Set a callback to determine if moving from one screen to the next one is allowed.
- `setCanGoPrevious(screenIndex, callback)`: Set a callback to determine if moving from one screen to the previous one is allowed. Muhahaha you're trapped!
- `onNext`: Event raised when navigating to next screen.
- `onPrevious`: Event raised when navigating to previous screen.
- `onBackHome`: Event raised when navigating back to home screen.

## Sample Usage

The provided sample demonstrates a basic implementation of the Navigation Wizard:

1. The HTML structure defines three screens with the class `harry`.
2. Each screen contains content and navigation buttons.
3. The second screen includes a checkbox, which could be used to control navigation to the next screen.

## License

MIT License

## Contributing

Feel free to contribute or open an issue.
