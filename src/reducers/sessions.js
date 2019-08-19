import { SET_SESSIONS } from "../constants";

const initialValues = {
    sessions: [],
};

export const sessions = (state = initialValues, action)=> {
    switch (action.type) {
        case SET_SESSIONS:
            const sortedArr = action.payload.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)) {
                    return 1;
                }
                if (new Date(a.date) < new Date(b.date)) {
                    return -1;
                }
                return 0;
            });
            console.log("sortedArr", sortedArr);

            const newArr = sortedArr.reduce((acc, item) => {
                if (!acc.length) {
                    acc.push([]);
                }
                const lastElem = acc[acc.length-1];
                const lastElemDate = lastElem.length ? lastElem[0].date.split("T")[0] : null;
                const itemDate = item.date.split("T")[0];
                const differentDates = +new Date(lastElemDate) !== +new Date(itemDate);

                if (lastElem.length && differentDates){
                    return [...acc, [item]];
                }

                acc[acc.length-1].push(item);
                return acc;
            }, []);

            return {
                ...state,
                sessions: newArr
            };
        default:
            return state;
    }
};
