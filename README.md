<img src="https://dl.dropboxusercontent.com/s/anlzedtpekcnla7/logo.png" width="252">




# Contents

- [What is Scally?](#what-is-scally)
- [Scally architecture](#scally-architecture)
- [Dependencies](#dependencies)
- [Installing Scally](#installing-scally)
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




# What is Scally?

Scally is a [Sass](http://sass-lang.com/)-based, [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), [OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), responsive ready, CSS framework that provides you with a solid foundation for building reusable UI's quickly. It is a framework focused on scalability and reuse, there when you need it and getting out of your way when you don't.

Scally is designed to be configurable, only requiring you to bring in the parts you are using, keeping your CSS architecture light weight and scalable. It is unopinionated about design giving you more flexibility than your typical UI toolkit.




# Scally architecture

Scally is broken down into four main sections with each section getting it's own level of specificity meaning each one builds on top of the other in terms of inheritance and CSS' first C; the cascade. Think of them as layers.

The breakdown in order of their specificity:

- [Core](core/README.md)
- [Layout](layout/README.md)
- [Components](components/README.md)
- [Utilities](utilities/README.md)




# Dependencies

- [Ruby](http://rubyinstaller.org/), *if you're using a Mac then Ruby comes pre-installed*
- [Sass](http://sass-lang.com/install)
- [Autoprefixer](https://github.com/postcss/autoprefixer)

 >> Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.

 We advise you to setup Autoprefixer as part of your build process e.g. if you're using [Grunt](http://gruntjs.com/) then  you can create a Grunt task for Autoprefixer using something [like](https://github.com/nDmitry/grunt-autoprefixer).




# Installing Scally

Scally can be installed via [Bower](http://bower.io/).

Bower needs to be installed with npm:

```
npm install -g bower
```

*Bower requires [Node and npm](http://nodejs.org/) and [Git](http://git-scm.com/).*

Once Bower is installed you can install Scally by `cd`ing into your project folder or into the folder where you keep your CSS and run the following command:

```
bower install scally
```

By default Bower will create a `bower_components` folder. You can change this to be any folder you wish via the `.bowerrc` file, [see](http://bower.io/docs/config/#directory).

So if you have a `css` folder in your project and run the above command in that folder you'll end up with something like this:

```
css
│
└───bower_components
    │
    └───Scally
```

**N.B.** Scally should never be edited or added too directly. If you ever make changes directly in Scally you will not be able to seamlessly update your version of Scally to the latest version.

Once installed you can always get the latest version of Scally by running the following command:

```
bower update
```

*This is a very simple overview of Bower so if you're new to it then please take the time to [read up on it](http://bower.io/).*

You can install Scally via the [**Download by zip**](https://github.com/chris-pearce/scally/archive/master.zip) option however it's advised to use a package manager like Bower to handle your third-party dependencies.


# Setting up a new project

## Setting up your master stylesheet

Once you have installed Scally you will need to create a master Sass stylesheet called `style.scss`, or whatever you want to name it, that will live in the root of the folder where you keep all of your CSS.

Once you have created this file grab everything [from here](https://github.com/chris-pearce/scally/blob/master/style.scss) and paste it into your master stylesheet.

This master stylesheet is what you will link too from your HTML head, once compiled that is, you can run a basic Sass watch command to compile your Sass, like this:

```
sass --watch style.scss:style.css
```

But for most projects your Sass will be compiling as part of your build process e.g. if you're using [Grunt](http://gruntjs.com/) then you can create a Grunt task to compile Sass using something [like](https://github.com/gruntjs/grunt-contrib-sass).

Then add a reference to the compiled master stylesheet in your HTML head:

```
<link href="[path/to/your/css/folder]/style.css" rel="stylesheet">
```

This master stylesheet is designed to pull in everything from Scally plus your project-specific styles and compile down to a single css file.

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

Which should live at the same level in your project file structure as your master stylesheet: `style.scss`, see an [example here](https://raw.githubusercontent.com/chris-pearce/scally/master/settings.scss).

In this partial you will store all of your common project-specific settings, beyond what Scally offers. Typically you won't have many of these.

Common project-specific settings might be adding more colours, so if you decide you need a new colour then in `settings.scss` you can create one like so:

```
$colour-tertiary: #ccc;
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
$colour-text-base: $colour-hotpink;
@import "bower_components/scally/core/settings/colours";
```

By default everything in the framework is imported. But if you want to be selective and you definitely should, so your CSS is as lean as possible, then only import what you need.

So if you decide you only need to use half of Scally's utilities then simply remove the partial `@import`s you don't need from `style.scss`.

However the **Core** section is required, please do not remove any of the imports from this section.

**N.B.** if you change the Bower install folder e.g. from `bower_components` to `vendor`, via the `.bowerrc` file, then make sure to update the paths in all of Scally's `@import` partials. So this:

```
@import "bower_components/scally/core/settings/colours";
```

Would become:

```
@import "vendor/scally/core/settings/colours";
```

### Your styles

This section is where you pull in all of your project-specific styles. We recommend following the same architecture as the Scally framework.

### Example architecture

Here is an example of the architecture mentioned just above, assuming you contain all of your CSS in a folder called `css` and if Scally is installed via the default Bower install in your `css` folder.

    css
    |   style.scss
    |   settings.scss
    │
    └───bower_components
    |   │
    |   └───Scally
    |
    └───partials
        │
        ├───components
        |
        ├───core
        |
        ├───layout
        |
        ├───utilities




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

Scally's linting rules can be [found here](.scss-lint.yml) and are based off [these CSS authoring guidelines](https://github.com/chris-pearce/css-guidelines/). If you wish you can override these rules or remove them completely via your own `.scss-lint.yml` file in the root of your project, refer to the [scss-lint documentation](https://github.com/causes/scss-lint) on how to set that up.




# Contributing

Scally gratefully welcomes contributions from the open-source community but there are a number of requirements and principles that need to be adhered for code to eligible for inclusion in the framework.

## Keep it simple

Scally is written in Sass, which provides a lot of incredibly powerful features. However, Scally does not want to become a platform for Sass' capabilities&mdash;all code that comes into Scally should be as simple and CSS-like as possible.

Adding this complexity is against a number of Scally's core principles especially in team-based workflows, long-running and larger projects, and its flexibility.

- **It obscures functionality.** This can make things harder to decipher, understand, and debug.
- **It adds points-of-failure.** More moving parts means more things to go wrong. Always err on the side of simplicity.
- **It requires an advanced level of understanding.** On large(r) projects, the variance in skill-level can differ greatly. From designers, to front-end developers, to software engineers, everyone will need to author some CSS at some point—make this learning curve as shallow as possible.
- **It creates a barrier to entry.** Scally hopes to become a widely useful framework: so it is taking active steps to become less opinionated and even more flexible so that it can be implemented by a more varied user base—adding advanced Sass features will close this openness back up.
- **It adds unnecessary complexity.** Working on large(r) projects commands a greater cognitive overhead as it is; adding more complexity is the wrong direction to go.

Kinds of code not good for Scally:

- **Hundred-line mixins designed to avoid a couple of lines of repetition:** the overhead of typing a few more lines is much less than creating, documenting, learning, and maintaining complex Sass functionality.
- **Mixins which generate entire blocks of CSS:** creating 'black boxes' in code often leads to obscurity, lack of understanding, lack of confidence, and lack of trust in a codebase. Everything should be as transparent and CSS-like as possible.

## Submitting code to Scally

In addition to the principles outlined above here are some things to keep in mind when submitting code to Scally via a PR (Pull Request):

- Lint your Sass, [see](#linting). Scally's build tests will catch any linting issues however it's good practice to run linting manually also.
- Follow [these CSS authoring guidelines](https://github.com/chris-pearce/css-guidelines/). Linting will catch a lot of this but not everything.
- Test in all supported browsers and mobile platforms, [see](#browser-support).

**Credit:** alot of this section was taken from and inspired by the [Contributing section](https://github.com/inuitcss/CONTRIBUTING/blob/master/README.md) of [inuit.css](https://github.com/csswizardry/inuit.css)




# Scally improvements, issues, and questions

If you would like to suggest any new components or utilities, any improvements, log any issues or bugs, or just ask a question, please [open a new issue](https://github.com/chris-pearce/scally/issues) and label appropriately.




# Versioning

Scally is maintained under the [Semantic Versioning guidelines](http://semver.org/) however sometimes we get it wrong, but we will do our best to adhere to those rules as much as possible and strive to maintain backwards compatibility.

~~[See the **CHANGELOG**](CHANGELOG.md).~~




# Credits

- [inuit.css](https://github.com/csswizardry/inuit.css)
- [SUIT CSS](https://github.com/suitcss/suit)
- [SMACCS](http://smacss.com/)
- [HTML5 Boilerplate](http://html5boilerplate.com/)




# License

Copyright 2015 Chris Pearce. [View license](LICENSE).

Licensed under the [The MIT License (MIT)](http://opensource.org/licenses/MIT).

Scally was originally created at [Westfield Labs](http://www.westfieldlabs.com/) whilst I was an employee there.

Scally was something I brought to Westfield Labs, and something I worked on full-time for a period of time as the main developer. Other Westfield Labs employees who contributed to Scally at that time:

- [Alec Raeside](http://alecraeside.com.au/)
- [Kate Levin](http://kllevin.com/)
- [Dan Sim](http://daniel-sim.com/)

After I finished at Westfield Labs I decided to fork Scally so I could maintain it myself under my own personal GitHub account.
