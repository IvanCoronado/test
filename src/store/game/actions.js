import * as ACTIONS from "./constants";

export const updateGame = ({ matches }) => ({
    type: ACTIONS.UPDATE_GAME,
    payload: { matches },
})