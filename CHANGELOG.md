# HEAD

## 3.0.0 (?)

- **:warning: Non-backwards compatible**<br>
  Revamped all of Scally settings, e.g.:
    - Introduced namespacing.
    - Reduced the colour settings.
    - **Typography** settings:
        - Introduced a new `$scally-g-max-line-length` setting.
        - Introduced a new set of `font-weight` settings.
        - Removed the following settings:
            - `$font-family-icons`.
            - `$font-family-serif`.
- **:warning: Non-backwards compatible**<br>
  Combined all of the Scally settings into the one partial: `_settings.scss`.
  Prior to `v3.0.0` **Local** settings existed in there relevant partial, e.g.
  `_forms.scss`, `_o-list.scss`, etc. Overriding any **Local** settings prior
  to `v3.0.0` had to be done in your master stylesheet above the relevant
  Scally partial, e.g.:

    ```scss
    $html-element-background-color: $color-black;
    $apply-osx-font-smoothing: true;
    @import "[path/to/the/scally/library]/core/base/root";
    ```
  We came to dislike this approach as it wasn't easy to maintain for the
  following reasons:
    - **Local** settings being dispersed throughout the master stylesheet made
      it hard to keep track of everything and created a disconnect between the
      **Global** and **Local** settings.
    - We feel your master stylesheet should only contain Sass partial imports.
- **:warning: Non-backwards compatible**<br>
  **Components** removed as they didn't fit the model of an un-opinionated
  foundational CSS library.
- **:warning: Non-backwards compatible**<br>
  **Objects** removed as they seemed to cause to much confusion as to exactly
  what they were. Some **Objects** still exist, whether only partially or in
  full, they're just not regarded as **Objects** any more.
- **:warning: Non-backwards compatible**<br>
  Completely redone the folder/file structure. Everything now lives in a
  `src` folder without any sub folders. Only Sass partials and a main index
  file for the CSS library live in `src`.
- Created a `scally.scss` file which is the main index file for the CSS
  library.
- Added an `index.js` file for Scally's NPM module.
- Removed unneeded `.scss-lint.yml` file as linting will be taken care of by
  [stylelint](http://stylelint.io/).

## 2.10.1 (September 7, 2015)

- Fixed a bug that allows you to remove underlines from links altogether i.e.
  for default and hover state.
  ([#172](https://github.com/chris-pearce/scally/issues/172)).

## 2.10.0 (August 21, 2015)

- Added a new setting to remove the bottom spacing half for H4–H6 headings, if
  this setting is `false` the base bottom spacing will be used as per the H1–H3
  headings
  ([#168](https://github.com/chris-pearce/scally/issues/168)).
- Fixed whitespace coming between the semi-colon and the end of the property
  value in the **Font Size** mixin
  ([#167](https://github.com/chris-pearce/scally/issues/167)).
- Fixed a typo in the `_media.scss` file
  ([#165](https://github.com/chris-pearce/scally/issues/165)).
- Added an [.editorconfig file](http://editorconfig.org/)
  ([#30](https://github.com/chris-pearce/scally/issues/30)).

## 2.9.0 (July 4, 2015)

- Added tint and shade functions to lighten and darken colours
  ([#158](https://github.com/chris-pearce/scally/issues/158)).
- Fixed a bug where the **Container** Layout module was using incorrect
  variable names for the `generate-at-breakpoints()` mixin. Thanks to @kllevin.
  ([#159](https://github.com/chris-pearce/scally/issues/159)).

## 2.8.0 (June 18, 2015)

- Made all single line declarations be on there own line which is the start of
  the work to update the code base to be inline with some of the new CSS Guidelines
  ([#114](https://github.com/chris-pearce/scally/issues/114)).
- Added corner versions to the Arrow object
  ([#149](https://github.com/chris-pearce/scally/issues/149)).

## 2.7.0 (June 17, 2015)

- Added a browserlist file
  ([#150](https://github.com/chris-pearce/scally/issues/150)).
- Adding more styling options to the Base link which came about from this
  bug: "Base link mixin doesn't work very well"
  ([#132](https://github.com/chris-pearce/scally/issues/132)).

## 2.6.0 (June 16, 2015)

- Fixed a typo in the Components README
  ([#151](https://github.com/chris-pearce/scally/issues/151)).
- Listed all the available classes for each Object, in the intro block (like
  utilities)
  ([#136](https://github.com/chris-pearce/scally/issues/136)).
- Applied a new format for mixin names when inside comments
  ([#128](https://github.com/chris-pearce/scally/issues/128)).

## 2.5.0 (May 25, 2015)

- Updates to the List object:
  - Make the left indent optional.
  - A new option to apply **hanging bullets**.

  ([#135](https://github.com/chris-pearce/scally/issues/135))
- Add an `@import` for the new `text-input-placeholder-colour()` mixin file in
  the main README master stylesheet example
  ([#146](https://github.com/chris-pearce/scally/pull/146)).
- Update the license attribute in the 'package.json' file. Thanks to @pdehaan.
  ([#148](https://github.com/chris-pearce/scally/pull/148)).

## 2.4.0 (May 21, 2015)

- New modifier for the Drop Down object which positions the drop down target
  to the right
  ([#125](https://github.com/chris-pearce/scally/issues/125)).
- Added the dialog element and alphabetised the list of elements
  in the `margin`, `padding`, and `border` reset block
  ([#134](https://github.com/chris-pearce/scally/issues/134)).
- Fixed a bug where the `li`s in the List Inline -> Flex Fit modifier object
  didn't have the `flex-grow` property
  ([#137](https://github.com/chris-pearce/scally/issues/137)).
- Fixed typos and removed all instances of the `// endif` comment
  ([#138](https://github.com/chris-pearce/scally/issues/138)).

## 2.3.1 (May 15, 2015)

- Adding a missing reference to the 'Mega' Spacing utility in the intro block
  comments.

## 2.3.0 (May 15, 2015)

- New `text-input-placeholder-color()` mixin to override the browser default
  `color` style of the input `placeholder` attribute and resets Firefox's
  `opacity` value of '0.4' to '1'
  ([#117](https://github.com/chris-pearce/scally/issues/117)).
- A new **Mega** spacing utility
  ([#58](https://github.com/chris-pearce/scally/issues/58)).

## 2.2.0 (May 12, 2015)

- Added a new global setting to set the resolution for targeting hi-dpi
  (retina) devices which feeds into the newly created `respond-retina()` mixin
  and the already existing `retina-bg-image()` mixin. The `retina-bg-image()`
  mixin also got some other handy updates such as being able to specify the
  `auto` keyword for the bg image width and/or height. Thanks to @stowball.
  ([#123](https://github.com/chris-pearce/scally/issues/123)).

## 2.1.0 (May 7, 2015)

- Strip units on passed in values to all functions and mixins
  ([#80](https://github.com/chris-pearce/scally/issues/80)).

## 2.0.2 (May 5, 2015)

- Updating the `font-size()` mixin to fix the issue of Scally not compiling
  with LibSass, thanks to @stowball
  ([#120](https://github.com/chris-pearce/scally/issues/120)).

## 2.0.1 (April 30, 2015)

- Remove `test.css` from package json files.

## 2.0.0 (April 29, 2015)

- **:warning: Non-backwards compatible**<br>
  Create a new section called **Objects** and convert some utilities to objects
  ([#47](https://github.com/chris-pearce/scally/issues/47)).
- **:warning: Non-backwards compatible**<br>
  Updates to the Button component
  ([#70](https://github.com/chris-pearce/scally/issues/70)).
- **:warning: Non-backwards compatible**<br>
  Change all setting instances of "colour" to "color"
  ([#67](https://github.com/chris-pearce/scally/issues/67)).
- **:warning: Non-backwards compatible**<br>
  Remove a bunch of utilities
  ([#60](https://github.com/chris-pearce/scally/issues/60)).
- **:warning: Non-backwards compatible**<br>
  Name spacing components
  ([#41](https://github.com/chris-pearce/scally/issues/41)).
- **:warning: Non-backwards compatible**<br>
  Make it so that all positioning utilities can be applied by one class
  ([#59](https://github.com/chris-pearce/scally/issues/59)).
- Check wrapping at 80 chars on all files
  ([#55](https://github.com/chris-pearce/scally/issues/55)).
- **:warning: Non-backwards compatible**<br>
  Renamed Flex Embed utility
  ([#50](https://github.com/chris-pearce/scally/issues/50)).
- Beef up the comments in each utility and layout-module partials
  ([#36](https://github.com/chris-pearce/scally/issues/36)).
- Updating the CSS for the GPU accelerated utility
  ([06cdda](https://github.com/chris-pearce/scally/commit/06cdda525958fa5d4c296f8f6655e5aae6526596)).
- **:warning: Non-backwards compatible**<br>
  Removing colour and line-height utilities from the Text utility
  ([b807ba](https://github.com/chris-pearce/scally/commit/b807ba55189391d9522cc712b63d0993875c4cd1)).
- Listing all the utility selectors in the intro comment blocks
  ([06cdda](https://github.com/chris-pearce/scally/commit/06cdda525958fa5d4c296f8f6655e5aae6526596)).
- **:warning: Non-backwards compatible**<br>
  Removing CSS Table vertical alignment method from the Alignments utility
  ([cfb41d](https://github.com/chris-pearce/scally/commit/cfb41db0cf982b28fad568e0f84eae79a4da1d15)).
- Add `!important` to ALL utilities
  ([#66](https://github.com/chris-pearce/scally/issues/66)).
- **:warning: Non-backwards compatible**<br>
  Removing Debug from Core
  ([058713](https://github.com/chris-pearce/scally/commit/058713cd9fa5e7909ce62e9db06059a47731335e)).
- Remove `rem` units for `border`, `border-radius`, `box-shadow`, and
  `text-shadow` and replace with `px` units
  ([#79](https://github.com/chris-pearce/scally/issues/79)).
- **:warning: Non-backwards compatible**<br>
  Make Button Group component optional
  ([#77](https://github.com/chris-pearce/scally/issues/77)).
- Apply [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) CSS
  updates where applicable
  ([#43](https://github.com/chris-pearce/scally/issues/43)).
- Make sure all Sass units are being applied correctly
  ([#93](https://github.com/chris-pearce/scally/issues/93)).
- A new text utility for OSX font smoothing as it's now optional on the `html`
  element
  ([#88](https://github.com/chris-pearce/scally/issues/88)).
- **:warning: Non-backwards compatible**<br>
  Make the `.ios` class in Core -> Base -> Forms customisable
  ([#109](https://github.com/chris-pearce/scally/issues/109)).
- Have an option in Core -> Base -> Forms to make text inputs full bleed
  ([#87](https://github.com/chris-pearce/scally/issues/87)).
- Rewrite documentation for V2
  ([#87](https://github.com/chris-pearce/scally/issues/65)).

## 1.10.0 (April 25, 2015)

- [Issue #108](https://github.com/chris-pearce/scally/issues/108) applied.

## 1.9.1 (April 25, 2015)

- [Issue #96](https://github.com/chris-pearce/scally/issues/96) applied, thanks
  to @stowball.
- [Issue #103](https://github.com/chris-pearce/scally/issues/103) fixed, thanks
  to @stowball.

## 1.8.2 (April 23, 2015)

- Correctly handle Sass units for the `html` element, thanks to
  @HugoGiraudel. [PR: #95](https://github.com/chris-pearce/scally/pull/95).

## 1.8.1 (April 22, 2015)

- Correctly handle Sass units for the `to-em-or-rem` mixin, thanks to
  @HugoGiraudel. [PR: #91](https://github.com/chris-pearce/scally/pull/91).
- Correctly handle Sass units for the `to-em` and  `to-rem` functions, thanks
  to @HugoGiraudel. [PR: #90](https://github.com/chris-pearce/scally/pull/90).

## 1.8.0 (April 21, 2015)

- Made Scally compatible with [LibSass](http://libsass.org/) by fixing 2 of
  Scally's mixins: "Target headings" and "Generate percentage classes at
  breakpoints", thanks to @stowball.
  [PR: #81](https://github.com/chris-pearce/scally/pull/81).
- Converted the `to-em` and `to-rem` mixins into one generic mixin and made
  some improvements, thanks to @stowball.
  [PR: #85](https://github.com/chris-pearce/scally/pull/85).

## 1.7.2 (April 9, 2015)

- [Issue #75](https://github.com/chris-pearce/scally/issues/75) applied.

## 1.6.2 (April 3, 2015)

- [Issue #62](https://github.com/chris-pearce/scally/issues/62) fixed. Big
  thanks to @stowball.

## 1.6.1 (March 30, 2015)

- Adding the ability to apply a more terse format to the percentage width
  classes e.g. instead of: `.u-one-half` it can be: `.u-50pc`.
- [Issue #57](https://github.com/chris-pearce/scally/issues/57) applied.
- Another update to
  [Issue #45](https://github.com/chris-pearce/scally/issues/45): adding 9th and
  11ths.

## 1.4.0 (March 23, 2015)

- [Issue #44](https://github.com/chris-pearce/scally/issues/44) applied.
- [Issue #45](https://github.com/chris-pearce/scally/issues/45) fixed.
- [Issue #48](https://github.com/chris-pearce/scally/issues/48) applied.

## 1.3.0 (March 2, 2015)

- [Issue #37](https://github.com/chris-pearce/scally/issues/37) fixed.
- [Issue #33](https://github.com/chris-pearce/scally/issues/33) applied.

## 1.2.2 (January 31, 2015)

- Fixed a bug where the **Text** utility was using an incorrect *apply at
  breakpoints* setting.

## 1.2.1 (January 29, 2015)

- [Issue #24](https://github.com/chris-pearce/scally/issues/24) fixed.
- Fixed whitespace issues.

## 1.2.0 (January 27, 2015)

- Updated the package JSON files to exclude certain files.

## 1.1.0 (January 26, 2015)

- Setup an [NPM package](https://www.npmjs.com/package/scally) for Scally.
- Adding a `.version` file.
- `bower.json` updates:
  - Adding version number.
  - Updating authors email addresses.

## 1.0.0 (January 18, 2015)
