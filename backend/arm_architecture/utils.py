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

    return int(value)


def update_or_create_register(register_info):
    register_label = register_info.get("label")
    register_value = register_info.get("value", None)

    register, _ = Register.objects.get_or_create(label=register_label)

    if register_value:
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


def set_return_address():
    link_register = Register.objects.get(label="R14")
    program_counter = Register.objects.get(label="R15")

    link_register.value = program_counter.value
    link_register.save()


def identify_operation(operation, first_operand, second_operand):
    if operation in ["ADD"]:
        try:
            result = first_operand.value + second_operand.value
        except AttributeError:
            result = first_operand.value + second_operand["value"]
        return result

    if operation in ["SUB"]:
        try:
            result = first_operand.value - second_operand.value
        except AttributeError:
            result = first_operand.value - second_operand["value"]
        return result

    if operation in ["RSB"]:
        try:
            result = second_operand.value - first_operand.value
        except AttributeError:
            result = second_operand["value"] - first_operand.value
        return result

    if operation in ["MUL"]:
        try:
            result = first_operand.value * second_operand.value
        except AttributeError:
            result = first_operand.value * second_operand["value"]
        return result

    if operation in ["BIC"]:
        try:
            result = first_operand.value & ~second_operand.value
        except AttributeError:
            result = first_operand.value & ~second_operand["value"]
        return result

    if operation in ["MOV"]:
        try:
            result = first_operand.value
        except AttributeError:
            result = first_operand["value"]
        return result

    if operation in ["MVN"]:
        try:
            result = ~first_operand.value
        except AttributeError:
            result = ~first_operand["value"]
        return result

    if operation in ["CLZ"]:
        decimal = first_operand.value
        value = decimal ^ (decimal - 1) >> 1
        leading_zeroes = 32

        while value:
            value >>= 1
            leading_zeroes -= 1

        return leading_zeroes

    if operation in ["AND"]:
        try:
            result = first_operand.value & second_operand.value
        except AttributeError:
            result = first_operand.value & second_operand["value"]
        return result

    if operation in ["EOR"]:
        try:
            result = first_operand.value ^ second_operand.value
        except AttributeError:
            result = first_operand.value ^ second_operand["value"]
        return result

    if operation in ["ORR"]:
        try:
            result = first_operand.value | second_operand.value
        except AttributeError:
            result = first_operand.value | second_operand["value"]
        return result

    if operation == "B":
        if "label" in first_operand:
            return "Not valid operation"

        pc_register = Register.objects.get(label="R15")
        pc_register.value = first_operand["value"]
        pc_register.save()

        return first_operand["value"]

    if operation in ["BL"]:
        if "label" in first_operand:
            return "Not valid operation"

        set_return_address()

        return first_operand["value"]

    if operation in ["BX"]:
        pc_register = Register.objects.get(label="R15")
        pc_register.value = first_operand["value"]
        pc_register.save()

        return None

    if operation in ["BLX"]:
        set_return_address()

        return None

    return "Not valid operation"


def execute_operation(operation, register_destination, first_operand, second_operand):
    if operation not in ["B", "BL", "BLX", "BX"]:
        register_destination_label = register_destination.get("label", None)
        register_destination = Register.objects.get(label=register_destination_label)

    first_operand = operand_register_or_immediate(first_operand)
    second_operand = operand_register_or_immediate(second_operand)

    result = identify_operation(operation, first_operand, second_operand)

    if operation not in ["B", "BL", "BLX", "BX"]:
        register_destination.value = result
        register_destination.save()

    return Response(status=status.HTTP_200_OK)
