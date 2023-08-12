from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import Register
from .serializers import RegisterSerializer
from .utils import execute_operation, update_or_create_register


class RegisterView(ModelViewSet):
    def list(self, request):
        registers = Register.objects.all()

        serializer = RegisterSerializer(registers, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def get(self, request, pk):
        register = Register.objects.get(label="R" + str(pk))

        serializer = RegisterSerializer(register)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = RegisterSerializer(data=request.data, many=True)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        for register_info in serializer.validated_data:
            update_or_create_register(register_info)

        return Response(status=status.HTTP_200_OK)


class ArmInstructionsView(ModelViewSet):
    def post(self, request):
        data = request.data

        # TODO: conferir se esses serao os nomes passados pelo front
        operation = data.get("operation")
        register_destination = data.get("registerDestination")
        first_operand = data.get("firstOperand")
        second_operand = data.get("secondOperand", "not valid")

        try:
            return execute_operation(
                operation, register_destination, first_operand, second_operand
            )
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


# Passo a passo:
# - verificar condicao pra ver se executa
# - verificar elementos
#     - quatro registradores
#     - tres registradores
#     - dois registradores e imediato
# - shifter do numero
# - fazer operacao
# - salvar registradores
# - setar flags se precisar
# - enviar registradores

# Parametros:
#     Rd = registrador destino
#     Rm = primeiro operando (so pode ser registrador)
#     Rn = segundo operando (registrador ou imediato)
#     is_immediate = true/false
#     set_flags = true/false
#     shift_size_determined_by_register = true/false

#     Registrador:
#       label = nome do registrador (R1, R2, CPSR, LR)
#       dados = valor a ser salvo
