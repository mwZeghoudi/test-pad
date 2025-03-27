import ResetPasswordForm from '@/@/components/utils/Forms/ResetPasswordForm'
import Image from 'next/image'
import FormLink from '@/@/components/utils/FormLink'

export default function ResetPassword() {
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
          Forgot Password
        </h1>
        <p>Enter the email address associated with your account
          and we will send you a link to reset your password.</p>
      </div>
      <ResetPasswordForm />
      <div className='text-center space-y-10'>
        <FormLink href='/sign-in' label='Back to Sign In' />
        <p>Don’t have an account? <FormLink href='/sign-up' label='Sign Up' /></p>
      </div>
    </div>
  )
}
