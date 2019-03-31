const types: string[] = [];

export interface ActionType {
  FETCHING: string;
  SUCCESS: string;
  FAILURE: string;
}

export const actionType = (action: string): ActionType => {
  const actionType = action.toUpperCase();

  if (types.includes(actionType)) {
    throw new Error(`ActionType "${actionType}" already exists`);
  }

  types.push(action);

  return {
    SUCCESS: `${actionType}_SUCCESS`,
    FAILURE: `${actionType}_FAILURE`,
    FETCHING: `${actionType}_FETCHING`
  };
};
