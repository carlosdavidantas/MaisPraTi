import java.math.BigDecimal;

public class Pix extends FormaPagamento {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void validarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        if (valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new PagamentoInvalidoException("Valor do pagamento deve ser positivo");
        }

        if (chavePix == null || chavePix.trim().isEmpty()) {
            throw new PagamentoInvalidoException("Chave PIX inválida");
        }

        if (!chavePix.matches("^[\\w.-]+@[\\w.-]+$") && !chavePix.matches("^\\d{11}$") &&
            !chavePix.matches("^\\d{14}$") && !chavePix.matches("[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}")) {
            throw new PagamentoInvalidoException("Formato de chave PIX inválido");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento(valor);
        System.out.println("Processando pagamento via PIX no valor de R$" + valor);
        System.out.println("Chave: " + chavePix);
        System.out.println("Pagamento aprovado instantaneamente!");
    }
}