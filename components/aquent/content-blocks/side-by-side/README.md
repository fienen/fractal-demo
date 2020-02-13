# Usage
Generally, add container support for the pattern by mapping content values to the pattern options noted below, then invoke the pattern to render it with `#dotParse("/velocity/templates/layouts/side-by-side.vtl")`

## Capabilities
By changing the left and right panel types with the options below, you can render out images or content on either the left or the right. The image with fully fill the space available to it with a CSS background. Copy content can be passed in as HTML. You can also include alt text and an overlay to enhance the image side if necessary.

### Dependencies
- The pattern will automatically parse in the accessibility links component to render accessible navigation.
- Relies on the `#renderSideBySide()` macro to generate panel markup according based on the panel type variables

## Pattern Options
- **$alignmentClass**: *(values TBD)* 'flip'(?)
- **$alttext**: string description of $overlay
- **$overlay**: image path
- **$panelLeft**: HTML blob or image path
- **$panelRight**: HTML blob or image path
- **$panelLeftType**: 'image', 'copy'
- **$panelRightType**: 'image', 'copy'
