import { Input ,Text} from "@chakra-ui/react"
import {createContext, useState} from 'react';
import {Context} from '../GloabalState/index';
import { useContext,useRef } from "react";

export function SearchBox() {
    const [value, setValue] = useState("")
    let searchContext = useContext(Context);
    const inputEl = useRef("");
    
    const handleChange = (event) => {
      
      searchContext[1](inputEl.current.value)
  console.log(searchContext[0])
       
    }
     
    return (
      <>
      
        <Input
          bg="#003238"
          ref={inputEl}
  border="white"
          value={inputEl.current.value}
          onChange={handleChange}
          placeholder="Type Any Keyword"
          size="sm"
        />
      </>
    )
  }