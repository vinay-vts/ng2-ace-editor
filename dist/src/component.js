import { Component, EventEmitter, Output, ElementRef, Input, forwardRef, NgZone } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import "brace";
import "brace/theme/monokai";
import * as i0 from "@angular/core";
export class AceEditorComponent {
    zone;
    textChanged = new EventEmitter();
    textChange = new EventEmitter();
    style = {};
    _options = {};
    _readOnly = false;
    _theme = "monokai";
    _mode = "html";
    _autoUpdateContent = true;
    _editor;
    _durationBeforeCallback = 0;
    _text = "";
    oldText;
    timeoutSaving;
    constructor(elementRef, zone) {
        this.zone = zone;
        let el = elementRef.nativeElement;
        this.zone.runOutsideAngular(() => {
            this._editor = ace['edit'](el);
        });
        this._editor.$blockScrolling = Infinity;
    }
    ngOnInit() {
        this.init();
        this.initEvents();
    }
    ngOnDestroy() {
        this._editor.destroy();
    }
    init() {
        this.setOptions(this._options || {});
        this.setTheme(this._theme);
        this.setMode(this._mode);
        this.setReadOnly(this._readOnly);
    }
    initEvents() {
        this._editor.on('change', () => this.updateText());
        this._editor.on('paste', () => this.updateText());
    }
    updateText() {
        let newVal = this._editor.getValue();
        if (newVal === this.oldText) {
            return;
        }
        if (!this._durationBeforeCallback) {
            this._text = newVal;
            this.zone.run(() => {
                this.textChange.emit(newVal);
                this.textChanged.emit(newVal);
            });
            this._onChange(newVal);
        }
        else {
            if (this.timeoutSaving) {
                clearTimeout(this.timeoutSaving);
            }
            this.timeoutSaving = setTimeout(() => {
                this._text = newVal;
                this.zone.run(() => {
                    this.textChange.emit(newVal);
                    this.textChanged.emit(newVal);
                });
                this.timeoutSaving = null;
            }, this._durationBeforeCallback);
        }
        this.oldText = newVal;
    }
    set options(options) {
        this.setOptions(options);
    }
    setOptions(options) {
        this._options = options;
        this._editor.setOptions(options || {});
    }
    set readOnly(readOnly) {
        this.setReadOnly(readOnly);
    }
    setReadOnly(readOnly) {
        this._readOnly = readOnly;
        this._editor.setReadOnly(readOnly);
    }
    set theme(theme) {
        this.setTheme(theme);
    }
    setTheme(theme) {
        this._theme = theme;
        this._editor.setTheme(`ace/theme/${theme}`);
    }
    set mode(mode) {
        this.setMode(mode);
    }
    setMode(mode) {
        this._mode = mode;
        if (typeof this._mode === 'object') {
            this._editor.getSession().setMode(this._mode);
        }
        else {
            this._editor.getSession().setMode(`ace/mode/${this._mode}`);
        }
    }
    get value() {
        return this.text;
    }
    set value(value) {
        this.setText(value);
    }
    writeValue(value) {
        this.setText(value);
    }
    _onChange = (_) => {
    };
    registerOnChange(fn) {
        this._onChange = fn;
    }
    _onTouched = () => {
    };
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this.setText(text);
    }
    setText(text) {
        if (text === null || text === undefined) {
            text = "";
        }
        if (this._text !== text && this._autoUpdateContent === true) {
            this._text = text;
            this._editor.setValue(text);
            this._onChange(text);
            this._editor.clearSelection();
        }
    }
    set autoUpdateContent(status) {
        this.setAutoUpdateContent(status);
    }
    setAutoUpdateContent(status) {
        this._autoUpdateContent = status;
    }
    set durationBeforeCallback(num) {
        this.setDurationBeforeCallback(num);
    }
    setDurationBeforeCallback(num) {
        this._durationBeforeCallback = num;
    }
    getEditor() {
        return this._editor;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AceEditorComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: AceEditorComponent, selector: "ace-editor", inputs: { style: "style", options: "options", readOnly: "readOnly", theme: "theme", mode: "mode", value: "value", text: "text", autoUpdateContent: "autoUpdateContent", durationBeforeCallback: "durationBeforeCallback" }, outputs: { textChanged: "textChanged", textChange: "textChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => AceEditorComponent),
                multi: true
            }], ngImport: i0, template: '', isInline: true, styles: [":host { display:block;width:100%; }"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AceEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ace-editor', template: '', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => AceEditorComponent),
                            multi: true
                        }], styles: [":host { display:block;width:100%; }"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { textChanged: [{
                type: Output
            }], textChange: [{
                type: Output
            }], style: [{
                type: Input
            }], options: [{
                type: Input
            }], readOnly: [{
                type: Input
            }], theme: [{
                type: Input
            }], mode: [{
                type: Input
            }], value: [{
                type: Input
            }], text: [{
                type: Input
            }], autoUpdateContent: [{
                type: Input
            }], durationBeforeCallback: [{
                type: Input
            }] } });
//# sourceMappingURL=component.js.map