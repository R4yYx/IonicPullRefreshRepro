import {Component, OnInit, ViewChild} from '@angular/core';
import {IonRefresher} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    samples = new BehaviorSubject([]);

    @ViewChild(IonRefresher, {static: true}) refresher: IonRefresher;


    constructor() {
    }

    ngOnInit(): void {
        this.fooo();
        this.samples.pipe(
            tap(() => {
                this.refresher.complete().finally();
            })).subscribe();
    }

    doRefresh($event: CustomEvent) {
        this.fooo();
    }

    fooo() {
        const foos = [];
        let i;
        for (i = 0; i < 200; i++) {
            foos.push({foo: 'foo' + Math.round(Math.random() * 100)});
        }
        this.samples.next(foos);
    }
}
