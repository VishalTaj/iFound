# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bookmark',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('url', models.URLField(max_length=150)),
                ('slug', models.SlugField(max_length=150)),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('thumbnail', models.FileField(upload_to=b'documents/%Y/%m/%d')),
            ],
        ),
    ]
