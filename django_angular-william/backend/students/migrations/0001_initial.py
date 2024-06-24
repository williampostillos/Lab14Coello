# Generated by Django 4.1.7 on 2024-06-23 20:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('lastname', models.CharField(max_length=255)),
                ('course', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='students.course')),
            ],
        ),
    ]