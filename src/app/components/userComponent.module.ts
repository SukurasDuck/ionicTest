import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeroService } from "../seveice/heros.serveice";
import { NewdetailsComponent } from "./newdetails/newdetails.component";


@NgModule({
    declarations:[NewdetailsComponent],
    providers:[HeroService],
    imports:[IonicModule, CommonModule,
        FormsModule],
    exports:[NewdetailsComponent]

})

export class ComponentModule{
    
}