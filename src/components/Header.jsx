import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { LOGO, PROFILE_PIC } from '../utils/constatnts';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate('/browse')
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });

        return () => unsubscribe()
    }, [])

    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error')
        });
    }
    return (
        <div className='absolute z-10 flex justify-between w-full p-6 bg-gradient-to-b from-black'>
            <img className='w-40 h-9' src={LOGO} alt="" />
            {user && <div className='flex gap-4'>
                <img className='w-9 h-9' src={PROFILE_PIC} alt="user-icon" />
                <button onClick={handleSignOut} className='px-4 font-semibold text-white bg-red-500'>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header
