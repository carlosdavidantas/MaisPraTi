import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract void validarPagamento(BigDecimal valor) throws PagamentoInvalidoException;
    public abstract void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException;
}