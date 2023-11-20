from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView
from google.cloud import bigquery

class BigQueryData(APIView):
    def post(self, request):
        query = request.data.get('query')
        client = bigquery.Client()
        query_job = client.query(query)
        data = [{"name": row[0], "total_people": row["total_people"]} for row in query_job]
        return Response(data)
    