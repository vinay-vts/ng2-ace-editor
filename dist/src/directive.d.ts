import { EventEmitter, ElementRef, OnInit, OnDestroy, NgZone } from "@angular/core";
import "brace";
import "brace/theme/monokai";
import * as i0 from "@angular/core";
export declare class AceEditorDirective implements OnInit, OnDestroy {
    private zone;
    textChanged: EventEmitter<any>;
    textChange: EventEmitter<any>;
    _options: any;
    _readOnly: boolean;
    _theme: string;
    _mode: any;
    _autoUpdateContent: boolean;
    _durationBeforeCallback: number;
    _text: string;
    editor: any;
    oldText: any;
    timeoutSaving: any;
    constructor(elementRef: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    init(): void;
    initEvents(): void;
    updateText(): void;
    set options(options: any);
    set readOnly(readOnly: any);
    set theme(theme: any);
    set mode(mode: any);
    setMode(mode: any): void;
    get text(): string;
    set text(text: string);
    setText(text: any): void;
    set autoUpdateContent(status: any);
    set durationBeforeCallback(num: number);
    setDurationBeforeCallback(num: number): void;
    get aceEditor(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AceEditorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AceEditorDirective, "[ace-editor]", never, { "options": { "alias": "options"; "required": false; }; "readOnly": { "alias": "readOnly"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "text": { "alias": "text"; "required": false; }; "autoUpdateContent": { "alias": "autoUpdateContent"; "required": false; }; "durationBeforeCallback": { "alias": "durationBeforeCallback"; "required": false; }; }, { "textChanged": "textChanged"; "textChange": "textChange"; }, never, never, false, never>;
}
