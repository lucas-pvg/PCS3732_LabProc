from django.urls import path

from .views import ArmInstructionsView, RegisterView

urlpatterns = [
    path(
        "operation/",
        ArmInstructionsView.as_view(actions={"post": "post"}),
        name="operation",
    ),
    path(
        "register/<int:pk>/",
        RegisterView.as_view(actions={"get": "get"}),
        name="detail",
    ),
    path(
        "register/",
        RegisterView.as_view(actions={"get": "list", "post": "post"}),
        name="register_list",
    ),
]
