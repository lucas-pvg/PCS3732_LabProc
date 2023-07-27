import numpy as np
from django.db import models


class Register(models.Model):
    id = models.PositiveIntegerField(primary_key=True, unique=True)
    label = models.CharField()
    data_binary = models.CharField(
        max_length=34, default="0b00000000000000000000000000000000"
    )

    @property
    def data_as_integer(self):
        return int(self.data_binary, 0)

    @property
    def data_as_array(self):
        data_binary_no_prefix = self.data_binary[2:]
        return np.array(list(data_binary_no_prefix), dtype=int)
