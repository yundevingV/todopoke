export const ADD = "ADD"

export const add = (name,score,datetype) => {
    return {
        type: ADD,
        name,
        score,
        datetype
    }
}

// 초기값 설정
const initialState = {
    list : [
        {
            name : '',
            score : '',
            datetype : ''
        }
    ]
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return {
                list : [...state.list ,
                    {
                        name : action.name,
                        score : action.score,
                        datetype : action.datetype
                    }
                ]
            };
        
        default:
            return state;
    }
}