const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>  
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     
          </main>
        </Def>
    )
}

module.exports = show
