import {useForm} from "react-hook-form";


export default  function FormPage(){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (

        <div className="border border-black flex flex-col m-auto h-200">

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>Enter Your First Name : </label>
                    <input {...register("firstname")} className="border border-blue-600     M-10" />
                    {errors.firstname && <span className="text-red-500">Firstname field is required</span>}
                </div>

                <div>
                    <label>Enter Your Last Name : </label>
                    <input {...register("lastname", { required: true })} className="border border-blue-600" />
                    {errors.lastname && <span className="text-red-500">Lastname field is required</span>}
                </div>

                <div>
                    <input type="submit" className="border border-blue-600" />
                </div>
            </form>
        </div>
    );
}