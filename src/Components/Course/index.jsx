function Course({CourseTitle,Duration,Inperson,Startdate}) {
    return(
        <div>
    <h3>{CourseTitle}</h3>
    <ul>
        <li>{Duration}</li>
        <li>{Inperson}</li>
        <li>{Startdate}</li>
    </ul>
</div>
    )
}
export default Course