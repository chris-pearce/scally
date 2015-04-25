=== HEAD

=== 2.0.0 (April 23, 2015)

- Create a new section called: Objects and convert some utilities to objects (#47).
- Updates to the Button component (#70).
- Change all setting instances of "colour" to "color" (#67).
- Remove a bunch of utilities (#60).
- Name spacing components (#41).
- Make it so that all positioning utilities can be applied by one class (#59).
- Check wrapping at 80 chars on all files (#55).
- Renamed Flex Embed utility (#50).
- Beef up the comments in each utility and layout-module partials (#36).
- Updating the CSS for the GPU accelerated utility ([more](https://github.com/chris-pearce/scally/commit/06cdda525958fa5d4c296f8f6655e5aae6526596)).
- Removing colour and line-height utilities from the Text utility ([more](https://github.com/chris-pearce/scally/commit/b807ba55189391d9522cc712b63d0993875c4cd1)).
- Listing all the utility selectors in the intro comment blocks ([more](https://github.com/chris-pearce/scally/commit/06cdda525958fa5d4c296f8f6655e5aae6526596)).
- Removing CSS Table vertical alignment method from the Alignments utility ([more](https://github.com/chris-pearce/scally/commit/cfb41db0cf982b28fad568e0f84eae79a4da1d15)).
- Add `!important` to ALL utilities (#66).
- Removing Debug from Core ([more](https://github.com/chris-pearce/scally/commit/058713cd9fa5e7909ce62e9db06059a47731335e)).
- Remove `rem` units for `border`, `border-radius`, `box-shadow`, and `text-shadow` and replace with `px` units (#79).
- Make Button Group component optional (#77).
- Apply [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) CSS updates where applicable (#43).

=== 1.9.1 (April 25, 2015)

- [Issue #96](https://github.com/chris-pearce/scally/issues/96) applied, thanks
  to @stowball.
- [Issue #103](https://github.com/chris-pearce/scally/issues/103) fixed, thanks
  to @stowball.

=== 1.8.2 (April 23, 2015)

- Correctly handle Sass units for the `html` element, thanks to
  @HugoGiraudel. [PR: #95](https://github.com/chris-pearce/scally/pull/95).

=== 1.8.1 (April 22, 2015)

- Correctly handle Sass units for the `to-em-or-rem` mixin, thanks to
  @HugoGiraudel. [PR: #91](https://github.com/chris-pearce/scally/pull/91).
- Correctly handle Sass units for the `to-em` and  `to-rem` functions, thanks
  to @HugoGiraudel. [PR: #90](https://github.com/chris-pearce/scally/pull/90).

=== 1.8.0 (April 21, 2015)

- Made Scally compatible with [LibSass](http://libsass.org/) by fixing 2 of
  Scally's mixins: "Target headings" and "Generate percentage classes at
  breakpoints", thanks to @stowball.
  [PR: #81](https://github.com/chris-pearce/scally/pull/81).
- Converted the `to-em` and `to-rem` mixins into one generic mixin and made
  some improvements, thanks to @stowball.
  [PR: #85](https://github.com/chris-pearce/scally/pull/85).

=== 1.7.2 (April 9, 2015)

- [Issue #75](https://github.com/chris-pearce/scally/issues/75) applied.

=== 1.6.2 (April 3, 2015)

- [Issue #62](https://github.com/chris-pearce/scally/issues/62) fixed. Big
  thanks to @stowball.

=== 1.6.1 (March 30, 2015)

- Adding the ability to apply a more terse format to the percentage width
  classes e.g. instead of: `.u-one-half` it can be: `.u-50pc`.
- [Issue #57](https://github.com/chris-pearce/scally/issues/57) applied.
- Another update to
  [Issue #45](https://github.com/chris-pearce/scally/issues/45): adding 9th and
  11ths.

=== 1.4.0 (March 23, 2015)

- [Issue #44](https://github.com/chris-pearce/scally/issues/44) applied.
- [Issue #45](https://github.com/chris-pearce/scally/issues/45) fixed.
- [Issue #48](https://github.com/chris-pearce/scally/issues/48) applied.

=== 1.3.0 (March 2, 2015)

- [Issue #37](https://github.com/chris-pearce/scally/issues/37) fixed.
- [Issue #33](https://github.com/chris-pearce/scally/issues/33) applied.

=== 1.2.2 (January 31, 2015)

- Fixed a bug where the **Text** utility was using an incorrect *apply at
  breakpoints* setting.

=== 1.2.1 (January 29, 2015)

- [Issue #24](https://github.com/chris-pearce/scally/issues/24) fixed.
- Fixed whitespace issues.

=== 1.2.0 (January 27, 2015)

- Updated the package JSON files to exclude certain files.

=== 1.1.0 (January 26, 2015)

- Setup an [NPM package](https://www.npmjs.com/package/scally) for Scally.
- Adding a `.version` file.
- `bower.json` updates:
  - Adding version number.
  - Updating authors email addresses.

=== 1.0.0 (January 18, 2015)