import React from 'react';

function Index({ logs }) {

  return (
    <div>
        <ul>
            {logs.map(log => (
                <li key={log.id}>
                  <a href={`/logs/${log.id}`}>{log.title}</a>
                  <form method="post" action={`/logs/${log.id}?_method=DELETE`}>
                  <input type="submit" value="Delete" />
                  </form>
                </li>
            ))}
            
        </ul>

        <a href="/logs/new">Crete a log</a>
    </div>
  )
}

module.exports = Index;