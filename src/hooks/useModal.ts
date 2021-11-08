import { useState } from "react"

const useModal = () => {
  const [isOpen, toggleModal] = useState(false);
  return {isOpen, toggleModal};
}

export default useModal;
