import {Component, Injector} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(
        protected injector: Injector,
    ) {
    }

    getTitle() {
        return 'TEST';
    }

    getAppPages() {
        return [
            {
                id: 'home',
                title: this.getTitle(),
                url: '/home',
                icon: 'home'
            },
        ];
    }
}
