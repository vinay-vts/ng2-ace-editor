import { Directive, EventEmitter, Output, ElementRef, Input, NgZone } from "@angular/core";
import "brace";
import "brace/theme/monokai";
import * as i0 from "@angular/core";
export class AceEditorDirective {
    zone;
    textChanged = new EventEmitter();
    textChange = new EventEmitter();
    _options = {};
    _readOnly = false;
    _theme = "monokai";
    _mode = "html";
    _autoUpdateContent = true;
    _durationBeforeCallback = 0;
    _text = "";
    editor;
    oldText;
    timeoutSaving;
    constructor(elementRef, zone) {
        this.zone = zone;
        let el = elementRef.nativeElement;
        this.zone.runOutsideAngular(() => {
            this.editor = ace["edit"](el);
        });
        this.editor.$blockScrolling = Infinity;
    }
    ngOnInit() {
        this.init();
        this.initEvents();
    }
    ngOnDestroy() {
        this.editor.destroy();
    }
    init() {
        this.editor.setOptions(this._options || {});
        this.editor.setTheme(`ace/theme/${this._theme}`);
        this.setMode(this._mode);
        this.editor.setReadOnly(this._readOnly);
    }
    initEvents() {
        this.editor.on('change', () => this.updateText());
        this.editor.on('paste', () => this.updateText());
    }
    updateText() {
        let newVal = this.editor.getValue();
        if (newVal === this.oldText) {
            return;
        }
        if (!this._durationBeforeCallback) {
            this._text = newVal;
            this.zone.run(() => {
                this.textChange.emit(newVal);
                this.textChanged.emit(newVal);
            });
        }
        else {
            if (this.timeoutSaving != null) {
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
        this._options = options;
        this.editor.setOptions(options || {});
    }
    set readOnly(readOnly) {
        this._readOnly = readOnly;
        this.editor.setReadOnly(readOnly);
    }
    set theme(theme) {
        this._theme = theme;
        this.editor.setTheme(`ace/theme/${theme}`);
    }
    set mode(mode) {
        this.setMode(mode);
    }
    setMode(mode) {
        this._mode = mode;
        if (typeof this._mode === 'object') {
            this.editor.getSession().setMode(this._mode);
        }
        else {
            this.editor.getSession().setMode(`ace/mode/${this._mode}`);
        }
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this.setText(text);
    }
    setText(text) {
        if (this._text !== text) {
            if (text === null || text === undefined) {
                text = "";
            }
            if (this._autoUpdateContent === true) {
                this._text = text;
                this.editor.setValue(text);
                this.editor.clearSelection();
            }
        }
    }
    set autoUpdateContent(status) {
        this._autoUpdateContent = status;
    }
    set durationBeforeCallback(num) {
        this.setDurationBeforeCallback(num);
    }
    setDurationBeforeCallback(num) {
        this._durationBeforeCallback = num;
    }
    get aceEditor() {
        return this.editor;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AceEditorDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: AceEditorDirective, selector: "[ace-editor]", inputs: { options: "options", readOnly: "readOnly", theme: "theme", mode: "mode", text: "text", autoUpdateContent: "autoUpdateContent", durationBeforeCallback: "durationBeforeCallback" }, outputs: { textChanged: "textChanged", textChange: "textChange" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AceEditorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ace-editor]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { textChanged: [{
                type: Output
            }], textChange: [{
                type: Output
            }], options: [{
                type: Input
            }], readOnly: [{
                type: Input
            }], theme: [{
                type: Input
            }], mode: [{
                type: Input
            }], text: [{
                type: Input
            }], autoUpdateContent: [{
                type: Input
            }], durationBeforeCallback: [{
                type: Input
            }] } });
//# sourceMappingURL=directive.js.map