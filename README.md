# bind-redux-actions-to-constants
Small utility to bind redux actions to constants.


# Constants
in `example/constants.js`
```
const constants = {
  GENERATE_BAZ: 'USER/GENERATE_BAZ',
  GENERATE_HELLO_WORLD: 'EXAMPLE/GENERATE_HELLO_WORLD'
};
```

# Actions
An actions is just a function which returns a payload. 
The `type` will be added autoatically.

in `example/actions.js`
```
// import the constants
import constants from './constants.js';

// Create some actions
const generateBaz = ({ foo, bar }) => ({
  baz: `${foo} says: ${bar}`,
});

const generateHelloWorld = (hello, world) => ({
  hello: `${hello} ${world}`,
});

// Collection of actions
const actions = {
  generateBaz,
};

// Finally we bind the actions to constants.
const ExampleActions = bindActionsToConstants({
  constants,
  actions,
});

// Export the actions
// ===========================
export default ExampleActions;
```
