// import React from 'react'

function AuthImagePattern({ title, subtitle }) {
    console.log();
    return (
        <div className='hidden lg:flex items-center justify-center bg-base-200 p-12'>
            <div className="max-w-md text-center relative lg:pt-14">
                {/* Chocolate + Black gradient circle */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full opacity-30 blur-3xl z-0"></div>

                {/* Grid on top */}
                <div className="relative z-10 grid grid-cols-3 gap-3 mb-8">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={`aspect-square rounded-2xl bg-gradient-to-br from-[#454545] to-black bg-primary/10 ${i % 2 === 0 ? "animate-pulse" : ""}`}
                        />
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-4 relative z-10">{title}</h2>
                <p className="text-base-content/60 relative z-10">{subtitle}</p>
            </div>


        </div>
    )
}

export default AuthImagePattern