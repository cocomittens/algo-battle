# Generated by Django 4.2.7 on 2024-02-27 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0002_game_created_at_game_score_game_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='session',
            field=models.TextField(blank=True, max_length=1000),
        ),
    ]
