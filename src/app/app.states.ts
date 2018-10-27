import { MenuComponent } from './menu/menu.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExtraComponent } from './extra/extra.component';
import { Footer2Component } from './footer2/footer2.component';
import { Extra2Component } from './extra2/extra2.component';

export const appState: Ng2StateDeclaration = {
    name: 'app',
    redirectTo: 'app.agregador',
    component: AppComponent,
};

export const appLayout: Ng2StateDeclaration = {
    name: 'app.agregador',
    redirectTo: 'app.agregador.tela',
};

export const telaState: Ng2StateDeclaration = {
    name: 'app.agregador.tela',
    views: {
        'header@app': { component: HeaderComponent },
        'content@app': { component: HomeComponent },
        'footer@app': { component: FooterComponent },
        'nav@app': { component: MenuComponent }
    }
};

export const extraState: Ng2StateDeclaration = {
    name: 'app.agregador.tela.extra',
    views: {
        'content@app': { component: ExtraComponent },
    }
};

export const extra2State: Ng2StateDeclaration = {
    name: 'app.agregador.tela.extra2',
    views: {
        'content@app': { component: Extra2Component },
        'content2@app': { component: ExtraComponent },
        'footer@app': { component: Footer2Component },
    }
};

export const extra3State: Ng2StateDeclaration = {
    name: 'app.agregador.tela.extra3',
    views: {
        '!$default.content': { component: ExtraComponent },
    }
};

export const extra2ExtraState: Ng2StateDeclaration = {
    name: 'app.agregador.tela.extra2.extra',
    views: {
        'content@app': { component: ExtraComponent },
    }
};

export const extra3ExtraState: Ng2StateDeclaration = {
    name: 'app.agregador.tela.extra2.extra.extraFooter',
    views: {
        'content2@app': { component: FooterComponent },
    }
};

export const extra4ExtraState: Ng2StateDeclaration = {
    name: 'app.agregador.tela.extra2.extra.extraFooter.extraFooter',
    views: {
        'content@app': { component: FooterComponent },
    }
};

export const APP_STATES = [
    appState,
    appLayout,
    telaState,
    extraState,
    extra2State,
    extra3State,
    extra2ExtraState,
    extra3ExtraState,
    extra4ExtraState
];
