import * as ACTIONS from "./constants";
const temporalGame = {
    gameComplete: false,
    t: undefined,
    gameId: '',
    matchId: '',
    generatedName: '',
    realm: '',
    teamStats: {},
    playerStats: {
        1: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
        2: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
        3: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
        4: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
        5: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
        6: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
        7: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
        8: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
        9: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
        10: {
            runes: [],
            masteries: [],
            skills: [],
            items: [],
        },
    }
};
const GAME_DEFAULT_STATE = {
   order: [],
   byId: {}
};

export function gameReducer(state = GAME_DEFAULT_STATE, action) {
  switch (action.type) {
      case ACTIONS.UPDATE_GAME: {
          const {order: currentOrder, byId: currentById} = state;
          const {matches} = action.payload;

          const {order, byId} = insertMultipleOrdered(
              matches,
              currentOrder,
              currentById
          );
          return {
              ...state,
              order,
              byId
          };
      }
    default:
      return state;
  }
}

const reduceMatch = (state, game) => ({
    ...state,
    ...game,
    teamStats: {
        100: {
            ...(state && state.teamStats ? state.teamStats[100] : {}),
            ...(game && game.teamStats ? game.teamStats[100] : {})
        },
        200: {
            ...(state && state.teamStats ? state.teamStats[200] : {}),
            ...(game && game.teamStats ? game.teamStats[200]: {})
        }
    },
    playerStats: {
        1: {
            ...((state && state.playerStats && state.playerStats[1]) || {}),
            ...((game && game.playerStats && game.playerStats[1]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[1].runes) || {}),
                ...((game && game.playerStats && game.playerStats[1] && game.playerStats[1].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[1].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[1] && game.playerStats[1].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[1].skills) || {}),
                ...((game && game.playerStats && game.playerStats[1] && game.playerStats[1].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[1] && game.playerStats[1].items) || ((state && state.playerStats && state.playerStats[1].items) || {})),
            ],
        },
        2: {
            ...((state && state.playerStats && state.playerStats[2]) || {}),
            ...((game && game.playerStats && game.playerStats[2]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[2].runes) || {}),
                ...((game && game.playerStats && game.playerStats[2] && game.playerStats[2].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[2].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[2] && game.playerStats[2].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[2].skills) || {}),
                ...((game && game.playerStats && game.playerStats[2] && game.playerStats[2].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[2] && game.playerStats[2].items) || ((state && state.playerStats && state.playerStats[2].items) || {})),
            ],
        },
        3: {
            ...((state && state.playerStats && state.playerStats[3]) || {}),
            ...((game && game.playerStats && game.playerStats[3]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[3].runes) || {}),
                ...((game && game.playerStats && game.playerStats[3] && game.playerStats[3].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[3].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[3] && game.playerStats[3].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[3].skills) || {}),
                ...((game && game.playerStats && game.playerStats[3] && game.playerStats[3].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[1] && game.playerStats[1].items) || ((state && state.playerStats && state.playerStats[1].items) || {})),
            ],
        },
        4: {
            ...((state && state.playerStats && state.playerStats[4]) || {}),
            ...((game && game.playerStats && game.playerStats[4]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[4].runes) || {}),
                ...((game && game.playerStats && game.playerStats[4] && game.playerStats[4].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[4].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[4] && game.playerStats[4].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[4].skills) || {}),
                ...((game && game.playerStats && game.playerStats[4] && game.playerStats[4].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[4] && game.playerStats[4].items) || ((state && state.playerStats && state.playerStats[4].items) || {})),
            ],
        },
        5: {
            ...((state && state.playerStats && state.playerStats[5]) || {}),
            ...((game && game.playerStats && game.playerStats[5]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[5].runes) || {}),
                ...((game && game.playerStats && game.playerStats[5] && game.playerStats[5].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[5].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[5] && game.playerStats[5].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[5].skills) || {}),
                ...((game && game.playerStats && game.playerStats[5] && game.playerStats[5].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[5] && game.playerStats[5].items) || ((state && state.playerStats && state.playerStats[5].items) || {})),
            ],
        },
        6: {
            ...((state && state.playerStats && state.playerStats[6]) || {}),
            ...((game && game.playerStats && game.playerStats[6]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[6].runes) || {}),
                ...((game && game.playerStats && game.playerStats[6] && game.playerStats[6].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[6].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[6] && game.playerStats[6].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[6].skills) || {}),
                ...((game && game.playerStats && game.playerStats[6] && game.playerStats[6].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[6] && game.playerStats[6].items) || ((state && state.playerStats && state.playerStats[6].items) || {})),
            ],
        },
        7: {
            ...((state && state.playerStats && state.playerStats[7]) || {}),
            ...((game && game.playerStats && game.playerStats[7]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[7].runes) || {}),
                ...((game && game.playerStats && game.playerStats[7] && game.playerStats[7].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[7].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[7] && game.playerStats[7].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[7].skills) || {}),
                ...((game && game.playerStats && game.playerStats[7] && game.playerStats[7].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[7] && game.playerStats[7].items) || ((state && state.playerStats && state.playerStats[7].items) || {})),
            ],
        },
        8: {
            ...((state && state.playerStats && state.playerStats[8]) || {}),
            ...((game && game.playerStats && game.playerStats[8]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[8].runes) || {}),
                ...((game && game.playerStats && game.playerStats[8] && game.playerStats[8].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[8].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[8] && game.playerStats[8].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[8].skills) || {}),
                ...((game && game.playerStats && game.playerStats[8] && game.playerStats[8].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[8] && game.playerStats[8].items) || ((state && state.playerStats && state.playerStats[8].items) || {})),
            ],
        },
        9: {
            ...((state && state.playerStats && state.playerStats[9]) || {}),
            ...((game && game.playerStats && game.playerStats[9]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[9].runes) || {}),
                ...((game && game.playerStats && game.playerStats[9] && game.playerStats[9].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[9].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[9] && game.playerStats[9].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[9].skills) || {}),
                ...((game && game.playerStats && game.playerStats[9] && game.playerStats[9].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[9] && game.playerStats[9].items) || ((state && state.playerStats && state.playerStats[9].items) || {})),
            ],
        },
        10: {
            ...((state && state.playerStats && state.playerStats[10]) || {}),
            ...((game && game.playerStats && game.playerStats[10]) || {}),
            runes: [
                ...((state && state.playerStats && state.playerStats[10].runes) || {}),
                ...((game && game.playerStats && game.playerStats[10] && game.playerStats[10].runes) || {}),
            ],
            masteries: [
                ...((state && state.playerStats && state.playerStats[10].masteries) || {}),
                ...((game && game.playerStats && game.playerStats[10] && game.playerStats[10].masteries) || {}),
            ],
            skills: [
                ...((state && state.playerStats && state.playerStats[10].skills) || {}),
                ...((game && game.playerStats && game.playerStats[10] && game.playerStats[10].skills) || {}),
            ],
            items: [
                ...((game && game.playerStats && game.playerStats[10] && game.playerStats[10].items) || ((state && state.playerStats && state.playerStats[10].items) || {})),
            ],
        },
    }
})


export function insertOrdered(
    object,
    currentOrder,
    currentById,
) {
    const order = currentOrder.find((idx) => idx === object.socketId)
        ? [...currentOrder]
        : [...currentOrder, object.socketId];
    const byId = {
        ...currentById,
        [object.socketId]: reduceMatch(currentById[object.socketId], object)
    };
    return { order, byId };
}

export function insertMultipleOrdered(
    objects,
    currentOrder,
    currentById,
) {
    return objects.reduce(
        ({ order, byId }, currentValue) =>
            insertOrdered(currentValue, order, byId),
        {
            order: currentOrder,
            byId: currentById
        }
    );
}