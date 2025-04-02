import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AceEditorModule } from '../../../';
import { AppComponent } from './app.component';
import * as i0 from "@angular/core";
export class AppModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AppModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: AppModule, bootstrap: [AppComponent], declarations: [AppComponent], imports: [BrowserModule, AceEditorModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AppModule, imports: [BrowserModule, AceEditorModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AppModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AppComponent],
                    imports: [BrowserModule, AceEditorModule],
                    providers: [],
                    bootstrap: [AppComponent]
                }]
        }] });
//# sourceMappingURL=app.module.js.map