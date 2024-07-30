import express from 'express';

import OpenAI from 'openai';

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});


router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES"})
})

router.route('/openai').post(async (req, res) => {
    try {
        const { prompt } = req.body
        const response = await openai.createImage({
            prompt: prompt,
            size: '1024x1024',
            response_format: 'b64_json',
            n: 1
        })
        const image = response.data.data[0].b64_json;
        res.status(200).json({ photo: image })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "An error occurred"})
    }
})

export default router;