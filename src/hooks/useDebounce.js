function useDebounce (callback, delay=1500) {
    let timerId;
    return (...args) => {
        // if there is any request before one second setTimeout again with 0ms;
        clearTimeout(timerId)
        setTimeout(() => {
            callback(...args)
        }, delay)
    }
}
export default useDebounce;