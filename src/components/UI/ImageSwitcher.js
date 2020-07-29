import React, { useState, useEffect } from 'react'

const ImageSwitcher = ({ images, charName, large }) => {
    const [currImage, setCurrImage] = useState(0)
    useEffect(() => {
        const fn = () => {
            if (images) {
                return currImage < images.length - 1  ? setCurrImage(currImage + 1) : setCurrImage(0)
            } else {
                return () => {
                    console.log(images)
                }
            }
        }
        const interval = setInterval(fn, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [images, currImage, setCurrImage])

    return <img style={{ width: large ? '300px' : 'auto' }} className='pokemon' src={images[currImage]} alt={charName} />
}

export default ImageSwitcher
