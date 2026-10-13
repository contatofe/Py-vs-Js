# O laço for em Python utiliza "in".
# Para acrescentar itens em um array utilizamos .append

# precos = [100, 50, 200]
# precos_com_desconto = []

# for preco in precos:
#     precos_com_desconto.append(preco * 0.9)

# print(precos_com_desconto)

# Par utilizar .map em Python é necessário sempre colocá-lo dentro de uma .list(), pois a função .map isoladamente devolve um objeto map.

precos = [100, 50, 200]

precos_com_desconto = list(map(lambda preco: preco * 0.9, precos))

# print(precos_com_desconto)

# Exemplo sem list, retorna um objeto map

precos_com_desconto_2 = map(lambda preco: preco * 0.9, precos)

# print(precos_com_desconto_2)

#Exercício

precos_exercicio = list(map(lambda preco: preco * 0.8, precos))
print(f"Os resultados do exercício são {precos_exercicio}")


# .filter()

precos_filtrados = list(filter(lambda preco: preco >= 100, precos))

# print(precos_filtrados)

precos_filtrados_2 = list(filter(lambda preco: preco < 100, precos))

# print(precos_filtrados_2)


# compreensão de listas: for e if ternários

precos = [100, 50, 200]

precos_com_desconto = [preco * 0.8 for preco in precos]

print(precos_com_desconto)


precos_selecionados = [
    preco * 0.8
    for preco in precos
    if preco >= 100
]

# print(precos_selecionados)

# Exercício 02

precos_exercicio_2 = [40, 100, 150, 200]

precos_selecionados_2 = [
    preco * 0.7
    for preco in precos_exercicio_2
    if preco >= 150
]

print(f"O resultado do exercício 02 é: {precos_selecionados_2}")



# Não confundir com a solução abaixo

precos_selecionados_2 = [
    preco * 0.7
    if preco >= 150 else preco
    for preco in precos_exercicio_2
]

print(f"O resultado do exercício 02 não é: {precos_selecionados_2}")