import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Tile from './Tile'
import Header from './Header'
import Prevention from './Prevention'
import Anxiety from './Anxiety'
import Depression from './Depression'

// import Whale from './Whale'

const App = () => {
  return (
    <Router>
      <div>

        {/* header */}
        <div className='container'>
          <Route exact path="/" render={
            () => {
              return (<Header title="Embracing Blue !!!" />)
            }
          } />
        </div>

          {/* Anxiety */}
        <div className="resources">
          <Route path = "/"   component = {Anxiety} />
        </div>

          {/* Depression */}
          <div className="resources">
          <Route path = "/"   component = {Depression} />
        </div>

          {/* Prevention */}
          <div className="resources">
          <Route path = "/"   component = {Prevention} />
        </div>

        {/* this whale is responsive and hardcoded; this is not calling a component */}
  
        <div>
          <img className="u-full-width" src="backgrounds/1.png"/>
        </div>

        {/* this is where we're trying to get the 3 colums to render, still not working but currently slightly aligned  */}
  
        <div className='container'>
          <div class="row">
            <div class="twelve columns">
              <div class="six columns offset-by-five">
                  <h1>3</h1>
                  <h1>3</h1>
                  <h1>3</h1>
                </div>
              </div>
          </div>      
        </div>

        {/* priya's original tiles/links: */}

        <div>
          <Tile src="images/pexels-photo-697243.jpeg" linkText="Young" />
          <Tile src="images/pexels-photo-842548.jpeg" linkText="Men" />
          <Tile src="images/pexels-photo-939702.jpeg" linkText="Women" />
        </div>

        <div>
          <Tile src="images/pexels-photo-697243.jpeg" linkText="Old" />
          <Tile src="images/pexels-photo-842548.jpeg" linkText="LGBT" />
          <Tile src="images/pexels-photo-939702.jpeg" linkText="Multicultural" />
        </div>

      </div>
    </Router>
  )
}

export default App
