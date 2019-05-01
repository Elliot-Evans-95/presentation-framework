import {DocumentWrapper} from "./document-wrapper";

describe('Given a new instance of "DocumentWrapper" is made', () => {
    let mockDocumentWrapper: DocumentWrapper;

    beforeAll(() => mockDocumentWrapper = new DocumentWrapper(document));

    test('Then the title can be set', () => {
        mockDocumentWrapper.title = 'test title';

        expect( (mockDocumentWrapper as any).document.title).toEqual('test title');
    });

});
