{% if page.url == '/' %}
{% assign partial = 'welcome/' %}
{% else %}
{% assign partial = '' %}
{% endif %}

<div class="small-12 large-6 column" data-equalizer-watch>
{% include_relative {{ partial }}_welcome.md %}
</div>
<div class="small-12 large-6 column teal-top-right-striped-bg" data-equalizer-watch>
{% include_relative {{ partial }}_feature.md %}
</div>
