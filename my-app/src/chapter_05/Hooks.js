import { useCallback, useEffect, useMemo } from "react"

export default function Hooks() {
    // Hook은 무조건 최상위 레벨에서만 호출
    // 리액트 함수 컴포넌트에서만 Hook을 호출

    const memoizedValue = useMemo(
        () => {
            // 연산량이 높은 작업을 수행하여 결과를 반한
            return computeExpensiveValue(의존성변수1, 의존성변수2);
        },
        [의존성변수1, 의존성변수2]
    );

    const memoiedCallback = useCallback(
        () => {
            doSomething(의존성변수1, 의존성변수2);
        },
        [의존성변수1, 의존성변수2]
    );

    // 두 개는 동일한 역할
    useCallback(함수, 의존성배열);
    useMemo(() => 함수, 의존성배열);

    useEffect(() => {
        // 컴포넌트가 마운트 된 이후,
        // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 경우,
        // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트 시에 단 한 번씩만
        // 의존성 배열 생락 시 컴포넌트 업데이트 시 마다

        return () => {
            // 컴포넌트가 마운트 해제되기 전에 실행됨
        }
    }, [의존성변수1, 의존성변수2]);

    return (
        <>
            
        </>
    )
}