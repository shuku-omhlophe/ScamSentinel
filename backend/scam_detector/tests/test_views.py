from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status
from scam_detector.models import Transaction

User = get_user_model()

class ScamDetectorViewsTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username="testuser",
            email="testuser@example.com",
            password="securepassword123"
        )
        self.client.force_authenticate(user=self.user)
        self.transaction = Transaction.objects.create(
            user=self.user,
            tx_hash="0x123abc456def",
            is_scam=False
        )
    
    def test_transaction_list_view(self):
        url = reverse("transaction-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
    
    def test_transaction_detail_view(self):
        url = reverse("transaction-detail", kwargs={"pk": self.transaction.id})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["tx_hash"], "0x123abc456def")
    
    def test_create_transaction_view(self):
        url = reverse("transaction-list")
        data = {"tx_hash": "0x987xyz654uvw", "is_scam": True}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Transaction.objects.count(), 2)