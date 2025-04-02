import { Component, ViewChild } from '@angular/core';
import 'brace/theme/github';
import 'brace/mode/sql';
import * as i0 from "@angular/core";
import * as i1 from "../../../src/component";
import * as i2 from "../../../src/directive";
export class AppComponent {
    content = '<strong>Hi</strong>';
    contentAutoUpdate = 'SELECT * FROM autoUpdate;';
    myCode = 'SELECT * FROM tabs;';
    highlight;
    editorInfinity;
    firstEditor;
    onRuleChange(e) {
        console.log(e);
    }
    ngAfterViewInit() {
        const Range = ace.require('ace/range')['Range'];
        this.highlight
            .getEditor()
            .session.addMarker(new Range(0, 0, 2, 1), 'myMarker', 'fullLine');
        this.firstEditor.getEditor().session.setOption('useWorker', true);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AppComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: AppComponent, selector: "app-root", viewQueries: [{ propertyName: "highlight", first: true, predicate: ["highlight"], descendants: true }, { propertyName: "editorInfinity", first: true, predicate: ["editorInfinity"], descendants: true }, { propertyName: "firstEditor", first: true, predicate: ["firstEditor"], descendants: true }], ngImport: i0, template: "<h1>\n  Sample\n</h1>\n<ace-editor #firstEditor [text]=\"content\" (textChanged)=\"onRuleChange($event)\" [autoUpdateContent]=\"true\" style=\"min-height: 200px; width:100%; overflow: auto;\"\n  mode=\"html\"></ace-editor>\n<div ace-editor [text]=\"content\" class=\"aceEditorDirective\" mode=\"sql\"></div>\n<h2>Highlight</h2>\n<ace-editor #highlight [text]=\"content\" mode=\"sql\" style=\"min-height: 200px; width:100%; overflow: auto;\"></ace-editor>\n<h2>Auto update</h2>\n<ace-editor [(text)]=\"contentAutoUpdate\" mode=\"sql\" style=\"min-height: 200px; width:100%; overflow: auto;\"></ace-editor>\n<div ace-editor [(text)]=\"contentAutoUpdate\" mode=\"sql\" style=\"min-height: 200px; width:100%; overflow: auto;\"></div>\n<h1>Auto height</h1>\n<ace-editor #editorInfinity [text]=\"content\" [options]=\"{maxLines: 'Infinity'}\" style=\"min-height: 50px; width:100%;\"></ace-editor>\n<h1>NgModel</h1>\n<ace-editor [(text)]=\"myCode\" style=\"min-height: 200px; width:100%; overflow: auto;\"></ace-editor>\n<ace-editor [(text)]=\"myCode\" style=\"min-height: 200px; width:100%; overflow: auto;\"></ace-editor>\n", styles: [".aceEditorDirective {\n  margin-top: 50px;\n  min-height: 200px;\n  width: 100%;\n  overflow: auto;\n}\n"], dependencies: [{ kind: "component", type: i1.AceEditorComponent, selector: "ace-editor", inputs: ["style", "options", "readOnly", "theme", "mode", "value", "text", "autoUpdateContent", "durationBeforeCallback"], outputs: ["textChanged", "textChange"] }, { kind: "directive", type: i2.AceEditorDirective, selector: "[ace-editor]", inputs: ["options", "readOnly", "theme", "mode", "text", "autoUpdateContent", "durationBeforeCallback"], outputs: ["textChanged", "textChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AppComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-root', template: "<h1>\n  Sample\n</h1>\n<ace-editor #firstEditor [text]=\"content\" (textChanged)=\"onRuleChange($event)\" [autoUpdateContent]=\"true\" style=\"min-height: 200px; width:100%; overflow: auto;\"\n  mode=\"html\"></ace-editor>\n<div ace-editor [text]=\"content\" class=\"aceEditorDirective\" mode=\"sql\"></div>\n<h2>Highlight</h2>\n<ace-editor #highlight [text]=\"content\" mode=\"sql\" style=\"min-height: 200px; width:100%; overflow: auto;\"></ace-editor>\n<h2>Auto update</h2>\n<ace-editor [(text)]=\"contentAutoUpdate\" mode=\"sql\" style=\"min-height: 200px; width:100%; overflow: auto;\"></ace-editor>\n<div ace-editor [(text)]=\"contentAutoUpdate\" mode=\"sql\" style=\"min-height: 200px; width:100%; overflow: auto;\"></div>\n<h1>Auto height</h1>\n<ace-editor #editorInfinity [text]=\"content\" [options]=\"{maxLines: 'Infinity'}\" style=\"min-height: 50px; width:100%;\"></ace-editor>\n<h1>NgModel</h1>\n<ace-editor [(text)]=\"myCode\" style=\"min-height: 200px; width:100%; overflow: auto;\"></ace-editor>\n<ace-editor [(text)]=\"myCode\" style=\"min-height: 200px; width:100%; overflow: auto;\"></ace-editor>\n", styles: [".aceEditorDirective {\n  margin-top: 50px;\n  min-height: 200px;\n  width: 100%;\n  overflow: auto;\n}\n"] }]
        }], propDecorators: { highlight: [{
                type: ViewChild,
                args: ['highlight']
            }], editorInfinity: [{
                type: ViewChild,
                args: ['editorInfinity']
            }], firstEditor: [{
                type: ViewChild,
                args: ['firstEditor']
            }] } });
//# sourceMappingURL=app.component.js.map