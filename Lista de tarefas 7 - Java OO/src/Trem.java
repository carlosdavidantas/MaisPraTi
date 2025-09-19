public class Trem implements IMeioTransporte {
    private int velocidade = 0;
    private static final int VELOCIDADE_MAXIMA = 300;

    @Override
    public void acelerar() {
        if (velocidade >= VELOCIDADE_MAXIMA) {
            throw new IllegalStateException("Trem já atingiu velocidade máxima");
        }
        velocidade += 25;
        System.out.println("Trem acelerando. Velocidade atual: " + velocidade + " km/h");
    }

    @Override
    public void frear() {
        if (velocidade <= 0) {
            throw new IllegalStateException("Trem já está parado");
        }
        velocidade -= 20;
        if (velocidade < 0) velocidade = 0;
        System.out.println("Trem freando. Velocidade atual: " + velocidade + " km/h");
    }
}