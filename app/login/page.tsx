import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"
import AuthHeader from "@/components/auth-header"

export default function LoginPage() {
  return (
    <div
      className="flex flex-col justify-center items-center  min-h-svh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/boxes.jpg')" }}
    >
      <AuthHeader />
      <LoginForm className="m-auto mx-8 md:mx-0 bg-white flex w-full max-w-md flex-col justify-center p-6 lg:px-12" />
    </div>
  )
}
