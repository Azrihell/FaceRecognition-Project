import React from 'react'
import './App.css'
import ParticlesBg from 'particles-bg'
import { Navigation } from './components/Nav/Navigation'
import { Logo } from './components/Logo/Logo'
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm'
import { Rank } from './components/Rank/Rank'
import { FaceRecognition } from './components/FaceRecognition/FaceRecognition'

export const App = () => {
  const [input, setInput] = React.useState<string>('')
  const [imageUrl, setImageUrl] = React.useState<string>('')

  React.useEffect(() => {
    console.log("NEW IMAGE ADDED")
  }, [input]);

  const onButtonSubmit = () => {

    setImageUrl(input)

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": imageUrl
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + '64e7800599d34839bae1043eed95cde5',
        'Content-Type': 'application/json'
      },
      body: raw
    };

    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/b8fa05a04e0649a1a9d3186b246a59b3/outputs`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }


  return (

    <div className='App'>
      <ParticlesBg type="square" num={15} bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={setInput} onButtonSubmit={onButtonSubmit} />
      <FaceRecognition imageUrl={input} />

    </div>
  )
}
