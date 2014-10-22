# Scally Core

## Placeholders

The job of these Sass placeholder selectors is to keep our CSS DRY by preventing writing common properties over and over repeating the same code, once compiled all the selectors that `@extend` these placeholders will be tethered to their corresponding rule.

**N.B.** these placeholders should be prefixed with `c-` so that they're easily identifiable.