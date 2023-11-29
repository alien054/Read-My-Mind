import { Button, Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import Selector from './Selector';
import { useState } from 'react';
import { ranks,suits,offsetArr,initCardsValue } from './constants';

const App = () => {

  const inputCards = [0,0,0]
  const [visible,setVisible] = useState(false)
  const [cardValue,setCardValue] = useState(initCardsValue)

  const [finalCard,setFinalCard] = useState([{
    rank: 1,
    suit: 0
  }])

  const updateFinalCard = () => {
    const orderArr = [1,1,1]

    for(let i=0;i<3;i++){
      inputCards[i] = cardValue[i+1].rank + cardValue[i+1].suit*13
    }

    let max_idx = inputCards.indexOf(Math.max(...inputCards));
    let min_idx = inputCards.indexOf(Math.min(...inputCards));

    orderArr[max_idx]=2
    orderArr[min_idx]=0

    const order = orderArr.join('')
    console.log(order)

    const offset = offsetArr.indexOf(order)
    console.log(offset)

    const finalRank = ((cardValue[0].rank + offset + 1) % 13)
    console.log(finalRank)

    console.log(ranks.filter(item=> item.value == finalRank)[0]?.label)
    setFinalCard([{
      suit: cardValue[0].suit,
      rank: finalRank
    }])

    setVisible(true)
  }


  const handleCardRankUpdate = (rank,index) => {
    setVisible(false)
    setCardValue([
      ...cardValue.slice(0,index),
      {...cardValue[index], rank: rank},
      ...cardValue.slice(index+1)
    ])
  }

  const handleCardSuitUpdate = (suit,index) => {
    setVisible(false)
    setCardValue([
      ...cardValue.slice(0,index),
      {...cardValue[index], suit: suit},
      ...cardValue.slice(index+1)
    ])
  }


  return(
    <Grid 
      container 
      style={{paddingTop:'5%'}} 
      justifyContent='center' 
      alignItems='center'
      spacing={3}
    >
      <Grid item xs={7}>
        <Selector 
          data={cardValue}
          index={0}
          verbose={"1st Visible Card Info"}
          rankUpdate={handleCardRankUpdate}
          suitUpdate={handleCardSuitUpdate}
        />
      </Grid>

      <Grid item xs={7}>
        <Selector 
          data={cardValue}
          index={1}
          verbose={"2nd Visible Card Info"}
          rankUpdate={handleCardRankUpdate}
          suitUpdate={handleCardSuitUpdate}
        />
      </Grid>

      <Grid item xs={7}>
        <Selector 
          data={cardValue}
          index={2}
          verbose={"3rd Visible Card Info"}
          rankUpdate={handleCardRankUpdate}
          suitUpdate={handleCardSuitUpdate}
        />
      </Grid>

      <Grid item xs={7}>
        <Selector 
          data={cardValue}
          index={3}
          verbose={"4th Visible Card Info"}
          rankUpdate={handleCardRankUpdate}
          suitUpdate={handleCardSuitUpdate}
        />
      </Grid>

      <Grid item xs={7}>
        <Stack direction='row' justifyContent='center' alignItems='center' spacing={2} style={{paddingLeft:'16%'}}>
          <Button color='success' variant='contained' onClick={updateFinalCard}>
            Read My Mind
          </Button>

          <Button 
            color='error' 
            variant='contained' 
            onClick={()=>{
              setCardValue(initCardsValue)
              setVisible(false)
            }}
          >
            Rest
          </Button>
        </Stack>
      </Grid>
      {visible && 
        <Grid item xs={7}>
          <Selector 
            data={finalCard}
            index={0}
            verbose={"Your Hidden Card is"}
            rankUpdate={null}
            suitUpdate={null}
            disable={true}
          />
        </Grid>
      }
    </Grid>
  )
}

export default App