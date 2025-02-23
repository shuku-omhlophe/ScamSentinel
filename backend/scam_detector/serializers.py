from rest_framework import serializers
from django.contrib.auth import get_user_model
from scam_detector.models import Transaction

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]

class TransactionSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Transaction
        fields = ["id", "user", "tx_hash", "is_scam", "created_at"]
        read_only_fields = ["id", "user", "created_at"]
