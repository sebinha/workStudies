export default function questao(req,res){
    if (req.method === "GET"){
        Get(req,res)
    } else {
        res.status(405).send()
    }

    function Get(req,res){
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: "Qual sua cor preferida?",
            respostas: [
                "Vermelho", "Verde", "Azul", "Preto"
            ]
        })
    }
}