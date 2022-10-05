import { useEffect } from 'react'
import drumsData from '../drums.json'

function Drums() {
    useEffect(() => {
        window.addEventListener('keypress', e => {
            const foundDrum = drumsData.find(drum => drum.key === e.key)
            foundDrum && handlePlay(foundDrum.src)
        })
    }, [])
    function handlePlay(src){
        new Audio(src).play()
    }

  return (
    <section className="drums">
        {
            drumsData.map(drum => (
                <button onClick={() => handlePlay(drum.src)} className={`pad ${drum.name.toLowerCase()}`} key={drum.name}>
                    {drum.name}
                    <span className='key'>{drum.key}</span>
                </button>
            ))
        }
    </section>
  )
}
export default Drums