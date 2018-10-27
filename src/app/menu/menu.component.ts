import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { StateService, ViewService, StateRegistry } from '@uirouter/angular';
import { NgComponentOutlet } from '@angular/common';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor(private state: StateService,
        private registry: StateRegistry,
        private views: ViewService) { }

    ngOnInit() {
    }

    goTo(path) {
        this.state.go(path)
    }

    transitionOnView(view, component) {
        const currentState = this.state.current.name;

        console.log(currentState)

        console.log(this.views._pluginapi._activeViewConfigs());
        console.log(view, component);
    }

}
