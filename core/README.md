# Scally Core

This is the mandatory part of Scally.

Core acts like the foundation of your project providing important things like:

- Global settings (variables) to house all common styles to keep your CSS
  nicely organised, maintainable, and DRY. And every setting can easily be overridden allowing you to have absolute control. **[Demo](http://codepen.io/team/westfieldlabs/full/aLDdb)**.
- [Normalize](http://necolas.github.io/normalize.css/).
- In addition to Normalize a reset to remove the default spacing and border
  from *ALL* HTML elements to make everything a level playing field. The reset does other things like remove default bullets from lists and change the `box-sizing` property to the more friendly `border-box` value (although this is optional). **[Demo](http://codepen.io/team/westfieldlabs/full/wGvdp)**.
- Debug styles to detect any improperly nested or potentially invalid markup,
  or any potentially inaccessible code. **[Demo](http://codepen.io/team/westfieldlabs/full/GHzvE)**.
- Handy Sass functions and mixins to make writing CSS easier and DRY*ey*.
  **[Demo](http://codepen.io/team/westfieldlabs/full/Bcfyz)**.
- Unclassed base styles which set the core styles for the main HTML elements
  of a project e.g. `a`, `h1-h6`, `p`, etc. These styles have a very low specificity so they can easily be overridden. **[Demo](http://codepen.io/team/westfieldlabs/full/zIgBs)**.