import {useForm} from "react-hook-form";



export default function Forms(){

    const {register , handleSubmit , formState: {errors}} = useForm()
    console.log("errors :" , errors)

    return(
        <>
           <h1 className="text-center h-20 text-3xl">User Form</h1>

                <form onSubmit={handleSubmit((data) => {
                    console.log(data)
                })} className=" w-1/3 p-5 border border-black flex flex-col m-auto ">

                    <div className="p-2 m-auto">
                        <label>Name : </label>
                        <input {...register("name" , {required : "name is required" , minLength: { value :4 , message: 'minimum length is 4'}})}
                               placeholder="enter your full name"
                               className="border border-black p-1 m-3"
                        />
                        <p className="text-red-700">{errors.name?.message}</p>
                    </div>
                    <div className="p-2 m-auto">
                        <label>Email : </label>
                        <input {...register("email" , {required : "age is required"  })}
                               type="email"
                               placeholder="enter your email"
                               className="border border-black p-1 m-3"
                        />
                        <p className="text-red-700">{errors.email?.message}</p>
                    </div>
                    <div className="p-2 m-auto">
                        <input type="submit"
                               className="border border-black p-2 "
                        />
                    </div>
                </form>
        </>
    )
}