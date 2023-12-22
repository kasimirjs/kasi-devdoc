# KasimirJS DevDoc

Welcome to the KasimirJS DevDoc documentation. This document provides you with a quick reference to the most important aspects of the framework, including styling, configuration, and custom elements. For detailed information, please refer to the full documentation in the `/docs` directory or explore the examples in the `/examples` directory.

## Quick Start

To get started with KasimirJS DevDoc, you need to register the custom elements and load the configuration. Here's a quick example:

```typescript
import { register } from './src/register';

// Register the custom elements and load the configuration
register();
```

## Styling

The framework provides several SCSS files for styling components. Here's a brief overview:

- `codebox.scss`: Styles for code boxes.
- `_github.scss`: GitHub-inspired styles for markdown content.
- `examplebrowser.scss`: Styles for the example browser layout.
- `navbar.scss`: Styles for the navigation bar.
- `_host.scss`: Host styles with CSS variables.

### Example: Code Box

```scss
.codebox {
    background-color: #eee;
    padding: 4px;
    // ... other styles
}
```

For more details on styling, see the [Styling Documentation](/docs/styling.md).

## Configuration

The `ddconfig.ts` file contains types and functions for loading and handling the project configuration.

### Example: Load Configuration

```typescript
import { loadConfig } from './src/config/ddconfig';

// Load the configuration from a URL
loadConfig('/path/to/config.json').then(config => {
    // Use the config object
});
```

For more details on configuration, see the [Configuration Documentation](/docs/configuration.md).

## Custom Elements

KasimirJS DevDoc provides custom elements to help you build your documentation UI.

### Example: Navbar

```typescript
import { DD_Navbar } from './src/elements/DD_Navbar';

// Append the navbar to the body
document.body.append(new DD_Navbar());
```

### Example: Example Browser

```typescript
import { DD_ExampleBrowser } from './src/elements/DD_ExampleBrowser';
import { loadConfig } from './src/config/ddconfig';

// Load the configuration and initialize the example browser
loadConfig('/path/to/config.json').then(config => {
    document.body.append(new DD_ExampleBrowser(config));
});
```

For more details on custom elements, see the [Custom Elements Documentation](/docs/custom-elements.md).

## Examples

Explore the `/examples` directory to see KasimirJS DevDoc in action. Each example provides a short demonstration of a feature or component.

### Example: Code Box Usage

```html
<dd-codebox url="/path/to/example.html"></dd-codebox>
```

For more examples, visit the [Examples Directory](/examples).

## Project Structure

- `/src`: Source files for the framework.
- `/examples`: Example files demonstrating how to use the framework.
- `/docs`: Documentation fragments and detailed guides.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

KasimirJS DevDoc is open-source software licensed under the MIT license.
