import React from "react";
import { useState } from "react";
import { FormEvent } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

// useForm hook is used for the form validation
const FormWithReactFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be atleast 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        ></input>
      </div>
      <button className="btn btn-success" type="submit">
        Submit (useForm)
      </button>
    </form>
  );
};

export default FormWithReactFormHook;
