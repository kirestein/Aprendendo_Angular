import { Component, NgModule } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-alpha';

  // AQUI SERÃO IMPLEMENTADOS OS NOSSOS CÓDIGOS

  /*Trabalhando com o @Input Property*/

  public texto: string = 'Este é o conteúdo da caixa de dialogo alert' 

}

/*AQUI SERÁ O NOSSO REPOSITÓRIO DE CÓDIGOS QUE FUNCIONARAM*/
/* public x: number = 10
    public umArray: Array<number> = [10, 20, 50]
    public dataHoje: Date = new Date()
    public statusBooleano:boolean = true

    /* vamos implementar um função */
    /*public exibirTexto(): string{
      return 'String exibida a partir do data binding interpolation!'
    } */
    /*public  exibirAlerta(): void{
    console.log('O event binding foi acionado...');
    alert('Event Binding acionado')
  }
   
 */
