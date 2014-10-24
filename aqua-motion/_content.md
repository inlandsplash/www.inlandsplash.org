{% if page.url == '/' %}
{% assign partial = 'aqua-motion/' %}
{% else %}
{% assign partial = '' %}
{% endif %}

<div class="small-12 large-7 column" data-equalizer-watch>
{% include_relative {{ partial }}_photo.md %}
</div>
<div class="small-12 large-5 column" data-equalizer-watch>
{% include_relative {{ partial }}_logo.md %}
{% include_relative {{ partial }}_copy.md %}
</div>
