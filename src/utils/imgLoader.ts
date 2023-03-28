async function imgLoader(sources: string[], callback?: () => any) {
  if (['test'].includes(process.env.NODE_ENV!)) {
    return callback && callback()
  }

  if (!!sources.length) {
    const promises: Promise<(string | boolean)[]>[] = []

    sources.forEach((currentSrc) =>
      promises.push(
        new Promise((res, rej) => {
          const img = new Image()
          img.onload = () => res([currentSrc, true])
          img.onerror = () => rej([currentSrc, false])
          img.src = currentSrc
        }),
      ),
    )

    return Promise.all(promises).then((results) => {
      callback && callback()
      console.log(results)
      return results
    })
  }
  return false
}

export default imgLoader
