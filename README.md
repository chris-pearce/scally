<img src="https://dl.dropboxusercontent.com/s/anlzedtpekcnla7/logo.png" width="211">




# Contents

- [What is Scally?](#what-is-scally)
- [Demos](#demos)
- [Scally architecture](#scally-architecture)
- [Dependencies](#dependencies)
- [Installing Scally](#installing-scally)
  - [Packages](#packages)
  - [Git clone](#git-clone)
  - [Download by zip](#download-by-zip)
- [Setting up a new project](#setting-up-a-new-project)
  - [Setting up your master stylesheet](#setting-up-your-master-stylesheet)
  - [Master stylesheet overview](#master-stylesheet-overview)
    - [Your settings](#your-settings)
    - [Scally framework](#scally-framework)
    - [Your styles](#your-styles)
    - [Sample master stylesheet](#sample-master-stylesheet)
    - [Example architecture](#example-architecture)
- [Browser support](#browser-support)
- [Authoring guidelines](#authoring-guidelines)
  - [Linting](#linting)
  - [Installation](#installation)
  - [Linting rules](#linting-rules)
- [Contributing](#contributing)
  - [Keep it simple](#keep-it-simple)
  - [Submitting code to Scally](#submitting-code-to-scally)
  - [Scally GitHub issues](#scally-gitHub-issues)
- [Versioning](#versioning)
- [Credits](#credits)
- [License](#license)
- [Further documentation](#further-documentation)




# What is Scally?

Scally is a [Sass](http://sass-lang.com/)-based,
[BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/),
[OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/),
responsive-ready, CSS framework that provides you with a solid foundation for
building reusable UIs quickly. It is a framework focused on scalability and
reuse; there when you need it and getting out of your way when you don't.

Scally is designed to be configurable, only requiring you to bring in the parts
you are using, keeping your CSS architecture lightweight and scalable. It is
un-opinionated about design, thus giving you more flexibility than your typical UI
toolkit.




# Demos

*A website—featuring demos of everything in Scally—is coming soon. In the
meantime there are CodePens that can be looked at but are a work in progress:*

- [Layout](http://codepen.io/chris-pearce/full/jEXNWX/)
- [Utilities](http://codepen.io/chris-pearce/full/WbMgMp/)




# Scally architecture

Scally is broken down into five main sections, with each section getting its
own level of specificity. This means each one builds on top of the other in
terms of inheritance and CSS' first C: the cascade. Think of these sections as
layers:

<img src="https://dl.dropboxusercontent.com/s/d5dkntp1kckkvkm/layers.svg">

The breakdown of these layers from bottom to top (order of their specificity):

- [Core](core/README.md)
- [Layout](layout/README.md)
- [Objects](objects/README.md)
- [Components](components/README.md)
- [Utilities](utilities/README.md)




# Dependencies

- [Sass](http://sass-lang.com/install) (either [Ruby](http://rubyinstaller.org/)
or [LibSass](http://libsass.org/))
- [Autoprefixer](https://github.com/postcss/autoprefixer)

    > Autoprefixer parses CSS and adds vendor-prefixed CSS properties using
    the [Can I use](http://caniuse.com/) database.

    *We advise you to setup Autoprefixer as part of your build process. If
    you're using [Grunt](http://gruntjs.com/), you can create a Grunt task
    for Autoprefixer using a Grunt plugin such as
    [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)*.




# Installing Scally

## Packages

Scally can be installed as a package with either:

- [npm](https://www.npmjs.org/); or
- [Bower](http://bower.io/)

You'll need [node.js](http://nodejs.org/) installed to use the npm and Bower
packages. More information on installing npm can be [found here](http://blog.npmjs.org/post/85484771375/how-to-install-npm).
With node.js installed, you can install the Scally npm package by `cd`ing into
your project folder (the root is recommended) and running this command:

```sh
npm install scally
```

For the Scally Bower package, you first need to install Bower via npm like so:

```sh
npm install -g bower
```

Then, just like the npm package, you `cd` into your project folder (the root is
recommended) and run this command:

```sh
bower install scally
```

Once the package is installed, your project will look like this:

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

**N.B.** Scally should never be edited or added to directly. If you ever make
changes directly in Scally, you will not be able to seamlessly update your
version of Scally to the latest version at a later date.

This is a very simple overview of npm and Bower. If you are new to them, you
can learn more about npm [here](https://www.npmjs.com/) and
check out Bower's docs [here](http://bower.io/).

## Git clone

You can install Scally by using the `git clone` command by `cd`ing in to the
root of your workspace folder and running this command:

```sh
git clone git@github.com:chris-pearce/scally.git
```

If you don't want to use the SSH clone URL, GitHub also offers:

- [HTTPS](https://github.com/chris-pearce/scally.git); and
- [Subversion](https://github.com/chris-pearce/scally)

## Download by zip

You can install Scally via the [**Download by zip**](https://github.com/chris-pearce/scally/archive/master.zip) option which is part of the Scally GitHub
interface.

**It's advised to use a package manager like npm or Bower to handle your
third-party dependencies.**

# Setting up a new project

## Setting up your master stylesheet

Once you have installed Scally, you will need to create a master Sass stylesheet
called `style.scss`, or whatever you prefer (but for the purpose of
this document `style.scss` will be the expected name).

This file will live at the root of the folder where you keep all of your CSS.

The compiled version of this file will be your master stylesheet that's linked
from your HTML `<head>`. In Ruby, you can run a basic Sass `watch` command to
compile your Sass, like this:

```sh
sass --watch style.scss:style.css
```

But for most projects your Sass will be compiling as part of a build process
e.g. if you're using [Grunt](http://gruntjs.com/), you can use a Grunt
plugin such as [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
or [grunt-sass](https://github.com/sindresorhus/grunt-sass) to compile the Sass.

Then add a reference to the compiled master stylesheet in your HTML `<head>`:

```html
<link href="[path/to/your/css/folder]/style.css" rel="stylesheet">
```

This master stylesheet is designed to combine the Scally framework and your
project-specific styles together and compile them down to a single CSS file.
We'll dig into how we suggest you set this up in the next section.

## Master stylesheet overview

Your master stylesheet is split into three main sections:

1. [**Your settings.**](#your-settings) All of your project-specific settings
   in the form of Sass variables.
2. [**Scally framework.**](#scally-framework) The entire Scally framework
   including project-specific overrides.
3. [**Your styles.**](#your-styles) All of the CSS you will write for your
   project.

**N.B.** it's imperative this order is maintained otherwise Scally won't work.

### Your settings

Create a new `.scss` file called `settings.scss` that will live in the root of
the folder where you keep all of your CSS, along with your master Sass
stylesheet: `style.scss`, and link to this file from `style.scss` like so:

```scss
@import "settings";
```

**This must come before the other two sections.**

In this file you will store all of your common project-specific settings,
beyond what Scally offers. Typically you won't have many of these, however,
common project-specific settings might include adding more brand colours.
If you need a new colour, in `settings.scss` you can create one like so:

```scss
$color-tertiary: #ccc;
```

Another example might be adding a new font family, e.g.

```scss
$font-family-droid-sans: "Droid Sans", sans-serif;
```

The reason this section comes first is so that you can refer to them throughout
the rest of your styles.

### Scally framework

This section pulls in the entire Scally framework via individual Sass
[`@imports`](http://sass-lang.com/guide#topic-5) and is where you override
Scally's settings.

This is what makes Scally so powerful; it can be completely modified by
changing the settings without ever having to alter the framework itself.

For example, if you wanted to change the global font size for your project,
you simply assign a new value to the relevant Scally setting (which in this case
would be `$font-size`) and declare it **above** the relevant `@import`
partial in `style.scss`, like so:

```scss
$font-size: 14;
@import "[path/to/the/scally/framework]/scally/core/settings/typography";
```

You can use your own project-specific settings from your
[`settings.scss`](#your-settings) file to override any of the Scally settings
e.g.

```scss
$color-text-base: $color-hotpink;
@import "[path/to/the/scally/framework]/scally/core/settings/colours";
```

The [sample master stylesheet](#sample-master-stylesheet)
imports everything in the framework by default. You should be selective to
ensure your CSS is as lean as possible, by only importing what you need.

If you decide you only need to use half of Scally's utilities, then simply
remove the relevant utility partial `@import`s that you don't need from
`style.scss`.

However, the **Core** section is required, so please do not remove any of the
`@import`s for this section or Scally will not work as expected.

### Your styles

This section is where you pull in all of your project-specific styles. We
recommend following the [same architecture](#scally-architecture) as the Scally
framework.

### Sample master stylesheet

Here is a sample of a master stylesheet you could use for your `style.scss`:

```scss
@charset "UTF-8";


/* ============================================================================
   @MASTER STYLESHEET
   ========================================================================= */


/**
 * Scally, being an OO framework, works in keeping with the open/closed
 * principle. Any custom styles *SHOULD NOT* be added or modified in Scally
 * directly. This also allows the framework to be updated seamlessly.
 *
 * Contents:
 *
 * Your settings.........your project-specific settings.
 * Scally framework......the entire Scally framework including your overrides.
 * Your styles...........all your project-specific styles.
 *
 * N.B. the above order and the order within the Scally framework section must
 * always be followed.
 */




/* Your settings
   ========================================================================= */

/**
 * Your project-specific settings.
 *
 * N.B. define first so they can be used throughout your styles.
 */

@import "settings";




/* Scally framework
   ========================================================================= */

/**
 * By default everything is imported. But if you want to be selective and you
 * definitely should, so your CSS is as lean as possible, then only import what
 * you want. The Core section is however mandatory.
 *
 * Any settings you find set in Scally that you do not wish to keep, simply
 * redefine above/below the relevant `@import`. This means that if Scally, for
 * example, sets your `$font-size` at `16px` and you wish it to be `14px`,
 * simply redeclare it above the relevant `@import`, like so:
 *
   $font-size: 14;
   @import "[path/to/the/scally/framework]/core/settings/typography";
 *
 * If you want to use a Scally setting to override something then you need to
 * define the override below the `@import`, like so:
 *
   @import "[path/to/the/scally/framework]/core/settings/colours";
   $color-text-base: $color-brand;
 *
 * If you try to redeclare above the `@import` your Sass won't compile as you
 * don't have access to the Scally setting at the point of compilation.
 *
 * All non-Core settings need to be overridden above the `@import`, like so:
 *
   $o-arrow-size-base: 14;
   $o-arrow-color: orange;
   @import "[path/to/the/scally/framework]/objects/o-arrow";
 *
 * Scally ignores its own settings in favour of using your own, so you can
 * completely modify how Scally works without ever having to alter the
 * framework itself.
 *
 * N.B. the order specified below must always be followed or Scally will
 * break.
 *
 * Contents:
 *
 * CORE
 * LAYOUT
 * OBJECTS
 * COMPONENTS
 * UTILITIES
 */


/**
 * CORE.
 *
 * N.B. this is all mandatory for the Scally framework.
 */

// Settings
@import "[path/to/the/scally/framework]/core/settings/typography";

@import "[path/to/the/scally/framework]/core/settings/spacing";

@import "[path/to/the/scally/framework]/core/settings/retina-resolution";

@import "[path/to/the/scally/framework]/core/settings/breakpoints";

@import "[path/to/the/scally/framework]/core/settings/widths";

@import "[path/to/the/scally/framework]/core/settings/colours";

@import "[path/to/the/scally/framework]/core/settings/positioning";

@import "[path/to/the/scally/framework]/core/settings/cosmetics";

// Functions
@import "[path/to/the/scally/framework]/core/functions/convert-px-to-em-rem";

@import "[path/to/the/scally/framework]/core/functions/math-helpers";

@import "[path/to/the/scally/framework]/core/functions/string-replace";

@import "[path/to/the/scally/framework]/core/functions/strip-unit";

// Mixins
@import "[path/to/the/scally/framework]/core/mixins/convert-px-to-em-rem";

@import "[path/to/the/scally/framework]/core/mixins/font-size";

@import "[path/to/the/scally/framework]/core/mixins/gradients";

@import "[path/to/the/scally/framework]/core/mixins/media-queries";

@import "[path/to/the/scally/framework]/core/mixins/generate-at-breakpoints";

@import "[path/to/the/scally/framework]/core/mixins/generate-percentage-classes-at-breakpoints";

@import "[path/to/the/scally/framework]/core/mixins/retina-bg-image";

@import "[path/to/the/scally/framework]/core/mixins/target-browsers";

@import "[path/to/the/scally/framework]/core/mixins/target-headings";

@import "[path/to/the/scally/framework]/core/mixins/text-input-placeholder-colour.scss";

// Normalize
@import "[path/to/the/scally/framework]/core/normalize";

// Reset
@import "[path/to/the/scally/framework]/core/reset";

// Base
@import "[path/to/the/scally/framework]/core/base/root";

@import "[path/to/the/scally/framework]/core/base/abbreviation";

@import "[path/to/the/scally/framework]/core/base/forms";

@import "[path/to/the/scally/framework]/core/base/details";

@import "[path/to/the/scally/framework]/core/base/headings";

@import "[path/to/the/scally/framework]/core/base/horizontal-rule";

@import "[path/to/the/scally/framework]/core/base/links";

@import "[path/to/the/scally/framework]/core/base/media";

@import "[path/to/the/scally/framework]/core/base/paragraphs";

@import "[path/to/the/scally/framework]/core/base/print";

@import "[path/to/the/scally/framework]/core/base/viewport";

// Placeholders
@import "[path/to/the/scally/framework]/core/placeholders/bottom-spacing";


/**
 * LAYOUT.
 */

// Main container
@import "[path/to/the/scally/framework]/layout/l-container";

// Grid
@import "[path/to/the/scally/framework]/layout/l-grid";

@import "[path/to/the/scally/framework]/layout/l-grid-pull";

@import "[path/to/the/scally/framework]/layout/l-grid-push";

// Side-by-side
@import "[path/to/the/scally/framework]/layout/l-side-by-side";

@import "[path/to/the/scally/framework]/layout/l-side-by-side-alt";

// CSS3 columns
@import "[path/to/the/scally/framework]/layout/l-columns";


/**
 * OBJECTS.
 */

@import "[path/to/the/scally/framework]/objects/o-drop-down";

@import "[path/to/the/scally/framework]/objects/o-flexible-embed";

@import "[path/to/the/scally/framework]/objects/o-link-complex";

@import "[path/to/the/scally/framework]/objects/o-link-disguised";

@import "[path/to/the/scally/framework]/objects/o-list";

@import "[path/to/the/scally/framework]/objects/o-list-block";

@import "[path/to/the/scally/framework]/objects/o-list-inline";

@import "[path/to/the/scally/framework]/objects/o-arrow";

@import "[path/to/the/scally/framework]/objects/o-overlay";

@import "[path/to/the/scally/framework]/objects/o-table";

@import "[path/to/the/scally/framework]/objects/o-button";


/**
 * COMPONENTS.
 */

@import "[path/to/the/scally/framework]/components/c-button";

@import "[path/to/the/scally/framework]/components/c-button-faux-link";


/**
 * UTILITIES.
 */

@import "[path/to/the/scally/framework]/utilities/u-clear-fix";

@import "[path/to/the/scally/framework]/utilities/u-text";

@import "[path/to/the/scally/framework]/utilities/u-widths";

@import "[path/to/the/scally/framework]/utilities/u-alignments";

@import "[path/to/the/scally/framework]/utilities/u-toggle-visibility";

@import "[path/to/the/scally/framework]/utilities/u-momentum-scrolling";

@import "[path/to/the/scally/framework]/utilities/u-float";

@import "[path/to/the/scally/framework]/utilities/u-new-block-formatting-context";

@import "[path/to/the/scally/framework]/utilities/u-gpu-accelerated";

@import "[path/to/the/scally/framework]/utilities/u-position";

@import "[path/to/the/scally/framework]/utilities/u-display";

@import "[path/to/the/scally/framework]/utilities/u-spacing";

@import "[path/to/the/scally/framework]/utilities/u-overflow";

@import "[path/to/the/scally/framework]/utilities/u-hide";




/* Your styles
   ========================================================================= */

// Start styling your project via individual @imports :)

```

### Example architecture

You may end up with your project setup like this—assuming you have contained
all of your CSS in a folder called `css` and you have used Bower as your
package manager:

```
project root
│
└───bower_components
|   |
|   └───scally
|
└───css
    |   settings.scss
    |   style.scss
    |
    └───partials
        |
        ├───components
        |
        ├─── [...]
```




# Browser support

- Chrome (last two versions).
- Firefox (last two versions).
- Opera (last two versions).
- Safari (last two versions).
- IE9+.
- iOS 7+.
- Android 4+.




# Authoring guidelines

Scally follows these [CSS authoring guidelines](https://github.com/chris-pearce/css-guidelines/).

## Linting

To ensure a consistently-authored codebase, and to keep things clean and
readable, Scally uses [**scss-lint**](https://github.com/causes/scss-lint).

### Installation

To install, run the following command:

```sh
gem install scss-lint
```

To use, `cd` into your project's root and run this command:

```sh
scss-lint ./
```

This will lint *everything*. To lint at a more granular level,
[learn about its usage](https://github.com/causes/scss-lint#usage).

### Linting rules

[Scally's linting rules](.scss-lint.yml) are based off these [CSS authoring guidelines](https://github.com/chris-pearce/css-guidelines/).




# Contributing

Scally gratefully welcomes contributions from the open-source community.

## Keep it simple

Scally is written in Sass, which provides a lot of incredibly powerful
features. However, Scally does not want to become a platform to showcase Sass'
capabilities; all code that comes into Scally should be as simple and CSS-like
as possible.

## Submitting code to Scally

Before submitting code to Scally, check the
[Scally GitHub issues](https://github.com/chris-pearce/scally/issues) to see if
what you want to add to Scally already exists. If it doesn't, create a new
issue and label it appropriately. It's a good idea to wait a few days for some
feedback from the Scally community before writing any code.

To submit code to Scally, [fork](https://help.github.com/articles/fork-a-repo/)
the Scally repository, make your changes, then create a [GitHub Pull Request](https://help.github.com/articles/using-pull-requests/)
back to the Scally master branch for review.

Your PR title should use the same title as its corresponding GitHub issue but
prefixed with the issue number e.g.

> Issue #108: Remove style.scss and style.css from the repo and package json
files

And in the PR description include:

> This fixes #[x]

Where 'x' is the issue number. GitHub will offer an auto-complete menu as soon
as you type '#' where you can choose the corresponding PR.

You should also add a comment in the GitHub issue linking to the PR.

**Make sure your code is:**

- Thoroughly tested:
  - Your Sass compiles both with the Ruby compiler and the LibSass compiler.
  - Tested in all supported browsers, [see](#browser-support).
- [Linted](#linting). Scally's build tests will catch any linting issues,
  however, it's good practice to also run linting manually.
- Following these
  [CSS authoring guidelines](https://github.com/chris-pearce/css-guidelines/).
  Linting will catch a lot of this but not everything.

## Scally GitHub issues

If you would like to suggest any new additions or improvements to Scally, log
any issues or bugs, or just ask a question, please
[open a new GitHub issue](https://github.com/chris-pearce/scally/issues) and
label it appropriately.




# Versioning

Scally is maintained under the
[Semantic Versioning guidelines](http://semver.org/). We will do our best to
adhere to those guidelines and strive to maintain backwards compatibility.

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

Licensed under the [Apache v2.0](http://www.apache.org/licenses/LICENSE-2.0)
license.

Scally was originally created at [Westfield Labs](http://www.westfieldlabs.com/)
whilst I was employed there.

Scally was something I brought to Westfield Labs, and something I worked on
full-time as the main developer. Other Westfield Labs employees who also
contributed to Scally include:

- [Alec Raeside](http://alecraeside.com.au/)
- [Kate Levin](http://kllevin.com/)
- [Dan Sim](http://daniel-sim.com/)

After I finished at Westfield Labs, I decided to fork Scally so I could maintain
the framework myself under my own personal GitHub account.

Since then, there have been other contributions to Scally from:

- [Matt Stow](http://mattstow.com)
- [Hugo Giraudel](http://hugogiraudel.com/)




# Further documentation

- [A presentation on Scally](http://presentation.chris-pearce.me/scally)—given
  at [Campaign Monitor](https://www.campaignmonitor.com/) on Jan 2015.
