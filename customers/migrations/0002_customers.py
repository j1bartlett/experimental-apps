# Generated by Django 2.2.3 on 2019-07-06 17:14

from django.db import migrations

# In this method, we are grabbing the Customer class of our customers app and creating a demo customer to insert into the database.
def create_data(apps, schema_editor):
    Customer = apps.get_model('customers', 'Customer')
    Customer(first_name="Customer 001", last_name="Customer 001", email="customer001@email.com", phone="00000000", address="Customer 000 Address", description= "Customer 001 description").save()

class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
    	migrations.RunPython(create_data),
    ]
