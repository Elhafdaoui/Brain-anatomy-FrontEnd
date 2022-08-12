import React from 'react'
import './canvas.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NeuroMapping } from './../components/Navbar/PopUp/NeuroMapping';

import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

//------------------------------------------------------------------------------------------------

//View : Image - label array
const viewsArray = [
  { src: require("../assets/left/cortex.png"), label: "LEFT" },
  { src: require("../assets/right/cortex.png"), label: "RIGHT" },
  { src: require("../assets/back/cortex.png"), label: "BACK" },
  { src: require("../assets/front/cortex.png"), label: "FRONT" },
  { src: require("../assets/bottom/cortex.png"), label: "BOTTOM" },
  { src: require("../assets/top/cortex.png"), label: "TOP" }
]
//Areas : Image - label array
const areasArray = [
  { src: require("../assets/front/frontal.png"), label: "FRONTAL LOBES" },
  { src: require("../assets/back/occipital.png"), label: "OCCIPITAL LOBES" },
  { src: require("../assets/top/parietal.png"), label: "PARIETAL LOBES" },
  { src: require("../assets/bottom/temporal.png"), label: "TEMPORAL LOBES" },
  { src: require("../assets/front/L_hemisphere.png"), label: "LEFT CEREBRAL HEMISPHERE" },
  { src: require("../assets/front/R_hemisphere.png"), label: "RIGHT CEREBRAL HEMISPHERE" },
  { src: require("../assets/front/cortex.png"), label: "CEREBRAL CORTEX" }
]


//Areas + Views + Images Array
const areasViewsArray = [
  //Back Views
  { src: require("../assets/back/cortex.png"), area: "CEREBRAL CORTEX", view: "BACK" },
  { src: require("../assets/back/frontal.png"), area: "FRONTAL LOBES", view: "BACK" },
  { src: require("../assets/back/L_hemisphere.png"), area: "LEFT CEREBRAL HEMISPHERE", view: "BACK" },
  { src: require("../assets/back/R_hemisphere.png"), area: "RIGHT CEREBRAL HEMISPHERE", view: "BACK" },
  { src: require("../assets/back/occipital.png"), area: "OCCIPITAL LOBES", view: "BACK" },
  { src: require("../assets/back/parietal.png"), area: "PARIETAL LOBES", view: "BACK" },
  { src: require("../assets/back/temporal.png"), area: "TEMPORAL LOBES", view: "BACK" },

  //Bottom Views
  { src: require("../assets/bottom/cortex.png"), area: "CEREBRAL CORTEX", view: "BOTTOM" },
  { src: require("../assets/bottom/frontal.png"), area: "FRONTAL LOBES", view: "BOTTOM" },
  { src: require("../assets/bottom/L_hemisphere.png"), area: "LEFT CEREBRAL HEMISPHERE", view: "BOTTOM" },
  { src: require("../assets/bottom/R_hemisphere.png"), area: "RIGHT CEREBRAL HEMISPHERE", view: "BOTTOM" },
  { src: require("../assets/bottom/occipital.png"), area: "OCCIPITAL LOBES", view: "BOTTOM" },
  { src: require("../assets/bottom/parietal.png"), area: "PARIETAL LOBES", view: "BOTTOM" },
  { src: require("../assets/bottom/temporal.png"), area: "TEMPORAL LOBES", view: "BOTTOM" },

  //Front view
  { src: require("../assets/front/cortex.png"), area: "CEREBRAL CORTEX", view: "FRONT" },
  { src: require("../assets/front/frontal.png"), area: "FRONTAL LOBES", view: "FRONT" },
  { src: require("../assets/front/L_hemisphere.png"), area: "LEFT CEREBRAL HEMISPHERE", view: "FRONT" },
  { src: require("../assets/front/R_hemisphere.png"), area: "RIGHT CEREBRAL HEMISPHERE", view: "FRONT" },
  { src: require("../assets/front/occipital.png"), area: "OCCIPITAL LOBES", view: "FRONT" },
  { src: require("../assets/front/parietal.png"), area: "PARIETAL LOBES", view: "FRONT" },
  { src: require("../assets/front/temporal.png"), area: "TEMPORAL LOBES", view: "FRONT" },

  //Left view
  { src: require("../assets/left/cortex.png"), area: "CEREBRAL CORTEX", view: "LEFT" },
  { src: require("../assets/left/frontal.png"), area: "FRONTAL LOBES", view: "LEFT" },
  { src: require("../assets/left/L_hemisphere.png"), area: "LEFT CEREBRAL HEMISPHERE", view: "LEFT" },
  { src: require("../assets/left/R_hemisphere.png"), area: "RIGHT CEREBRAL HEMISPHERE", view: "LEFT" },
  { src: require("../assets/left/occipital.png"), area: "OCCIPITAL LOBES", view: "LEFT" },
  { src: require("../assets/left/parietal.png"), area: "PARIETAL LOBES", view: "LEFT" },
  { src: require("../assets/left/temporal.png"), area: "TEMPORAL LOBES", view: "LEFT" },

  //Right view
  { src: require("../assets/right/cortex.png"), area: "CEREBRAL CORTEX", view: "RIGHT" },
  { src: require("../assets/right/frontal.png"), area: "FRONTAL LOBES", view: "RIGHT" },
  { src: require("../assets/right/L_hemisphere.png"), area: "LEFT CEREBRAL HEMISPHERE", view: "RIGHT" },
  { src: require("../assets/right/R_hemisphere.png"), area: "RIGHT CEREBRAL HEMISPHERE", view: "RIGHT" },
  { src: require("../assets/right/occipital.png"), area: "OCCIPITAL LOBES", view: "RIGHT" },
  { src: require("../assets/right/parietal.png"), area: "PARIETAL LOBES", view: "RIGHT" },
  { src: require("../assets/right/temporal.png"), area: "TEMPORAL LOBES", view: "RIGHT" },


  //Top view
  { src: require("../assets/top/cortex.png"), area: "CEREBRAL CORTEX", view: "TOP" },
  { src: require("../assets/top/frontal.png"), area: "FRONTAL LOBES", view: "TOP" },
  { src: require("../assets/top/L_hemisphere.png"), area: "LEFT CEREBRAL HEMISPHERE", view: "TOP" },
  { src: require("../assets/top/R_hemisphere.png"), area: "RIGHT CEREBRAL HEMISPHERE", view: "TOP" },
  { src: require("../assets/top/occipital.png"), area: "OCCIPITAL LOBES", view: "TOP" },
  { src: require("../assets/top/parietal.png"), area: "PARIETAL LOBES", view: "TOP" },
  { src: require("../assets/top/temporal.png"), area: "TEMPORAL LOBES", view: "TOP" }
]

const Initial_PP_indicator = {
  L_frontal: 'X.XX',
  R_frontal: 'X.XX',
  L_occipital: 'X.XX',
  R_occipital: 'X.XX',
  L_pareital: 'X.XX',
  R_pareital: 'X.XX',
  L_temporal: 'X.XX',
  R_temporal: 'X.XX',
}

export const Canvas = () => {

  const [open, setOpen] = React.useState(false); //True if popup is opened
  const [view, setView] = React.useState(undefined) //This contains the value of the selected view
  const [area, setArea] = React.useState(undefined) //This contains the value of the selected area

  const [PPIndicators, setPPIndicators] = React.useState(Initial_PP_indicator) //Area's pp indicators


  //handle Change of the View
  const handleView = (e) => {
    const value = e.target.value;
    setView(value)
  }

  //handle Change for areas
  const handleAreas = (e) => {
    const value = e.target.value;
    setArea(value)
  }
  //Popup Opener
  const handleNeuroClick = () => {
    setOpen(true)
  }

  //Handle screen capture
  const handleCaptureArea = () => {
    domtoimage.toBlob(document.getElementById("frame")).then(
      function (blob) {
        FileSaver.saveAs(blob, "brain.jpeg");
      }
    )
  }


  const Area_PPIndicator = () => {
    switch (area) {
      case 'FRONTAL LOBES': return (
        <div style={{ fontWeight: 'bold', color: "#000" }}>
          <p>FRONTAL LOBE(L): <span style={{ color: 'red' }}>{PPIndicators['L_frontal']}</span></p>
          <p>FRONTAL LOBE(R): <span style={{ color: 'red' }}>{PPIndicators['R_frontal']}</span></p>
        </div>
      )
      case 'OCCIPITAL LOBES': return (
        <div style={{ fontWeight: 'bold', color: "#000" }}>
          <p>OCCIPITAL LOBE(L): <span style={{ color: 'red' }}>{PPIndicators['L_occipital']}</span></p>
          <p>OCCIPITAL LOBE(R): <span style={{ color: 'red' }}>{PPIndicators['R_occipital']}</span></p>
        </div>
      )
      case 'PARIETAL LOBES': return (
        <div style={{ fontWeight: 'bold', color: "#000" }}>
          <p>PARIETAL LOBE(L): <span style={{ color: 'red' }}>{PPIndicators['L_pareital']}</span></p>
          <p>PARIETAL LOBE(R): <span style={{ color: 'red' }}>{PPIndicators['R_pareital']}</span></p>
        </div>
      )
      case 'TEMPORAL LOBES': return (
        <div style={{ fontWeight: 'bold', color: "#000" }}>
          <p>TEMPORAL LOBE(L): <span style={{ color: 'red' }}>{PPIndicators['L_temporal']}</span></p>
          <p>TEMPORAL LOBE(R): <span style={{ color: 'red' }}>{PPIndicators['R_temporal']}</span></p>
        </div>
      )
      default: return
    }
  }
  console.log(area)
  return (
    <>

      <div className='container'>
        <h1>Qualitative data pull - mind tools </h1>
        <div className="canvas-container">

          <div className='top-layer'>
            <div className='title'>
              <p>Mind Tools is a coarse indicator for neuroexperts to associate human competencies of a given performance point to the major lobes of the cerebral cortex via relevant cognitive functions at the structural level </p>
              {/* {view?<p style={{fontWeight: 'bold',color:"#000"}}>VIEW : {view}</p>:""} 
              {area?<p style={{fontWeight: 'bold',color:"#000"}}>AREA : {area}</p>:""}  */}
            </div>
            <div className="buttons-container">
              <div className='capture-area-btn' onClick={handleCaptureArea}>Capture area</div>
              <div className='neuro-mapping-btn' onClick={handleNeuroClick}>Neuro Mapping</div>
              <NeuroMapping setOpen={setOpen} open={open} PPIndicators={PPIndicators} setPPIndicators={setPPIndicators} />
            </div>
          </div>


          <div className='view-areas-container'>
            <div className="inside-view-areas-container">
              <div className="views-container">
                <label>VIEWS</label>
                <select onChange={handleView}>
                  <optgroup label="SELECT A VIEWPOINT :">
                    <option style={{ display: "none" }}></option>
                    <option value="FRONT">Front View</option>
                    <option value="BACK">Back View</option>
                    <option value="TOP">Top View</option>
                    <option value="BOTTOM">Bottom View</option>
                    <option value="LEFT">Left View</option>
                    <option value="RIGHT">Right View</option>
                  </optgroup>
                </select>
              </div>

              <div className="areas-container">
                <label>AREAS</label>
                <select onChange={handleAreas}>
                  <optgroup label="SELECT A BRAIN AREA:">
                    <option style={{ display: "none" }}></option>
                    <option value="FRONTAL LOBES">FRONTAL LOBES</option>
                    <option value="OCCIPITAL LOBES">OCCIPITAL LOBES</option>
                    <option value="PARIETAL LOBES">PARIETAL LOBES</option>
                    <option value="TEMPORAL LOBES">TEMPORAL LOBES</option>
                    <option value="LEFT CEREBRAL HEMISPHERE">LEFT CEREBRAL HEMISPHERE </option>
                    <option value="RIGHT CEREBRAL HEMISPHERE">RIGHT CEREBRAL HEMISPHERE </option>
                    <option value="CEREBRAL CORTEX">CEREBRAL CORTEX</option>
                  </optgroup>
                </select>
              </div>
              <p style={{ fontWeight: 'bold', color: "#000" }}>PERFORMANCE POINT ID : <span style={{ color: 'red' }}>X</span></p>
              {Area_PPIndicator()}
              {/* {view ? <p style={{ fontWeight: 'bold', color: "#000" }}>VIEW : {view}</p> : ""} */}
              {/* {area ? <p style={{ fontWeight: 'bold', color: "#000" }}>AREA : {area}</p> : ""} */}
              {/* <p style={{ fontWeight: 'bold', color: "#000" }}>DESCRIPTION :</p> */}
              <legend style={{ fontWeight: 'bold',color:"#000" }}>DESCRIPTION</legend>
              <fieldset className='description'>
                <p>Mind Tools is a coarse indicator for neuroexperts to associate human competencies of a given performance point to the major lobes of the cerebral cortex via relevant cognitive functions at the structural level </p>
              </fieldset>
            </div>
          </div>


          {viewsArray.map((element, index) => (
            element.label === view && area === undefined ?
              <div key={index} className="brain-img-container">
                <img id="frame" src={element.src} alt="brain" />
              </div> : ""
          ))}

          {/* Displaying Areas alone */}
          {areasArray.map((element, index) => (
            element.label === area && view === undefined ?
              <div key={index} className="brain-img-container">
                <img id="frame" src={element.src} alt="brain" />
              </div> : ""
          ))}

          {/* Displaying Areas and Views */}
          {areasViewsArray.map((element, index) => (
            element.area === area && element.view === view ?
              <div key={index} className="brain-img-container">
                <img id="frame" src={element.src} alt="brain" />
              </div> : ""
          ))}

          {/* Default Image */}

          {view === undefined && area === undefined && (

            <div className='brain-default-img-container'>
              <img src={require('../assets/brain.jpg')} alt="brain" />
            </div>
          )}

        </div>

        <div className="ppid-container">
          <ArrowBackIcon style={{ marginRight: "10px", cursor: "pointer" }} />
          <label>PP ID</label>
          <input type="text" />
          <ArrowForwardIcon style={{ marginLeft: "10px", cursor: "pointer" }} />
        </div>
      </div>

    </>
  )
}