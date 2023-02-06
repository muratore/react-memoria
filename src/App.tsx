import { useEffect, useState } from "react";
import logo from "./assets/devmemory_logo.png";
import icon from "./svgs/restart.svg";
import * as style from "./App.style";

import { InfoItem } from "./components/InfoItems";
import { Button } from "./components/Button";
import { GridItemType } from "./types/GridItemType";
import {Items} from './data/Items'
import { GridItem } from "./components/GridItem";
import { SetTimerGame } from "./helpers/SetTimerGame";

function App() {
const [playing, setPlaying] = useState<boolean>(false);
const [timeElapsed, setTimeElapsed] = useState<number>(0);
const [moveCount, setMoveCount] = useState<number>(0);
const [showCount, setShowCount] = useState<number>(0);
const [gridItems, setGridItems] = useState<GridItemType[]>([]);


  useEffect(() => resetAndCreateGrid(), []);

  useEffect(()=> {
    const timer = setInterval(()=>{
      if(playing) setTimeElapsed(timeElapsed + 1)}, 1000);
     return ()=> clearInterval(timer);

  }, [playing, timeElapsed])

  // veify if show are equal
  useEffect(()=>{
    if (showCount === 2 ) {
      let opened = gridItems.filter(item => item.shown === true)
      if (opened.length === 2) {
        
        if (opened[0].item === opened[1].item) {
           // verify if both are equal 
           let tmpGrid = [...gridItems];
          for (const i in tmpGrid) {
            if(tmpGrid[i].shown){
              tmpGrid[i].permanentShown = true
              tmpGrid[i].shown = false
            }
          }
          setGridItems(tmpGrid)
          setShowCount(0);
        } else{
          // if they are not equal, close all
         setTimeout(()=>{
          let tmpGrid = [...gridItems];
          for (const i in tmpGrid) {
            tmpGrid[i].shown = false;
          }
          setGridItems(tmpGrid)
          setShowCount(0);
         },1000)
        }
        
        setMoveCount(moveCount => moveCount + 1)
      }
     
    }

  },[showCount, gridItems])
 
  // verify if game is over
  useEffect(()=>{
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)){
      setPlaying(false)
    }
 },[moveCount, gridItems])

  const resetAndCreateGrid = () => {
    setTimeElapsed(0)
    setMoveCount(0);
    setShowCount(0)
   
    let tmpGrid:GridItemType[] = [];
    for(let i = 0 ; i < Items.length * 2; i++){
        tmpGrid.push({
          item: null,
          shown: false,
          permanentShown: false
        })
    }

    // fill in grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < Items.length; i++) {
        let pos = -1 
        while(pos < 0 || tmpGrid[pos].item !== null){
          pos = Math.floor(Math.random()* (Items.length*2))
        }
        tmpGrid[pos].item = i
      }      
    }

    setGridItems(tmpGrid);

    // start game
    setPlaying(true);

   
  };

const handleItemClick= (index:number)=> {
  if(playing && index !== null && showCount < 2 ){
    let tmpGrid = [...gridItems];
    if(!tmpGrid[index].permanentShown && !tmpGrid[index].shown){
      tmpGrid[index].shown = true;
      setShowCount(showCount + 1)
    }
    setGridItems(tmpGrid)
  }
 
}




  return (
    <style.container>
      <style.info>
        <style.logoLink>
          <img src={logo} width="200" alt="" />
        </style.logoLink>
        <style.infoArea>
          <InfoItem label="Tempo" value={SetTimerGame(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </style.infoArea>
        <Button label="Reiniciar" icon={icon} onClick={resetAndCreateGrid} />
      </style.info>
      <style.gridArea>
        <style.grid>
          {gridItems.map((item, index)=>(
            <GridItem
            key={index}
            item= {item}
            onClick={()=> handleItemClick(index)}
            />
          ))}
        </style.grid>
      </style.gridArea>
    </style.container>
  );
}

export default App;
