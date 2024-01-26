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

import List, { returnDataset } from "./Lists";
import TestRenderer from 'react-test-renderer'; // ES6
import * as utils from "./Pages/Helpers/Utilities";
import App from "./App";


let container = null;
let root;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
});

it("snap shot test", async () => {
    const spy = jest.spyOn(utils, 'UpdateAccount');
    root = createRoot(container);//ReactDOM.Render is no longer support
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        root.render(<App />);
    });

    let listJson = ListRendered.toJSON();

    //create snapshot here
    expect(listJson).toMatchSnapshot();

    //extract the button child from the List element rendered
    // not that when we do this we isolate it to this particular instance
    let buttontree = listJson.find((t) => t.type === "button")



    //execute the onclick method, this should trigger a rerenderd
    TestRenderer.act(() => {
        buttontree.props.onClick()
        console.log("first click");
    })

    //make another snapshot and observe the change,the previous button is no longer referenced
    listJson = ListRendered.toJSON();

    expect(listJson).toMatchSnapshot();

    //We extract button again, it seems it has re rendered
    buttontree = listJson.find((t) => t.type === "button")
    TestRenderer.act(() => {
        buttontree.props.onClick()

        console.log("second click");
    })
    //make another snapshot and observe the change
    listJson = ListRendered.toJSON();

    expect(listJson).toMatchSnapshot();
})


/* 
it('changes the class when hovered', () => {
    const component = renderer.create(
      <List/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    renderer.act(() => {
      tree.props.onMouseEnter();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    renderer.act(() => {
      tree.props.onMouseLeave();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
 */
