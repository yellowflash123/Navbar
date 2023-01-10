import React from 'react'
import "./accordition.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Trials from "./trial.js"
import Up from "./up";
import Navbar from "./appnavbar";


function accordition() {
  return (
    <div className='main'>
    <Navbar />
    <div className='approval'>
        
        <Accordion className='accordion1'>
        <AccordionSummary
          
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0, fontWeight: "bold" }}>Vendor name</Typography>
          <Typography sx={{ width: '36%',  }}></Typography>
          <Typography sx={{ width: '12%', fontWeight: "bold" }}>Submit date</Typography>
          <Typography sx={{  fontWeight: "bold" }}>Due date</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion className='accordion2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="demo" sx={{ width: '40%', flexShrink: 0 }}> ABC</Typography>
          <Typography sx={{ color: 'black', width: '39%',fontWeight: "bold"  }}> Review vendor Details</Typography>
          <Typography sx={{ color: 'black', width: '11.5%' }}> Dec 30</Typography>
          <Typography sx={{ color: 'black',  }}> 2 days</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='demo1'>
            <Trials />
            <Up />
            <button className='button' type='submit'>Approve</button>
            <button className='button1' type='submit'>Reject</button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='container2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="demo" sx={{ width: '40%', flexShrink: 0 }}> DEF</Typography>
          <Typography sx={{ color: 'black', width: '39%',fontWeight: "bold"  }}> Review vendor Details</Typography>
          <Typography sx={{ color: 'black', width: '11.5%' }}> Dec 30</Typography>
          <Typography sx={{ color: 'black',  }}> 2 days</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          "Wake up to reality! Nothing ever goes as planned in this world. The longer you live,
           the more you realize that, in this reality, only pain, suffering, and futility exist."
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    </div>
  )
}

export default accordition
