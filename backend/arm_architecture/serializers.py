from rest_framework import serializers

from .models import Register


class RegisterSerializer(serializers.ModelSerializer):
    value = serializers.CharField()

    class Meta:
        model = Register
        fields = ["label", "value"]


class RegisterOrImmediateSerializer(serializers.Serializer):
    value = serializers.CharField()
    label = serializers.CharField(required=False)


class ArmInstructionsSerializer(serializers.Serializer):
    operation = serializers.CharField()
    register_destination = RegisterOrImmediateSerializer()
    first_operand = RegisterOrImmediateSerializer(required=False)
    second_operand = RegisterOrImmediateSerializer(required=False)
