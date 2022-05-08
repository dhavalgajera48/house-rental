import { useState } from "react"
import { Link } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"

function ForgotPassword() {
  return (
    <div>
      Forgot Password
    </div>
  )
}

export default ForgotPassword
