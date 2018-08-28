from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('products',
         views.product_list,
         name='product-list'),
    path('api/product-list/',
         views.api_product_list,
         name='api-product-list'),
    path('api/product-detail/<int:product_id>/',
         views.api_product_detail,
         name='api-product-detail'),
]
