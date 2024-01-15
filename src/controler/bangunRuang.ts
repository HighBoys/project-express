import { Request, Response } from "express";

const volumeTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI 
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const volume = phi * r * r * t
        return response.status(200).json({
            status: true,
            r,
            t,
            volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const luaspermukaanTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI 
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const luas = phi * r * r * t
        return response.status(200).json({
            status: true,
            r,
            t,
            luas
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const volumekubus = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const volume = s * s * s
        return response.status(200).json({
            status: true,
            s,
            volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const luaspermukaanKubus = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const luas = 6 * s
        return response.status(200).json({
            status: true,
            s,
            luas
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const volumeBalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const volume = p * l * t
        return response.status(200).json({
            status: true,
            p,
            l,
            t,
            volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const luaspermukaanBalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const luas = (2 * p * l) + (2 * p * t) + (2 * l * t) 
        return response.status(200).json({
            status: true,
            p,
            l,
            t,
            luas
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const volumeBola = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const volume = 4/3 * phi * r * r * r
        return response.status(200).json({
            status: true,
            r,
            volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const luaspermukaanBola = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const luas = 4 * phi * r * r
        return response.status(200).json({
            status: true,
            r,
            luas
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}


export {volumeTabung, volumeBalok, volumeBola, volumekubus,luaspermukaanBalok,luaspermukaanKubus, luaspermukaanTabung, luaspermukaanBola }