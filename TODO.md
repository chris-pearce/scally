# TODO

- Replace all instances of `/* endif */` with `// endif`.
- Remove all instances of `== true` for Sass `@if` statements.
- Have a setting that allows you to dictate when everything goes linear e.g. **Grid**?
- Make sure all instances of `px` for borders and shadows use `rem`.


---


## Core

- `style.scss`.
- New `box-sizing` reset technique.
- Make sure all instances of `px` for borders and shadows use `rem`.
- Sass 3.3. application.
- Base:
  - CodePen demo styles.
  - Test `html` text effects e.g. `-webkit-font-smoothing: antialiased;`.
  - Browser/device test.
  - `hr` rendering odd in Chrome.

#### Mixins

## Layout

- Don't couple `container-bg-color-x` with base `.container`.

## Components

## Utilities

- Every Utility needs to be applied via all the main breakpoints (see Alec).
- Spacing, use all spacing `var`s and apply to `margin` and `padding` on all sides of the box.
- State:
- Cursor?
- Positioning:
  - Top left.
  - Top right.
  - Bottom left.
  - Bottom right.
  - Stretch (pulls each corner/side so that it stretches to it's parent):
    - All (`top: 0; bottom: 0; left: 0; right: 0;`).
    - Sides (`left: 0; right: 0;`).
    - Ends (`top: 0; bottom: 0;`).

### Ideas

- <http://jsfiddle.net/csswizardry/25741myb/>.


---


## Other


### Documentation

- Update CSS Guidelines.

### Sass Newness

- <http://visuellegedanken.de/2014-03-29/using-bem-syntax-with-sass-3-3/>
- <http://robots.thoughtbot.com/removing-sass-duplication>
- <http://viget.com/extend/sass-maps-are-awesome>

### Put to the team

- Dynamically pull in Normalize?
- Have a vendor partial for 3rd party styles e.g. Google Map images.