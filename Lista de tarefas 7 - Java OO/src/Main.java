import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("=== EXERCICIO 1 - ENCAPSULAMENTO ===");
        Produto produto = new Produto("Caneta", 2.0, 1000);
        System.out.println(produto.toString());
        produto.setNome("Lapis");
        produto.setPreco(10);
        produto.setQuantidadeEmEstoque(500);
        System.out.println(produto.toString());

        System.out.println("\n=== EXERCICIO 2 - DESCONTO ===");
        Produto celular = new Produto("Celular", 1000.99, 1000);
        System.out.println("Antes do desconto: " + celular.toString());
        celular.aplicarDesconto(20);
        System.out.println("Depois do desconto: " + celular.toString());

        System.out.println("\n=== EXERCICIO 3 - HERANCA ===");
        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(new Gerente("Joao Silva", new BigDecimal("5000.00")));
        funcionarios.add(new Desenvolvedor("Maria Santos", new BigDecimal("4000.00")));
        funcionarios.add(new Gerente("Carlos Oliveira", new BigDecimal("6000.00")));

        for (Funcionario func : funcionarios) {
            System.out.println(func.getNome() + " - Salario: R$" + func.getSalario() +
                             " - Bonus: R$" + func.calcularBonus());
        }

        System.out.println("\n=== EXERCICIO 4 - POLIMORFISMO COM INTERFACE ===");
        List<IMeioTransporte> transportes = new ArrayList<>();
        transportes.add(new Carro());
        transportes.add(new Bicicleta());
        transportes.add(new Trem());

        for (IMeioTransporte transporte : transportes) {
            System.out.println("\nTestando " + transporte.getClass().getSimpleName() + ":");
            transporte.acelerar();
            transporte.acelerar();
            transporte.frear();
        }

        System.out.println("\n=== EXERCICIO 5 - ABSTRACAO (SISTEMA DE PAGAMENTOS) ===");
        List<FormaPagamento> formasPagamento = new ArrayList<>();
        formasPagamento.add(new CartaoCredito("1234567812345678", "JOAO SILVA", "12/25", "123"));
        formasPagamento.add(new Boleto("12345678901234567890123456789012345678901234", "15/12/2024"));
        formasPagamento.add(new Pix("joao.silva@email.com"));

        BigDecimal valorPagamento = new BigDecimal("150.00");
        for (FormaPagamento forma : formasPagamento) {
            System.out.println("\nProcessando pagamento com " + forma.getClass().getSimpleName() + ":");
            try {
                forma.processarPagamento(valorPagamento);
            } catch (PagamentoInvalidoException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }

        System.out.println("\n=== EXERCICIO 6 - IMUTABILIDADE (CARRINHO DE COMPRAS) ===");
        Produto p1 = new Produto("Notebook", 3000.0, 10);
        Produto p2 = new Produto("Mouse", 50.0, 50);

        Dinheiro preco1 = new Dinheiro(new BigDecimal("3000.00"), Moeda.BRL);
        Dinheiro preco2 = new Dinheiro(new BigDecimal("50.00"), Moeda.BRL);

        ItemCarrinho item1 = new ItemCarrinho(p1, 1, preco1);
        ItemCarrinho item2 = new ItemCarrinho(p2, 2, preco2);

        Carrinho carrinho1 = new Carrinho();
        Carrinho carrinho2 = carrinho1.adicionarItem(item1);
        Carrinho carrinho3 = carrinho2.adicionarItem(item2);
        Carrinho carrinho4 = carrinho3.aplicarCupom(new BigDecimal("10.00"));

        System.out.println("Carrinho final: " + carrinho4);

        System.out.println("\n=== EXERCICIO 7 - GENERICS (REPOSITORIO GENERICO) ===");
        InMemoryRepository<Produto, Long> produtoRepository = new InMemoryRepository<>();
        InMemoryRepository<Funcionario, Long> funcionarioRepository = new InMemoryRepository<>();

        Produto produto1 = new Produto("Smartphone", 1500.0, 100);
        Produto produto2 = new Produto("Tablet", 800.0, 50);

        produtoRepository.salvar(produto1);
        produtoRepository.salvar(produto2);

        System.out.println("Produtos cadastrados:");
        produtoRepository.listarTodos().forEach(p ->
            System.out.println("ID: " + p.getId() + ", Nome: " + p.getNome() + ", Preco: R$" + p.getPreco()));

        Gerente gerente1 = new Gerente(1L, "Ana Costa", new BigDecimal("5500.00"));
        funcionarioRepository.salvar(gerente1);

        System.out.println("\nFuncionarios cadastrados:");
        funcionarioRepository.listarTodos().forEach(f ->
            System.out.println("ID: " + f.getId() + ", Nome: " + f.getNome() + ", Salario: R$" + f.getSalario()));

        System.out.println("\n=== EXERCICIO 8 - STRATEGY (CALCULO DE FRETE) ===");
        Pedido pedido1 = new Pedido("01234567", new BigDecimal("200.00"), CalculadoraFrete.SEDEX);
        Pedido pedido2 = new Pedido("12345678", new BigDecimal("150.00"), CalculadoraFrete.PAC);
        Pedido pedido3 = new Pedido("98765432", new BigDecimal("50.00"), CalculadoraFrete.RETIRADA_NA_LOJA);
        Pedido pedido4 = new Pedido("45678901", new BigDecimal("250.00"), CalculadoraFrete.freteGratisAcimaDe(new BigDecimal("200.00")));

        System.out.println("Pedido 1 (SEDEX - Grande SP): R$" + pedido1.calcularFrete());
        System.out.println("Pedido 2 (PAC - Sudeste): R$" + pedido2.calcularFrete());
        System.out.println("Pedido 3 (Retirada): R$" + pedido3.calcularFrete());
        System.out.println("Pedido 4 (Frete gratis acima de R$200): R$" + pedido4.calcularFrete());

        System.out.println("\nMudando estrategia do Pedido 4 para PAC:");
        pedido4.setEstrategiaFrete(CalculadoraFrete.PAC);
        System.out.println("Novo frete: R$" + pedido4.calcularFrete());
    }
}