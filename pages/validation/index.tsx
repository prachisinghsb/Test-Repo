import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


export default  function ValidationForm(){

    interface FormInputs {
        firstname: string
        age: number
    }

    const schema = yup.object({
        firstname: yup.string().required(),
        age: yup.number().positive().integer().required(),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormInputs) => console.log(data);

    return(
        <>
            <h1 className="text-center h-20 text-3xl">User Form</h1>

            <form onSubmit={handleSubmit(onSubmit)} className=" w-1/3 p-5 border border-black flex flex-col m-auto ">

                <input {...register("firstname")}
                       placeholder="enter your name"
                       className="border border-black p-1 m-3"
                />
                <p className="text-red-700">{errors.firstname?.message}</p>

                <input {...register("age")}
                       placeholder="enter your age"
                       className="border border-black p-1 m-3"
                />
                <p className="text-red-700">{errors.age?.message}</p>

                <input type="submit" className="border border-black p-1 m-3" />
            </form>
        </>
    )
}