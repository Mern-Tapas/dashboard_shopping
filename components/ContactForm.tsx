'use client'
import { Button, Input, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'



function ContactForm() {

    const toast = useToast()

    interface Message {
        name: string;
        email: string;
        message: string;
    }

    const [isLoading, setLoading] = useState<boolean>()

    const [messages, setMessages] = useState<Message>({
        name: '',
        email: '',
        message: '',
    })


    const inputhandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // const { name, value } = e.target
        setMessages((pre) => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }


    const sendMail = async () => {
        setLoading(true)
        await axios.post("/api/contact", messages).then((response) => {

            if (response) {
                console.log(response)
                setLoading(false)
                toast({
                    title: 'Account created.',
                    description: response.data.message,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                    position: 'top'
                })

            }

        }).catch((error) => {

            setLoading(false)
        })
    }



    return (
        <>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Name</label>
                    <Input
                        type='text'
                        name='name'
                        errorBorderColor='red.30'
                        value={messages.name}
                        onChange={inputhandler}
                    />
                    {/* <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> */}
                </div>
            </div>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Email</label>
                    <Input
                        type='text'
                        name='email'
                        errorBorderColor='red.30'
                        value={messages.email}
                        onChange={inputhandler}
                    />
                    {/* <input type="email" onChange={inputhandler} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> */}
                </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Message</label>
                    {/* <textarea name="message" onChange={inputhandler} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea> */}
                    <Textarea name='message' value={messages.message} onChange={inputhandler} />
                </div>
            </div>
            <div className="p-2 w-full flex">
                <Button onClick={sendMail} isLoading={isLoading} colorScheme='' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</Button>
            </div>
        </>
    )
}

export default ContactForm