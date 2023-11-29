import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ranks,suits } from './constants';
import Avatar from '@mui/material/Avatar';

const images = {
  "Club" : require('./suits/club.png'),
  "Diamond": require('./suits/diamond.png'),
  "Heart": require('./suits/heart.png'),
  "Spade": require('./suits/spade.png') 
}

const Selector = ({data,index,verbose,rankUpdate,suitUpdate,disable=false}) => {
  return (
    <Stack direction='row' alignItems="center" justifyContent="center" spacing={3}>
      <div style={{width:"20%"}}>
        <Typography>
          {verbose}: 
        </Typography>
      </div>

      <FormControl style={{width:"30%"}}>
        <InputLabel id="demo-simple-select-label">Rank</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data[index].rank}
          label="Rank"
          onChange={e=>rankUpdate(e.target.value,index)}
          disabled={disable}
        >
          {ranks.map(
            rank => 
              <MenuItem 
                key={rank.value}
                value={rank.value}
              >
                {disable ? (<b>{rank.label}</b>) : rank.label}
                
              </MenuItem>
          )}
        </Select>
      </FormControl>
      
      <FormControl style={{width:"30%"}}>
        <InputLabel id="demo-simple-select-label">Suit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data[index].suit}
          label="Suit"
          onChange={e=>suitUpdate(e.target.value,index)}
          disabled={disable}
        >
          {suits.map(
            suit => 
              <MenuItem 
                key={suit.value}
                value={suit.value}
              >
                <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                  <Avatar alt={suit.label} src={images[suit.label]}/> &nbsp; &nbsp;
                  {disable ? (<b>{suit.label}</b>) : suit.label}
                </Stack>

              </MenuItem>
          )}
        </Select>
      </FormControl>
    </Stack>
  )
}

export default Selector