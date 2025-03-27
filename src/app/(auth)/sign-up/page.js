import SignUpForm from '@/@/components/utils/Forms/SingUpForm'
import Image from 'next/image'
import FormLink from '@/@/components/utils/FormLink'

export default function SignUp() {
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
          Create an account and start attracting nearby potential customers
        </h1>
        <p>Welcome back! please enter your detail</p>
      </div>
      <SignUpForm />
      <div className='text-center space-y-10'>
        <p>Already have an account? <FormLink href='/sign-in' label='Sign In' /></p>
      </div>
    </div>
  )
}
