import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {File} from '@ionic-native/file/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {DocumentViewer} from '@ionic-native/document-viewer/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';

import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        HttpClientModule,
        AppRoutingModule,
        IonicStorageModule.forRoot(
            {
                name: '49362987-d8c8-47fb-bd10-01dd3ec07d71'
            }
        ),
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    providers:
        [
            DatePipe,
            StatusBar,
            SplashScreen,
            {
                provide: RouteReuseStrategy,
                useClass: IonicRouteStrategy
            },
            {
                provide: LocationStrategy,
                useClass: HashLocationStrategy
            },
            File,
            FileOpener,
            DocumentViewer,
            Camera,
            FilePath,
            WebView,
        ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [],
})
export class AppModule {
}
