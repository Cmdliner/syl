import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: "url('/assets/register.jpg')" }}
    >
      <RegisterForm className="m-auto mx-6 md:mx-0 bg-white/80 backdrop-blur-md w-full max-w-xl rounded-lg p-8 shadow-md" />
    </div>
  )
}