from django.db import models


class Memory(models.Model):
    pass


class Register(models.Model):
    id = models.PositiveIntegerField(primary_key=True, unique=True)
    label = models.CharField()
    data_binary = models.CharField(
        max_length=34, default="0b00000000000000000000000000000000"
    )

    @property
    def data_as_integer(self):
        return int(self.data_binary, 0)
