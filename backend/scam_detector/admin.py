from django.contrib import admin
from .models import ScamReport, WalletAnalysis, SmartContractAudit

class ScamReportAdmin(admin.ModelAdmin):
    list_display = ('id', 'wallet_address', 'risk_score', 'reported_at')
    search_fields = ('wallet_address',)
    list_filter = ('risk_score', 'reported_at')

class WalletAnalysisAdmin(admin.ModelAdmin):
    list_display = ('id', 'wallet_address', 'is_flagged', 'last_checked')
    search_fields = ('wallet_address',)
    list_filter = ('is_flagged', 'last_checked')

class SmartContractAuditAdmin(admin.ModelAdmin):
    list_display = ('id', 'contract_address', 'audit_result', 'checked_at')
    search_fields = ('contract_address',)
    list_filter = ('audit_result', 'checked_at')

admin.site.register(ScamReport, ScamReportAdmin)
admin.site.register(WalletAnalysis, WalletAnalysisAdmin)
admin.site.register(SmartContractAudit, SmartContractAuditAdmin)
