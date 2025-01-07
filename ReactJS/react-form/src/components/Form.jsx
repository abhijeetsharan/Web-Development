import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Form.css";

function Form() {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            name="age"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
        />
        <button className="button" type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Form;
