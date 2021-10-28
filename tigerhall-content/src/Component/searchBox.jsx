import { Input ,Text} from "@chakra-ui/react"
import {useState} from 'react';
export function SearchBox() {
    const [value, setValue] = useState("")
    const handleChange = (event) => setValue(event.target.value)
  
    return (
      <>
      
        <Input
          bg="#003238"

  border="white"
          value={value}
          onChange={handleChange}
          placeholder="Type Any Keyword"
          size="sm"
        />
      </>
    )
  }