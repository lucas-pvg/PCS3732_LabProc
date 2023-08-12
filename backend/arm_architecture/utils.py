from rest_framework import status
from rest_framework.response import Response

from .models import Register


def update_register(register_info):
    register_label = register_info.get("label")
    register_value = register_info.get("value")

    register = Register.objects.get(label=register_label)
    # TODO: parametrizar para outros tipos de dado (hexa, binario)
    register.data_integer = int(register_value)

    register.save()

    return register


# TODO: verificação de passagem de dados inválidos no campo imediato
def operand_register_or_immediate(operand):
    if "#" in operand:
        return operand[1:]

    if ["0b", "0x"] in operand:
        return operand[2:]

    return update_register(operand)


def identify_operation(operation, first_operand, second_operand):
    if operation in ["ADD"]:
        try:
            result = first_operand.data_integer + second_operand.data_integer
        except Exception:
            result = first_operand.data_integer + second_operand

        return result

    if operation in ["SUB"]:
        try:
            result = first_operand.data_integer - second_operand.data_integer
        except Exception:
            result = first_operand.data_integer - second_operand

        return result

    if operation in ["RSB"]:
        try:
            result = second_operand.data_integer - first_operand.data_integer
        except Exception:
            result = second_operand - first_operand.data_integer

        return result

    if operation in ["MUL"]:
        try:
            result = second_operand.data_integer * first_operand.data_integer
        except Exception:
            result = second_operand * first_operand.data_integer

        return result

    return "Not valid operation"


def execute_operation(operation, register_destination, first_operand, second_operand):
    register_destination = Register.objects.get(label=register_destination.get("label"))
    first_operand = Register.objects.get(label=first_operand.get("label"))
    second_operand = operand_register_or_immediate(second_operand)

    result = identify_operation(
        operation, register_destination, first_operand, second_operand
    )

    register_destination.data_integer = result
    register_destination.save()

    return Response(status=status.HTTP_200_OK)
