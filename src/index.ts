
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

export default class FintuityEditor extends ClassicEditorBase {
    static builtinPlugins = [];
    static defaultConfig = {
        language: 'en'
    };
}
