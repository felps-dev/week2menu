from rest_framework import serializers
from menu.models import Vendor, Product


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'description',
            'price',
            'vendor_id',
            'created',
            'updated',
            'status',
        )


class VendorsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vendor
        fields = (
            'id',
            'name',
        )
