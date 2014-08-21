# TODO

## Global

- `style.scss`.
- Have a setting that allows you to dictate when everything goes linear e.g. **Grid**?
- Make sure all instances of `px` for borders and shadows use `rem`.
- Setup AutoPrefixer.
- `_tech-debt.scss` file?
- CodePen:
  - Put custom font in CSS.
  - `$bg-color: #143A8D;`.


---


## Core

- Settings:
  - Width toggles (Alec TODO).
- Mixins:
  - Media query mixin (Alec TODO).
  - 2 Bootstrap mixins (see below)?
  - Ideas:
    - <https://gist.github.com/ykhs/3690526>.
    - <https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/mixins/_border-radius.scss>.
    - <https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/mixins/_size.scss>.

## Layout

- Grid:
  - Don't use `non-palm-x` prefix to apply widths.
- Don't couple `container-bg-color-x` with base `.container`.

## Components

- Fancy `select` (see 'Parking project').
- Block quote.
- Ideas:
  - <https://github.com/thoughtbot/bitters/blob/master/app/assets/stylesheets/extends/_flashes.scss>.

## Utilities

- Every Utility needs to be applied via all the main breakpoints (see Alec).
- Spacing, use all spacing `var`s and apply to `margin` and `padding` on all sides of the box.
- State?
- Cursor?
- Positioning: see CC, consider adding a height paramater for alignment?
- Ideas:
  - <http://jsfiddle.net/csswizardry/25741myb/>.
  - <https://github.com/suitcss/components-flex-embed/blob/master/lib/flex-embed.css>.
  - <https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/mixins/_center-block.scss>.


---


## Other

### Documentation

- Update CSS Guidelines.
- Consistent naming esp. for sizes.
- sass --watch demo-styles.scss:demo-styles.css --style compressed
  sass --watch style.scss:style.css --style compressed

### Sass newness

- <http://visuellegedanken.de/2014-03-29/using-bem-syntax-with-sass-3-3/>
- <http://robots.thoughtbot.com/removing-sass-duplication>
- <http://viget.com/extend/sass-maps-are-awesome>
- <http://unakravets.tumblr.com/post/78744593423/sass-snippets-the-almighty-ampersand>

### Put to the team

- Have a vendor partial for 3rd party styles e.g. Google Map images (`.gm-style`)?

### Comment formatting rules

- 2 line breaks after page title comments.
- 4 line breaks between section heading comments.
- 2 line breaks between heading comments.
- No full stops after URL's.
- Full stop after everything except `//` comments and URL's.
- Bullet list for `@credit` references.