from django.urls import path
from .views import AnalyzeAddressView, AnalyzeContractView, ScamHistoryView

urlpatterns = [
    path('check/<str:address>/', AnalyzeAddressView.as_view(), name='analyze_address'),
    path('smartcontract/<str:contract_address>/', AnalyzeContractView.as_view(), name='analyze_contract'),
    path('history/', ScamHistoryView.as_view(), name='scam_history'),
]
