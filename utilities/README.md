# Scally Utilities




## Contents

- [What are they?](#what-are-they)
- [Why have them?](#why-have-them)
- [How to use?](#how-to-use)
- [Open/close principle](#openclose-principle)
- [Applying at breakpoints](#applying-at-breakpoints)
- [Specificity](#specificity)
- [Namespace](#namespace)
- [New utilities](#new-utilities)
- [Demo's](#demos)
- [Further reading](#further-reading)




## What are they?

Utilities are low-level. They have a very narrow scope and may end up being used frequently, due to their separation from the semantics of the document and the theming of what they're being applied too. Think of them as helpers.




## Why have them?

Utilities can form a wide variety of UI patterns from simple principles meaning as CSS authors we don't have to keep writing the same styles over and over again, instead we can abstract those common styles into nice reusable modules.

A classic use case for a utility is when a HTML list (`ul` or `ol`) items (`li`) need to render horizontally rather than their default vertically stacked rendering. If we were to write our CSS in a non-OOCSS way then we would have to repeat the CSS over and over again to achieve this simple UI pattern, but using OOCSS techniques and the concept of a Scally utility we just declare it once like so:

    %u-list-inline,
    .u-list-inline {
        > li {display: inline-block;}
    }

So utilities are extremely powerful and are the real work horses for any sort of UI build especially large-scale UI builds, and here are some reasons why:

- Your CSS will be a lot DRYer.
- You can make far-reaching changes to your UI by simply modifying a utility only once.
- You can make safer changes because you know that when editing a utility you are only ever altering one responsibility.
- You can combine utilities to make a variety of UI layouts.




## How to use?

Each utility class modifies a single trait which might be an individual style e.g.

    // Center align text
    %u-text-align-center,
    .u-text-align-center {text-align: center;}

Or a small collection of styles e.g.

    // Pin to all corners
    %u-position-pin-all,
    .u-position-pin-all {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

To apply a trait, or a combination of traits, add the corresponding class or classes directly to the HTML element.

So say you wanted an element to pin it's itself to all corners of it's container then you would apply like so:

    <div class="u-position-absolute u-position-pin-all"> ... </div>
    
However if the above `div` was part of a [component](components/README.md) e.g. **Modal** then we apply the traits via a [Sass silent placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_) applied with the `@extend` directive. This is done for the following reasons:

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

You can see that `position: absolute;` is not being `@extend`ed here as it's only a single-line declaration therefore it's overkill to `@extend` it i.e. there isn't any value from a readability, performance, or just general maintainability point of view.

Utilities are really powerful when used in conjuction with other utilities as they can construct entire UI patterns by themselves i.e. without the need to create specific components. Take this classic UI pattern:

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/S2tV2jw6G5RxxZa/side%20by%20side.png "Example of what can be achieved with a bunch of Scally utilities")

This UI pattern can be entirely constructed using a number of Scally utilities and their modifiers:

- [Side by side](_u-side-by-side.scss)
- [Divider](_u-divider.scss)
- [Spacing](_u-spacing.scss)
- [Text](_u-text.scss)

The HTML:

```
<div class="u-side-by-side  u-divider-bottom  u-s-pb-base u-s-mb-base">
    <div class="u-side-by-side__left">
      <img src"{{src}}" alt="...">
    </div>
    <div class="u-side-by-side__right u-s-p-base">
      <h2 class="u-text-transform-uppercase  u-s-mb-none">Title</h2>
      <p>Habitasse pellentesque turpis nunc cras, a tincidunt, elementum nunc lectus lacus</p>
    </div>
</div>

<div class="u-side-by-side u-side-by-side--reversed">
    <div class="u-side-by-side__left">
      <img src"{{src}}" alt="...">
    </div>
    <div class="u-side-by-side__right u-s-p-base">
      <h2 class="u-text-transform-uppercase  u-s-mb-none">Title</h2>
      <p>Habitasse pellentesque turpis nunc cras, a tincidunt, elementum nunc lectus lacus</p>
    </div>
</div>
```




## Open/close principle

Utilities follow the open/close principle, which states that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

So Scally utilities can only ever be used *as is*. If an existing Scally utility needs to do more than what it offers then typically you'll be wanting to create a new component, *or* maybe the need for a new utility? Either way it should be scrutinised over like everything with OOCSS.

[This article](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/) does a fantastic job of explaining the open/close principle in relation to CSS.




## Applying at breakpoints

Each utility comes with the ability to apply at any of the [set breakpoints](https://github.com/westfieldlabs/scally/blob/master/core/settings/_breakpoints.scss#L6-L44) or any custom breakpoint. This feature comes with Scally as when building responsive UI's it's a really common requirement to apply a style or a set of styles at a specific viewport, and utilities are the prime suspects for this treatment as they're used so extensively. 


### How to use?

This feature is turned off by default in favour of leaner stylesheets, and not all UI's are responsive. A real common use case for this application is hiding UI at a viewport breakpoint which is usually mobile / non-mobile. So if we wanted to hide a **Call Us** button on larger viewports we would use the [**Display utility**](https://github.com/westfieldlabs/scally/blob/master/utilities/_u-display.scss) to achieve this. First we have to turn this feature on by changing the [toggle setting](https://github.com/westfieldlabs/scally/blob/master/utilities/_u-display.scss#L44) to `true` which would output (compile) the utility in a media query [based off this](https://github.com/westfieldlabs/scally/blob/master/core/settings/_breakpoints.scss#L70).




## Specificity

Utilities always need to *win* when it comes to specificity (CSS’ first C; the cascade) as they should always *just work* otherwise they're not doing their job properly i.e. you should never be needing to override a utility's styles. If you are then you're not using them correctly, [see](#open-close-principle).

That's why utilities are declared last when pulling in the Scally framework via your master stylesheet so they're compiled after everything else.




## Namespace

All utility classes and utility silent placeholder selectors should be prefixed with `u-` so that they're easily identifiable.




## New utilities

You can create new utilities in your [project specific CSS](https://github.com/westfieldlabs/scally#your-styles) however because utilities are so focused it's probably better off in the Scally framework. So create a [Scally GitHub issue](https://github.com/westfieldlabs/scally/issues) to have it considered for inclusion into the framework or even better [submit a PR](https://github.com/westfieldlabs/scally#contributing). 




## Demo's

<http://codepen.io/team/westfieldlabs/full/xFHfk/>




## Further reading

*Make sure to read the documentation within each utility Sass partial file as it will contain information about the utility and their implementations.*

- [THE MEDIA OBJECT SAVES HUNDREDS OF LINES OF CODE](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/).
- [The single responsibility principle applied to CSS](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/).
