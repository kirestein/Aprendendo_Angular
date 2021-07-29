import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  // Vamos implementar as propriedade de entrada de dados definidas com o @Input Decorator
  @Input() public mensagem: string = ''
  @Input('alert') public outraMensagem: string = ''

  // Estabelecer a função para exibir o conteudo da propriedade outraMensagem em um alert dialog
  public exibirAlert(): void{
    alert(this.outraMensagem)
  }
  

}
