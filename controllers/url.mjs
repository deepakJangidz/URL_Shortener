import {nanoid} from 'nanoid';
import URL from '../models/url.mjs'


async function createNewShortId(req ,res){
    if(!req.body.url){
        return res.status(400).json({msg:"URL not provided"});
    }
    const ShortId = nanoid(8);
    await URL.create({
        shortId:ShortId,
        originalUrl : req.body.url,
        clickHistory : []
    });
    return res.status(200).render("home", {id : ShortId});
    return res.status(200).json({originalId : req.body.url , ShortId : ShortId});
}

async function returnAllId(req , res){
    const urls = await URL.find({}).exec();
    return res.render("home",{urls} );
}

async function redirectToUrl(req , res){
    const shortId = req.params.shortId;
    const user = await URL.findOneAndUpdate({shortId} ,{
        $push:{
            clickHistory : {timeStamp: Date.now()}
        }
    })
    return res.status(200).redirect(user.originalUrl);
}   

async function getAnalytics(req ,res){
    const user =  await URL.findOne({shortId : req.params.shortId});
    console.log(user);
    return res.send(user.clickHistory);
}




export  {createNewShortId ,returnAllId ,redirectToUrl ,getAnalytics}
