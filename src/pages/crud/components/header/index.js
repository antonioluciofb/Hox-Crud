import React from "react";
import { Container,Button } from "./style";

export default function Header() {
  return (
    <>
    <Container>
      <h1>CRUD</h1>
    </Container>    
    <Button onClick={()=>{window.location.reload()}}>Logout</Button>
    </>
  );
}
