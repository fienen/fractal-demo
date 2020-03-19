# Math Table

Math tables are primarily designed for informational pages to help convey the value of services offered. Creating a math table begins by using a standard `<table>` and applying the `math` class to it.

## thead

By default, you should include a `<thead>` that is used to provide labels to the columns on your table. Normally, this will be visible, but it can also be hidden like other content in an accessible way by including the `show-for-sr` class on the element.

## Displaying calculations

The first `<td>` in each row is intended to be a calculation value displayed to the user. With no classes, it will effectively be nothing more than a right-aligned cell. Each cell can use a calculation class to add the respective operator symbol to the leading edge of the cell: `calc-add`, `calc-divide`, `calc-multiply`, and `calc-subtract`.

## Total/Conclusion row

If you would like to add emphasis to the final row of the table, place the `total` class on the last `<tr>` of the table. This isn't done automatically just in case there is a scenario where tables are desired that don't immediately reflect a conclusion (e.g. consecutive tables that result in a singular outcome).