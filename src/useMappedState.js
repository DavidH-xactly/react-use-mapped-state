import { useState } from "react";

/* 
Use a single map and create state for each item, keeping track of the state setter 
and the value to return to the component
*/
const convertToMap = data => {
  data = Array.isArray(data) ? data : Object.entries(data);
  const map = new Map();
  data.map(([key, val]) => {
    const [stateVal, stateSetter] = useState(val);
    map.set(key, { [key]: stateVal, stateSetter });
  });
  return map;
};

/* 
Takes in data in two forms standard object or [[key: value]] this allows quick map creation with objects
but also the flexibility to use abstract values as a key
*/
export const useMappedState = data => {
  //convert either array of arrays of key/value pairs or an object into a map
  const newMap = convertToMap(data);
  //Provide custom function for Modifying the map
  const modifyMappedState = (prop, val) => {
    const data = newMap.get(prop);
    const setter = data.stateSetter;
    setter(val);
  };
  /* 
  Current Limitation cannot send back abstract values in the object, could use Array but you can't 
  determine the order necessarily, because of how Object.entries works, its like .keys so what order can there really be for destructuring??? 
  */
  const returnValues = [...newMap.entries()].reduce(
    (values, [key, val]) => ({ ...values, [key]: val[key] }),
    {}
  );
  /*
  Return all the values from Map in an object so they can be de-structured off and used and our
  Custom map modifier
  */
  return [returnValues, modifyMappedState];
};
