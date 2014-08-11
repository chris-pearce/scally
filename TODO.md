# TODO

- Replace all instances of `/* endif */` with `// endif`.
- Remove all instances of `== true` for Sass `@if` statements.
- Have a setting that allows you to dictate when everything goes linear e.g. **Grid**?


---


## Core

- New `box-sizing` reset technique.
- Base:
  - README.md.
  - Test in browser:
    - If inputs need `width: 100%;`.
    - Removing top shadow from iOS inputs needs `.ios` hook.

#### Mixins

## Layout

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


---


## Other

#### Sass Newness

- <http://visuellegedanken.de/2014-03-29/using-bem-syntax-with-sass-3-3/>
- <http://robots.thoughtbot.com/removing-sass-duplication>
- <http://viget.com/extend/sass-maps-are-awesome>

### Put to the team

- Form base styles.
- Dynamically pull in Normalize?