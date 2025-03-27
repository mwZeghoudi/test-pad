import LoginForm from '@/@/components/utils/Forms/SignInForm'
import Image from 'next/image'
import FormLink from '@/@/components/utils/FormLink'
import AlertSonner from '@/@/components/utils/AlertSonner'

export default async function SignIn() {
  return (
    <div className='text-sm w-3/4 max-w-100 space-y-10 h-fit'>
      <div className='space-y-2'>
        <Image
          className={'w-auto h-auto'}
          src={'/logo.png'}
          alt='Logo'
          width={100}
          height={100}
        />
        <h1 className='text-4xl font-semibold'>
          welcome back to <br />
          POKE A DEAL Pro
        </h1>
        <p>Welcome back! please enter your detail</p>
      </div>
      <LoginForm />
      <div className='text-center space-y-10'>
        <p>Don’t have an account? <FormLink href='/sign-up' label='Sign up' /></p>
      </div>
      <AlertSonner />
    </div>
  )
}
