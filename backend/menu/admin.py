from django.contrib import admin
from menu.models import Vendor, Product
# Register your models here.


@admin.register(Vendor)
class VendorAdmin(admin.ModelAdmin):
    pass


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass
