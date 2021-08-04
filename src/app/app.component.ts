import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-alpha';

  // AQUI SERÃO IMPLEMENTADOS OS NOSSOS CÓDIGOS
  
  enviarDados(data:any) {
    alert('O email inserido foi: ' + data.email)
  }
 

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

  /*
  // Aqui vamos implementar uma propriedade do tipo booleana
  exibir!:boolean
  */

  /*
  
   subtitulo:string = '5 Filmes sensacionais'
  filmes: Filme[] = [
    {titulo:'O poderoso Chefão',direcao:'Francis Ford Coppola ',elenco:'Marlon Brando, Al Pacino, James Caan', anoLancamento:'10 de setembro, 1972'}, {titulo:'Um Estranho no Ninho',direcao:'Milos Forman',elenco:'Jack Nicholson, Louise Fletcher, Michael Berryman ',anoLancamento:'26 de maio, 1976'}, {titulo:'A lista de Schindler',direcao:'Steven Spielberg' ,elenco:'Liam Neeson, Ralph Fiennes, Ben Kingsley',anoLancamento:'11 de março, 1993'}, {titulo:'Forrest Gump - O contador de histórias',direcao: 'Robert Zemeckis',elenco:'Tom Hanks, Robin Wright, Gary Sin ise',anoLancamento:'7 de dezembro, 1994'}, {titulo:'Laranja Mecânica',direcao:'Stanley Kubrik',elenco:'Malcolm McDowell, Patrick Magee, Michael Bates ',anoLancamento:'04 de setembro, 1971'}
  ]

  


}

// Aqui vamos cirar nosso model para trabalhar com a diretiva *ngFor
class Filme{
  titulo!:string
  direcao!:string
  elenco!:string
  anoLancamento!:string
}



algarismo:number  = 0

  */

/*
cssAlteradoViaVar: string = 'color size'
umaClasseCss: UmaClasseCss = new UmaClasseCss()



class UmaClasseCss {
  color: boolean = true
  size: boolean = true
}

*/

/*
 tamanho: number = 12
  color: string = '#3380f6c'
  estiloClasse: EstiloClasse = new EstiloClasse()


// Vamos criar nossa classe de estilo para usar com ngStyle

class EstiloClasse {
  color: string = '#ff5733'
  'font-size.%': number = 150
  'font-weight': string = 'bold'
}
*/



/*

// Criar as propriedades para fazer uso do ngStyle
 exibirFilho: boolean = false
  
  constructor() {
    console.log("AppConponent:Constructor");
        
  }

  toggle() {
    this.exibirFilho =! this.exibirFilho
  }
  // vamos começar a chamada dos hooks
  ngOnChanges() {
    console.log("AppComponent:OnChange")
    
  }

  ngOnInit() {
    console.log("AppComponent:OnInit")
    
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked")
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck foi chamdo")    
  }

  ngAfterContentInit() {
    console.log("AppComponent: AfterContentinit foi chamado")    
  }

  ngAfterViewInit() {
    console.log("AppComponent: AfterViewInit foi chamado")    
  }

  ngAfterViewChecked() {
    console.log("AppComponent: AfterViewChecked foi chamado")    
  }

  ngOnDestroy() {
    console.log("AppComponent: OnDestroy foi chamado")  
  }

*/
