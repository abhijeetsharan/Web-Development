import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Form from "./components/Form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    // defaultValues: {
    //   name: "John Doe",
    //   email: "john.doe@example.com",
    // },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <label>Name:</label>
          <input placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="container">
          <label>Email:</label>
          <input placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="container">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
      <Form />
    </div>
  );
}

export default App;
