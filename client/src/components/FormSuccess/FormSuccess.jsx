import Image from "../../assets/world.jpg";

const FormSuccess = () => {
  return (
    <div>
      <h1>Successfully!!!</h1>
      <img src={Image} alt="success" width={500} />
    </div>
  );
};

export default FormSuccess;
