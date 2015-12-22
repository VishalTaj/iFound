from django.db import models
from django.template.defaultfilters import slugify


class Bookmark(models.Model):
    url = models.URLField(max_length=150)
    slug = models.SlugField(max_length=150)
    name = models.CharField(max_length=50)
    description = models.TextField()
    thumbnail = models.FileField(upload_to='documents/%Y/%m/%d')
    def save(self, *args, **kwargs):
        self.slug = slugify(self.url)
        super(test, self).save(*args, **kwargs)
