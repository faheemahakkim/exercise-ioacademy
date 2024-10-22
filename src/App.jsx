import Nav from "./Components/Nav"
import "./App.css"
import TrainersOverview from "./Components/TrainerOverview"
import CoursesOverview from "./Components/CoursesOverview"
function App(){
  return(
    <div>
      <header>
        <h1>Welcome to io Academy</h1>
           </header>
           <Nav/>
           <TrainersOverview/>
           <CoursesOverview/>
           
    </div>

  )
}

export default App