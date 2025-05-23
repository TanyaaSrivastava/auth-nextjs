"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const router = useRouter();

    const onLogin = async () => {
        try {
            const response = await axios.post('/api/users/login', user);
            console.log('Login success:', response.data);
            router.push('/dashboard');
        } catch (error: any) {
            console.error('Login error:', error.response?.data || error.message);
            alert("Login failed: " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl mb-4">Login</h1>
            <label htmlFor="email">E-mail</label>
            <input
                className="p-2 border border-gray-300 rounded mb-4 w-full max-w-sm"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <label htmlFor="password">Password</label>
            <input
                className="p-2 border border-gray-300 rounded mb-4 w-full max-w-sm"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button
                onClick={onLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Login here
            </button>
            <Link href="/signup" className="mt-4 text-blue-600 hover:underline">
                Visit Signup page
            </Link>
        </div>
    );
}
