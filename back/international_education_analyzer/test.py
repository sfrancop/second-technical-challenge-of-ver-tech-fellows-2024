from models import Query

ultimo_registro = Query.objects.order_by('-id').first()
