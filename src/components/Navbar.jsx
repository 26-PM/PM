import React from 'react'

function Navbar() {
    return (
        <div className='bg-purple-200 flex items-center justify-around h-14'>
            <div className="logo font-bold">PassManager-PM</div>
            <ul className='flex gap-5'>
                <li className='hover:font-extrabold'><a href="">Header</a></li>
                <li className='hover:font-extrabold'><a href="">Footer</a></li>
                <li className='hover:font-extrabold'><a href="">About us</a></li>
                <li className='hover:font-extrabold'><a href="">Reach us</a></li>
            </ul>
        </div>
    )
}

export default Navbar