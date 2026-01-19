import { useState } from "react";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mail: "",
    message: "",
  });

  const handleDataChange = (d) => {
    const { name, value } = d.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDataSubmit = (s) => {
    s.preventDefault();
    console.log("Submitted: ", formData);
  };

  return { formData, handleDataChange, handleDataSubmit };
};

export default useContactForm;
