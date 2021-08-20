import {useState} from 'react'
import { Tabs } from 'antd'
import './App.css'

const { TabPane } = Tabs

function App() {
  const [section, setSection] = useState('ch4')
  return (
    <div className='App'>
      <p style={{paddingTop:'1em'}}>Exercises for <a href="https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/" target="_blank" rel="noreferrer">https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/</a></p>
      <Tabs defaultActiveKey={section} onChange={setSection}>
        <TabPane tab="Chapter 1" key="ch1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Chapter 2" key="ch2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Chapter 3" key="ch3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Chapter 4" key="ch4">
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
    </div>
  )
}

export default App
