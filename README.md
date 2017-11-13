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
import constants from './constants.js';
```

2. Create some actions.
```
const generateBaz = ({ foo, bar }) => ({
  baz: `${foo} says: ${bar}`,
});

const generateHelloWorld = (hello, world) => ({
  hello: `${hello} ${world}`,
});
```

3. Create an object of actions.
```
const actions = {
  generateBaz,
  generateHelloWorld,
};
```

4. Finally we bind the actions to constants and we can export the module.
```
const ExampleActions = bindActionsToConstants({
  constants,
  actions,
});

export default ExampleActions;
```
