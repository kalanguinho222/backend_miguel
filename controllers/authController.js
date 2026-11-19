async function login(req, res) {

  const usuario = (req.body.usuario ?? '').trim();

  const senha = req.body.senha ?? '';

  const resultado = await service.login(usuario, senha);

  if (resultado.invalido === true) {
    return res.status(401).json({
      
    erro: 'Usuario ou senha invalidos.'

    });

}

 const token = sessoes.criar(resultado.usuario.id);

res.cookie('sid', token, { httpOnly: true });

res.status(200).json(resultado.usuario);
}

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
