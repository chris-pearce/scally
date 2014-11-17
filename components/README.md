# Scally Components




## Contents

- [What are they?](#what-are-they)
- [When to use?](#when-to-use)
- [How to use?](#how-to-use)
  - [Naming conventions](#naming-conventions)
- [Namespacing](#namespacing)
- [Demo's](#demos)
- [Further reading](#further-reading)




## What are they?

Components are the discrete custom elements of a UI that enclose specific semantics and styling and they make up the bulk of a UI. Examples of components could be: **pagination**, **breadcrumbs**, **hero**, etc.

Components are extremely focused implementing only a single part of a UI, so they should never try to do too much. They also shouldn't be concerned or have any dependencies on ancestral context i.e. where they live in a UI, making them extremely [portable and robust](#portable-and-robust). So each component should be designed to exist as a standalone component, think of them as black boxes.






## When to use?

The [**layout**](layout/README.md) and [**utility**](Utilities/README.md) parts of Scally should always be your first port of call when constructing a UI as they do one job and they do it very well, which is to construct UI. That's the power of Scally and [why it exists](https://github.com/westfieldlabs/scally#what-is-scally).

A component typically comes into existence when you find that a certain utility—or a bunch or utilities—can only get you so far.




## How to use?

Take this common UI component:

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/pe5iBm20LpLADVn/Screen%20Shot%202014-11-17%20at%2010.51.26%20am.png "A Scally pagination component")

You can construct a good deal of this component using a number of Scally utilities however they will only get you so far as they're parts of it that require custom style treatments making it become **pagination** component.

HTML for the pagination component:

```
<nav class="pagination" role="navigation" aria-label="Pagination">
  <ul class="pagination__list">
    <li class="pagination__list__item pagination__list__item--count">Pages 1-20 of 200</li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link" rel="prev">← Prev<span class="u-hide-visually">ious page</span></a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Page </span>1</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Page </span>2</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link is-active"><span class="u-hide-visually">You're currently reading page </span>3</a>
    </li><!--
    --><li class="pagination__list__item pagination__list__item--skip">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Jump to page </span>21</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Page </span>22</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Page </span>23</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link" rel="next">Next →<span class="u-hide-visually"> page</span></a>
    </li>
  </ul>
</nav>
```

CSS for the pagination component:

```
/* ============================================================================
   @COMPONENTS -> PAGINATION
   ========================================================================= */


/**
 * Pagination component rendered as an inline list.
 */


/**
 * Settings.
 */

// Colours
$c-pagination-background-colour:          #eee;

$c-pagination-background-hover-colour:    lighten($colour-black, 4%);

$c-pagination-border-colour:              darken($c-pagination-background-colour, 4%);


.pagination {
  @include to-rem(border, 1 solid $c-pagination-border-colour);
  @include to-rem(border-radius, $border-radius);
  @include to-rem(padding, $spacing-quarter);
  font-family: $font-family-serif;
}


  /**
   * The list `ul`, render inline.
   */
  
  .pagination__list {
    @extend %u-list-inline;
    @extend %u-list-inline--spacing-tiny;
    text-align: center;
  }


    /**
     * List items.
     */
  
  
    /**
     * Modifier: skip list item.
     *
     * Renders an ellipsis which breaks apart list items.
     */

    .pagination__list__item--skip:before {
      content: "\2026";
      display: inline-block;
      // This right spacing needs to equal the spacing of the list items
      @include to-rem(margin-right, $spacing-third);
      vertical-align: bottom;
      speak: none;
      color: $colour-text-base;
    }


     /**
      * The links.
      */

     .pagination__link {
        display: inline-block;
        @include to-rem(border, 1 solid $c-pagination-border-colour);
        @include to-rem(border-radius, $border-radius);
        @include to-rem(padding, $spacing-micro $spacing-third);
        background-color: $c-pagination-background-colour;


        /**
         * Hover and active states.
         */

        &:hover,
        &:focus,
        &.is-active {
          background-color: $c-pagination-background-hover-colour;
          color: $colour-white;
          text-decoration: none;
        }
     }
```

### Naming convention

The component's base class name (e.g., `pagination`) reserves a namespace that can only be used by that component. Like the rest of Scally, components use the [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) naming methodology.

### Using utilities 

Utilities can be used in a component however they're `@extend`ed via a [Sass silent placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_). As you can see from the CSS code above the selector: `.pagination__list` is `@extend`ing the **List Inline** utility. [See](https://github.com/westfieldlabs/scally/blob/master/utilities/README.md#how-to-use) to learn more about how utilities and components should work together. 

### Nested components

### Portable and robust

A component should not know about the implementation of its dependencies. The appearance of dependencies must be configured using the interface they provide.

Most components should not set their own width, margin, and positioning. By authoring a component to be full-width or inline, it can better adapt to the dimensions of an ancestral context.

Avoid element selectors

Subclassing Modules

### Encapsulation

Just like everything else in Scally, Scally isolates the styles of a component. In doing so, it makes styling simpler by reducing the amount of , and prevents styles from leaking outside the component.

Avoid coupling or entangling components, even if that means the code is not as DRY as you think it should be. Isolation prevents avoidable complexity and is an important part of robust reuse.




## Namespacing

Unlike [**layout modules**](layout/README.md) and [**utilities**](Utilities/README.md), components aren't namespaced as they make up the bulk of the UI therefore are considered the most important.



## Demo's

http://codepen.io/team/westfieldlabs/full/Fvxju




## Further reading

Make sure to read the documentation within each component Sass partial file as it will contain information about the component and their implementations.

- [SMACCS - Module Rules](https://smacss.com/book/type-module).
- [SUIT CSS components](https://github.com/westfieldlabs/scally/blob/master/utilities/README.md#namespace).
