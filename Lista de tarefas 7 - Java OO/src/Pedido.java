import java.math.BigDecimal;
import java.util.function.Function;

public class Pedido {
    private String cepDestino;
    private BigDecimal valorTotal;
    private Function<Pedido, BigDecimal> estrategiaFrete;

    public Pedido(String cepDestino, BigDecimal valorTotal, Function<Pedido, BigDecimal> estrategiaFrete) {
        if (cepDestino == null || !cepDestino.matches("\\d{8}")) {
            throw new IllegalArgumentException("CEP inválido. Deve conter 8 dígitos.");
        }
        if (valorTotal == null || valorTotal.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor total não pode ser nulo ou negativo");
        }
        this.cepDestino = cepDestino;
        this.valorTotal = valorTotal;
        this.estrategiaFrete = estrategiaFrete;
    }

    public String getCepDestino() {
        return cepDestino;
    }

    public BigDecimal getValorTotal() {
        return valorTotal;
    }

    public void setEstrategiaFrete(Function<Pedido, BigDecimal> estrategiaFrete) {
        this.estrategiaFrete = estrategiaFrete;
    }

    public BigDecimal calcularFrete() {
        if (estrategiaFrete == null) {
            throw new IllegalStateException("Estratégia de frete não definida");
        }
        return estrategiaFrete.apply(this);
    }

    public String getRegiao() {
        int primeiroDigito = Character.getNumericValue(cepDestino.charAt(0));
        if (primeiroDigito == 0) return "Grande São Paulo";
        else if (primeiroDigito >= 1 && primeiroDigito <= 5) return "Sudeste";
        else if (primeiroDigito >= 6 && primeiroDigito <= 9) return "Outras regiões";
        else return "Desconhecida";
    }
}