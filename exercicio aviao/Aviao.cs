namespace exercicio_aviao;
class Aviao
{
   public string modelo;
   public int velocidade;
   public int altitude;
   public string marca;

   public void acelerar(){
    velocidade ++;

   }
   public void reduzir(){
    velocidade --;
    
   }
   public void subir(){
    altitude++;
    
   }
   public void descer(){
    altitude--;
   }
}
