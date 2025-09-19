import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor == null || valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor não pode ser nulo ou negativo");
        }
        if (moeda == null) {
            throw new IllegalArgumentException("Moeda não pode ser nula");
        }
        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
        this.moeda = moeda;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    public Dinheiro somar(Dinheiro outro) {
        if (!moeda.equals(outro.moeda)) {
            throw new IllegalArgumentException("Não é possível somar valores de moedas diferentes");
        }
        return new Dinheiro(valor.add(outro.valor), moeda);
    }

    public Dinheiro multiplicar(BigDecimal fator) {
        if (fator == null || fator.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Fator não pode ser nulo ou negativo");
        }
        return new Dinheiro(valor.multiply(fator).setScale(2, RoundingMode.HALF_EVEN), moeda);
    }

    public Dinheiro aplicarDesconto(BigDecimal porcentagem) {
        if (porcentagem == null || porcentagem.compareTo(BigDecimal.ZERO) < 0 || porcentagem.compareTo(new BigDecimal("30")) > 0) {
            throw new IllegalArgumentException("Desconto deve estar entre 0 e 30%");
        }
        BigDecimal desconto = valor.multiply(porcentagem.divide(new BigDecimal("100"), 2, RoundingMode.HALF_EVEN));
        return new Dinheiro(valor.subtract(desconto), moeda);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return Objects.equals(valor, dinheiro.valor) && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return moeda.getSimbolo() + valor;
    }
}