function lerCookie(req, nome) {
const cabecalho = req.headers.cookie; // "sid=9f2c; tema=escuro" ou undefined
if (!cabecalho) return null;
const pares = cabecalho.split(';'); // ["sid=9f2c", " tema=escuro"]
for (const par of pares) {
const [chave, valor] = par.trim().split('=');
if (chave === nome) return valor;
}
return null;
}