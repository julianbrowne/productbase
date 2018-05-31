---
layout: default
title: blog
---

# Blog

We publish occasional posts relevent to agile, digital or the move to product organisations. Most of these are in response to questions and feedback from clients, please drop us [an email](mailto:info@productbase.org.uk) if you have anything to add.

{% for post in site.data.general.posts %}
- [{{ post }}](/blog/{{post}})
{% endfor %}

- [post two](#)

- [post three](#)
