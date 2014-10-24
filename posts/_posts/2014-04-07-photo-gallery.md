---
title: "Riverside Aquettes Photo Gallery"
description: "See Riverside Aquettes in Action."
categories: 
  - "photos"
  - "galleries"
robots: none
---

{% for photo in site.data.galleries.photos %}
- ![photo]({{ site.url }}{{ site.baseurl }}{{ page.d.img }}/photos{{ photo.file }} "Riverside Synchronized Swimming Team phot")
{: .gallery .image .photo}
{% if photo.caption %}
{{ photo.caption }}
{: .gallery .caption .photo}
{% endif %}
{% endfor %}
{: .small-block-grid-2 .medium-block-grid-4 .large-block-grid-6}
