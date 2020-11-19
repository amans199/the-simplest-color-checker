[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Check if the color is light or Dark in a second</h3>

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
  selector:".colors_box" //add any selector
});
```
2- Add data-color to all elements with the value of the color you wanna test;

`data-color="#000"`

<br/>

the previous line will result with a 
`data-brightness="dark"`

### Example
This : 
```
    <span data-color="#000" className="colors_box"></span>
    <span data-color="#fff" className="colors_box"></span>
    <span data-color="#f00" className="colors_box"></span>

```

will result : 
```
    <span data-color="#000" className="colors_box" data-brightness="dark"></span>
    <span data-color="#fff" className="colors_box" data-brightness="light"></span>
    <span data-color="#f00" className="colors_box" data-brightness="light"></span>

```

<br />
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
