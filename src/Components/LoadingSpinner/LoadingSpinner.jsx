import React from 'react';
import Circles from 'react-loading-icons/dist/esm/components/circles';

const LoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div>
            <Circles className=''/>
            <p className='text-center text-2xl mt-4 font-md space text-blue-500 tracking-wider'>Loading....</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;