# Scally Components




## Contents

- [What are they?](#what-are-they)
- [When to use?](#when-to-use)
- [How to use?](#how-to-use)




## What are they?

Components are the discrete custom elements of a UI that enclose specific semantics and styling. 

They are extremely focused implementing only a single part of a UI, so they should never try to do too much. Components also shouldn't be concerned or have any dependencies on ancestral context i.e. where they live in a UI, making them extremely portable and robust.

Two examples of components could be: **pagination** and **breadcrumbs**.




## When to use?

The [**layout**](layout/README.md) and [**utility**](Utilities/README.md) parts of Scally should always be your first port of call when constructing a UI as they do one job and they do it very well, which is to construct UI. That's the power of Scally and [why it exists](https://github.com/westfieldlabs/scally#what-is-scally).

A component typically comes into existence when you find that a layout module or a certain utility—or a bunch or utilities—can only get you so far.




## How to use?

Take this common UI component:

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/pe5iBm20LpLADVn/Screen%20Shot%202014-11-17%20at%2010.51.26%20am.png "A Scally pagination component")

You can construct a good deal of this component using a number of Scally utilities however they will only get you so far as they're parts of it that require custom style treatments making it a **pagination** component.

HTML for the pagination component:

```
<nav class="pagination" role="navigation" aria-label="Pagination">
  <ul>
    <li class="pagination__count">Pages 1-20 of 200</li>
    <li class="pagination__item pagination__previous">
      <a href="#" rel="prev">Prev<span class="u-hide-visually">ious page</span></a>
    </li>
    <li class="pagination__item">
      <a href="#"><span class="u-hide-visually">Page </span>1</a>
    </li>
    <li class="pagination__item">
      <a href="#"><span class="u-hide-visually">Page </span>2</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="is-active"><span class="u-hide-visually">You're currently reading page </span>3</a>
    </li>
    [...]
    <li class="pagination__skip">
      <a href="#"><span class="u-hide-visually">Jump to page </span>21</a>
    </li>
    <li class="pagination__item">
      <a href="#"><span class="u-hide-visually">Page </span>22</a>
    </li>
    <li class="pagination__item">
      <a href="#"><span class="u-hide-visually">Page </span>23</a>
    </li>
    <li class="pagination__item pagination__next">
      <a href="#" rel="next">Next<span class="u-hide-visually"> page</span></a>
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


### Styling entanglement between components

Just like everything else in Scally, Scally isolates the styles of a component. In doing so, it makes styling simpler by reducing the amount of , and prevents styles from leaking outside the component.
