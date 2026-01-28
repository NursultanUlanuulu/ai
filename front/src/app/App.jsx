// import { useEffect, useRef, useState } from 'react'
// import ReactMarkdown from 'react-markdown'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { ChatPage } from '../pages/chat/Chat'

// export function App() {
// 	const [messages, setMessages] = useState([])
// 	const [text, setText] = useState('')
// 	const [loading, setLoading] = useState(false)
// 	const messagesEndRef = useRef(null)

// 	// автоскролл вниз
// 	useEffect(() => {
// 		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
// 	}, [messages, loading])

// 	const sendMessage = async () => {
// 		if (!text.trim() || loading) return

// 		const userMessage = { role: 'user', content: text }
// 		setMessages(prev => [...prev, userMessage])
// 		setText('')
// 		setLoading(true)

// 		try {
// 			const res = await fetch('http://localhost:5000/api/chat', {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify({ message: userMessage.content }),
// 			})

// 			const data = await res.json()

// 			const aiMessage = {
// 				role: 'assistant',
// 				content: data.reply,
// 			}

// 			setMessages(prev => [...prev, aiMessage])
// 		} catch {
// 			setMessages(prev => [
// 				...prev,
// 				{ role: 'assistant', content: 'Ошибка соединения с сервером' },
// 			])
// 		} finally {
// 			setLoading(false)
// 		}
// 	}

// 	const startVoice = () => {
// 		const SpeechRecognition =
// 			window.SpeechRecognition || window.webkitSpeechRecognition

// 		if (!SpeechRecognition) {
// 			alert('Голосовой ввод не поддерживается')
// 			return
// 		}

// 		const recognition = new SpeechRecognition()
// 		recognition.lang = 'ru-RU'

// 		recognition.onresult = event => {
// 			setText(event.results[0][0].transcript)
// 		}

// 		recognition.start()
// 	}

// 	return (
// 		<div className='h-screen bg-gray-100 flex flex-col'>
// 			{/* Header */}
// 			<div className='p-4 bg-white shadow text-center font-semibold'>
// 				AI Assistant
// 			</div>

// 			{/* Messages */}
// 			<div className='flex-1 overflow-y-auto p-4 space-y-3'>
// 				{messages.map((msg, index) => (
// 					<div
// 						key={index}
// 						className={`flex ${
// 							msg.role === 'user' ? 'justify-end' : 'justify-start'
// 						}`}
// 					>
// 						{msg.role === 'user' ? (
// 							<div className='max-w-[75%] px-4 py-2 rounded-2xl text-sm bg-blue-600 text-white rounded-br-none'>
// 								{msg.content}
// 							</div>
// 						) : (
// 							<div className='max-w-[75%] px-4 py-2 rounded-2xl text-sm bg-gray-200 text-gray-900 rounded-bl-none prose prose-sm max-w-none'>
// 								<ReactMarkdown
// 									components={{
// 										code({ node, inline, className, children, ...props }) {
// 											const match = /language-(\w+)/.exec(className || '')
// 											return !inline && match ? (
// 												<SyntaxHighlighter
// 													children={String(children).replace(/\n$/, '')}
// 													language={match[1]}
// 													style={vscDarkPlus} // Стиль подсветки (можно изменить на светлый для light mode)
// 													{...props}
// 												/>
// 											) : (
// 												<code className={className} {...props}>
// 													{children}
// 												</code>
// 											)
// 										},
// 									}}
// 								>
// 									{msg.content}
// 								</ReactMarkdown>
// 							</div>
// 						)}
// 					</div>
// 				))}

// 				{loading && (
// 					<div className='flex justify-start'>
// 						<div className='bg-gray-200 px-4 py-2 rounded-2xl text-sm animate-pulse'>
// 							ИИ печатает...
// 						</div>
// 					</div>
// 				)}

// 				<div ref={messagesEndRef} />
// 			</div>

// 			{/* Input */}
// 			<div className='p-4 bg-white border-t flex gap-2'>
// 				<textarea
// 					rows='1'
// 					className='flex-1 resize-none border rounded-xl px-3 py-2 focus:outline-none'
// 					placeholder='Напишите сообщение...'
// 					value={text}
// 					onChange={e => setText(e.target.value)}
// 					onKeyDown={e => {
// 						if (e.key === 'Enter' && !e.shiftKey) {
// 							e.preventDefault()
// 							sendMessage()
// 						}
// 					}}
// 				/>

// 				<button
// 					onClick={startVoice}
// 					className='px-3 rounded-xl bg-gray-200'
// 					title='Голосовой ввод'
// 				>
// 					🎤
// 				</button>

// 				<button
// 					onClick={sendMessage}
// 					className='px-4 rounded-xl bg-blue-600 text-white'
// 				>
// 					➤
// 				</button>
// 			</div>
// 		</div>
// 	)
// }
// import { ChatPage } from '@/pages/chat/ChatPage'

export function App() {
	return <ChatPage />
}
