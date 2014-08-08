# TODO

---

## STRUCTURE

### Core

  - Base:
    - Make sure all comments are formatted properly.
    - Move `.list` into Utilities.
    - Move `.table` into Utilities.
    - Make font size 16px.
    - Remove the iOS zoom input fix.
    - Apply toggles to required base items.

  #### Mixins

  - Size (pass in `width` and `height`).

  ### Components

  ### Utilities

  - Every Utility needs to be applied via all the main breakpoints (see Alec).
  - Spacing, use all spacing `var`s and apply to `margin` and `padding` on all sides of the box.
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