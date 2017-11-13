# bind-redux-actions-to-constants
Small utility to bind redux actions to constants.


in `example/constants.js`
```
const constants = {
  GENERATE_BAZ: 'USER/GENERATE_BAZ',
  GENERATE_HELLO_WORLD: 'EXAMPLE/GENERATE_HELLO_WORLD'
};
```

in `example/actions.js`
```
// Create some actions
// ===========================
const generateBaz = ({ foo, bar }) => ({
  baz: `${foo} says: ${bar}`,
});

const generateHelloWorld = (hello, world) => ({
  hello: `${hello} ${world}`,
});

// Collection of actions
// ===========================
const myActions = {
  generateBaz,
};

// Bind actions to constants.
// ===========================
const ExampleActions = bindActionsToConstants({
  constants,
  actions,
});

// Export the actions
// ===========================
export default ExampleActions;
```
