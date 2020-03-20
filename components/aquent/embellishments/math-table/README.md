# Math Table

Math tables are primarily designed for informational pages to help convey the value of services offered. Creating a math table begins by using a standard `<table>` and applying the `math` class to it.

## thead

By default, you should include a `<thead>` that is used to provide labels to the columns on your table. Normally, this will be visible, but it can also be hidden like other content in an accessible way by including the `show-for-sr` class on the element.

## Displaying calculations

The first `<td>` in each row is intended to be a calculation value displayed to the user. With no classes, it will effectively be nothing more than a right-aligned cell. Each cell can use a calculation class to add the respective operator symbol to the leading edge of the cell: `calc-add`, `calc-divide`, `calc-multiply`, and `calc-subtract`.

**NOTE:** No _actual_ calculation happens programmatically. The values and totals shown must all be manually entered. The markup is fully garbage-in/garbage-out.

## Total/Conclusion row

If you would like to add emphasis to the final row of the table, place the `total` class on the last `<tr>` of the table. This isn't done automatically just in case there is a scenario where tables are desired that don't immediately reflect a conclusion (e.g. consecutive tables that result in a singular outcome).

## Tables without values

In some cases, you may need to have a table that implies qualitative math (e.g. calculating abstract values for demonstration purposes). This is also supported by simply leaving the first cell in each row empty (the cell must exist, and still takes a `calc-` class if needed), and as a consequence, the spacing will tighten up to show the descriptions closer in space to the mathematical operators (if used). This pattern is all-or-nothing, which is to say that if one value is included, it will affect the layout of the overall table (because it will cause the cell to go back to the "normal" width, which affects the whole first column).