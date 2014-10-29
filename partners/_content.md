### Partners  

<ul markdown="0" class="gallery small-block-grid-1 medium-block-grid-2 large-block-grid-3">
{% for partner in site.data.galleries.partners %}
{% capture dir %}{{ site.url }}{{ site.baseurl }}{{ page.d.img }}/partners{% endcapture %}
<li>
{% if partner.caption %}
<p>{{ partner.caption }}</p>
{% endif %}
<a target="_blank" href="{{ dir }}{{ partner.link }}"><img src="{{ dir }}{{ partner.file }}" alt="{{ dir }}{{ partner.alt }}"></a>
</li>
{% endfor %}
</ul>
