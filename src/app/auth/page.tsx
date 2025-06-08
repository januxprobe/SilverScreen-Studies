"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpForm from "@/components/SignUpForm";
import SignInForm from "@/components/SignInForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/home');
        }
    }, [user, router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12">
            <div className="w-full max-w-md">
                 <Tabs defaultValue="signin" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin">
                        <div className="border p-8 rounded-b-lg shadow-md bg-white">
                             <h2 className="text-2xl font-semibold mb-4 text-center">Welcome Back</h2>
                             <SignInForm />
                        </div>
                    </TabsContent>
                    <TabsContent value="signup">
                        <div className="border p-8 rounded-b-lg shadow-md bg-white">
                            <h2 className="text-2xl font-semibold mb-4 text-center">Create an Account</h2>
                            <SignUpForm />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
