import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const FormContainer = styled.form`
  width: 50vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  position: absolute;
  top: 20%;
  left: 25%;
`;

const FormField = styled.div`
  margin-bottom: 20px;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
    color: #ff6f62;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #2196f3;
      box-shadow: 0 0 5px rgba(33, 150, 243, 0.5);
    }
  }

  span {
    color: red;
  }
`;
const Form = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    oceanFreightUSD: "",
    portTHC: "",
    seed: "",
    mvc: "",
    shippingCharges: "",
    billingCharges: "",
    others: "",
  });
  const [totalCharge, setTotalCharge] = useState(0);
  const calculateTotalCharge = () => {
    const oceanFreightINR =
      parseFloat(formData.oceanFreightUSD) *
      parseFloat(formData.conversionRate);

    const sum =
      parseFloat(oceanFreightINR) +
      parseFloat(formData.portTHC) +
      parseFloat(formData.seed) +
      parseFloat(formData.mvc) +
      parseFloat(formData.shippingCharges) +
      parseFloat(formData.billingCharges) +
      parseFloat(formData.others);
    setTotalCharge(sum.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotalCharge();
    // Handle form submission here (e.g., send data to the server)
    console.log(formData);
  };
  return (
    <div className="form-container">
      <h1> Freight Calculator</h1>
      <FormContainer onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="oceanFreight">Ocean Freight (USD)</label>
          <input
            name="oceanFreightUSD"
            type="text"
            value={formData.oceanFreightUSD}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Conversion Rate</label>
          <input
            name="conversionRate"
            type="text"
            value={formData.conversionRate}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField>
          <label>Total Charge (INR)</label>
          <input type="text" value={totalCharge} readOnly />
        </FormField>
        <FormField>
          <label htmlFor="portTHC">Port THC</label>
          <input
            name="portTHC"
            type="text"
            value={formData.portTHC}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="seed">Seed</label>
          <input
            name="seed"
            type="text"
            value={formData.seed}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="mvc">MVC</label>
          <input
            name="mvc"
            type="text"
            value={formData.mvc}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="shippingCharges">Shipping Charges</label>
          <input
            name="shippingCharges"
            type="text"
            value={formData.shippingCharges}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="billingCharges">Billing Charges</label>
          <input
            name="billingCharges"
            type="text"
            value={formData.billingCharges}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="others">Others</label>
          <input
            name="others"
            type="text"
            value={formData.others}
            onChange={handleChange}
          />
        </FormField>

        <button
          type="submit"
          className="custom-button"
          style={{
            position: "absolute",
            top: "105%",
            left: "40%",
            display: "flex",
            width: "auto",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Submit
        </button>
      </FormContainer>
      <h1
        style={{
          color: "#E3D0F6",
          position: "absolute",
          top: "135%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "inherit",
        }}
      >
        Your Total Charges is : {"  "}
        <FontAwesomeIcon
          icon={faRupeeSign}
          style={{ fontFamily: "inherit" }}
        />{" "}
        {"  "}
        {totalCharge}
      </h1>
    </div>
  );
};
export default Form;
