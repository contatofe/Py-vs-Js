tarefas_pendentes = []

if tarefas_pendentes:
    mensagem = "A condição foi considerada verdadeira"
else:
    mensagem = "A condição foi considerada falsa"

print(mensagem)
print(tarefas_pendentes)

#Obs.: [] é "falsy" em Python porém "truthy" em JavaScript

desconto = 0
desconto_final = desconto or 10
print(desconto_final)

#Obs.: 0 é considerado "falsy" então o operador "or" escolhe o segundo número (10)

desconto = 0

desconto_final = 10 if desconto is None else desconto

print(desconto_final)

#Portanto precisamos usar "None" como valor ausente para preservar o 0

#Exercício

estoque = "0"

estoque_final = 20 if estoque is None else estoque

print(estoque_final)