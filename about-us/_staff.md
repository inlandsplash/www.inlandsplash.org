{% for staffee in site.data.galleries.staff %}
- ![{{ staffee.name }}]({{ site.url }}{{ site.baseurl }}{{ page.d.img }}{{ staffee.file }})
{: .headshot}
{{ staffee.name | upcase }}
{: headshot-caption}
{% endfor %}
{: .small-block-grid-2}
