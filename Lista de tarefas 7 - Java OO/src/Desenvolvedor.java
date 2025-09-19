import java.math.BigDecimal;

public class Desenvolvedor extends Funcionario {

    public Desenvolvedor(Long id, String nome, BigDecimal salario) {
        if (salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Salário deve ser positivo");
        }
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }

    public Desenvolvedor(String nome, BigDecimal salario) {
        this(null, nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        return salario.multiply(new BigDecimal("0.10"));
    }
}