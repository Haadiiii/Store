import { useEffect, useState } from "react"

export function useLocalStorage<T>(
    key: string,
    initialValue: T | (() => T)
){
    const [storedValue, setStoredValue] = useState<T>(() => {
    const json = localStorage.getItem(key)
    if (json !== null) return JSON.parse(json)

    if (initialValue instanceof Function){ return initialValue()
    } else { return initialValue }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))

    }, [key, storedValue])
    

    return [storedValue, setStoredValue] as const

}