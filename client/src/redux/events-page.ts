import {BaseThunkType, InferActionsTypes} from './redux-store'
import {eventsAPI} from "../api/events-api";

const initialState : {events: EventDataType[]} = {
    events: [],
}

export const eventDataReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ButInProject/event-page/SET-EVENT-DATA":
            return {
                ...state,
                events: [...action.events]
            }
        default:
            return state
    }
}

export const eventsActions = {
    setEvents: (events: []) => ({
        type: "ButInProject/event-page/SET-EVENT-DATA",
        events
    } as const),
}

export const sendResponseEventAdminThunk = (eventId: string, response: boolean):ThunkType => async (dispatch) => {
    await eventsAPI.sendResponseEventAdmin(eventId, response)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof eventsActions>
type ThunkType = BaseThunkType<ActionsType>
type EventDataType = {
    id: string,
    city: string | null,
    address: string | null,
    institution: string | null,
    type: string,
    name: string,
    fullName: string | null,
    playground: string | null,
    gameType: string | null,
    userTeam: string | null,
    VS: string | null,
    enemyTeam: string | null,
    date: string | null,
    leader: string | null
}