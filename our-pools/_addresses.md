<div class="small-8 column map-legend" data-equalizer-watch>
  {% for pool in site.data.vcards.pools %}
  <div class="row">
  <div class="small-3 column">
  ![{% cycle 'alt': 1, 2, 3 %}]({{ site.url }}{{ site.baseurl }}{{ page.d.img }}/vector/map-bullet-{% cycle 'img': 1, 2, 3 %}.svg)
  </div>
  <div class="small-9 column">
  <ul class="map-legend-{% cycle 'css': 1, 2, 3 %} no-bullet">
    <li>{{ pool.name }}</li>
    {% if pool.facility %}
    <li>{{ pool.facility }}</li>
    {% endif %}
    <li class="street-address">{{ pool.street-address }}</li>
    <li><span class="locality">{{ pool.locality }}</span>, <span class="state">{{ pool.state }}</span> <span class="zip">{{ pool.zip }}</span></li>
  </ul>
  </div>
  </div>
  {% endfor %}
</div>
