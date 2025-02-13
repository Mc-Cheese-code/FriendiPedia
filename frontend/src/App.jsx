import React, { useState } from 'react';
import { Button, Container, Stack, Text } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import UserGrid from './components/UserGrid';

function App() {
  const [users, setUsers] = useState([]);
  

  return (
    <>
    <Stack minH={"100vh"}>
      <Navbar setUsers={setUsers}/>

      <Container maxW={"1200px"} my={4}>
        <Text
        fontSize={{base:"3xl", md:"50"}}
        fontWeight={"bold"}
        letterSpacing={"2px"}
        textAlign={"center"}
        textTransform={"uppercase"}
        mb={8}
        >
          <Text
          as={"span"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          >
            Trusted Allies
          </Text>
          🛡️🤍
        </Text>
        <UserGrid users={users} setUsers={setUsers}/>
      </Container>  
    </Stack>
      
    </>
  )
}

export default App
