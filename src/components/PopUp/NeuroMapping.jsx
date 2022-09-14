import React, { useEffect, useState } from 'react'
import { Grid } from './Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import './neuroMapping.css'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const NeuroMapping = ({ open, setOpen, PPIndicators, setPPIndicators }) => {
  const handleClose = () => setOpen(false);

  const [area, setArea] = useState('L_frontal')
  const [rows, setRows] = useState([])
  const [checkedFns, setCheckedFns] = useState([])

  //handle Change for areas
  const handleChangeArea = (e) => {
    const value = e.target.value;
    setArea(value)
  }

  const handleSubmit = () => {
    fetch(`http://localhost:8080/cognitive_functions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          area: area,
          checked_fns: checkedFns
        }
      ),
    })
      .then(response => response.json())
      .then(response => {
        const temp = PPIndicators
        temp[area] = response.pp_indicator;
        setPPIndicators(temp)
        setCheckedFns([])
        setOpen(false)
      })
      .catch(err => {
        console.log('unable to calculate pp indicator')
      })
  }

  useEffect(() => {

    fetch(`http://localhost:8080/cognitive_functions?area=${area}`)
      .then(response => response.json())
      .then(response => {
        const temp = response.cognitive_fns;
        setRows(temp)
      })
      .catch(err => {
        console.log('unable to fetch cognitive functions')
      })

  }, [area])

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ zIndex: 2000 }}
        fullWidth
        maxWidth="md"
      >
        <div className="popup-container">
          <div className="neuro-mapping-container">
            <h1>Neuro Mapping</h1>
          </div>
          <div className="ppid-areas-container">
            <div className="ppid-container">
              <ArrowBackIcon style={{ marginRight: "10px", cursor: "pointer" }} />
              <label>PP ID</label>
              <input type="text" />
              <ArrowForwardIcon style={{ marginLeft: "10px", cursor: "pointer" }} />
            </div>

            <div className="areas-container">
              <Box className='box' outline sx={{ minWidth: 200 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Areas</InputLabel>
                  <Select
                    labelId="Areas"
                    id="Areas-select"
                    label="Areas"
                    value={area}
                    onChange={handleChangeArea}
                    MenuProps={{
                      style: { zIndex: 2001 }
                    }}
                  >
                    <MenuItem value="L_frontal" >Frontal Lobe (L)</MenuItem>
                    <MenuItem value="R_frontal" >Frontal Lobe (R)</MenuItem>
                    <MenuItem value="L_occipital" >Occipital Lobe (L) </MenuItem>
                    <MenuItem value="R_occipital" >Occipital Lobe (R)</MenuItem>
                    <MenuItem value="L_parietal" >Parietal Lobe (L) </MenuItem>
                    <MenuItem value="R_parietal" >Parietal Lobe (R)</MenuItem>
                    <MenuItem value="L_temporal" >Temporal Lobe (L) </MenuItem>
                    <MenuItem value="R_temporal" >Temporal Lobe (R)</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>

          <div className="title-container">
            <span>Please select all functions applicable to the performance point</span>
          </div>

          <div className="grid-container">
            <Grid
              rows={rows}
              checkedFns={checkedFns}
              setCheckedFns={setCheckedFns}
            />
          </div>

        </div>

        <div className="submit-btn" onClick={handleSubmit}>
          <span>Submit</span>
        </div>

      </Dialog>

    </>
  )
}