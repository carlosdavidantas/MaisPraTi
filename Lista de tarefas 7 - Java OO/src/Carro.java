public class Carro implements IMeioTransporte {
    private int velocidade = 0;
    private static final int VELOCIDADE_MAXIMA = 200;

    @Override
    public void acelerar() {
        if (velocidade >= VELOCIDADE_MAXIMA) {
            throw new IllegalStateException("Carro já atingiu velocidade máxima");
        }
        velocidade += 10;
        System.out.println("Carro acelerando. Velocidade atual: " + velocidade + " km/h");
    }

    @Override
    public void frear() {
        if (velocidade <= 0) {
            throw new IllegalStateException("Carro já está parado");
        }
        velocidade -= 15;
        if (velocidade < 0) velocidade = 0;
        System.out.println("Carro freando. Velocidade atual: " + velocidade + " km/h");
    }
}