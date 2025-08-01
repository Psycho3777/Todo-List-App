import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(" Submitting The form ", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name</label>
        <input {...register("firstName" , { required: true ,minLength : {value : 5 , message :"Minimum  length Atleast 5"}, maxLength: 20 }) } />
        {errors.firstName && <p> {errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label> First Name</label>
        <input {...register("MiddletName")} />
      </div>
      <br />
      <div>
        <label> First Name</label>
        <input {...register("LastName")} />
      </div>
      <input type="submit" />
    </form>
  );
}

export default App;


