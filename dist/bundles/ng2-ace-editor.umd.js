(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('brace'), require('brace/theme/monokai'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'brace', 'brace/theme/monokai', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.ng2aceeditor = {}), global.ng.core, null, null, global.ng.forms));
})(this, (function (exports, i0, brace, monokai, forms) { 'use strict';

    function _interopNamespaceDefault(e) {
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n.default = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

    class AceEditorDirective {
        zone;
        textChanged = new i0.EventEmitter();
        textChange = new i0.EventEmitter();
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
        static ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0__namespace, type: AceEditorDirective, deps: [{ token: i0__namespace.ElementRef }, { token: i0__namespace.NgZone }], target: i0__namespace.ɵɵFactoryTarget.Directive });
        static ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: AceEditorDirective, selector: "[ace-editor]", inputs: { options: "options", readOnly: "readOnly", theme: "theme", mode: "mode", text: "text", autoUpdateContent: "autoUpdateContent", durationBeforeCallback: "durationBeforeCallback" }, outputs: { textChanged: "textChanged", textChange: "textChange" }, ngImport: i0__namespace });
    }
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0__namespace, type: AceEditorDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[ace-editor]'
                    }]
            }], ctorParameters: () => [{ type: i0__namespace.ElementRef }, { type: i0__namespace.NgZone }], propDecorators: { textChanged: [{
                    type: i0.Output
                }], textChange: [{
                    type: i0.Output
                }], options: [{
                    type: i0.Input
                }], readOnly: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }], mode: [{
                    type: i0.Input
                }], text: [{
                    type: i0.Input
                }], autoUpdateContent: [{
                    type: i0.Input
                }], durationBeforeCallback: [{
                    type: i0.Input
                }] } });

    class AceEditorComponent {
        zone;
        textChanged = new i0.EventEmitter();
        textChange = new i0.EventEmitter();
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
        static ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0__namespace, type: AceEditorComponent, deps: [{ token: i0__namespace.ElementRef }, { token: i0__namespace.NgZone }], target: i0__namespace.ɵɵFactoryTarget.Component });
        static ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: AceEditorComponent, selector: "ace-editor", inputs: { style: "style", options: "options", readOnly: "readOnly", theme: "theme", mode: "mode", value: "value", text: "text", autoUpdateContent: "autoUpdateContent", durationBeforeCallback: "durationBeforeCallback" }, outputs: { textChanged: "textChanged", textChange: "textChange" }, providers: [{
                    provide: forms.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(() => AceEditorComponent),
                    multi: true
                }], ngImport: i0__namespace, template: '', isInline: true, styles: [":host { display:block;width:100%; }"] });
    }
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0__namespace, type: AceEditorComponent, decorators: [{
                type: i0.Component,
                args: [{ selector: 'ace-editor', template: '', providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(() => AceEditorComponent),
                                multi: true
                            }], styles: [":host { display:block;width:100%; }"] }]
            }], ctorParameters: () => [{ type: i0__namespace.ElementRef }, { type: i0__namespace.NgZone }], propDecorators: { textChanged: [{
                    type: i0.Output
                }], textChange: [{
                    type: i0.Output
                }], style: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], readOnly: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }], mode: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], text: [{
                    type: i0.Input
                }], autoUpdateContent: [{
                    type: i0.Input
                }], durationBeforeCallback: [{
                    type: i0.Input
                }] } });

    const list = [
        AceEditorComponent,
        AceEditorDirective
    ];
    class AceEditorModule {
        static ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0__namespace, type: AceEditorModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
        static ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0__namespace, type: AceEditorModule, declarations: [AceEditorComponent,
                AceEditorDirective], exports: [AceEditorComponent,
                AceEditorDirective] });
        static ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0__namespace, type: AceEditorModule });
    }
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0__namespace, type: AceEditorModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ...list
                        ],
                        imports: [],
                        providers: [],
                        exports: list
                    }]
            }] });

    exports.AceEditorComponent = AceEditorComponent;
    exports.AceEditorDirective = AceEditorDirective;
    exports.AceEditorModule = AceEditorModule;

}));
