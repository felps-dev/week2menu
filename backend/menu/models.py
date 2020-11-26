from django.db import models

# We need 2 models for this app. Products and Vendors who have products.


class Vendor(models.Model):
    # Simple vendor
    name = models.CharField(verbose_name='Vendor Name', max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    # Products associated to vendors
    name = models.CharField(verbose_name='Name', max_length=255)
    description = models.CharField(verbose_name='Description', max_length=255)
    price = models.DecimalField(
        verbose_name='Price', max_digits=15, decimal_places=2, default=0)
    status = models.PositiveIntegerField(
        verbose_name='Status', default=0, null=True, blank=True)
    vendor = models.ForeignKey(
        to=Vendor, related_name='products', on_delete=models.PROTECT)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
