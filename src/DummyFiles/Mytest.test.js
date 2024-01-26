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

/*
tool used : react-test-renderer module / TestRenderer
purpose: test snapshots and simulate render changes
implementation:
1.use Testrenderer to create a non browser render instance
2.convert to json, once in json array format used methods like map,find,filter to traverse nodes
3.once node has been retrieved use props to find properties or run methods
4.note once an method is rerun , it will rerender the Testrenderer create method must be used to create an updated reference
*/

//Testrenderer will create a non browser render
const listTestRenderer = TestRenderer.create(
  // eslint-disable-next-line react/react-in-jsx-scope
  <List />
);

const example = listTestRenderer.toJSON() //returns the json representation of the rendered tree;

console.log(example.find((t) => t.type === "button"))
// root will return the traversable instanct object, we can make assertions on this object
const testInstance = listTestRenderer.root;


expect(testInstance.findByType("button").props.className).toBe('btn');//findbytype exactly one instance
//console.log(element)

it("snap shot test", () => {
  //create a render of the list element
  const ListRendered = TestRenderer.create(
    <List />
  );

  //const listInstance = ListRendered.root;

  //get the json extract so we can perform snapshots and actions
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
