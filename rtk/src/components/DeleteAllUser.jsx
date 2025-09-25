import React from "react";
import styled from "styled-components"
import {clearAllUsers} from '../store/slices/userSlice'
import { useDispatch } from "react-redux";

export const DeleteAllUser = () => {
    
    const dispatch=useDispatch()

    const deleteAllUsers=()=>{
        console.log("hi");
        dispatch(clearAllUsers())
    }
    
    
    return <Wrapper>
        <button onClick={deleteAllUsers} className="clear-btn">Clear User</button>
    </Wrapper>;
};

const Wrapper=styled.section`
    .clear-btn{
        text-transform:capitalize;
        background-color:#db338a
    }
`

