import React, {useState} from 'react';

import Card from '../components/card'

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

function Home() {
    const [images, setImages] = useState([]);
    const [isImage, setIsImage] = useState(true);

    async function fileWasUploaded(e) {
        e.preventDefault();

        if (e.target.files && e.target.files[0]) {
            const extension = e
                .target
                .files[0]
                .name
                .split('.')
                .pop()
                .toLowerCase();
            const isValidExtension = extension === 'png' || extension === 'jpg' || extension === 'jpeg';

            setIsImage(isValidExtension)

            if (isValidExtension) {
                const uploadImage = await toBase64(e.target.files[0]);
                setImages([
                    ...images,
                    uploadImage
                ]);
            }
        }
    }

    return (
        <div>
                <h1>Image Cards uploader</h1>
            <input type='file' id="upload-file" onChange={e => fileWasUploaded(e)}/> {!isImage && <p className='error'>Please upload a valid image with jpg or png extension</p>}
            <div className="card-container">
                {
                    images && images.length > 0 && images.map(
                        (image, index) => <div className="card">
                            <Card image={image} index={index}/>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Home;
