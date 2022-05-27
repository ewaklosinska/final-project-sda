import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

enum CurrencyEnum {
  eur = "eur",
  usd = "usd",
  chf = "chf"
}

interface IFormInput {
  givenNumber: Number;
  currency: CurrencyEnum;
}

interface Props {
    setCurrency: Function;
    setGivenNumber: Function;
}

export default function Form(props: Props) {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
      props.setCurrency(data.currency)
      props.setGivenNumber(data.givenNumber)
      console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Given Number</label>
      <input {...register("givenNumber")} />
      <label>Currency Selection</label>
      <select {...register("currency")} >
        <option value="eur">eur</option>
        <option value="usd">usd</option>
        <option value="chf">chf</option>
      </select>
      <input type="submit" />
    </form>
  );
}
