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
