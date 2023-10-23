'use client'
import React from 'react'


function Amount({ number }: { number: Number }) {

    let Inr = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });

    return (
        <h1>{number}</h1>
    )
}

export default Amount