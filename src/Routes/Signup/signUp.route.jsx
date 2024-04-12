import { Routes, Route } from "react-router-dom"
import SignUpForm from "../../Components/SignUpForm/signUpForm.component"
import AgreementPage from "../../Components/AgreementPage/agreementPage.component"

const SignUp = () => {
  return (
      <Routes>
        <Route index element={<SignUpForm />} />
        <Route path="agreement" element={<AgreementPage />} />
      </Routes>
  )
}

export default SignUp
