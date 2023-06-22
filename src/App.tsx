import React from 'react'
import './App.css'
import ParticlesBg from 'particles-bg'
import { Navigation } from './components/Nav/Navigation'
import { Signin } from './components/Signin/Signin'
import { Logo } from './components/Logo/Logo'
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm'
import { Rank } from './components/Rank/Rank'
import { FaceRecognition } from './components/FaceRecognition/FaceRecognition'

export const App = () => {
  const [input, setInput] = React.useState<string>('')
  const [box, setBox] = React.useState<any>({})

  const calcFaceLocation = (data: any) => {
    // Always check to make sure data is a valid object
    if (data) {

      console.group("data", data.outputs)
      const clarifaiFace = data?.outputs[0]?.data?.regions[0]?.region_info?.bounding_box

      // verify that clarifaiFace resolved correctly
      if (clarifaiFace) {
        console.log("clarifaiFace", clarifaiFace)
        const image: HTMLElement | null = document.getElementById('inputimage')
        const width = Number(image?.offsetWidth) || 0
        const height = Number(image?.offsetHeight) || 0

        setBox({
          border: "1px solid red",
          left: `${(clarifaiFace.left_col * width).toFixed(0)}px`,
          top: `${(clarifaiFace.top_row * height).toFixed(0)}px`,
          right: `${(width - (clarifaiFace.right_col * width)).toFixed(0)}px`,
          bottom: `${(height - (clarifaiFace.bottom_row * height)).toFixed(0)}px`
        })
      }
    }
  }

  const onButtonSubmit = async () => {
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": input
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


    const response = await fetch(`https://api.clarifai.com/v2/models/face-detection/versions/b8fa05a04e0649a1a9d3186b246a59b3/outputs`, requestOptions)
    const result = await response.text()
    calcFaceLocation(JSON.parse(result))
  }


  return (

    <div className='App'>
      <ParticlesBg type="square" num={15} bg={true} />
      <Navigation />

      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={setInput} onButtonSubmit={onButtonSubmit} />
      <FaceRecognition box={box} imageUrl={input} />

    </div>
  )
}
