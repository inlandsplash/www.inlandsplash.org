{% if page.url == '/' %}
{% assign partial = 'our-pools/' %}
{% else %}
{% assign partial = '' %}
{% endif %}

<div class="small-12 large-6 column">
<div class="row">
<div class="small-4 column our-pools-banner" data-equalizer-watch>
<h2>Our Pools</h2>
</div>
{% include_relative {{ partial }}_addresses.md %}
</div>
</div>
<div class="small-12 large-6 column" data-equalizer-watch>
  {% include_relative {{ partial }}_graphic.md %}
</div>
