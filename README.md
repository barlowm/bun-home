# Custom Home page

This page developed using a merger of the **Vue 3 Dynamic Components** and the **Vue 3 + Bun Content Manager** repositories developed with the assistance of **GitHub CoPilot**.

I wanted to try and see how well CoPilot worked at generating a web site, and it took a LOT of iterations to get what I wanted (probably way more than it would have taken me to code directly, but it's been a long time since I coded in Vue and I thought this might be a way to get back into working with Vue code.)

First off the content to be displayed is divided up into multiple HTML file snippets which are stripped of leading spaces, concatenated into a single line which then becomes the individual .txt files in the **src/config** folder







----

# Vue 3 Dynamic Components

A Vue 3 application that automatically generates Vue components from text configuration files.

## Features

- 🚀 **Automatic Component Generation**: Components are generated from `.txt` configuration files
- 📝 **Text-based Configuration**: Simple key-value pair format for defining components
- 🎨 **Styled Components**: Each component includes gradient styling and responsive layout
- ⚡ **Vite Integration**: Fast development server and optimized builds
- 🔄 **Easy Updates**: Modify `.txt` files and regenerate components with a single command

## Project Structure

```
vue3-dynamic-components/
├── src/
│   ├── config/              # Configuration files (.txt)
│   │   ├── Hero.txt
│   │   ├── Features.txt
│   │   └── CTA.txt
│   ├── generated/           # Generated Vue components (auto-created)
│   ├── App.vue              # Main application component
│   └── main.js              # Application entry point
├── scripts/
│   └── build-components.js  # Component generation script
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Installation

```bash
npm install
```

### Generate Components

Generate Vue components from your `.txt` configuration files:

```bash
npm run generate-components
```

### Development

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This will:
1. Generate components from configuration files
2. Build the Vue application
3. Output to `dist/` directory

## Configuration Format

Create `.txt` files in `src/config/` with this format:

```
title:Your Component Title
description:Component description
content:Main content text
bgColor1:#667eea
bgColor2:#764ba2
```

### Available Properties

- `title` - Component heading
- `description` - Component description text
- `content` - Main content
- `bgColor1` - Gradient start color (hex)
- `bgColor2` - Gradient end color (hex)

## How It Works

1. **Configuration Files**: Write configuration in simple `.txt` files in `src/config/`
2. **Build Script**: `scripts/build-components.js` reads these files
3. **Component Generation**: Automatically creates Vue 3 components in `src/generated/`
4. **Dynamic Loading**: `App.vue` dynamically imports and displays all generated components
5. **Live Updates**: Modify `.txt` files and re-run `npm run generate-components` to update

## Example Workflow

1. Create a new configuration file: `src/config/MyComponent.txt`

```
title:My Amazing Component
description:This is a test component
content:This component was created from a text file!
bgColor1:#ff6b6b
bgColor2:#ee5a6f
```

2. Generate components:

```bash
npm run generate-components
```

3. The new component is automatically available in your application!

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Node.js** - For the build script

## License
MIT

## debugging vue3.js applications in vscodium
https://www.google.com/search?q=debugging+vue3.js+applications+in+vscodium&rlz=1C1GCEA_enUS1208US1208&sca_esv=b05b86de3d8e65b9&biw=1367&bih=760&sxsrf=ANbL-n43Qo5rs7KLimbyGZXvK6I1ojL6TQ%3A1779298391551&ei=V_ANarukIc615NoPw4eGgQ8&ved=0ahUKEwj7q8-Es8iUAxXOGlkFHcODIfAQ4dUDCBI&uact=5&oq=debugging+vue3.js+applications+in+vscodium&gs_lp=Egxnd3Mtd2l6LXNlcnAiKmRlYnVnZ2luZyB2dWUzLmpzIGFwcGxpY2F0aW9ucyBpbiB2c2NvZGl1bTIHECEYChigATIHECEYChigATIHECEYChigATIHECEYChigATIHECEYChigAUiWJVCWElizInABeAGQAQCYAfQBoAGbCqoBBTAuNC4zuAEDyAEA-AEBmAIIoAKyCsICChAAGEcY1gQYsAOYAwCIBgGQBgiSBwUxLjQuM6AHyiCyBwUwLjQuM7gHrgrCBwMyLjbIBwuACAE&sclient=gws-wiz-serp


Debugging Vue.js Applications
https://www.youtube.com/watch?v=VY2ZeKQLxpk