import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hooks";
import { authActions } from "../features/auth/authSlice";
import { LoginRequest } from "../service/auth";

export default function Login() {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("data", data);
    };

    // const handleSubmit = (e: React.SyntheticEvent) => {
    //   e.preventDefault();
    //   console.log(' login ');

    //   const req: LoginRequest = {
    //     username: 'admin',
    //     password: 'admin'
    //   }

    //   dispatch(authActions.login(req));
    // }

    return (
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
                    Get started today
                </h1>

                <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati sunt dolores deleniti inventore quaerat mollitia?
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
                >
                    <p className="text-lg font-medium">
                        Sign in to your account
                    </p>

                    <div>
                        <label
                            htmlFor="username"
                            className="text-sm font-medium"
                        >
                            Username
                        </label>

                        <div className="relative mt-1">
                            <input
                                type="username"
                                id="username"
                                {...register("username", {
                                    required: true,
                                })}
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter username"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>

                        {errors.username?.type === "required" &&
                            "Username is required"}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="text-sm font-medium"
                        >
                            Password
                        </label>

                        <div className="relative mt-1">
                            <input
                                type="password"
                                id="password"
                                {...register("password", { required: true })}
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>

                        {errors.password?.type === "required" &&
                            "Password is required"}
                    </div>

                    <button
                        type="submit"
                        className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
                    >
                        Sign in
                    </button>

                    <p className="text-sm text-center text-gray-500">
                        No account?
                        <a className="underline" href="">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
