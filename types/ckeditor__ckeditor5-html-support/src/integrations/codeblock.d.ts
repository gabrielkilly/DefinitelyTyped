import { Plugin } from '@ckeditor/ckeditor5-core';
import DataFilter from '../datafilter';

export default class CodeBlockHtmlSupport extends Plugin {
    static readonly requires: [typeof DataFilter];
    init(): void;
}
