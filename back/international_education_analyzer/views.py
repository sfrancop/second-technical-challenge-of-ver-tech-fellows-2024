from rest_framework import viewsets
from .serializer import QuerySerializer
from .models import Query

class QueryView(viewsets.ModelViewSet):
    queryset = Query.objects.all()
    serializer_class = QuerySerializer
    