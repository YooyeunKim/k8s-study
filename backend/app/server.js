const http = require('http');

const PORT = 5678;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end('Hello from My OpenStream Backend v3!\n');
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend server running on port ${PORT}`);
});