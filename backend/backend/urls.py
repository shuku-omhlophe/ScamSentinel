from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('scam_detector.urls')),  # Includes URLs from the scam_detector app
]
