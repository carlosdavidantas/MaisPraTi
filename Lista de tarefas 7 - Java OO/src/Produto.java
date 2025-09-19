public class Produto implements Identificavel<Long> {
    private Long id;
    private String nome;
    private double preco;
    private int quantidadeEmEstoque;

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setNome(String nome) throws Exception {
        if(nome == null || nome.isEmpty()) {
            throw new IllegalArgumentException("O nome não pode ser nullo ou vazio");
        }
       this.nome = nome;
    }

    public void setPreco(double preco) throws Exception {
        if(preco < 0) {
            throw new IllegalArgumentException("O preço não pode ser negativo");
        }
        this.preco = preco;
    }

    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) throws Exception {
        if(quantidadeEmEstoque < 0) {
            throw new IllegalArgumentException("A quantidade em estoque não pode ser negativa");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    public Produto(String nome, double preco, int quantidadeEmEstoque) throws Exception {
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }


    public void aplicarDesconto(double porcentagem) throws Exception {
        if(porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("O valor da porcentagem não pode ser menor que 0 e maior que 50");
        }

        setPreco(getPreco() - (getPreco() * porcentagem / 100));
    }


    @Override
    public String toString() {
        return "Produto {nome = '" + getNome() + "', preco = " + getPreco() + ", quantidadeEmEstoque = " + getQuantidadeEmEstoque() + " }";
    }
}
