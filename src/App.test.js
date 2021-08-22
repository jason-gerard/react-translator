import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("translatePhrase", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.translatePhrase({ lang: -10, phrase: "I'll reboot the neural SMTP pixel, that should transmitter the SDD monitor!" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.translatePhrase({ lang: "en", phrase: -10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.translatePhrase({ lang: -1, phrase: -10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.translatePhrase({ lang: 0.0, phrase: "Use the redundant AI protocol, then you can quantify the haptic pixel!" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.translatePhrase({ lang: 0, phrase: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.translatePhrase({ lang: Infinity, phrase: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
