import React, { useState } from 'react'
import styled from 'styled-components'
import StepFour from './StepFour'
import StepOne from './StepOne'
import StepThree from './StepThree'
import StepTwo from './StepTwo'

const Styles = styled.div`
  flex-direction: column;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  max-width: 490px;
  z-index: 99999999999999;
  padding: 10px 10px;
  margin: 10px;
  height: 250px;
`

export default function Overlay({ location }) {
  const [show, setShow] = useState({
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  })

  // const [docId, setDocId] = useState('')
  const [formData, setFormData] = useState({ email: '', password: '' })
  const onDownload = () => {
    const data = { ...formData, ...location }
    console.log(data)
  }
  return (
    <Styles>
      {show.stepOne && (
        <StepOne
          email="tukuoyma@yahoo.com"
          setFormData={setFormData}
          onDownload={onDownload}
          setShow={setShow}
        />
      )}
      {show.stepTwo && <StepTwo setShow={setShow} />}
      {show.stepThree && (
        <StepThree
          email="tukuoyma@yahoo.com"
          setFormData={setFormData}
          onDownload={onDownload}
          setShow={setShow}
        />
      )}
      {show.stepFour && <StepFour />}
    </Styles>
  )
}
