import { useEffect, useRef, useState } from 'react'
import { useSendMessage } from '../../features/send-message/model/useSendMessage'
import { useVoiceInput } from '../../features/voice-input/model/useVoiceInput'
import { ChatHeader } from '../../widgets/chat-header/ChatHeader'
import { ChatMessages } from '../../widgets/chat-messages/ChatMessages'
import { ChatInput } from '../../widgets/chat-input/ChatInput'

export function ChatPage() {
	const [messages, setMessages] = useState([])
	const [text, setText] = useState('')
	const [loading, setLoading] = useState(false)
	const endRef = useRef(null)

	useEffect(() => {
		endRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages, loading])

	const sendMessage = useSendMessage({ setMessages, setLoading })
	const startVoice = useVoiceInput(setText)

	return (
		<div className='h-screen bg-gray-100 flex flex-col'>
			<ChatHeader />
			<ChatMessages messages={messages} loading={loading} endRef={endRef} />
			<ChatInput
				text={text}
				setText={setText}
				onSend={() => sendMessage(text)}
				onVoice={startVoice}
				loading={loading}
			/>
		</div>
	)
}
