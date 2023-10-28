'use client'
import axios from 'axios'
import React, { useState } from 'react'
function ContactForm() {


    const [messages, setMessages] = useState(null)


    const inputhandler = (e) => {
        const { name, value } = e.target
        console.log(`${name}+${value}`)

        setMessages((pre) => {
            return { ...pre, [name]: value }
        })
    }


    const sendMail = async () => {
        await axios.post("/api/contact", messages).then((response) => { console.log(response) }).catch((error) => { console.log(error) })
    }

    return (
        <>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" onChange={inputhandler} id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" onChange={inputhandler} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" onChange={inputhandler} name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
            </div>
            <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={sendMail} >Button</button>
            </div>
        </>
    )
}

export default ContactForm