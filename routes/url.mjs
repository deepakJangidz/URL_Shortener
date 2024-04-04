import express from 'express';
import {createNewShortId ,returnAllId,redirectToUrl ,getAnalytics} from '../controllers/url.mjs'
const routers = express.Router();

routers.post('/', createNewShortId)
.get('/', returnAllId);

routers.get('/:shortId', redirectToUrl)
routers.get('/analytics/:shortId' , getAnalytics)
export default routers;
