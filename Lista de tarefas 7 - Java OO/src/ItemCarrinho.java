import java.math.BigDecimal;
import java.util.Objects;

public final class ItemCarrinho {
    private final Produto produto;
    private final int quantidade;
    private final Dinheiro precoUnitario;

    public ItemCarrinho(Produto produto, int quantidade, Dinheiro precoUnitario) {
        if (produto == null) {
            throw new IllegalArgumentException("Produto não pode ser nulo");
        }
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser maior que zero");
        }
        if (precoUnitario == null) {
            throw new IllegalArgumentException("Preço unitário não pode ser nulo");
        }
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public Dinheiro getPrecoUnitario() {
        return precoUnitario;
    }

    public Dinheiro getSubtotal() {
        return precoUnitario.multiplicar(new BigDecimal(quantidade));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItemCarrinho that = (ItemCarrinho) o;
        return quantidade == that.quantidade && Objects.equals(produto, that.produto) && Objects.equals(precoUnitario, that.precoUnitario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(produto, quantidade, precoUnitario);
    }

    @Override
    public String toString() {
        return "ItemCarrinho{produto=" + produto.getNome() + ", quantidade=" + quantidade + ", precoUnitario=" + precoUnitario + "}";
    }
}