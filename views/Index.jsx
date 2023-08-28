import React from 'react';

function Index({ logs }) {
  return (
    <div>
        <ul>
            {logs.map(log => (
                <li key={log.id}><a href={`/logs/${log.id}`}>{log.title}</a></li>
            ))}
            
        </ul>

        <a href="/logs/new">Crete a log</a>
    </div>
  )
}

module.exports = Index;