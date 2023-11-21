from django.urls import path, include
from rest_framework import routers
from .views import QueryView

router = routers.DefaultRouter()
router.register(r'queries', QueryView, 'queries')

urlpatterns = [
    path('api/v1/', include(router.urls))
]