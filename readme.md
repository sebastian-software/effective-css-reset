## Effective/CSS Reset

[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm]

[sponsor]: https://www.sebastian-software.de
[sponsor-img]: https://badgen.net/badge/Sponsored%20by/Sebastian%20Software/c41e54
[npm]: https://www.npmjs.com/package/@effective/css-reset
[npm-downloads-img]: https://badgen.net/npm/dm/@effective/css-reset
[npm-version-img]: https://badgen.net/npm/v/@effective/css-reset

Welcome to the **Effective/CSS Reset**, a cutting-edge CSS reset infused with sensible enhancements and a keen focus on utilizing system fonts. Our project draws inspiration from the remarkable work of numerous pioneers in the field, incorporating best practices and innovative techniques to offer a streamlined and effective CSS foundation.

## Demo

Explore our [Storybook Demo](https://effective-css-reset.vercel.app/), hosted on Vercel, to see the various resetted elements in action. This interactive demo provides a firsthand look at how our CSS reset performs across different elements and browsers.

## Usage

Install the package using your normal package manager e.g.

```
npm install @effective/css-reset
```

Integrate the CSS using an `import` statement which should work fine in Vite/Remix/NextJS:

```ts
import "@effective/css-reset"
```

Alternatively you can cherry pick the individual files by choosing any number of the exported entry points:

1. `import "@effective/css-reset/reset.css"`: Resetting all core elements
2. `import "@effective/css-reset/typography.css"`: Enhance typography with better defaults
3. `import "@effective/css-reset/enhancement.css"`: Further enhancements to form fields, buttons, ...

## Acknowledgements

This project builds upon the contributions of several key resources in the web development community. We extend our gratitude to the authors and maintainers of these works for their insights and innovations:

- [The New CSS Reset by Elad Shechter](https://github.com/elad2412/the-new-css-reset)
- [Modern Normalize by Sindre Sorhus](https://github.com/sindresorhus/modern-normalize)
- [Custom CSS Reset by Josh W Comeau](https://www.joshwcomeau.com/css/custom-css-reset/)
- [A Modern CSS Reset by Piccalilli](https://piccalil.li/blog/a-modern-css-reset/)
- [System Font Stack Snippet by CSS-Tricks](https://css-tricks.com/snippets/css/system-font-stack/#aa-method-1-system-fonts-at-the-element-level)
- [Tailwind CSS Preflight](https://tailwindcss.com/docs/preflight) alongside its [implementation](https://unpkg.com/tailwindcss@3.2.2/src/css/preflight.css)
- [Childish Font Sizes by Cloud Four](https://cloudfour.com/thinks/childish-font-sizes/)

## Technical Highlights

Our CSS reset is designed with several key principles in mind to ensure maximum compatibility, usability, and flexibility:

- **Reduced Specificity**: Utilizes the `:where` selector to minimize selector specificity, facilitating easier theme customization and overrides.
- **System Fonts**: Prioritizes cross-browser sans-serif system fonts (`system-ui`), complemented by a selection of compatible legacy font families. This approach is applied to both body text and pre-formatted code to ensure readability and consistency across platforms.
- **Enhanced Form Fields**: Offers comprehensive support for native form fields, including search fields, date pickers, color selectors, and more. Each element is meticulously reset to enhance cross-browser compatibility, ensuring a uniform appearance and functionality across different environments.

Our mission with the Effective/CSS Reset is to provide developers with a robust starting point that incorporates the latest web standards and design philosophies. By building on the collective wisdom of the web development community, we aim to deliver a CSS reset that stands at the forefront of modern web design.

## License

[Apache License; Version 2.0, January 2004](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2023-2024<br/>[Sebastian Software GmbH](https://www.sebastian-software.de)
