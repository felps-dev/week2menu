from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from menu.models import Vendor, Product
from menu.serializers import VendorsSerializer, ProductsSerializer


# For this application we just need 1 class ViewSet for Vendors and an @api_view for products of then :)
# This is the correct way for modern api's in django.


class VendorsViewset(viewsets.ModelViewSet):
    """
    Vendor ModelViewSet, provides all CRUD operations for Vendor.
    """
    queryset = Vendor.objects.all()
    serializer_class = VendorsSerializer
    # AllowAny because PDF don't specified authentication
    permission_classes = [AllowAny]

    # Now, our action to retrieve all products from vendor.
    # Method must be GET, because we are GETTING the list.
    @action(detail=True, methods=['GET'], url_path='products')
    def products(self, request, pk=None):
        # get current vendor and return its products.
        vendor = self.get_object()
        response = ProductsSerializer(vendor.products, many=True)
        return Response(response.data, 200)

# Extra, just in need.


class ProductsViewset(viewsets.ModelViewSet):
    """
    Product ModelViewSet, provides all CRUD operations for Product.
    """
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer
    # AllowAny because PDF don't specified authentication
    permission_classes = [AllowAny]
