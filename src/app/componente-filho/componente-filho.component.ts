import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {

  @Input() mensagem  = ""
  constructor() {
    console.log("Este é o construtor do componente-filho sendo chamado!");
    
   }
   ngOnChanges() {
     console.log('Componente-filho: onChange');
     
   }

   ngDoCheck() {
    console.log('Componente-filho: doCheck');
    
  }

  ngOnInit() {
    console.log('Componente-filho: OnInit');
    
  }

  ngAfterContentInit() {
    console.log('Componente-filho: AftterContentInit');
    
  }

  ngAfterContentChecked() {
    console.log('Componente-filho: AfterContentChecked');
    
  }

  ngAfterViewInit() {
    console.log('Componente-filho: AfterViewInit');
    
  }

  ngAfterViewChecked() {
    console.log('Componente-filho: AfterViewChecked');
    
  }

  ngOnDestroy() {
    console.log('Componente-filho: OnDestroy');
    
  }

}
