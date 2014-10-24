{% if page.url == '/' %}
{% assign partial = 'our-pools/' %}
{% else %}
{% assign partial = '' %}
{% endif %}

<div class="small-12 large-6 column">
  <div class="row">
  {% include_relative {{ partial }}_banner.md %}
  {% include_relative {{ partial }}_addresses.md %}
  </div>
</div>
<div class="small-12 large-6 column" data-equalizer-watch>
  {% include_relative {{ partial }}_graphic.md %}
</div>
