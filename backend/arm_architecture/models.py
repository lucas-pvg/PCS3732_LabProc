import numpy as np
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Register(models.Model):
    label = models.CharField(max_length=5)
    value = models.IntegerField(
        default=0,
        validators=[MaxValueValidator(2147483647), MinValueValidator(-2147483647)],
    )

    @property
    def data_binary(self):
        return bin(self.value)

    @property
    def data_as_array(self):
        data_binary_no_prefix = self.data_binary[2:]
        return np.array(list(data_binary_no_prefix), dtype=int)
