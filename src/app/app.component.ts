import { Component, NgModule } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-alpha';

  // AQUI SERÃO IMPLEMENTADOS OS NOSSOS CÓDIGOS
  // Aqui vamos implementar uma propriedade do tipo booleana

  exibir!:boolean


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

  /*
  Trabalhando com o @Input Property

  public texto: string = 'Este é o conteúdo da caixa de dialogo alert' 
  */

  /*
  // Aqui vamos implementar  nossa função para consumir os dados do componente filho
  public umaEstante(data:any): void {
    let strMessage: string = data.nome + ', obrigado por se cadastrar. ' 
    strMessage += 'O  e-mail ' + data.email + ' foi cadastrado com sucesso!'

    // vamos subir esta informação num alert dialog
    alert(strMessage)
  }
  */
