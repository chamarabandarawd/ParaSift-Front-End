import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import React from 'react'

interface Props{
  summary:string
}

function GeneratedOutputSection({summary}:Props) {
  return (
    <div className='user_input_section user_output_Section'>
      <div className="fixed-left">
        <Avatar sx={{ bgcolor: deepPurple[500] }}>PS</Avatar>
      </div>
      <div className='req_para'>{summary}</div>
      <div className="fixed-right">
        <ContentCopyOutlinedIcon />
        <ThumbUpAltOutlinedIcon />
        <ThumbDownAltOutlinedIcon />
      </div>
    </div>
  )
}

export default GeneratedOutputSection