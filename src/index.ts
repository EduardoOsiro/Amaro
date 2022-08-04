import app from './Controller/app'
import { productRouter } from './Router/ProductRouter'


app.use('/amaro', productRouter)
