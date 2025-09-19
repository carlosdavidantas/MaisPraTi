import java.math.BigDecimal;

public abstract class Funcionario implements Identificavel<Long> {
    protected Long id;
    protected String nome;
    protected BigDecimal salario;

    public Long getId() {return id;}
    public String getNome() {return nome;}
    public BigDecimal getSalario() {return salario;}

    public abstract BigDecimal calcularBonus();
}
