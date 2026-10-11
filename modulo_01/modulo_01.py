#if/else tradicionais

nota = 6

if nota >= 7:
    resultado = "Aprovado"
else:
    resultado = "Reprovado"

print(resultado)

#if/else ternários

nota_t = 8
resultado_t = "Aprovado" if nota_t >= 7 else "Reprovado"
print(resultado_t)

#Exercício

tarefas_pendentes = 1

mensagem = "Há tarefas pendentes" if tarefas_pendentes > 0 else "Tudo concluído"
print(mensagem)