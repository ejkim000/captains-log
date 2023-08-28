import React from 'react';

function New() {
  return (
    <div>
        <form method="post" action="/logs">
            Title: <input type="text" name="title" /><br />
            Entry: <textarea type="text" name="entry"></textarea><br />
            Ship Is Broken: <input type="checkbox" name="shipIsBroken" /><br />
            <input type="submit" value="Submit" /><br />
        </form>
    </div>
  )
}

module.exports = New;