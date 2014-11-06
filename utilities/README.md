# Scally Utilities

Utilities are low-level. They have a very narrow scope and may end up being used frequently, due to their separation from the semantics of the document and the theming of a component. Think of them as helpers.

Each Utility class modifies a single trait (a small collection of similar styles).

To apply a trait, or a combination of traits to an element, add the corresponding class directly to the HTML e.g. if you need to make some text center aligned and it isn't part of a component then apply like so:

    <p class="u-text-align-right">Ultricies urna quis! Porttitor augue a augue cursus, dolor penatibus turpis, phasellus risus, adipiscing elementum, nascetur, est habitasse velit mattis tortor! Elementum lundium ridiculus</p>
    
If you need to use utilies in the context of a [component](components/README.md) then we apply them via `@extend` for the following reasons:

Together, they can form a wide variety of UI patterns from simple principles.

Demo: http://codepen.io/team/westfieldlabs/full/xFHfk.

**N.B.**

- Nearly all Utilities come with the ability to apply at the main breakpoints.
  And all Utilities exist as a class and a Sass silent placeholder selector.
- Utility styles should be prefixed with `u-` so that they're easily
  identifiable.
