import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";
const children: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
]

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        RouterModule.forChild(children)
    ],
    exports: [
        RouterModule,
        LoginComponent
    ]
})
export class LoggingModule {
}
