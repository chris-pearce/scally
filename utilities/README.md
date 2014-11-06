# Scally Utilities

## What are they?

Utilities are low-level. They have a very narrow scope and may end up being used frequently, due to their separation from the semantics of the document and the theming of what they're being applied too. Think of them as helpers.

## Why have them?

Utilities can form a wide variety of UI patterns from simple principles meaning as CSS authors we don't have to keep writing the same styles over and over again, instead we can abstract those common styles into nice reusable modules keeping the CSS code base nice and **DRY**.

A classic example of a utility is having HTML list (`ul` or `ol`) items (`li`) render horizontally rather than it's default vertically stacked rendering. If we were to write our CSS in a non-OOCSS way then we would have to repeat the CSS over and over again to achieve that simple UI pattern, but using OOCSS techniques and the concept of a Scally utility we just declare it once like so:

    %u-list-inline,
    .u-list-inline {
        > li {display: inline-block;}
    }
    
Highly recommend having a read [of this](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/).

## How to use?

Each utility class modifies a single trait which might be an individual style e.g.

    // Center align text
    %u-text-align-center,
    .u-text-align-center {text-align: center;}

Or a small collection of similar styles e.g.

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

- It’s more robust compared to having to rely on applying classes at the markup level.
- It’s more readable having all styles capsulated in the Sass component partial.

So the above `div` would be stripped of the classes from the HTML and instead moved into the **Modal** Sass component partial e.g.

    .modal div {
        position: absolute;
        @extend %u-position-pin-all;
    }

You can see that `position: absolute;` is not being `@extend`ed here as it's only a single-line declaration therefore it's overkill to `@extend` i.e. there isn't any value from a readability, performance, or just general maintainability point of view.

## Applying at breakpoints

*Probably be it's own section in the main README.md?*

## Namespace

All utility classes and utility silent placeholder selectors should be prefixed with `u-` so that they're easily identifiable.

## Demo's

<http://codepen.io/team/westfieldlabs/full/xFHfk/>
