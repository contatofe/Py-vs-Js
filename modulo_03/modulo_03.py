def dobrar(numero):
    return numero * 2

def triplicar(numero):
    return numero * 3

def quadrado(numero):
    return numero ** 2

def aplicar_operacao(numero, operacao):
    return operacao(numero)

# print(aplicar_operacao(5, dobrar))
# print(aplicar_operacao(5, triplicar))
# print(aplicar_operacao(5, quadrado))

#Aplicando função lambda

quadrado = lambda numero: numero ** 2

# print(quadrado(5))

# Exercício -> Lambda + Função de callback

metade = lambda numero: numero / 2
somar_dez = lambda numero: numero + 10

print(f'resultado do exercício 1: {aplicar_operacao(8, metade)}')
print(f'resultado do exercício 2: {aplicar_operacao(8, somar_dez)}')
