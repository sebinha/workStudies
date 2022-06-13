const usuarios = [];
export default function Form(req, res) {
  if (req.method === "POST") {
    Post(req,res);
  } else if(req.method === "GET"){
    Get(req,res)
  } else{
      res.status(405).send()
  }

  function Post(req, res) {
    const usuario = JSON.parse(req.body);
    usuarios.push(usuario);
    res.status(200).send()
  }
  function Get(req, res) {
    res.status(200).json(usuarios);
  }
}
