import React from "react";

import { Container } from "./style";

import { CgMathPlus, BsTrash, BsPencil } from "react-icons/all";

export default function Button({ icon, openModal }) {
  function switchIcon() {
    if (icon === "Plus") {
      return <CgMathPlus size={40} color="black" />;
    } else if (icon === "Trash") {
      return <BsTrash size={40} color="black" />;
    } else if (icon === "Pencil") {
      return <BsPencil size={40} color="black" />;
    } else {
    }
  }

  return (
    <div>
      <Container
        onClick={() => {
          openModal();
        }}
        type="button"
        color="white"
      >
        {switchIcon()}
      </Container>
    </div>
  );
}
