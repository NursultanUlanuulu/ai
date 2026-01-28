import { sendChatMessage } from '../../../shared/api/chatApi'

export function useSendMessage({ setMessages, setLoading }) {
	return async text => {
		if (!text.trim()) return

		const userMessage = { role: 'user', content: text }
		setMessages(prev => [...prev, userMessage])
		setLoading(true)

		try {
			const data = await sendChatMessage(text)

			setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
		} catch {
			setMessages(prev => [
				...prev,
				{ role: 'assistant', content: 'Ошибка соединения с сервером' },
			])
		} finally {
			setLoading(false)
		}
	}
}
