import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import Groq from 'groq-sdk'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const groq = new Groq({
	apiKey: process.env.GROQ_API_KEY,
})

app.post('/api/chat', async (req, res) => {
	try {
		const { message } = req.body

		if (!message) {
			return res.status(400).json({ error: 'Сообщение пустое' })
		}

		const completion = await groq.chat.completions.create({
			model: 'llama-3.1-8b-instant',
			messages: [{ role: 'user', content: message }],
		})

		res.json({
			reply: completion.choices[0].message.content,
		})
	} catch (error) {
		console.error('FULL GROQ ERROR:', error)

		res.status(500).json({
			error: error.message || 'Ошибка при обращении к ИИ',
		})
	}
})

app.listen(process.env.PORT, () => {
	console.log(`🚀 Server running on port ${process.env.PORT}`)
})
