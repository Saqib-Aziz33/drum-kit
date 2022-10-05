import drumsData from '../drums.json'

function Drums() {
    function handlePlay(src){
        new Audio(src).play()
    }
  return (
    <section className="drums">
        {
            drumsData.map(drum => (
                <button onClick={() => handlePlay(drum.src)} className={`drum-key ${drum.name.toLowerCase()}`} key={drum.name}>
                    {drum.name}
                </button>
            ))
        }
    </section>
  )
}
export default Drums