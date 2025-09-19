# Lista de tarefas 7 - Java OO

Exercícios de Programação Orientada a Objetos do curso +PraTi abordando conceitos fundamentais através de implementações práticas.

## Exercícios Implementados

### Exercício 1 — Encapsulamento (Classe Produto)
- Implementação de `Produto` com atributos privados (nome, preco, quantidadeEmEstoque)
- Getters e setters com validações para valores não negativos e nome não nulo/vazio
- Lançamento de `IllegalArgumentException` para casos inválidos

### Exercício 2 — Encapsulamento com Validação de Regra (Desconto)
- Extensão de `Produto` com método `aplicarDesconto(double porcentagem)`
- Validação de descontos entre 0 e 50% (inclusive)
- Tratamento de exceções para descontos inválidos

### Exercício 3 — Herança (Hierarquia de Funcionários)
- Classe base `Funcionario` com atributos protegidos
- Subclasses `Gerente` (20% bônus) e `Desenvolvedor` (10% bônus)
- Demonstração de polimorfismo com `List<Funcionario>`

### Exercício 4 — Polimorfismo com Interface (IMeioTransporte)
- Interface `IMeioTransporte` com métodos `acelerar()` e `frear()`
- Implementações: `Carro`, `Bicicleta` e `Trem` com lógicas específicas
- Tratamento de operações inválidas com exceções

### Exercício 5 — Abstração (Sistema de Pagamentos)
- Classe abstrata `FormaPagamento` com métodos `validarPagamento()` e `processarPagamento()`
- Implementações: `CartaoCredito`, `Boleto` e `Pix` com validações específicas
- Exceções customizadas (`PagamentoInvalidoException`)

### Exercício 6 — Imutabilidade e Objetos de Valor (Carrinho de Compras)
- Objeto de valor imutável `Dinheiro` com `BigDecimal` e enum `Moeda`
- `Carrinho` com lista de itens imutável (operações retornam novas instâncias)
- Validações de quantidades, valores e limites de cupons (máx. 30%)

### Exercício 7 — Generics (Repositório Genérico em Memória)
- Interface `Identificavel` com método `getId()`
- Interface genérica `IRepository<T extends Identificavel, ID>`
- Implementação `InMemoryRepository` com `Map<ID, T>`
- Operações CRUD com tratamento de `EntidadeNaoEncontradaException`

### Exercício 8 — Padrão Strategy (Cálculo de Frete com Lambdas)
- `CalculadoraFrete` com estratégias injetáveis
- Implementações: `Sedex`, `Pac` e `RetiradaNaLoja`
- Estratégia promocional via lambda (frete grátis acima de X)
- Validação de CEP/região e troca dinâmica de estratégias

## Como Executar

Compilar e executar a classe `Main.java` para demonstrar todos os conceitos implementados.