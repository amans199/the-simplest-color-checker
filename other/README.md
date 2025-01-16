# Check if the color is light or Dark in a second

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


## Overview

Easily check whether a color is light or dark and optimize text colors accordingly.  
⚠️ **Note**: Version `3.x` introduces a new API for better clarity and flexibility. Backward compatibility is supported, but the `checkColor` function is deprecated.

---
<br />
<div style="text-align:center;">
  <h3 >Check if the color is light or Dark in a second</h3>
  <h4 >This (text inside the boxes are all the same color because you can't know what is the background of the dynamic box will be) : </h4>
    <br />
    <img  src="images/dynamic_backgrounds_before_using_color_checker.PNG" alt="dynamic_backgrounds_before_using_color_checker" width="500" >
    <br />
    <h4 >will turn into this : (the color of the text inside the boxes are changing depending on the background of the dynamic boxes )  </h4>
    <img   src="images/dynamic_backgrounds_after_using_color_checker.PNG" alt="dynamic_backgrounds_after_using_color_checker" width="500" >
    <br />
</div>

---

### Changes in v3.x:
- New API via `applyColorRules` with more descriptive keys:
  - `selector` → `targetSelector`
  - `optimize_text_color` → `optimizeTextColor`
  - `ifDark.textColor` → `darkMode.textColor`
  - `ifLight.textColor` → `lightMode.textColor`
- Backward compatibility included for `checkColor`.
- Deprecation warning added for `checkColor`.

---

## Installation

```sh
npm install the-simplest-color-checker --save
```

Import the module:
```js
import { applyColorRules } from 'the-simplest-color-checker';
```


---

## Usage

### Example: Basic Usage

```js
applyColorRules({
  targetSelector: ".colors_box", // Add any selector
  optimizeTextColor: true, // Adjust text color based on background
  darkMode: {
    textColor: "#f00" // Text color for dark backgrounds
  },
  lightMode: {
    textColor: "#00f" // Text color for light backgrounds
  }
});
```

Add the `data-color` attribute to elements with the color value you want to check:

```html
<span data-color="#000" class="colors_box">Dark Background</span>
<span data-color="#fff" class="colors_box">Light Background</span>
```

Results:
```html
<span data-color="#000" class="colors_box" data-brightness="dark">Dark Background</span>
<span data-color="#fff" class="colors_box" data-brightness="light">Light Background</span>
```

---

### Example: Using in React

```js
import React from 'react';
import { isLight } from 'the-simplest-color-checker';

const App = () => {
  return (
    <div className="App">
      <span className={isLight("#171717") ? 'text-dark' :'text-light'}>Dark Background</span>
      <span className={isLight("#ececec") ? 'text-dark' :'text-light'}>Light Background</span>
    </div>
  );
};

export default App;
```

---

### Example: Using in Vue

```js
import { applyColorRules } from 'the-simplest-color-checker';

export default {
  mounted() {
    applyColorRules({
      targetSelector: ".colors_box",
      optimizeTextColor: true,
      darkMode: {
        textColor: "#fff"
      },
      lightMode: {
        textColor: "#000"
      }
    });
  }
};
```

---

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

Ahmed Ouda - [@amans199](https://twitter.com/amans199) - ahmed.ouda1997@gmail.com

Project Link: [https://github.com/amans199/the-simplest-color-checker](https://github.com/amans199/the-simplest-color-checker)


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/amans199/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/amans199/the-simplest-color-checker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/amans199/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/amans199/the-simplest-color-checker/network/members
[stars-shield]: https://img.shields.io/github/stars/amans199/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/amans199/the-simplest-color-checker/stargazers
[issues-shield]: https://img.shields.io/github/issues/amans199/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/amans199/the-simplest-color-checker/issues
[license-shield]: https://img.shields.io/github/license/amans199/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/amans199/the-simplest-color-checker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/amans199
[product-screenshot]: images/screenshot.png
