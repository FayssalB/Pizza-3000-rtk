import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addOrder } from '../app/store';

const NewOrder = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        const id = `CMD-${Date.now()}`;
        dispatch(addOrder(id))

        navigate(`/order/${id}`, {replace: true});
    },[])

  return (
    <div>NewOrder</div>
  )
}

export default NewOrder