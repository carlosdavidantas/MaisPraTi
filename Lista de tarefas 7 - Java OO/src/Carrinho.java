import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public final class Carrinho {
    private final List<ItemCarrinho> itens;
    private final BigDecimal desconto;

    public Carrinho() {
        this.itens = Collections.emptyList();
        this.desconto = BigDecimal.ZERO;
    }

    private Carrinho(List<ItemCarrinho> itens, BigDecimal desconto) {
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
        this.desconto = desconto;
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public BigDecimal getDesconto() {
        return desconto;
    }

    public Carrinho adicionarItem(ItemCarrinho item) {
        if (item == null) {
            throw new IllegalArgumentException("Item não pode ser nulo");
        }
        List<ItemCarrinho> novosItens = new ArrayList<>(itens);
        novosItens.add(item);
        return new Carrinho(novosItens, desconto);
    }

    public Carrinho removerItem(ItemCarrinho item) {
        if (item == null) {
            throw new IllegalArgumentException("Item não pode ser nulo");
        }
        List<ItemCarrinho> novosItens = new ArrayList<>(itens);
        if (novosItens.remove(item)) {
            return new Carrinho(novosItens, desconto);
        }
        return this;
    }

    public Carrinho aplicarCupom(BigDecimal porcentagem) {
        if (porcentagem == null || porcentagem.compareTo(BigDecimal.ZERO) < 0 || porcentagem.compareTo(new BigDecimal("30")) > 0) {
            throw new IllegalArgumentException("Desconto deve estar entre 0 e 30%");
        }
        return new Carrinho(itens, porcentagem);
    }

    public Dinheiro getTotal() {
        Dinheiro total = new Dinheiro(BigDecimal.ZERO, Moeda.BRL);
        for (ItemCarrinho item : itens) {
            total = total.somar(item.getSubtotal());
        }
        if (desconto.compareTo(BigDecimal.ZERO) > 0) {
            total = total.aplicarDesconto(desconto);
        }
        return total;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Carrinho carrinho = (Carrinho) o;
        return Objects.equals(itens, carrinho.itens) && Objects.equals(desconto, carrinho.desconto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(itens, desconto);
    }

    @Override
    public String toString() {
        return "Carrinho{itens=" + itens + ", desconto=" + desconto + "%, total=" + getTotal() + "}";
    }
}