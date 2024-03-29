[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT Description -->
<br />
<p align="center">

  <h3 >Check if the color is light or Dark in a second</h3>
  <h4 >This (text inside the boxes are all the same color because you can't know what is the background of the dynamic box will be) : </h4>
    <br />
    <img  src="images/dynamic_backgrounds_before_using_color_checker.PNG" alt="dynamic_backgrounds_before_using_color_checker" width="200" >
    <br />
    <h4 >will turn into this : (the color of the text inside the boxes are changing depending on the background of the dynamic boxes )  </h4>
    <img   src="images/dynamic_backgrounds_after_using_color_checker.PNG" alt="dynamic_backgrounds_after_using_color_checker" width="200" >
    <br />
    <a href="https://github.com/amans199/color_checker_example" target="_blank">see example sourcecode</a>
  <p align="center">
    <br />
    <a href="https://github.com/amans199/the-simplest-color-checker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/amans199/the-simplest-color-checker">View Demo</a>
    ·
    <a href="https://github.com/amans199/the-simplest-color-checker/issues">Report Bug</a>
    ·
    <a href="https://github.com/amans199/the-simplest-color-checker/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

### Installation

```sh
npm install the-simplest-color-checker --save
```
```sh
import {checkColor} from 'the-simplest-color-checker'
```

<!-- USAGE EXAMPLES -->
## Usage


<br />
Use it as below
<br />

1- import the checkColor module into your project and add the selector as following : 

```
import {checkColor} from 'the-simplest-color-checker'
checkColor({
  selector:".colors_box" //add any selector,
  optimize_text_color: true, //change text color depending on the background
  ifDark:{
    textColor:"#f00"
  },
  ifLight:{
    textColor:"#00f"
  }
});
```
2- Add data-color to all elements with the value of the color you wanna test;

`data-color="#000"`

<br/>

the previous line will result with a 
`data-brightness="dark"`

### Examples
This : 
```
    <span data-color="#000" class="colors_box"></span>
    <span data-color="#fff" class="colors_box"></span>
    <span data-color="#f00" class="colors_box"></span>

```

will result : 
```
    <span data-color="#000" class="colors_box" data-brightness="dark"></span>
    <span data-color="#fff" class="colors_box" data-brightness="light"></span>
    <span data-color="#f00" class="colors_box" data-brightness="light"></span>

```

<hr />

#### Using the-simplest-color-checker in React app: 

```

import { Component } from 'react';
import {checkColor} from 'the-simplest-color-checker'
class App extends Component {
  componentDidMount(){
    checkColor({
      selector: ".colors_box", //add any selector
      optimize_text_color: true, //change text color depending on the background,
      ifDark:{
        textColor:"#fff"
      },
      ifLight:{
        textColor:"#000"
      }
    })
  }
      render() {
        return (
          <div className="App">
              <div className="boxes">
                <span data-color="#000" className="colors_box">color box</span>
                  <span data-color="#fff" className="colors_box">color box</span>
                  <span data-color="#0f0" className="colors_box">color box</span>
                  <span data-color="#00f" className="colors_box">color box</span>
                  <span data-color="#f00" className="colors_box">color box</span>
              </div>
          </div>
        );
    }
}

export default App;

```


<hr />

#### Using the-simplest-color-checker in Vue app: 

```
import { checkColor } from "the-simplest-color-checker";
export default {
 mounted() {
    checkColor({
      selector: ".colors_box", //add any selector
      optimize_text: true,
      ifDark:{
        textColor:"#fff"
      },
      ifLight:{
        textColor:"#000"
      }
    });
  },
};

```

<hr />


<br />
See the [open issues](https://github.com/amans199/the-simplest-color-checker/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ahmed Mansour - [@amans199](https://twitter.com/amans199) - ahmed.ouda1997@gmail.com

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
