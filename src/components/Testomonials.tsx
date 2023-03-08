import React from 'react'

const Testomonials = () => {
    return (
        <div>
            <h1
                className="text-4xl font-bold"
            >Testomonials</h1>
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 m-6 border">
                <div className="flex flex-row items-center justify-between w-full">
                    <img
                        className="w-20 h-20"
                        src="https://images.unsplash.com/photo-1616489953148-8e1b5e1b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="" />
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-lg font-bold">John Doe</p>
                        <p className="text-sm font-bold">CEO of Google</p>
                        <p
                            className="text-sm font-bold"
                        >
                            Hamid is a great developer. He is very professional and has a great work ethic. I would recommend him to anyone looking for a developer, especially if you are looking for a full stack developer with a great eye for design and a great personality.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testomonials