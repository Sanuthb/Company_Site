import React, { useEffect, useState } from 'react'

const Helper = (initialposition) => {
    
    const [position, setposition] = useState(initialposition)
    const [offset, setoffset] = useState({ x: 0, y: 0 })
    const [dragging, setdragging] = useState(null)


    useEffect(() => { 

        const handleDrag = (e) => { 
            if (dragging !== null) { 
                setposition((prev) => ({ ...prev, [dragging]: { x:e.clientX-offset.x, y:e.clientY-offset.y } }))
            }
        }

        const stopDragging = (e) => {
            setdragging(false)
        }

        window.addEventListener('mousemove', handleDrag)
        window.addEventListener('mouseup', stopDragging)
        return () => {
            window.removeEventListener('mousemove', handleDrag)
            window.removeEventListener('mouseup', stopDragging)
        }
    },[dragging,offset])

    const startdragging = (id,e) => { 
        setoffset({
            x: e.clientX - position[id].x,
            y: e.clientY - position[id].y
        })
        setdragging(id)
    }


    return {
      position,
      startdragging,
    };
}

export default Helper
