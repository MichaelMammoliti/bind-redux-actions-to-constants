const bindActionsToConstants = config => {
  if (!config) {
    console.error(`no config passed to bindActionsToConstants, returning an empty object, ${config}`);
    
    return {};
  }
  
  const { constants, actions } = config;
  
  if (!constants || !actions) {
    console.error(`configuration object not valid, missing "constants" or "actions".`, config, `Returning empty object.`);
    
    return {};
  }
  
  return Object.keys(actions).reduce((acc, keyName) => {
    const actionName = (keyName.replace(/[A-Z]/g, char => `_${char}`)).toUpperCase();
    const actionType = constants[actionName];
    
    if (!actionType) {
      console.warn(`"${actionName}" has not been found inside your constants. Skipping.`, constants);
      
      return acc;
    }
    
    const fn = (...args) => ({
      type: actionType,
      payload: { ...actions[keyName](...args) }
    });
    
    return { ...acc, [keyName]: fn };
  }, {});
};

export default bindActionsToConstants;
