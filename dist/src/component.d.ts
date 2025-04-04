import { EventEmitter, ElementRef, OnInit, OnDestroy, NgZone } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import "brace";
import "brace/theme/monokai";
import * as i0 from "@angular/core";
export declare class AceEditorComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private zone;
    textChanged: EventEmitter<any>;
    textChange: EventEmitter<any>;
    style: any;
    _options: any;
    _readOnly: boolean;
    _theme: string;
    _mode: any;
    _autoUpdateContent: boolean;
    _editor: any;
    _durationBeforeCallback: number;
    _text: string;
    oldText: any;
    timeoutSaving: any;
    constructor(elementRef: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    init(): void;
    initEvents(): void;
    updateText(): void;
    set options(options: any);
    setOptions(options: any): void;
    set readOnly(readOnly: any);
    setReadOnly(readOnly: any): void;
    set theme(theme: any);
    setTheme(theme: any): void;
    set mode(mode: any);
    setMode(mode: any): void;
    get value(): string;
    set value(value: string);
    writeValue(value: any): void;
    private _onChange;
    registerOnChange(fn: any): void;
    private _onTouched;
    registerOnTouched(fn: any): void;
    get text(): string;
    set text(text: string);
    setText(text: any): void;
    set autoUpdateContent(status: any);
    setAutoUpdateContent(status: any): void;
    set durationBeforeCallback(num: number);
    setDurationBeforeCallback(num: number): void;
    getEditor(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AceEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AceEditorComponent, "ace-editor", never, { "style": { "alias": "style"; "required": false; }; "options": { "alias": "options"; "required": false; }; "readOnly": { "alias": "readOnly"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "value": { "alias": "value"; "required": false; }; "text": { "alias": "text"; "required": false; }; "autoUpdateContent": { "alias": "autoUpdateContent"; "required": false; }; "durationBeforeCallback": { "alias": "durationBeforeCallback"; "required": false; }; }, { "textChanged": "textChanged"; "textChange": "textChange"; }, never, never, false, never>;
}
