from rest_framework import viewsets
from .serializer import QuerySerializer
from .models import Query
from rest_framework.views import APIView
from google.cloud import bigquery
from rest_framework.response import Response
from .models import Query

class QueryView(viewsets.ModelViewSet):
    queryset = Query.objects.all()
    serializer_class = QuerySerializer
    
class BigQueryData(APIView):
    def get(self, request):
        query = request.data.get('query')
        client = bigquery.Client()
        query = """""" + Query.objects.order_by('-id').first().query
        print(query)
        query_job = client.query(query)  
        data = [{"info": row} for row in query_job]
        return Response(data)
    