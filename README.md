<img src="https://dl.dropboxusercontent.com/s/t3nzwcg0gwqj6wy/logo-red.png" width="260">

# Scally CSS framework


## What is Scally?

Scally is a [Sass](http://sass-lang.com/)-based, [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), [OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), responsive ready, framework that provides you with a solid foundation for building reusable UI's quickly. It is a framework focused on scalability and reuse, there when you need it and getting out of your way when you don't.

Scally is designed to be configurable, only requiring you to bring in the parts you are using, keeping your CSS architecture light weight and scalable. It is unopinionated about design giving you more flexibility than your typical UI toolkit.

You can view Scally [here](http://codepen.io/collection/AxDKv/).


## Installing Scally

Scally can be installed via [Bower](http://bower.io/).

To install Scally `cd` into your project folder or into the folder where you keep your CSS and run the following command:

    $ bower install westfieldlabs/scally

By default Bower will create a `bower_components` folder. You can change this to be any folder you wish via the `.bowerrc` file, [see](http://bower.io/docs/config/#directory).

So if you have a `css` folder in your project and run the above command in that folder you'll end up with something like this:

    css
    │
    └───bower_components
        │
        └───Scally

**N.B.** Scally should never be edited or added too directly. If you ever make changes directly in `Scally` you will not be able to seamlessly update your version of Scally to the latest version. To update run the following command:

    $ bower update

*This is a very simple overview of Bower so if you're new to it then please take the time to [read up on it](http://bower.io/).*

You can install Scally via the **Download by zip** option however it's advised to use Bower.


## Setting up a new Project

### Setting up your master stylesheet

Once you have installed Scally you'll need to create a master sass file called `style.scss` (or whatever you want to name it) that will live in the root of the folder where you keep all of your CSS.

Once you have created this file grab everything [from here](https://github.com/westfieldlabs/scally/blob/master/style.scss) and paste into your `style.scss`.

`style.scss` is your master stylesheet that you will call from your HTML head, once compiled that is, you can run a basic Sass watch command to compile your Sass, like this:

    sass --watch style.scss:style.css

Then add a reference to the compiled css in your HTML head:

    <link href="[path/to/your/css/folder]/style.css" rel="stylesheet">

This master stylesheet is designed to pull in everything for Scally plus your project-specific styles and compile down to a single css file.

### Master stylesheet overview

Your master stylesheet is split into three main sections:

- **Your settings:** all of your project-specific settings in the form of Sass variables.
- **Scally framework:** the entire Scally framework.
- **Your styles:** all of the CSS you will write for your project.

*It's imperative this order is maintained otherwise Scally won't work.*

#### Your settings

This first section consists of one Sass partial:

    @import "settings";

Which should live at the same level as your master stylesheet: `style.scss`.

In this partial you will store all of your common project-specific settings, beyond what Scally offers. Typically you won't have many of these.

Common project-specific settings might be adding more colours, so if you decide you need a new colour then in `settings.scss` you can create one like so:

    $colour-tertiary: #ccc;

Another example might be adding a new font family e.g.

    $font-family-droid-sans: "Droid Sans", serif;

The reason this section comes first is so that you can refer to them throughout the rest of your styles.

### Scally framework

This section pulls in the entire Scally framework and is where you override Scally's settings.

This is what makes Scally so powerful, as Scally can be completely modified by changing the settings without ever having to alter the framework itself.

So for example if you wanted to change the global font size for your project then you assign a new value to the relevant Scally variable which in this case would be `$font-size` then simply declare it **above** the relevant `@import` partial in `style.scss`, like so:

    $font-size: 14;
    @import "bower_components/scally/core/settings/typography";

You can use your own project-specific settings from your `settings.scss` file to override any of the Scally settings e.g.

    $colour-text-base: $colour-hotpink;
    @import "bower_components/scally/core/settings/colours";

By default everything is available in the framework is imported. But if you want to be selective and you definitely should, so your CSS is as lean as possible, then only import what you need.

So if you decide you only need to use half of Scally's utilities then simply remove the partial `@import`s you don't need from `style.scss`.

The **Core** section is required, please do not remove any of the imports from this section.

**N.B.** if you customise any of Bower's default settings e.g. change the Bower install folder from `bower_components` to `vendor`, via the `.bowerrc` file, then make sure to update the paths in all of Scally's `@import` partials. So this:

     @import "bower_components/scally/core/settings/colours";

Would become:

     @import "vendor/scally/core/settings/colours";

### Your Styles

This section is where you pull in all of your project-specific styles


## Dependencies

Scally has one dependency which is [**Autoprefixer**](https://github.com/postcss/autoprefixer).

>> Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.

We advise you to setup **Autoprefixer** as part of your build process e.g. integrate it into [Gulp](https://github.com/nDmitry/grunt-autoprefixer).


## Browser Support

- IE9+.
- Chrome.
- Firefox.
- Opera.
- Safari (incl. iOS).
- Android 3+.


## Build Test

`rake test`


## Linting

Requires the [scss-lint](https://github.com/causes/scss-lint) gem.

Run `scss-lint ./` to lint all `.scss` files according to [these lint rules](.scss-lint.yml).


## Credits

- [Inuit Framework](https://github.com/csswizardry/inuit.css).
- [SMACCS](http://smacss.com/).
- [SUIT CSS](https://github.com/suitcss/suit).


## Licence

Copyright 2014 Westfield Labs Corporation

Licensed under the [Apache v2.0](https://raw.githubusercontent.com/westfieldlabs/scally/master/LICENSE) licence.