### Partners  

<ul markdown="0" class="gallery small-block-grid-1 medium-block-grid-2 large-block-grid-3">
{% for partner in site.data.galleries.partners %}
{% capture dir %}{% endcapture %}
<li>
{% if partner.caption %}
<p>{{ partner.caption }}</p>
{% endif %}
<a target="_blank" href="{{ partner.link }}"><img src="{{ site.url }}{{ site.baseurl }}{{ page.d.img }}/partners{{ partner.file }}" alt="{{ partner.alt }}"></a>
</li>
{% endfor %}
</ul>
