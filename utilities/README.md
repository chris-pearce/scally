# Abstractions

These abstractions follow the 'open/closed' principle so they can either be used 'as is' or modified, [read more](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/).

The job of these placeholder selectors is to keep our CSS DRY by preventing writing common properties over and over repeating the same code, once compiled all the selectors that `@extend` these placeholders will be tethered to their corresponding rule.

Explain when to use a class and when to use a placeholder, basically placeholders are ideal for setting styles to extremely common elements, prime example is setting default bottom spacing to all `p`s.