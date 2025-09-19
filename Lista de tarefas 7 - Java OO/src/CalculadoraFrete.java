import java.math.BigDecimal;
import java.util.function.Function;

public class CalculadoraFrete {

    public static final Function<Pedido, BigDecimal> SEDEX = pedido -> {
        String regiao = pedido.getRegiao();
        switch (regiao) {
            case "Grande São Paulo":
                return new BigDecimal("15.00");
            case "Sudeste":
                return new BigDecimal("25.00");
            case "Outras regiões":
                return new BigDecimal("40.00");
            default:
                throw new IllegalArgumentException("Região não atendida pelo SEDEX");
        }
    };

    public static final Function<Pedido, BigDecimal> PAC = pedido -> {
        String regiao = pedido.getRegiao();
        switch (regiao) {
            case "Grande São Paulo":
                return new BigDecimal("10.00");
            case "Sudeste":
                return new BigDecimal("15.00");
            case "Outras regiões":
                return new BigDecimal("25.00");
            default:
                throw new IllegalArgumentException("Região não atendida pelo PAC");
        }
    };

    public static final Function<Pedido, BigDecimal> RETIRADA_NA_LOJA = pedido -> {
        return BigDecimal.ZERO;
    };

    public static Function<Pedido, BigDecimal> freteGratisAcimaDe(BigDecimal valorMinimo) {
        return pedido -> {
            if (pedido.getValorTotal().compareTo(valorMinimo) >= 0) {
                return BigDecimal.ZERO;
            }
            return PAC.apply(pedido);
        };
    }
}