# Select Boxes

## Styling

The core treatment required for fully successful styling of a select box is usage of the `<div class="select-box">` wrapper that is included with the element. This is necessary for correct display of the custom side arrows.

## Placeholders/Labels

Select boxes do not natively support what other fields would consider a _placeholder_ attribute. However, it is possible to simulate the behavior by using an `<option>` element as demonstrated in the example by applying the combination of `hidden disabled selected` attributes on it.

### Accessibility

For purposes of accessibility, form inputs should always include labels, which are external to the element. Making use of the `show-for-sr` class on the `<label>` element allows you to set a label that is invisible in the UI but can still be read by a screen reader.