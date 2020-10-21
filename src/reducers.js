const LOAD_DATA = "LOAD_DATA"

export function loadData(data) {
    return {
        type: LOAD_DATA,
        data: data
    }
}


const LOGIN_DIALOG = "LOGIN_DIALOG"

export function setOpen(open) {
    return {
        type: LOGIN_DIALOG,
        data: open
    }
}

const LOGIN = "LOGIN"

export function login(data) {
    return {
        type: LOGIN,
        data: data
    }
}

const initialData = {
    rows: []
}

const initialApp = {
    isLogged: false,
    isLoginDialogOpen: false
}

export function dataReducer(state = initialData, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                rows: action.data
            }

        default:
            return {...state}
    }
}

export function appReducer(state = initialApp, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogged: action.data
            }
        case LOGIN_DIALOG:
            return {
                ...state,
                isLoginDialogOpen: action.data
            }
        default:
            return {...state}
    }
}
