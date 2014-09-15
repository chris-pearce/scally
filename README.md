![Scally logo](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/UjRDGVI8H0Lsvbw/Rectangle%202%20%2B%20Scally%203.svg)

# Scally framework

>> Has no styling

## Key features

- Follows [OOCSS](http://oocss.org/) methodologies.
- Focuses on the need for scalability and reuse.
- Provides little-to-no design.
- Is responsive and built Mobile First.
- Uses [Sass](http://sass-lang.com/).
- Built on a [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)-style naming convention.
- [KSS](http://warpspire.com/kss/) ready.

## Browser support

- IE9+.
- Chrome.
- Firefox.
- Opera.
- Safari (incl. iOS).
- Android 3+.

## Compile Sass

`sass --watch style.scss:style.css --style compressed`
`sass --watch style.scss:style.css --style expanded`

## Testing

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
