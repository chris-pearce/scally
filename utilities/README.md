# Scally Utilities




## Contents

- [What are they?](#what-are-they)
- [Demo's](#demos)
- [Why have them?](#why-have-them)
- [How to use](#how-to-use)
- [Open/close principle](#openclose-principle)
- [Applying at breakpoints](#applying-at-breakpoints)
- [Specificity](#specificity)
- [Namespace](#namespace)
- [New utilities](#new-utilities)
- [Further reading](#further-reading)




## What are they?

Utilities are your helper classes and your absolute last resort. 

They apply a single rule e.g. float an element to the right: `.u-float-right`, or a very simple, universal pattern e.g. hide an element but only visually: `.u-hide-visually`. And they must always follow the [single responsibility principle](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/).




## Demo's

<http://s.codepen.io/chris-pearce/full/WbMgMp> (work in progress)




## Why have them?

Utilities exist because in every UI build they'll always be the need to apply simple low-level common styles to parts of a UI that don't belong to any sort of a [component](../components). In these scenerios, if utilities didn't exist, we would have issues like:

- Where do those types of styles live in our CSS architecture? 
- Lots of super *micro* components that aren't true components that only exist to avoid having to use utility classes in your markup.
- CSS not being DRY as we would have to keep writing those styles over and over.

Some utilities don't just apply single rules but apply simple, universal patterns e.g. Clear an element to contain its floated children: `.u-clear-fix`, pin an element to all corners of it's parent: `.u-position-pin-all`, hide an element but only visually: `.u-hide-visually`, etc.

So utilities help keep our CSS a lot DRYer and maintainable. And enable us to make far-reaching changes to our UI with simple modifications to a single utility because we have the confidence that edits to a utility will only ever alter one responsibility.




## How to use

Each utility class applies a single rule e.g.

```
// Center align text
%u-text-align-center,
.u-text-align-center {text-align: center;}
```

Or a very simple, universal pattern e.g.

```
// Pin an element to all corners of its parent
%u-position-pin-all,
.u-position-pin-all {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
```

To apply utilities apply the utility class or classes directly to the HTML element.

However if the above `div` was part of a [component](../components/README.md) e.g. **Modal** then we apply the traits via a [Sass silent placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_) applied with the `@extend` directive. This is done for the following reasons:

- It's more maintainable when changes need to be made as you don't have to touch the HTML so much, however this can be resolved by having your Views only contain data with the UI coming from an API.
- It’s more robust compared to having to rely on applying classes at the HTML level as classes can be missed.
- It’s more readable and maintainable to have all of the styles enclosed in one place: the Sass component partial.

So the above `div` would receive a specific component class which would apply the styles via the `@extend` directive meaning we can remove all of the utility classes from the HTML e.g.

**HTML**

    <div class="modal__cover"> ... </div>

**CSS**

    .modal__cover {
        position: absolute;
        @extend %u-position-pin-all;
    }

You can see that `position: absolute;` is not being `@extend`ed here as it's only a single-line declaration therefore it's overkill to `@extend` it i.e. there isn't any value from a readability, performance, or just general maintainability point of view. [This article](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/) (starting from the text: *Another case of an abused `@extend` looks a little like this*) does a very good job at further explaining why this isn't a good idea.




## Open/close principle

Utilities follow the open/close principle, which states that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

So Scally utilities can only ever be used *as is*. If an existing Scally utility needs to do more than what it offers then typically you'll be wanting to create a new component, *or* maybe the need for a new utility? Either way it should be scrutinised over like everything with OOCSS.




## Applying at breakpoints

When building responsive UI's it is a really common requirement to apply a style or a set of styles at a specific viewport, and utilities are the prime suspects for this treatment as they're used so extensively. So each utility comes with the ability to be applied at any of the [set breakpoints](../core/settings/_breakpoints.scss) or any custom breakpoint.

Scally makes this easy by the [`Generate at breakpoints mixin`](../core/mixins/_generate-at-breakpoints.scss) and this feature is turned off by default in favour of leaner stylesheets, **and not all UI's are responsive**.

A real common use case for this application is hiding UI at certain viewport sizes, typically at a mobile size viewport or a non-mobile size viewport.

So if we wanted to hide a **Call Us** button on larger viewports we would use the [**Display**](_u-display.scss) utility to achieve this, applying these steps:

1. Turn the feature on by changing the relevant setting to `true` e.g.
 
 `$u-display-apply-at-breakpoints-for-hide: true;`

 which will output (compile) the utility in a media query like so:

  ```
  @media (min-width: 40.0625em) {
    .u-hide-from-lap {display: none;}
  }
  ```
2. By default the feature uses the `lap` breakpoint but you can change this to another breakpoint or add more breakpoints via the `$u-display-apply-at-breakpoints` setting which you do in your [master stylesheet](https://github.com/chris-pearce/scally#master-stylesheet-overview) above the relevant `@import`:

  ```
  $u-display-apply-at-breakpoints: (lap, lap-large)
  @import "bower_components/scally/utilities/u-display";
  ```
  This will output (compile):
  ```
  @media (min-width: 40.0625em) {
    .u-hide-from-lap {display: none;}
  }
  @media (min-width: 56.3125em) {
    .u-hide-from-lap-large {display: none;}
  }
  ```



## Specificity

Utilities always need to *win* when it comes to specificity (CSS' first C; the cascade) as they should always *just work* otherwise they're not doing their job properly i.e. you should never be needing to override a utility's styles. If you are then you're not using them correctly, [see](#open-close-principle).

That's why utilities are declared last when pulling in the Scally framework via your [master stylesheet](../style.scss) so they're compiled after everything else.




## Namespace

All utility classes and utility silent placeholder selectors are prefixed with `u-` so that they're easily identifiable.




## New utilities

You can create new utilities in your [project specific CSS](../README.md#your-styles) however because utilities are so focused it's probably better off in the Scally framework. So create a [Scally GitHub issue](https://github.com/westfieldlabs/scally/issues) to have it considered for inclusion into the framework or even better [submit a PR](https://github.com/westfieldlabs/scally#contributing).




## Further reading

*Make sure to read the documentation within each utility Sass partial file as it will contain information about the utility and it's implementations.*

- [The single responsibility principle applied to CSS](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)
- [The open/closed principle applied to CSS](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/)
- [When to use `@extend`; when to use a mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
- [The Role of Utility Classes](http://davidtheclark.com/on-utility-classes/)
