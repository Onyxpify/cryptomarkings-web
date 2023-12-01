import React from 'react';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import Btn from '@/components/btn/Btn';
import './register_4.scss';
import Link from 'next/link';
interface p{
   setPage?:any,
 }
const Register_4 = ({ setPage }: p) => {
  return (
    <OnboardingLayout className='Register_4'>
      <div id="Reg-4">
        <div className="img"></div>
      <div className="line1">
        <h3>Congratulations!</h3>
        <p>Lorem ipsum dolor sit amet consectetur. At tempus magna cras viverra convallis. Scelerisque iaculis amet tortor pretium. Nullam at sed pellentesque nec felis ac.</p>
        </div>
        <Link href={'http://localhost:3000/dashboard'}>
        <Btn text='Start Exploring' />
        </Link>
      </div>
    </OnboardingLayout>
  )
}

export default Register_4