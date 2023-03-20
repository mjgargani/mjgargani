import { useEffect, useRef } from 'react'

interface ImgLoaderReturn {
  isLoaded: boolean
  withErrors?: boolean
}

function useImgLoader(sources: string[]) {
  const ref = useRef<ImgLoaderReturn>({
    isLoaded: false
  })
  useEffect(() => {
    if (sources.length && !ref.current.isLoaded) {
      const promises: Promise<boolean>[] = []

      sources.forEach(currentSrc => promises.push(
        new Promise((res, rej) => {
          const img = new Image()
          img.onload = () => res(true)
          img.onerror = () => rej(false)
          img.src = currentSrc
        })
      ))
      
      console.log(Promise.all(promises)
        .then((values)=>{
          console.warn(values)
          ref.current = {
            isLoaded: true,
            withErrors: false
          }
        })
        .catch((err)=>{
          console.error(err)
          ref.current = {
            isLoaded: true,
            withErrors: err
          }
        }))
    }
  }, [sources])
  return ref.current
}

export default useImgLoader
