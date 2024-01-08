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
]

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