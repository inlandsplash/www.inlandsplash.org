### Resources  

#### Forms available for Download    

{% capture listings %}{% for form in site.data.downloads.forms %}
+ {{ form.title }}: [{{ form.type }}]({{ site.url }}{{ site.baseurl }}{{ page.d.dwn }}{{ form.file }} "{{ form.title }} {{form.type }} download"){% endfor %}{% endcapture %}

{{ listings }}
{: .inline-list}
