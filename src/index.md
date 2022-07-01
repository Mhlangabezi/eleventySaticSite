---
title: WELCOME TO MY MOVIE SERIES
layout: base.njk
---
<p style="text-align: center; margin-left: 4px; margin-right: 4px;padding-left:6px; padding-right:6px;"> Welcome to the movie series site recommended by Mhlaa! Grab your snacks, relax and enjoy. This site populates the top 4 movies that you should check out. Well, maybe you have watched some already but you can indulge. To watch the movies, click the link below the image</p>

![Move nite](img/cover.PNG)

{% for post in collections.posts %}
[{{ post.data.title }}]({{post.url}})
{% endfor %}
