import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { routerConfigFn } from './router.config';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExtraComponent } from './extra/extra.component';
import { MenuComponent } from './menu/menu.component';
import { Extra2Component } from './extra2/extra2.component';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ExtraComponent,
        MenuComponent,
        Extra2Component,
        Footer2Component,
    ],
    imports: [
        UIRouterModule.forRoot({
            states: APP_STATES,
            useHash: true,
            otherwise: { state: 'app' },
            config: routerConfigFn,
        }),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
    ],
    bootstrap: [UIView]
})
export class AppModule { }
