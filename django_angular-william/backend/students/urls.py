from django import urls
from django.urls import path
from .views import StudentList, StudentDetail, CourseList, CourseDetail

urlpatterns = [
    path('students/', StudentList.as_view(), name="student-list"),
    path('students/<int:pk>/', StudentDetail.as_view(), name='student-detail'),
    
    path('courses/', CourseList.as_view(), name="course-list"),
    path('courses/<int:pk>/', CourseDetail.as_view(), name='course-detail'),
        
] 