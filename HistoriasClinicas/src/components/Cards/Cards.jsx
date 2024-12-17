

const Cards = ({nombre, apellido, especialidad}) => {

  
 
  
    

  return (
    
    <div className="card" style={{ width: '18rem' }}>
      <section>
        <img src="" alt="" />
      </section>
      <div>
        <article>
          <h4> {nombre} </h4>
          <h4> {apellido} </h4>
          <h3> {especialidad} </h3>
        </article>
      </div>
    </div>

  
  )
  
}

export default Cards