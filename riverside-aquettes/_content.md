{% if page.url == '/' %}
{% assign partial = 'riverside-aquettes/' %}
{% else %}
{% assign partial = '' %}
{% endif %}

<div class="small-12 medium-8 column" data-equalizer-watch>
{% include_relative {{ partial }}_logo.md %}
{% include_relative {{ partial }}_copy.md %}
</div>
<div class="small-12 medium-4 column" data-equalizer-watch>
{% include_relative {{ partial }}_photo.md %}
</div>
