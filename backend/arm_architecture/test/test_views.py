from django.test import Client, TestCase
from django.urls import reverse

from arm_architecture.models import Register


class ArithmeticInstructionsTest(TestCase):
    def setUp(self):
        self.client = Client()

        for i in range(16):
            label = "R" + str(i)
            Register.objects.create(label=label)

        self.register_zero = Register.objects.get(label="R0")

        self.register_list_url = reverse("register_list")
        self.operation = reverse("operation")
        self.register_detail = reverse("detail", kwargs={"pk": self.register_zero.id})

    def test_register_list_get(self):
        response = self.client.get(self.register_list_url)

        self.assertEquals(response.status_code, 200)

    def test_register_detail_get(self):
        response = self.client.get(self.register_detail)

        self.assertEquals(response.status_code, 200)

    def test_add_two_registers_operation(self):
        response = self.client.post(
            self.operation,
            data={
                "operation": "ADD",
                "registerDestination": {"label": "R0"},
                "firstOperand": {"label": "R0", "value": "#1"},
                "secondOperand": {"label": "R1", "value": "#2"},
            },
        )

        self.assertEquals(response.status_code, 200)
        self.assertEqual(self.register_zero.value, 3)
