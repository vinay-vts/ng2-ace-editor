import { NgModule } from "@angular/core";
import { AceEditorComponent } from "./component";
import { AceEditorDirective } from "./directive";
import * as i0 from "@angular/core";
const list = [
    AceEditorComponent,
    AceEditorDirective
];
export class AceEditorModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AceEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: AceEditorModule, declarations: [AceEditorComponent,
            AceEditorDirective], exports: [AceEditorComponent,
            AceEditorDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AceEditorModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AceEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...list
                    ],
                    imports: [],
                    providers: [],
                    exports: list
                }]
        }] });
//# sourceMappingURL=module.js.map