Please prefer the variable over hardcoded value in Sass files. Exceptions can be made for true black and white.

{% for palette, values in colors %}
## {{ palette }}
{% include "@color" %}
{% endfor %}
