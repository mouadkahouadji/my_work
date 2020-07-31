from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import Catalog

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class CatalogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Catalog
        exclude = exclude_fields


class CatalogListAPIView(ListAPIView):
    queryset = Catalog.objects.none()
    serializer_class = CatalogSerializer

    def get_queryset(self):
        return Catalog.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = CatalogSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))