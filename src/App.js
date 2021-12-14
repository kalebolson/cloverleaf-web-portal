import './App.css';
import {useState} from 'react'
import Divider from './components/Divider.jsx'
import Header from './components/Header.jsx'
import FixedListComboBox from './components/FixedListComboBox.jsx'
import Welcome from './components/Welcome'
import ProjectDetails from './components/ProjectDetails'
import FileContainer from './components/FileContainer'

function App() {

  //placeholder data, replace all of this with a call to the back end
  const clientName = "Kaleb"
  const projects = ["first project", "new album", "music video"]
  const fileplaceholder = [
    { 
      'title': 'song 1',
      'stage': 'mix',
      'status': 'Needs Re-Recording',
      'notes': ''
    },
    { 
      'title': 'song 2',
      'stage': 'mix',
      'status': 'Accepted',
      'notes': 'Thanks!!'
    },
    { 
      'title': 'song 3',
      'stage': 'mastering',
      'status': 'Needs Archiving',
      'notes': ''
    }
  ]
  const [project, setProject] = useState('first project')
  const [files, setFiles] = useState(fileplaceholder)

  function changeProject(event) {
    setProject(event.target.value)
    console.log(project)
  }

  return (
    <div className="App">
      <Header />
      <Divider />
      <Welcome clientName={clientName}/>
      <FixedListComboBox projectList={projects} selected={project} onChangeProject={changeProject}/>
      <Divider />
      <ProjectDetails />
      <Divider />
      <FileContainer />
    </div>
  );
}

export default App;
