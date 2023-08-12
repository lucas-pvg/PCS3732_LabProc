from rest_framework import serializers

from .models import Register


class RegisterSerializer(serializers.ModelSerializer):
    value = serializers.CharField()

    class Meta:
        model = Register
        fields = ["label", "value"]
