const students = [
    {
        id: 1,
        name: "juick",
    },
    {
        id: 2,
        name: "Hwajun",
    },
    {
        id: 3,
        name: "Ducksu",
    },
    {
        id: 4,
        name: "Nuri",
    },    
];

export default function Attendance(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}