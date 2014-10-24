{% if page.url == '/' %}
{% assign partial = 'about-us/' %}
{% else %}
{% assign partial = '' %}
{% endif %}

<div class="small-12 large-7 column large-push-5" data-equalizer-watch>
{% include_relative {{ partial }}_copy.md %}
</div>
<div class="small-12 large-5 column large-pull-7" data-equalizer-watch>
{% include_relative {{ partial }}_staff.md %}
</div>
