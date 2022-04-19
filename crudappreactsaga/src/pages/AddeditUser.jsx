import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavigationType, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserStart, updateUserStart } from '../redux/action';

const initialState = {
  name : "",
  email: "",
  phone : "",
  address : ""
}
function AddeditUser() {
  const [formValue, setFormvalue] = useState(initialState)
  const {name,email,phone,address} = formValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const {users}  = useSelector(state => state.data)
  const [editMode,setEditMode] = useState(false)
  useEffect(() => {
    if(id) {
      setEditMode(true)
        const singleUser = users.find((item) => item.id === Number(id))
        setFormvalue({...singleUser})
    }
    else{
      setEditMode(false)
      setFormvalue({...initialState})
    }
  },[id])

  const onInputChange = (e) => {
    let {name,value} = e.target
    setFormvalue({...formValue,[name] : value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name&& email && phone && address){
      if(!editMode){
        dispatch(createUserStart(formValue))
        toast.success("data added successfully")
        setTimeout(() => {
          navigate("/")
        }, 500);
      }
      else{
        dispatch(updateUserStart({id, formValue}))
        setEditMode(false)
        dispatch(createUserStart(formValue))
        toast.success("data updated successfully")
        setTimeout(() => {
          navigate("/")
        }, 500);
      }
      
    }
  }
  return (
    <>
    <MDBValidation
    className='row g-3'
    style = {{marginTop : "100px"}}
    noValidate
    onSubmit={handleSubmit}>

    <p className='fs-2 fw-bold' >{!editMode ? "Add user details" : "Update user details"}</p>
    <div 
    style={{
      margin : "auto",
      padding : "15px",
      maxWidth : "400px",
      alignContent : "center"
    }}>
      <MDBInput
      value={name || ""}
      name = "name"
      type = "text"
      onChange={onInputChange}
      required
      label="Name"
      validation="Please provide a name"
      invalid></MDBInput><br></br>

      <MDBInput
      value={email || ""}
      name = "email"
      type = "email"
      onChange={onInputChange}
      required
      label="Email"
      validation="Please provide a valid email"
      invalid></MDBInput><br></br>
      
      <MDBInput
      value={phone || ""}
      name = "phone"
      type = "number"
      onChange={onInputChange}
      required
      label="Phone"
      validation="Please provide a valid phone number"
      invalid></MDBInput><br></br>
      
      <MDBInput
      value={address || ""}
      name = "address"
      type = "text"
      onChange={onInputChange}
      required
      label="Address"
      validation="Please provide a valid Address"
      invalid></MDBInput><br></br>
 
      <div className='col-12'>
        <MDBBtn style={{marginRight : "10px"}} type="submit">{!editMode ? "Add " : "Update "}</MDBBtn>

      </div>
    </div>
    </MDBValidation>
    </>
  )
}

export default AddeditUser