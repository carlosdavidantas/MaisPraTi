public class Bicicleta implements IMeioTransporte {
    private int velocidade = 0;
    private static final int VELOCIDADE_MAXIMA = 40;

    @Override
    public void acelerar() {
        if (velocidade >= VELOCIDADE_MAXIMA) {
            throw new IllegalStateException("Bicicleta já atingiu velocidade máxima");
        }
        velocidade += 5;
        System.out.println("Bicicleta acelerando. Velocidade atual: " + velocidade + " km/h");
    }

    @Override
    public void frear() {
        if (velocidade <= 0) {
            throw new IllegalStateException("Bicicleta já está parada");
        }
        velocidade -= 8;
        if (velocidade < 0) velocidade = 0;
        System.out.println("Bicicleta freando. Velocidade atual: " + velocidade + " km/h");
    }
}