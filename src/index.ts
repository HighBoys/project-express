/**ini adalah file utama
 * dimana ada proses menjalankan server backend
 */

/**memanggil library express */
import  express, { Request, Response, request }  from "express";
import { number } from "joi";
import { loadavg } from "os";
import { measureMemory } from "vm";
import { validatecube } from "./middleware/validateCube";
import routebangunDatar from "./route/bangunDatar"
import routebangunRuang from "./route/bangunRuang"

/** buat wadah untuk inisiasi express */
const app = express()

/** mendifinisikan port berjalan nya server */
const PORT = 8000

/** allow to read JSON as request  */
app.use(express.json())

/** proses pertama untuk handle req */
app.get(`/serena`, (request: Request, response: Response) =>{

    /** 
     * ini adalah proses handle request dengan 
     * url/address: https://localhost:8000/serena
     * method: GET
     */
    /** memberi respon */
    return response.status(200).json({
        message: `Hello Serena anaknya Bu Siane`
    })
})

/** read a query request */
app.get(`/moklet`, (request: Request, response: Response)=> {
    /** asumsikan data yang dikirim
     * adalah nama dan umur
     */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let message: string = `My name is ${nama} and i'm ${umur} years old`
    return response.status(200).json(message)
})

/** read data request from parameter */
app.get(`/telkom/:nama/:gender`, (request: Request, response: Response)=> {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let message: string = `My name is ${nama} and i'm ${gender}`
    return response.status(200).json(message)
})


/** read a request from body */
app.post(`/moklet`,(request: Request, response: Response)=> {
    /** asumsikan data yang dikirim adalah
     * panjang dan lebar
     */
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar
    
    let luasPersegiPanjang: number = panjang * lebar
    let message = `Luas Persegi Panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(message)
})

/** tugass */
app.get(`/suhu/:celcius`,(request: Request, response: Response) => {
    let celcius: number = Number(request.params.celcius)

    let celciustofahrenheit:number = (celcius * 9/5) + 32
    let celciustokelvin:number = celcius + 273.15
    let celciustoreamur:number = celcius * 4/5

    let message = `fahrenheit = ${celciustofahrenheit}, kelvin = ${celciustokelvin}, reamur = ${celciustoreamur}`
    return response.status(200).json(message)
})

/** create request for count volume of long cube */
app.post(`/balok`, validatecube, (request: Request, response: Response)=> {
    /** read panjang, lebar, tinggi */
    let panjang: number = Number(request.body.panjang)
    let lebar: number = Number(request.body.lebar)
    let tinggi: number = Number(request.body.tinggi)

    let volume: number = panjang * lebar * tinggi

    return response.status(200).json({
        panjang, lebar, tinggi
    })
})

/** register route of bangun datar */
app.use(routebangunDatar)
app.use(routebangunRuang)

/** run server */
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)

})