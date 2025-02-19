from django.db import models

class CryptoAddress(models.Model):
    address = models.CharField(max_length=255, unique=True)
    risk_score = models.FloatField(default=0.0)
    flagged = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.address} - Risk: {self.risk_score}"  

class SmartContract(models.Model):
    contract_address = models.CharField(max_length=255, unique=True)
    contract_name = models.CharField(max_length=255, blank=True, null=True)
    risk_score = models.FloatField(default=0.0)
    verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.contract_name or 'Unknown'} ({self.contract_address}) - Risk: {self.risk_score}"

class ScamReport(models.Model):
    address = models.ForeignKey(CryptoAddress, on_delete=models.CASCADE, related_name='reports', blank=True, null=True)
    contract = models.ForeignKey(SmartContract, on_delete=models.CASCADE, related_name='reports', blank=True, null=True)
    report_reason = models.TextField()
    reported_by = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Report on {self.address or self.contract} by {self.reported_by}"
