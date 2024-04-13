import React from 'react'
import { Heading, Text,Input ,Button} from '../../components'
function LogIn() {
  return (
    <div className='relative h=[832px] w-full bg-white-A700 md:h-auto'>
    <div className='flex h-[832px] w-full items-start bg-[url(/public/images/image_group-20.jpeg)] bg-cover bg-no-repeat py-[110px] pl-[110px] pr-14 md:h-auto md:p-5'>
        <div className='mb-[261px] mt-[53px] flex w-[36%] flex-col items-start md:w-full'>
            <Heading size="s" as="h1" className="text-center !font-istokweb capitalize !text-white-A700">
                ChemBizR
            </Heading>
            <Text size="xl" as="p" className="w-[87%] !font-opensanshebrew leading-[34px] !text-white-A700 md:w-full">
            ChemBizR, a specialized chemical business research and consulting company, collaborates with global specialty chemicals, polymers, food & biotechnology companies to develop and execute global strategies and manage business 
            complexities. Our services help chemical companies 
            transform into high-performance businesses 
            that can succeed in a competitive and rapidly evolving 
            global industry.
            </Text>
        </div>
    </div>
    <div className='absolute bottom-0 right-[0.00px] top-0 my-auto flex h-max w-[50%] flex-col items-center justify-center bg-white-A700_d8 px-14 py-[113px] md:pd-5'>
        <div className='mt-[46px] flex w-[67%] flex-col items-start gap-2.5 md:w-full '>
            <Text size="s" as="p" className="!font-opensanshebrew !text-gray-700">
                Email Address
            </Text>
            <Input
                color="gray_100_01"
                shape="round"
                type="email"
                name="email"
                placeholder={`alex@gmail.com`}
                className="self-stretch !rounded-lg sm:pr-5"
            />
           
        </div>
        <Text size="s" as="p" className='ml-[42px] mt-6 self-start !font-opensanshebrew !text-gray-700 md:ml-0'>
            Password
        </Text>
        <Input
            shape="round"
            type="password"
            name="password"
            placeholder={`Enter your password`}
            className='mt-3 w-[67%] sm:pr-5'
        />
        <Button color='amber_900' size='md' className='mt-16 min-w-[410px] rounded-lg font-bold sm:px-5' >
            Login Now
        </Button>
    <Text size='xs' as='p' className='!font-poppins !text-indigo-900 underline'>
        Forget Password ?
    </Text> 
    <div className='relative mt-[-1px] flex w-[67%] items-end gap-5 md:w-full sm:flex-col'>
        <div className='mb-2 h-px flex-1 bg-gray-400 sm:self-stretch'/>

        <Text size='xs' as='p' className='h-[21px] !font-poppins !text-gray-400'>
            OR
        </Text>
        <div className='mb-2 h-px flex-1 bg-gray-400 sm:self-stretch'/>
    </div>  
    <Button
        color="amber_900"
        size="md"
        variant="outline"
        className="mt-[23px] min-w-[410px] rounded-lg font-semibold sm:px-5"
    >
        Signup Now
    </Button>     
    </div>
        
    </div>
  )
}

export default LogIn