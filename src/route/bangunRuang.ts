import express from "express";
import { luaspermukaanBalok, luaspermukaanBola, luaspermukaanKubus, luaspermukaanTabung, volumeBalok, volumeBola, volumeTabung, volumekubus } from "../controler/bangunRuang";
const app = express()


/** use digunakan untuk memberi izin  */
app.use(express.json())

app.post(`/tabung/volume` ,volumeTabung)
app.post(`/tabung/luaspermukaan` ,luaspermukaanTabung)
app.post(`/kubus/volume` ,volumekubus)
app.post(`/kubus/luaspermukaan` ,luaspermukaanKubus)
app.post(`/balok/volume` ,volumeBalok)
app.post(`/balok/luaspermukaan` ,luaspermukaanBalok)
app.post(`/bola/volume` ,volumeBola)
app.post(`/bola/luaspermukaan` ,luaspermukaanBola)

export default app