import { createElement } from 'lwc';
import Counter from 'c/counter';

describe('c-counter', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Check hello world', () => {
        const element = createElement('c-counter', {
            is: Counter
        });
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector('div');

        expect(div.textContent).toBe('Hello, World!');
    });

    it('Check hello world 2', () => {
        const element = createElement('c-counter', {
            is: Counter
        });
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector('div');

        expect(div.textContent).toBe('Hello, World!');
    });
});