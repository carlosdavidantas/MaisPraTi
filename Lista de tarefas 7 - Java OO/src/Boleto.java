import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    private String codigoBarras;
    private String dataVencimento;

    public Boleto(String codigoBarras, String dataVencimento) {
        this.codigoBarras = codigoBarras;
        this.dataVencimento = dataVencimento;
    }

    @Override
    public void validarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        if (valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new PagamentoInvalidoException("Valor do pagamento deve ser positivo");
        }

        if (codigoBarras == null || codigoBarras.length() != 44 || !codigoBarras.matches("\\d+")) {
            throw new PagamentoInvalidoException("Código de barras inválido");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento(valor);
        System.out.println("Processando pagamento de boleto no valor de R$" + valor);
        System.out.println("Vencimento: " + dataVencimento);
        System.out.println("Pagamento aprovado!");
    }
}