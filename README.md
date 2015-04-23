<img src="https://dl.dropboxusercontent.com/s/anlzedtpekcnla7/logo.png" width="211">




# Contents

- [What is Scally?](#what-is-scally)
- [Demos](#demos)
- [Scally architecture](#scally-architecture)
- [Dependencies](#dependencies)
- [Installing Scally](#installing-scally)
    - [Packages](#packages)
        - [Getting the latest version](#getting-the-latest-version)
    - [Download by zip](#download-by-zip)
- [Setting up a new project](#setting-up-a-new-project)
    - [Setting up your master stylesheet](#setting-up-your-master-stylesheet)
    - [Master stylesheet overview](#master-stylesheet-overview)
        - [Your settings](#your-settings)
        - [Scally framework](#scally-framework)
        - [Your styles](#your-styles)
        - [Example architecture](#example-architecture)
- [Browser support](#browser-support)
- [Linting](#linting)
- [Contributing](#contributing)
- [Scally improvements, issues, and questions](#scally-improvements-issues-and-questions)
- [Versioning](#versioning)
- [Credits](#credits)
- [License](#license)
- [Presentations](#presentations)




# What is Scally?

Scally is a [Sass](http://sass-lang.com/)-based, [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), [OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), responsive ready, CSS framework that provides you with a solid foundation for building reusable UI's quickly. It is a framework focused on scalability and reuse, there when you need it and getting out of your way when you don't.

Scally is designed to be configurable, only requiring you to bring in the parts you are using, keeping your CSS architecture light weight and scalable. It is unopinionated about design giving you more flexibility than your typical UI toolkit.




# Demos

*A website—featuring demos of everything in Scally—is coming soon, in the meantime they're CodePen's that can be looked at but are a work in progress:*

- [Layout](http://codepen.io/chris-pearce/full/jEXNWX/)
- [Utilities](http://s.codepen.io/chris-pearce/full/WbMgMp)




# Scally architecture

Scally is broken down into five main sections with each section getting it's own level of specificity meaning each one builds on top of the other in terms of inheritance and CSS' first C; the cascade. Think of them as layers:

<img src="https://dl.dropboxusercontent.com/s/d5dkntp1kckkvkm/layers.svg">

The breakdown of these layers from bottom to top (order of their specificity):

- [Core](core/README.md)
- [Layout](layout/README.md)
- [Objects](objects/README.md)
- [Components](components/README.md)
- [Utilities](utilities/README.md)




# Dependencies

- [Ruby](http://rubyinstaller.org/), *if you're using a Mac then Ruby comes pre-installed*
- [Sass](http://sass-lang.com/install)
- [Autoprefixer](https://github.com/postcss/autoprefixer)

    >> Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.

    *We advise you to setup Autoprefixer as part of your build process e.g. if you're using [Grunt](http://gruntjs.com/) then       you can create a Grunt task for Autoprefixer using something [like](https://github.com/nDmitry/grunt-autoprefixer)*




# Installing Scally

## Packages

Scally can be installed as a package with either:

- [npm](https://www.npmjs.org/)
- [Bower](http://bower.io/)

You'll need [Node.js](http://nodejs.org/) installed to use the npm and Bower packages, more information on installing npm [here](http://blog.npmjs.org/post/85484771375/how-to-install-npm). Once npm is installed you're good to install the Scally npm package by `cd`ing into your project folder (the root is recommended) and running this command:

```
npm install scally
```

For the Scally Bower package you first need to install Bower via npm like so:

```
npm install -g bower
```

Then, just like the npm package, you `cd` into your project folder (the root is recommended) and run this command:

```
bower install scally
```

Once the package is installed your project will look like this:

**npm**

```
project root
│
└───node_modules
    │
    └───scally
```

**Bower**

```
project root
│
└───bower_components
    │
    └───scally
```

### Getting the latest version

Once installed you can always get the latest version of Scally by running the following commands:

- **npm:** `npm update scally`
- **Bower:** `bower update scally`

**N.B.** Scally should never be edited or added too directly. If you ever make changes directly in Scally you will not be able to seamlessly update your version of Scally to the latest version.

*This is a very simple overview of npm and Bower so if you're new to them then please take the time to read up on them.*

## Download by zip

You can install Scally via the [**Download by zip**](https://github.com/chris-pearce/scally/archive/master.zip) option however it's advised to use a package manager like npm or Bower to handle your third-party dependencies.

# Setting up a new project

## Setting up your master stylesheet

Once you have installed Scally you will need to create a master Sass stylesheet called `style.scss`, that will live in the root of the folder where you keep all of your CSS.

Once you have created this file grab everything [from here](style.scss) and paste it into your master stylesheet then read the next section: [Master stylesheet overview](#master-stylesheet-overview).

This master stylesheet is what you will link too from your HTML head, once compiled that is, you can run a basic Sass watch command to compile your Sass, like this:

```
sass --watch style.scss:style.css
```

But for most projects your Sass will be compiling as part of your build process e.g. if you're using [Grunt](http://gruntjs.com/) then you can create a Grunt task to compile Sass using something [like](https://github.com/gruntjs/grunt-contrib-sass).

Then add a reference to the compiled master stylesheet in your HTML head:

```
<link href="[path/to/your/css/folder]/style.css" rel="stylesheet">
```

This master stylesheet is designed to pull in everything from Scally–however only the **Core** section is mandatory–plus your project-specific styles and compile down to a single css file.

## Master stylesheet overview

Your master stylesheet is split into three main sections:

- [**Your settings.**](#your-settings) All of your project-specific settings in the form of Sass variables.
- [**Scally framework.**](#scally-framework) The entire Scally framework including your overrides.
- [**Your styles.**](#your-styles) All of the CSS you will write for your project.

**N.B.** it's imperative this order is maintained otherwise Scally won't work.

### Your settings

This first section consists of one Sass partial:

```
@import "settings";
```

Which should live at the same level in your project file structure as your master stylesheet: `style.scss`, see an [example here](settings.scss).

In this partial you will store all of your common project-specific settings, beyond what Scally offers. Typically you won't have many of these.

Common project-specific settings might be adding more colours, so if you decide you need a new colour then in `settings.scss` you can create one like so:

```
$color-tertiary: #ccc;
```

Another example might be adding a new font family e.g.

```
$font-family-droid-sans: "Droid Sans", serif;
```

The reason this section comes first is so that you can refer to them throughout the rest of your styles.

### Scally framework

This section pulls in the entire Scally framework and is where you override Scally's settings.

This is what makes Scally so powerful, as Scally can be completely modified by changing the settings without ever having to alter the framework itself.

So for example if you wanted to change the global font size for your project then you assign a new value to the relevant Scally setting which in this case would be `$font-size` then simply declare it **above** the relevant `@import` partial in `style.scss`, like so:

```
$font-size: 14;
@import "bower_components/scally/core/settings/typography";
```

You can use your own project-specific settings from your [`settings.scss`](#your-settings) file to override any of the Scally settings e.g.

```
$color-text-base: $color-hotpink;
@import "bower_components/scally/core/settings/colours";
```

By default everything in the framework is imported. But if you want to be selective and you definitely should, so your CSS is as lean as possible, then only import what you need.

So if you decide you only need to use half of Scally's utilities then simply remove the relevant utility partial `@import`s you don't need from `style.scss`.

However the **Core** section is required, please do not remove any of the imports from this section.

### Your styles

This section is where you pull in all of your project-specific styles. We recommend following the same architecture as the Scally framework.

### Example architecture

So you may end up with your project setup like this, assuming that you contain all of your CSS in a folder called `css` and you use Bower as your package manager.

```
project root
│
└───bower_components
|   |
|   └───scally
|
└───css
    |   style.scss
    |   settings.scss
    |
    └───partials
        |
        ├───components
```



# Browser support

- Chrome (latest two versions).
- Firefox (latest two versions).
- Opera (latest two versions).
- Safari (latest two versions).
- IE9+.
- iOS 6+.
- Android 4+.




# Linting

To ensure a consistently authored code base and to keep things clean and readable Scally uses the [**scss-lint** tool](https://github.com/causes/scss-lint).

## Installation and usage

To install run the following command:

```
gem install scss-lint
```

To use `cd` into your project's root and run the command:

```
scss-lint ./
```

Which will lint *everything*, to lint at a more granular level [see](https://github.com/causes/scss-lint#usage).

## Linting rules

Scally's linting rules can be [found here](.scss-lint.yml) and are based off [these CSS authoring guidelines](https://github.com/chris-pearce/css-guidelines/).




# Contributing

Scally gratefully welcomes contributions from the open-source community but there are a number of requirements and principles that need to be adhered for code to eligible for inclusion in the framework.

## Keep it simple

Scally is written in Sass, which provides a lot of incredibly powerful features. However, Scally does not want to become a platform for Sass' capabilities&mdash;all code that comes into Scally should be as simple and CSS-like as possible.

Adding this complexity is against a number of Scally's core principles especially in team-based workflows, long-running and larger projects, and its flexibility.

Kinds of code not good for Scally:

- **Hundred-line mixins designed to avoid a couple of lines of repetition:** the overhead of typing a few more lines is much less than creating, documenting, learning, and maintaining complex Sass functionality.
- **Mixins which generate entire blocks of CSS:** creating 'black boxes' in code often leads to obscurity, lack of understanding, lack of confidence, and lack of trust in a codebase. Everything should be as transparent and CSS-like as possible.

## Submitting code to Scally

In addition to the principles outlined above here are some things to keep in mind when submitting code to Scally via a PR (Pull Request):

- Lint your Sass, [see](#linting). Scally's build tests will catch any linting issues however it's good practice to run linting manually also.
- Follow [these CSS authoring guidelines](https://github.com/chris-pearce/css-guidelines/). Linting will catch a lot of this but not everything.
- Test in all supported browsers and mobile platforms, [see](#browser-support).

**Credit:** alot of this section was taken from and inspired by the [Contributing section](https://github.com/inuitcss/CONTRIBUTING/blob/master/README.md) of [inuit.css](https://github.com/csswizardry/inuit.css).




# Scally improvements, issues, and questions

If you would like to suggest any new additions to Scally, any improvements, log any issues or bugs, or just ask a question, please [open a new issue](https://github.com/chris-pearce/scally/issues) and label appropriately.




# Versioning

Scally is maintained under the [Semantic Versioning guidelines](http://semver.org/) however sometimes we get it wrong, but we will do our best to adhere to those rules as much as possible and strive to maintain backwards compatibility.

[See the **CHANGELOG**](CHANGELOG.md).




# Credits

- [inuit.css](https://github.com/csswizardry/inuit.css)
- [SUIT CSS](https://github.com/suitcss/suit)
- [SMACCS](http://smacss.com/)
- [HTML5 Boilerplate](http://html5boilerplate.com/)




# License

Copyright 2014 Westfield Labs Corporation.

Copyright 2015 Chris Pearce.

[View license](LICENSE).

Licensed under the [Apache v2.0](http://www.apache.org/licenses/LICENSE-2.0) license.

Scally was originally created at [Westfield Labs](http://www.westfieldlabs.com/) whilst I was an employee there.

Scally was something I brought to Westfield Labs, and something I worked on full-time for a period of time as the main developer. Other Westfield Labs employees who contributed to Scally at that time:

- [Alec Raeside](http://alecraeside.com.au/)
- [Kate Levin](http://kllevin.com/)
- [Dan Sim](http://daniel-sim.com/)

After I finished at Westfield Labs I decided to fork Scally so I could maintain it myself under my own personal GitHub account.




# Presentations

- <http://scally.chris-pearce.me/presentation> (done for my current employer [Campaign Monitor](https://www.campaignmonitor.com/) in Jan 2015)
