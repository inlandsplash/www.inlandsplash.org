### Partners  

{% for partner in site.data.galleries.partners %}
- ![{{ partner.name }}]({{ site.url }}{{ site.baseurl }}{{ page.d.img }}/partners{{ partner.file }} "{{ partner.alt }}")
{: .gallery .image}
{{ partner.name }}
{: .gallery .title}
{{ partner.caption }}
{: .gallery .caption}
{% endfor %}
{: .small-block-grid-2 .medium-block-grid-4 .large-block-grid-6}
