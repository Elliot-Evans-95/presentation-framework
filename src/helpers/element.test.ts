import {DocumentWrapper, NodeElement, ShellElement} from "./element";

describe('Given a new instance of "ShellElement" is made', () => {
    let mockShellElement: ShellElement;

    beforeAll(() => mockShellElement = new ShellElement('button'));

    test('Then the element can be returned', () => {
        expect(mockShellElement.element).toEqual(document.createElement('button'));
    });

    test('Then the innerHTML can be set', () => {
        mockShellElement.innerHTML = 'test123';

        expect(mockShellElement.element.innerHTML).toEqual('test123');
    });

    test('Then the class name can be set', () => {
        const mockTest = document.createElement('test');
        mockTest.classList.add('classOne');

        mockShellElement.addClassName = 'classOne';

        expect(mockShellElement.element.classList).toEqual(mockTest.classList);
    });

    test('Then the class name can be removed', () => {
        const mockTest = document.createElement('test');

        mockShellElement.addClassName = 'classOne';
        mockShellElement.removeClassName = 'classOne';

        expect(mockShellElement.element.classList).toEqual(mockTest.classList);
    });

    test('Then an event listener can be added', () => {
        const eventListenerSpy = spyOn(mockShellElement, 'addEventListener');

        mockShellElement.addEventListener('click');

        mockShellElement.element.click();

        expect(eventListenerSpy).toHaveBeenCalled();
    });

});

describe('Given a new instance of "NodeElement" is made', () => {
    let mockNodeElement: NodeElement;

    beforeAll(() => mockNodeElement = new NodeElement('div'));

    test('Then the element can be returned', () => {
        expect(mockNodeElement.element).toEqual(document.createElement('div'));
    });

    test('Then the style can be set', () => {
        mockNodeElement.style = '.test { background: red }';

        expect(mockNodeElement.element.textContent).toEqual('.test { background: red }');
    });

});

describe('Given a new instance of "DocumentWrapper" is made', () => {
    let mockDocumentWrapper: DocumentWrapper;

    beforeAll(() => mockDocumentWrapper = new DocumentWrapper(document));

    test('Then the title can be set', () => {
        mockDocumentWrapper.title = 'test title';

        expect( (mockDocumentWrapper as any).document.title).toEqual('test title');
    });

});
