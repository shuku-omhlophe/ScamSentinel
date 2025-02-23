from django.test import TestCase
from django.contrib.auth import get_user_model
from scam_detector.models import Transaction

User = get_user_model()

class UserModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="testuser",
            email="testuser@example.com",
            password="securepassword123"
        )
    
    def test_user_creation(self):
        self.assertEqual(self.user.username, "testuser")
        self.assertEqual(self.user.email, "testuser@example.com")
        self.assertTrue(self.user.check_password("securepassword123"))
    
    def test_user_string_representation(self):
        self.assertEqual(str(self.user), "testuser")

class TransactionModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="testuser2",
            email="testuser2@example.com",
            password="securepassword456"
        )
        self.transaction = Transaction.objects.create(
            user=self.user,
            tx_hash="0x123abc456def",
            is_scam=False
        )
    
    def test_transaction_creation(self):
        self.assertEqual(self.transaction.tx_hash, "0x123abc456def")
        self.assertFalse(self.transaction.is_scam)
        self.assertEqual(self.transaction.user, self.user)
    
    def test_transaction_string_representation(self):
        self.assertEqual(str(self.transaction), "0x123abc456def")
