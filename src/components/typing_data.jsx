
import React from 'react'
import { useTypewriter ,Cursor} from 'react-simple-typewriter'

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ['Passionate' ,'About', 'Changing', 'The' ,'World','With' ,'Technology.'],
    loop: {},
    typeSpeed:120,
    deleteSpeed:80,
    Cursor:'<',
    Cursorcolor:'red',
  })

  return (
    <h1><span style={{color:'white'}}>
     {text}      
      </span>
      <span><Cursor cursorStyle="<" cursorColor='red'/></span>
      </h1>
  )
}
export default  MyComponent;