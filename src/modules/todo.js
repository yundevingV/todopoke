export const ADD = "ADD"

export const add = (target,score,datetype) => {
    return {
        type: ADD,
        target,
        score,
        datetype
    }
}

// 초기값 설정
const initialState = {
    list : [
        {
            target : '',
            score : '',
            datetype : ''
        }
    ]
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case ADD:
            if (action.target && action.score ){
                return {
                    list : [...state.list ,
                        {
                            target : action.target,
                            score : action.score,
                            datetype : action.datetype
                        }
                    ]
                }
            }
            else {
                if (!action.target){
                    alert('목표를 정해주셔야합니다 ! ')
                    return state;
                }
                
                if(!action.score){
                    alert('점수를 정해주셔야합니다 ! ')
                    return state;
                }
                return state;
            }
            ;
        
        default:
            return state;
    }
}