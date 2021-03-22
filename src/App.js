import React, { Component } from 'react'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css';

const app = new Clarifai.App({
  apiKey: `${process.env.CLIENT_SECRET}`
});

console.log(app)

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value);

  }

  onButonSubmit = () => {
    console.log('click')
    app.models.predict('a403429f2ddf4b49b307e318f00e528b', "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {
        console.log(response)
      },
      err => {
      }
    )
  }

  render() {
    return (
      <div className="App" >
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButonSubmit={this.onButonSubmit}
        />
        {/*<FaceRecognition/>*/}
      </div>
    );
  }
}

export default App;