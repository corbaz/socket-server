import { Router, Request, Response } from "express";

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: "GET OK. email: julio.corbaz@gmail.com"
    })

})


router.post('/mensajes/:id', (req: Request, res: Response) => {
    const CUERPO = req.body.cuerpo;
    const DE = req.body.de;
    const ID = req.params.id;
    res.json({
        ok: true,
        ID,
        CUERPO,
        DE

    })

})