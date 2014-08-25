# TODO

## Global

- Setup a JIRA epic: <https://jira.westfieldlabs.com/browse/GPP/>
- `style.scss`.
- Make sure all instances of `px` for borders and shadows use `rem`.
- Setup AutoPrefixer.
- CodePen:
  - Put custom font in CSS.
  - `$bg-color: #143A8D;`.


---


## Core

- Settings:
  - Width toggles (Alec TODO).
  - Colors (use a map?).
- Mixins:
  - Media query mixin (Alec TODO).
  - 2 Bootstrap mixins (see below)?
  - Ideas:
    - <https://gist.github.com/ykhs/3690526>.
    - <https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/mixins/_border-radius.scss>.
    - <https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/mixins/_size.scss>.
    - <http://erskinedesign.com/blog/friendlier-colour-names-sass-maps/>.

## Layout

- Grid:
  - Use `inline-block` technique, see: <https://github.com/suitcss/components-grid/blob/master/lib/grid.css>.
  - Add Flexbox modifiers, see: <http://flexboxgrid.com/>.
- Make sure all media queries are using Alec's version.

## Components

- Fancy `select` (see 'Parking project').
- Block quote.
- Icon.
- Ideas:
  - <https://github.com/thoughtbot/bitters/blob/master/app/assets/stylesheets/extends/_flashes.scss>.
  - <http://www.sitepoint.com/using-sass-maps/>.

## Utilities

- Every Utility needs to be applied via all the main breakpoints (see Alec).
- Spacing, use all spacing `var`s and apply to `margin` and `padding` on all sides of the box.
- State?
- Cursor?
- Overflow container: <https://github.com/mrmrs/fluidity/blob/master/sass/_responsive-utilities.scss>.
- Animations via a lib?
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
- Scally boilerplate:
  - `style.scss`.
  - `settings.scss`.
  - `overrides.scss`.
  - LICENSE?
- Westfield Project boilerplate:
  - `index.html` template.
  - CSS architecture.
  - Assets in the DAM.
- sass --watch demo-styles.scss:demo-styles.css --style compressed
  sass --watch style.scss:style.css --style compressed
- Inspiration:
  - <http://web-design-weekly.com/2014/08/20/introduction-to-suit-css/>.

### Sass newness

- <http://visuellegedanken.de/2014-03-29/using-bem-syntax-with-sass-3-3/>.
- <http://robots.thoughtbot.com/removing-sass-duplication>.
- <http://viget.com/extend/sass-maps-are-awesome>.
- <http://unakravets.tumblr.com/post/78744593423/sass-snippets-the-almighty-ampersand>.

### Put to the team

- Have a vendor partial for 3rd party styles e.g. Google Map images (`.gm-style`)?

### Comment formatting rules

- 2 line breaks after page title comments.
- 4 line breaks between section heading comments.
- 2 line breaks between heading comments.
- No full stops after URL's.
- Full stop after everything except `//` comments and URL's.
- Bullet list for `@credit` references.