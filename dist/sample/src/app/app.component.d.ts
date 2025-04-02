import { AfterViewInit } from '@angular/core';
import 'brace/theme/github';
import 'brace/mode/sql';
import * as i0 from "@angular/core";
export declare class AppComponent implements AfterViewInit {
    content: string;
    contentAutoUpdate: string;
    myCode: string;
    highlight: any;
    editorInfinity: any;
    firstEditor: any;
    onRuleChange(e: any): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppComponent, "app-root", never, {}, {}, never, never, false, never>;
}
