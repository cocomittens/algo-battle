# Generated by Django 4.2.7 on 2024-02-27 03:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('session', models.TextField(blank=True, max_length=500)),
                ('user', models.TextField(blank=True, max_length=60)),
                ('opponent', models.TextField(blank=True, max_length=60)),
            ],
        ),
    ]
