# TODO

## Global

- Test `z-index` from 'Core'.
- Comment about non-JavaScript, search for `.no-js`.
- Boilerplate.
- Setup AutoPrefixer.
- CodePen:
  - Create styles for sub headings.
  - Put custom font in CSS.
  - Apply anchors to **Layout** and **Core**.


---


## Core

- Base: Non-responsive images still gets `height: auto` rule? Causes issues
  in  IE 9/10.
- Settings:
  - Width/Grid push-pull toggles (Alec).
  - Colors: use a Sass map? (Alec)
- Mixins:
  - 2 Bootstrap mixins (see below)?
  - Ideas:
    - <https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/mixins/_border-radius.scss>.
    - <https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/mixins/_size.scss>.

## Layout

- Grid: use `inline-block` technique, see: <https://github.com/suitcss/
  components-grid/blob/master/lib/grid.css> (KT).
  - Add Flexbox modifiers, see: <http://flexboxgrid.com/>?
  - Apply 'Every breakpoint' option to 'Push' and 'Pull' (Alec).

## Components

- Circled number.
- Fancy `select` (see 'Parking' project).
- Block quote.
- Icon.
- Ideas:
  - <https://github.com/thoughtbot/bitters/blob/master/app/assets/stylesheets/
    extends/_flashes.scss>.
  - <http://www.sitepoint.com/using-sass-maps/>.

## Utilities

- Convert to Sass 3.3 BEM syntax.
- Every Utility needs to be applied via all the main breakpoints (see Alec).
- State?
- Cursor?
- Size: <https://github.com/suitcss/utils-size/blob/master/lib/size.css>?
- Arrange: <https://github.com/suitcss/components-arrange/blob/master/lib/arrange.css> or add to Grid Table? Remove 'Fit' modifier from List Inline?
- Overflow / Scroll: <https://github.com/mrmrs/fluidity/blob/master/
  sass/_responsive-utilities.scss>.
- Positioning: see CC, consider adding a height paramater for alignment and
  for pseudo-elements. And see: <https://github.com/suitcss/utils-position/blob/master/lib/position.css#L27>.
- Rendering box:
  - Add 'Flexbox'?
  - Change name.
- List: apply `@extend` 'Base' list?
- Ideas:
  - <http://jsfiddle.net/csswizardry/25741myb/>.
  - <https://github.com/suitcss/components-flex-embed/blob/master/lib/flex-
    embed.css>.
  - <https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/
    bootstrap/mixins/_center-block.scss>.
  - <https://github.com/suitcss/utils-layout/blob/master/lib/layout.css>.
  - <https://github.com/suitcss/utils-position/blob/master/lib/position.css>.


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
- Sass watch:
  `sass --watch demo-styles.scss:demo-styles.css --style compressed`
  `sass --watch style.scss:style.css --style compressed`
- Names:
  - Tiny.
  - Small.
  - Large.
  - Huge.
  - Compact.
  - Cosy.
  - Comfy.
- Wrap at 80 characters.
- Inspiration:
  - <http://web-design-weekly.com/2014/08/20/introduction-to-suit-css/>.

### Sass newness

- <http://visuellegedanken.de/2014-03-29/using-bem-syntax-with-sass-3-3/>.
- <http://robots.thoughtbot.com/removing-sass-duplication>.
- <http://viget.com/extend/sass-maps-are-awesome>.
- <http://unakravets.tumblr.com/post/78744593423/sass-snippets-the-almighty-
  ampersand>.

### Put to the team

- Have a vendor partial for 3rd party styles e.g. Google Map images (`.gm-style`)?

### Comment formatting rules

- 2 line breaks after page title comments.
- 4 line breaks between section heading comments.
- 2 line breaks between heading comments.
- No full stops after URL's.
- Full stop after everything except `//` comments and URL's.
- Bullet list for `@credit` references.tle comments.
- 4 line breaks between section heading comments.
- 2 line breaks between heading comments.
- No full stops after URL's.
- Full stop after everything except `//` comments and URL's.
- Bullet list for `@credit` references.

### Demo HTML URL

<https://dl.dropboxusercontent.com/s/9sanlipurkczriw/demo.html?dl=0>