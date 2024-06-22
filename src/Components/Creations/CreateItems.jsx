import React from "react";
import {useForm} from 'react-hook-form';

const CreateItems = ({goBack}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
        <>
        <p onClick={goBack}>Go Back</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
        <textarea {...register("Description", {required: true, max: 0})} />
        <input type="number" placeholder="charges" {...register("charges", {})} />
  
        <input {...register("reset")} type="radio" value="Short Rest" />
        <input {...register("reset")} type="radio" value=" Long Rest" />
        <input {...register("reset")} type="radio" value=" NA" />
  
        <input type="submit" />
      </form>
      </>
    );
    }
export default CreateItems;