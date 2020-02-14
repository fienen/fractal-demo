<div class="grid-list">
    {% for key, value in values -%}
    <div class="grid-list__item">
        <div class="color" style="color: {{ value.hex }}">
            <pre>{{ value.var }}
<span>{{ value.hex }}
rgb({{ value.rgb }})</span></pre>
        </div>
    </div>
    {% endfor -%}
</div>
