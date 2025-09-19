import java.math.BigDecimal;

public class CartaoCredito extends FormaPagamento {
    private String numeroCartao;
    private String nomeTitular;
    private String validade;
    private String cvv;

    public CartaoCredito(String numeroCartao, String nomeTitular, String validade, String cvv) {
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
        this.validade = validade;
        this.cvv = cvv;
    }

    @Override
    public void validarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        if (valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new PagamentoInvalidoException("Valor do pagamento deve ser positivo");
        }

        if (numeroCartao == null || numeroCartao.length() != 16 || !numeroCartao.matches("\\d+")) {
            throw new PagamentoInvalidoException("Número do cartão inválido");
        }

        if (cvv == null || cvv.length() != 3 || !cvv.matches("\\d+")) {
            throw new PagamentoInvalidoException("CVV inválido");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento(valor);
        System.out.println("Processando pagamento de R$" + valor + " com cartão de crédito ****" +
                          numeroCartao.substring(12));
        System.out.println("Pagamento aprovado!");
    }
}