import {NodeElement} from "./node-element";

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
