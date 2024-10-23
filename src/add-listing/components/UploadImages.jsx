import React, { useState, useEffect } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

function UploadImages() {
    const [selectedFileList, setSelectedFileList] = useState([]);

    const onFileSelected = (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files); 
        setSelectedFileList((prev) => [...prev, ...fileArray]);
    };

    const onImageRemove=(image,index)=>
    {
        const result=selectedFileList.filter((item)=>
        item!=image
        )
        setSelectedFileList(result)
    }
        
    
    useEffect(() => {
        return () => {
            selectedFileList.forEach((file) => {
                URL.revokeObjectURL(file);
            });
        };
    }, [selectedFileList]);

    return (
        <div>
            <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 '>
                {selectedFileList.map((image, index) => (
                    <div key={image.name + index}> {/* Using file name as part of the key */}
                        <IoMdCloseCircle className='absolute m-2 text-lg text-white' 
                        onClick={()=>onImageRemove(image,index)}
                        />
                        <img
                            src={URL.createObjectURL(image)}
                            alt={image.name}
                            className='w-full h-[130px] object-cover rounded-xl'
                        />
                    </div>
                ))}
                <label htmlFor='upload-images'>
                    <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                        <h2 className='text-lg text-center text-primary'>+</h2>
                    </div>
                </label>
                <input
                    type="file"
                    multiple
                    id='upload-images'
                    onChange={onFileSelected}
                    className='opacity-0'
                />
            </div>
        </div>
    );
}

export default UploadImages;
