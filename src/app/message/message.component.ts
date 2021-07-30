import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  // Aqui vamos implementar nosso Output Decorator
  @Output() exibirDados = new EventEmitter<any>()

  // Criando a nossa estrutura para nosso conjunto de dados
  public data:any = {}
  // Vamos criar nosso emissor de eventos
  public enviarDados(): void {
    this.exibirDados.emit(this.data)
  }

}

/*
// Vamos implementar as propriedade de entrada de dados definidas com o @Input Decorator
  @Input() public mensagem: string = ''
  @Input('alert') public outraMensagem: string = ''

  // Estabelecer a função para exibir o conteudo da propriedade outraMensagem em um alert dialog
  public exibirAlert(): void{
    alert(this.outraMensagem)
  }
*/
