import React from "react";
import { Container,Button } from "./style";

export default function Header() {
  return (
    <>
    <Container>
      <h1>HOX CRUD</h1>
    </Container>    
    <Button onClick={()=>{window.location.reload()}}>Logout</Button>
    </>
  );
}
