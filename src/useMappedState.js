import { useState } from "react";

const convertToMap = data =>
  Array.isArray(data) ? new Map(data) : new Map([...Object.entries(data)]);

/* Takes in data in two forms standard object or [[key: value]] this allows quick map creation with pbjects
but also the flexibility to use abstract values as a key
*/
export const useMappedState = data => {
  //convert either array of arrays of key/value pairs or an object into a map
  const newMap = convertToMap(data);
  //Use react hook to manage state
  const [mappedState, setMappedState] = useState(newMap);
  //Provide custom function for Modifying the map
  const modifyMappedState = (prop, val) => {
    //:( we have to create a New Map each time -- not ideal
    const newMap = new Map([...mappedState.entries()]);
    //modify value in map
    newMap.set(prop, val);
    //Reset state and trigger re-render
    setMappedState(newMap);
  };
  const returnValues = [...mappedState.entries()].reduce(
    (values, [key, val]) => ({ ...values, [key]: val }),
    {}
  );
  //Return all the values from Map in an object so they can be destructured off and used and our
  //Custom map modifier
  return [{ ...returnValues }, modifyMappedState];
};
