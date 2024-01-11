import Guide from "./Guide";

const mainArr = ["사과", "배", "포도", "오렌지", "복숭아"]

const arrData = [
    {
        title: "push(item)",
        detail: "배열의 끝에 item을 추가합니다.",
        result: () => {
            const newArr = [...mainArr];
            newArr.push("자두");
            return newArr;
        },
    },
    {
        title: "pop()",
        detail: "배열의 마지막 요소를 제거하고 해당 요소를 반환합니다.",
        result: () => {
            const newArr = [...mainArr];
            const removedItem = newArr.pop();
            return { newArr, removedItem };
        },
    },
    {
        title: "shift()",
        detail: "배열의 첫 번째 요소를 제거하고 해당 요소를 반환합니다.",
        result: () => {
            const newArr = [...mainArr];
            const shiftedItem = newArr.shift();
            return { newArr, shiftedItem };
        },
    },
    {
        title: "unshift(item)",
        detail: "배열의 맨 앞에 item을 추가합니다.",
        result: () => {
            const newArr = [...mainArr];
            newArr.unshift("체리");
            return newArr;
        },
    },
    {
        title: "splice(start, deleteCount, item1, item2, ...)",
        detail: "배열의 특정 위치에서 요소를 추가하거나 제거합니다.",
        result: () => {
            const newArr = [...mainArr];
            newArr.splice(2, 0, "키위", "망고");
            return newArr;
        },
    },
];

export default function ArrGuide() {
    return (
        <>
            <h3>
                [{mainArr.map((item,index) => index === mainArr.length - 1? item : item + ", ")}]
            </h3>
            <ul
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                }}
            >
            {arrData.map((item,index) => (
                <Guide
                    key = {index}
                    title = {item.title}
                    detail = {item.detail}
                    result = {item.result}
                />
            ))}
            </ul>
        </>
    )
}