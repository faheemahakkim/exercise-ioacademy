import Course from "../Course"
import "./CoursesOverview.css"

function CoursesOverview(){
    return (
        <div className="example">
    <Course 
     CourseTitle="Software"
      
     Duration= "2months"
      Inperson= "no"
  Startdate= "Sep"
  />
  <Course
  CourseTitle="IT"

     Duration= "3months"
      Inperson= "no"
  Startdate= "June"
  />
  <Course
  CourseTitle="Full stack Developer"

     Duration= "6months"
      Inperson= "no"
  Startdate= "Aug"
  />
  <Course
  CourseTitle="DevOps"

     Duration= "8months"
      Inperson= "no"
  Startdate= "Sep"
  />

     </div>  
    )
}
export default CoursesOverview