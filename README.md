<img src="https://dl.dropboxusercontent.com/s/t3nzwcg0gwqj6wy/logo-red.png" width="260">

# Scally framework

An unopinionated, responsive friendly, OOCSS, Sass-based, BEM, CSS framework.

**NOTE:** a more detailed README along with a proper web site will be coming shortly.

## Key features

- Follows [OOCSS](http://oocss.org/) methodologies.
- Focuses on the need for scalability and reuse.
- Provides little-to-no design.
- Is responsive and built Mobile First.
- Uses [Sass](http://sass-lang.com/).
- Built on a [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)-style naming convention.

## Browser support

- IE9+.
- Chrome.
- Firefox.
- Opera.
- Safari (incl. iOS).
- Android 3+.

## Compile Sass

Doing a simple sass watch requires you to `cd` into the directory where your `style.scss` lives and run one of the following commands in your terminal:

- `sass --watch style.scss:style.css --style compressed` - minified
- `sass --watch style.scss:style.css --style expanded` - non-minified

## Build test

`rake test`

## Linting

Requires the [scss-lint](https://github.com/causes/scss-lint) gem.

Run `scss-lint ./` to lint all .scss files according to [these lint rules](.scss-lint.yml).

## Credits

- [Inuit Framework](https://github.com/csswizardry/inuit.css).
- [SMACCS](http://smacss.com/).
- [SUIT CSS](https://github.com/suitcss/suit).

## Licence

Copyright 2014 Westfield Labs Corporation

Licensed under the [Apache v2.0](https://raw.githubusercontent.com/westfieldlabs/scally/master/LICENSE) licence.