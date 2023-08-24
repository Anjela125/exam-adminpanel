import {useNavigate} from "react-router"
import {useForm} from "react-hook-form"

import {Input} from "../components/input"

const email = 'anjela@gmail.com'
const password = 'Anjela20@'
const Login = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm()

    const onSubmit = (data) => {
        if (data?.Email === email && data?.Password === password) {
            navigate('/home')
        } else {
            if (data?.Email !== email) {
                setError("Email")
            }
            if (data?.Password !== password) {
                setError("Password")
            }
        }
    }

    return (
        <div className={'login-page'}>
            <h2>Sign In </h2>
            <form className={'login-form'} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    className={'login-input'}
                    type={'text'}
                    name={'Email'}
                    register={register}
                    required={true}
                    errors={errors.Email}
                    errorMassage={'Is absent Email.'}
                />
                <Input
                    className={'login-input'}
                    type={'password'}
                    name={'Password'}
                    register={register}
                    required={true}
                    errors={errors.Password}
                    errorMassage={'Is absent Password.'}
                />
                <input className={'login-submit'} type="submit" value='Sign in'/>
            </form>
        </div>
    )

}

export default Login