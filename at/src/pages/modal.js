import React,{useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
function ModalDialog(props) {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    console.log(JSON.stringify(form))
    return invokeModal(!isShow)
  }

  const [form,SetForm]=useState({rollno:props.rollno});
  const handleForm=(e)=>{
    SetForm({
      ...form,
      [e.target.name]:e.target.value
  })
  }

  const handlesubmit=async(e)=>{
        initModal();
        await fetch('http://localhost:8009/reason',{
            method: 'POST',
            body: JSON.stringify(form),
            headers: {'Content-Type': 'application/json'}
        });
    }


  return (
    <>
      <Button variant="success" onClick={initModal}>
        Apply
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Please Enter Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid'>
            <div className='row'>
                <table style={{fontWeight: 'bold'}}>
                    {/* <tr>
                        <td>From</td>
                        <td>:&nbsp;<input type='date' name=" from" onChange={handleForm}></input></td>
                    </tr> */}
                    <tr>
                        <td>Date</td>
                        <td>:&nbsp;<input type='date' name="date" onChange={handleForm}></input></td>
                    </tr>
                    <tr>
                        <td>Reason</td>
                        <td>:&nbsp;<input type='text' placeholder='' name="reason" onChange={handleForm}></input></td>
                    </tr>
                </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" onClick={handlesubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog