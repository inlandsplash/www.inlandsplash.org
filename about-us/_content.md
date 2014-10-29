{% if page.url == '/' %}
{% assign partial = 'about-us/' %}
{% else %}
{% assign partial = '' %}
{% endif %}

<div class="small-12 large-7 column large-push-5" data-equalizer-watch>
{% include_relative {{ partial }}_copy.md %}
</div>
<div class="small-12 large-5 column large-pull-7" data-equalizer-watch>
<ul class="gallery small-block-grid-2">
{% for staffee in site.data.galleries.staff %}
<li>
<img class="headshot" alt="{{ staffee.name }}" src="{{ site.url }}{{ site.baseurl }}{{ page.d.img }}{{ staffee.file }}">
<p>{{ staffee.name | upcase }}</p>
</li>
{% endfor %}
</ul>
</div>
