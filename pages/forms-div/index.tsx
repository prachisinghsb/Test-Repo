
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"


export default function Home() {

    const formSchema = yup.object({

        email: yup
            .string()
            .email("Email must be a valid")
            .required("Email is required"),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),

    })

    const {control , handleSubmit} = useForm({
        resolver: yupResolver(formSchema)
    })


    return (
        <>
            <h1>Forms</h1>

            <form className="border border-black w-1/2 m-auto p-12">

                <Controller
                    control={control}
                    name="email"
                    render={({
                                 field: {onChange, value},
                                 fieldState: {error},
                             }) => (
                        <div>
                            <label> Email : </label>
                            <input
                                type={"email"}
                                name={"email"}
                                value={value}
                                onChange={onChange}
                                required={true}
                                className="border border-black"
                            />
                            {error ?
                                <p className ="text-red-700">{error?.message}</p> : ""
                            }
                        </div>
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    render={({
                                 field: {onChange, value},
                                 fieldState: {error},
                             }) => (
                        <div>
                            <label>Password : </label>
                            < input
                                type={"password"}
                                name={"password"}
                                value={value}
                                onChange={onChange}
                                required={true}
                                className="border border-black"
                            />
                            {error ?
                                <p className ="text-red-700" >{error?.message}</p> : ""
                            }
                        </div>
                    )}
                />

                <div>
                    <button
                        type={"submit"}
                        onClick={handleSubmit((data) => console.log(data))}
                    >
                        Submit
                    </button>
                </div>


            </form>
        </>
    )
}