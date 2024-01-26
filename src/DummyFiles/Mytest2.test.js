/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable semi */
/* eslint-disable curly */
/* eslint-disable array-callback-return */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import React from "react";
import List from "./Lists";
import { createRoot } from "react-dom/client"
import { act } from "react-dom/test-utils";
import * as utils from "./utilities";

/*
modules andtool used :
react-dom/test-utils/ -- act ,
react-dom/client/ -- createRoot 
react-dom/ -- unmountComponentAtNode
purpose:  Spy on an implementation with it actually mounted to a dom
implementation:
1.Set up beforEach and afterEach test run .
2.For beforeEach create the container element and attach to DOM .
3.For afterEach we will be unmounting DOM element which the react component is mounted to .
4.We can create a spy for a method, in a seperate module .
5.We transform our containing into a React root, prepping it for then .
6.Then we use the createRoot method to to create a Root out of the previously created container .
7.We use the act method to initate a Render and other UI actions .
 */

let container = null;
let root;
beforeEach(() => {
    // setup a DOM element as a render target

    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    // root.unmount();
    // unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders list item", async () => {
    const fakeItems = ["111", "222"];
    //jest.spyOn(global, "returnDataset").
    //const component = shallow(<List />);
    const spy = jest.spyOn(utils, 'returnDataset');
    /*
.mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeItems)
        })
    )
    */
    root = createRoot(container);//ReactDOM.Render is no longer support
    // Use the asynchronous version of act to apply resolved promises

    await act(async () => {
        root.render(<List />);
    });


    const button = document.querySelector("[data-testid=btntest]");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    //console.log(document.querySelector("li"))
    expect(document.querySelectorAll("li")[0].textContent).toBe(fakeItems[0]);

    spy.mockRestore();
    //root.unmount();
});
