from rest_framework import status
from rest_framework.response import Response

from .models import Register


def convert_to_integer(value):
    if isinstance(value, int):
        return value

    if "0x" in value:
        return int(value, 16)

    if "0b" in value:
        return int(value, 2)

    return int(value[1:])


def update_or_create_register(register_info):
    register_label = register_info.get("label")
    register_value = register_info.get("value")

    register, _ = Register.objects.get_or_create(label=register_label)
    register.value = convert_to_integer(register_value)

    register.save()

    return register


# TODO: verificação de passagem de dados inválidos no campo imediato
def operand_register_or_immediate(operand):
    if operand is None:
        return None

    if "label" not in operand:
        immediate_value = convert_to_integer(operand.get("value"))
        operand["value"] = immediate_value
        return operand

    return update_or_create_register(operand)


def identify_operation(operation, first_operand, second_operand):
    if operation in ["ADD", "ADDS"]:
        try:
            result = first_operand.value + second_operand.value
        except AttributeError:
            result = first_operand.value + second_operand["value"]
        return result

    if operation in ["SUB", "SUBS"]:
        try:
            result = first_operand.value - second_operand.value
        except AttributeError:
            result = first_operand.value - second_operand["value"]
        return result

    if operation in ["RSB", "RSBS"]:
        try:
            result = second_operand.value - first_operand.value
        except AttributeError:
            result = second_operand["value"] - first_operand.value
        return result

    if operation in ["MUL", "MULS"]:
        try:
            result = first_operand.value * second_operand.value
        except AttributeError:
            result = first_operand.value * second_operand["value"]
        return result

    if operation in ["MOV", "MOVS"]:
        return first_operand["value"]

    if operation in ["MVN", "MVNS"]:
        return ~(first_operand["value"])

    if operation in ["CLZ", "CLZS"]:
        decimal = first_operand["value"]
        value = decimal ^ (decimal - 1) >> 1
        leading_zeroes = 32

        while value:
            value >>= 1
            leading_zeroes -= 1

        return leading_zeroes

    return "Not valid operation"


def execute_operation(operation, register_destination, first_operand, second_operand):
    register_destination_label = register_destination.get("label")

    register_destination = Register.objects.get(label=register_destination_label)

    first_operand = operand_register_or_immediate(first_operand)
    second_operand = operand_register_or_immediate(second_operand)

    result = identify_operation(operation, first_operand, second_operand)

    register_destination.value = result
    register_destination.save()

    return Response(status=status.HTTP_200_OK)
