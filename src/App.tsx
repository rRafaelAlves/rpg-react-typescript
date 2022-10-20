import { useEffect, useState } from "react";
import * as C from "./App.styles"
import Character from "./components/Character";
import { useCharacter } from './hooks/useCharacter'


function App() {

  const char = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])


  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e.code)
    switch (e.code) {

      case 'ArrowUp':
      case 'KeyW':
        char.moveUp()

        break;

      case 'ArrowDown':
      case 'KeyS':
        char.moveDown()

        break;

      case 'ArrowRight':
      case 'KeyD':
        char.moveRight()

        break;

      case 'ArrowLeft':
      case 'KeyA':
        char.moveLeft()

        break;


    }
  }




  return (
    <C.Container>

      <C.Map>

        <Character x={char.x} y={char.y} side={char.side} />
        <C.MessageController> <span className="commandMsg">Space</span> para interagir com o mapa</C.MessageController>
      </C.Map>

    </C.Container>
  );
}

export default App;
