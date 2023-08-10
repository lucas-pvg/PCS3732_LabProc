from django.urls import path

from .views import ArmInstructionsView, RegisterView

urlpatterns = [
    path("operation/", ArmInstructionsView.as_view(actions={"get": "get"})),
    path("register_list/", RegisterView.as_view(actions={"get": "list"})),
]
