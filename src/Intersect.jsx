import './App.css'
import './intersect.css'

import { useEffect, useRef, useState} from 'react'

const Intersect = ({ children, className = '', style,...props }) => {
	const ref = useRef(null)
	const [intersect, setIntersect] = useState(false)
	
	useEffect( () => {
		if (!ref.current) return

		const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersect(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

	return (
		<>
			<div
				className={`intersect ${intersect ? 'show' : ''} ${className}`}
				ref={ref}
				{...props}
				style={{
					margin: 0,
					padding: 0,
					border: 'none',
					outline: 'none',
					visibility: intersect ? 'visible' : 'hidden',
					...style,
				}}
			>
				{children}
			</div>
		</>
	)
}

export default Intersect
